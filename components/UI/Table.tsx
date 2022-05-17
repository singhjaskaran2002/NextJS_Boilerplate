import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Dialogue from "./Dialogue";

interface ITableProps {
	headings: Array<string>;
	rows: Array<any>;
	rowKeys: Array<string>;
	DeleteAction?: any;
	deletionKey?: string;
	rowNavigation: boolean;
	detailsPagePath?: any;
	navigatorKey?: any;
	// can add more actions if required
}

const Table: React.FC<ITableProps> = ({
	headings,
	rows,
	rowKeys,
	DeleteAction,
	deletionKey,
	detailsPagePath,
	navigatorKey,
	rowNavigation,
}) => {
	const imageKeys = ["image"];

	const [showDialogue, setShowDialogue] = useState<boolean>(false);
	const [itemToDelete, setItemToDelete] = useState<number | string>("");

	const loading = useSelector((state: RootState) => state.common.loading);

	const router = useRouter();

	const deleteButtonHandler = (key: number | string) => {
		setShowDialogue(true);
		setItemToDelete(key);
	};

	useEffect(() => {
		if (!loading) {
			setShowDialogue(false);
		}
	}, [loading]);

	const itemDetailsNavigationHandler = (key: number | string) => {
		const path = detailsPagePath?.replace(navigatorKey, key);
		router.push(path);
	};

	return (
		<>
			<Dialogue
				title="Are you sure ?"
				show={showDialogue}
				successButtonHandler={() => DeleteAction(itemToDelete)}
				successButtonLabel="Yes, delete it !"
				cancelButtonHandler={() => setShowDialogue(false)}
				cancelButtonLabel="Cancel"
			/>
			<table className="table table-hover">
				<thead>
					<tr>
						{headings.map((item: string, index: number) => (
							<th scope="col" key={index}>
								{item}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((item: any, rowIndex: number) => (
						<tr
							key={rowIndex}
							style={{
								cursor: rowNavigation ? "pointer" : "inherit",
							}}
							onClick={() => {
								if (rowNavigation) {
									itemDetailsNavigationHandler(item.id);
								} else {
									return;
								}
							}}
						>
							{rowKeys.map((key: string, index: number) => (
								<Fragment key={index}>
									{key === "id" && <th>{item[key]}</th>}
									{imageKeys.includes(key) && (
										<td>
											<img
												width={50}
												src={item[`${key}`]}
											/>
										</td>
									)}
									{!imageKeys.includes(key) && key !== "id" && (
										<td>
											{key === "price" && "$"}
											{item[key]}
										</td>
									)}
								</Fragment>
							))}
							<td>
								<i
									className="fa-solid fa-trash table-action-btn"
									onClick={(e: any) => {
										e.stopPropagation();
										if (deletionKey) {
											deleteButtonHandler(
												item[deletionKey]
											);
										} else {
											return;
										}
									}}
								></i>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default Table;
