import { AxiosResponse } from "axios";
import React, { useEffect, useReducer } from "react";
import useHttp from "../../hooks/use-http";
import { useIsMount } from "../../hooks/use-is-mount";
import { apiRoutes, defaults } from "../../utils/constants";
import { ICustomProps } from "../../utils/interfaces/custom-props.interface";
import { IUser } from "../../utils/interfaces/user.interface";
import Dialogue from "../UI/Dialogue";
import Table from "../UI/Table";

interface IState {
	users: IUser[];
	count: number;
	page: number;
	limit: number;
	sortKey: string;
	sortOrder: string;
	showDialogue: boolean;
}

enum ActionKind {
	set_sort = "SET_SORT",
	set_page = "SET_PAGE",
	set_limit = "SET_LIMIT",
	user_fetched = "USER_FETCHED",
	set_dialogue = "SET_DIALOGUE",
}

interface IAction {
	type: ActionKind;
	payload: any;
}

const initialState: IState = {
	users: [],
	count: 0,
	page: defaults.PAGE,
	limit: defaults.LIMIT,
	sortKey: defaults.SORT_KEY,
	sortOrder: defaults.SORT_ORDER,
	showDialogue: false,
};

const userReducer = (state: IState, action: IAction) => {
	switch (action.type) {
		case ActionKind.set_sort:
			return {
				...state,
				sortKey: action.payload.sortKey,
				sortOrder: action.payload.sortOrder,
			};
		case ActionKind.set_limit:
			return { ...state, limit: action.payload };
		case ActionKind.set_page:
			return { ...state, page: action.payload };
		case ActionKind.set_dialogue:
			return { ...state, showDialogue: action.payload };
		case ActionKind.user_fetched:
			return {
				...state,
				users: action.payload.rows,
				count: action.payload.count,
			};
		default:
			return state;
	}
};

interface IUserListingProps {
	userData: { rows: IUser[]; count: number };
}

const UserListing: React.FC<IUserListingProps> = ({ userData }) => {
	const { sendRequest } = useHttp();

	const [
		{ page, users, count, limit, sortKey, sortOrder, showDialogue },
		localDispatch,
	] = useReducer(userReducer, initialState);

	const isMount = useIsMount();

	useEffect(() => {
		if (!isMount) {
			sendRequest(
				{
					apiUrl: apiRoutes.users.FETCH_PAGINATED_DATA({
						limit,
						page,
						sort: sortKey,
						order: sortOrder,
					}),
				},
				(response: AxiosResponse) => {
					localDispatch({
						type: ActionKind.user_fetched,
						payload: {
							rows: response.data,
							count: response.headers["x-total-count"],
						},
					});
				}
			);
		} else {
			localDispatch({
				type: ActionKind.user_fetched,
				payload: userData,
			});
		}
	}, [page, limit, sortKey, sortOrder]);

	const DeleteActionHandler = (id: number) => {
		localDispatch({
			type: ActionKind.set_dialogue,
			payload: false,
		});
	};

	const columns = [
		{ Header: "Id", accessor: "id" },
		{
			Header: "Image",
			accessor: "profilePicture",
			Cell: (props: ICustomProps) => (
				<img
					src={
						props.row.original.profile_picture ||
						"/images/user-logo.png"
					}
					width={80}
					height={40}
					alt={props.row.original.name}
				/>
			),
		},
		{ Header: "Name", accessor: "name" },
		{ Header: "Email", accessor: "email" },
		{
			Header: "Actions",
			accessor: "actions",
			disableSortBy: true,
			Cell: (props: ICustomProps) => (
				<i
					className="fa-solid fa-trash table-action-btn text-center"
					onClick={() =>
						localDispatch({
							type: ActionKind.set_dialogue,
							payload: true,
						})
					}
				></i>
			),
		},
	];

	return (
		<>
			<Dialogue
				successButtonHandler={DeleteActionHandler}
				successButtonLabel="Yes"
				show={showDialogue}
				title={defaults.DELETE_TITLE}
				cancelButtonLabel="No"
				cancelButtonHandler={() =>
					localDispatch({
						type: ActionKind.set_dialogue,
						payload: false,
					})
				}
			/>
			<Table
				columns={columns}
				data={users}
				count={count}
				pageNumber={page}
				limit={limit}
				onSort={(sortKey: string, sortOrder: string) =>
					localDispatch({
						type: ActionKind.set_sort,
						payload: { sortKey, sortOrder },
					})
				}
				columnsWithoutSorting={["profilePicture", "actions"]}
				onPageChange={(page: number) =>
					localDispatch({ type: ActionKind.set_page, payload: page })
				}
				onLimitChange={(limit: number) =>
					localDispatch({
						type: ActionKind.set_limit,
						payload: limit,
					})
				}
			/>
		</>
	);
};

export default UserListing;
