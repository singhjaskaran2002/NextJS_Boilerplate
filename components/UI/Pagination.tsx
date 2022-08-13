import classnames from "classnames";
import React from "react";
import { DOTS, usePagination } from "../../hooks/use-pagination";

interface IPaginationProps {
	onPageChange: Function;
	onLimitChange: Function;
	totalCount: number;
	currentPage: number;
	siblingCount?: number;
	pageSize: number;
	className: string;
}

const Pagination: React.FC<IPaginationProps> = (props) => {
	const {
		onPageChange,
		totalCount,
		siblingCount = 1,
		currentPage,
		pageSize,
		className,
		onLimitChange,
	} = props;

	const paginationRange: any = usePagination({
		totalCount,
		pageSize,
		currentPage,
		siblingCount,
	});

	// If there are less than 2 times in pagination range we shall not render the component
	if (currentPage === 0 || paginationRange.length < 2) {
		return null;
	}

	const onNext = () => {
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};

	let lastPage = paginationRange[paginationRange.length - 1];
	return (
		<div data-testid="pagination-test-id" className="row page-control">
			<div className="col-4">
				<ul
					className={classnames("pagination-container", {
						[className]: className,
					})}
				>
					{/* Left navigation arrow */}
					<li
						className={classnames("pagination-item", {
							disabled: currentPage === 1,
						})}
						onClick={onPrevious}
					>
						<div className="arrow left" />
					</li>
					{paginationRange.map((pageNumber: any, index: number) => {
						// If the pageItem is a DOT, render the DOTS unicode character
						if (pageNumber === DOTS) {
							return (
								<li
									key={index}
									className="pagination-item dots"
								>
									&#8230;
								</li>
							);
						}

						// Render our Page Pills
						return (
							<li
								key={index}
								className={classnames("pagination-item", {
									selected: pageNumber === currentPage,
								})}
								onClick={() => onPageChange(pageNumber)}
							>
								{pageNumber}
							</li>
						);
					})}
					{/*  Right Navigation arrow */}
					<li
						className={classnames("pagination-item", {
							disabled: currentPage === lastPage,
						})}
						onClick={onNext}
					>
						<div className="arrow right" />
					</li>
				</ul>
			</div>

			<div className="col-2" style={{ textAlign: "center" }}>
				<strong>
					Showing {currentPage} of {Math.ceil(totalCount / pageSize)}
				</strong>
			</div>

			<div className="col-4 select-row">
				<label>No. of rows: </label>
				<select
					name="numberOfRowSelect"
					className="form-select"
					onChange={(e: any) => {
						onLimitChange(+e.target.value);
					}}
				>
					{[10, 20, 30, 40].map((item: number) => (
						<option key={item} value={item}>
							{item}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default Pagination;
