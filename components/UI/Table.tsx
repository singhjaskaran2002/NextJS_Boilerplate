import React, { useState } from "react";
import { usePagination, useSortBy, useTable } from "react-table";
import { defaults } from "../../utils/constants";
import { IHeader } from "../../utils/interfaces/ReactTableInterfaces/table-header.interface";
import Pagination from "./Pagination";

interface ITableProps {
	columns: Array<IHeader>;
	data: Array<any>;
	count: number;
	pageNumber: number;
	limit: number;
	onPageChange: any;
	onLimitChange: any;
	onSort?: Function;
	columnsWithoutSorting: Array<string>;
}

const Table: React.FC<ITableProps> = ({
	columns,
	data,
	count,
	pageNumber,
	onPageChange,
	onLimitChange,
	onSort,
	limit,
	columnsWithoutSorting,
}) => {
	const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page } =
		useTable(
			{
				columns,
				data,
				initialState: { pageIndex: 0, pageSize: 10 },
				manualPagination: true,
				manualSortBy: true,
			},
			useSortBy,
			usePagination
		);

	const [sortKey, setSortKey] = useState<string>(defaults.SORT_KEY);
	const [sortOrder, setSortOrder] = useState<string>(defaults.SORT_ORDER);

	return (
		<>
			<table
				data-testid="testid-react-table"
				className="table table-hover"
				{...getTableProps()}
			>
				<thead>
					{headerGroups.map((headerGroup: any) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(
								(column: any, index: number) => (
									<th key={index}>
										<span className="position-relative">
											{column.render("Header")}
											<div className="sort-arrow-div">
												<span>
													{onSort &&
														!columnsWithoutSorting.includes(
															column.id
														) && (
															<span className="sort-arrow-icons">
																<i
																	className={
																		sortOrder ===
																			"ASC" &&
																		column.id ===
																			sortKey
																			? "fa-solid fa-angle-up sort-arrow active-sort-arrow"
																			: "fa-solid fa-angle-up sort-arrow"
																	}
																	onClick={() => {
																		onSort(
																			column.id,
																			"ASC"
																		);
																		setSortKey(
																			column.id
																		);
																		setSortOrder(
																			"ASC"
																		);
																	}}
																/>
																<i
																	className={
																		sortOrder ===
																			"DESC" &&
																		column.id ===
																			sortKey
																			? "fa-solid fa-angle-down sort-arrow active-sort-arrow"
																			: "fa-solid fa-angle-down sort-arrow"
																	}
																	onClick={() => {
																		onSort(
																			column.id,
																			"DESC"
																		);
																		setSortKey(
																			column.id
																		);
																		setSortOrder(
																			"DESC"
																		);
																	}}
																/>
															</span>
														)}
												</span>
											</div>
										</span>
									</th>
								)
							)}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row: any, index: number) => {
						prepareRow(row);
						return (
							<tr key={index} {...row.getRowProps()}>
								{row.cells.map((cell: any, index: number) => (
									<td key={index} {...cell.getCellProps()}>
										{cell.render("Cell")}
									</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>

			<Pagination
				className="pagination-bar"
				currentPage={pageNumber}
				totalCount={count}
				pageSize={limit}
				onPageChange={(page: number) => onPageChange(page)}
				onLimitChange={(limit: number) => onLimitChange(limit)}
			/>
		</>
	);
};

export default Table;
