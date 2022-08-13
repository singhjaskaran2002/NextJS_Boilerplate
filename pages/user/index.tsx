import { Button } from "@mui/material";
import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import withAuthentication from "../../components/HOC/WithAuthentication";
import CustomModal from "../../components/UI/CustomModal";
import SearchBox from "../../components/UI/SearchBox";
import UserForm from "../../components/User/UserForm";
import UserListing from "../../components/User/UserListing";
import { apiRequest } from "../../utils/axios";
import { apiRoutes, appRoutes, defaults } from "../../utils/constants";
import { IUser } from "../../utils/interfaces/user.interface";

interface IUsersProps {
	users: {
		rows: IUser[];
		count: number;
	};
}

const users: React.FC<IUsersProps> = ({ users }) => {
	const [showModal, setShowModal] = useState<boolean>(false);

	const searchUserHandler = () => {
		return true;
	};

	const handleModal = (flag: boolean): boolean => {
		setShowModal(flag);
		return true;
	};

	const router = useRouter();

	useEffect(() => {
		router.push(
			`${appRoutes.USERS}?page=${defaults.PAGE}&limit=${defaults.LIMIT}&sort=${defaults.SORT_KEY}&order=${defaults.SORT_ORDER}`,
			undefined,
			{ shallow: true }
		);
	}, []);

	return (
		<>
			<CustomModal
				children={<UserForm hideModal={handleModal} />}
				show={showModal}
				heading="Add user"
				hideModal={setShowModal}
			/>
			<div className="add-user-div">
				<Button variant="outlined" onClick={() => setShowModal(true)}>
					Add user
				</Button>
			</div>
			<SearchBox
				placeholder="Search user..."
				onClick={searchUserHandler}
			/>
			<UserListing userData={users} />
		</>
	);
};

export async function getServerSideProps({ query }: any) {
	const { page, limit, sort, order } = query;
	const response: AxiosResponse = await apiRequest({
		url: apiRoutes.users.FETCH_PAGINATED_DATA({
			limit,
			page,
			sort,
			order,
		}),
	});

	const users = {
		rows: response.data,
		count: response.headers["x-total-count"],
	};

	return {
		props: {
			users,
		},
	};
}

export default withAuthentication(users);
