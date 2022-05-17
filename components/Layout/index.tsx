import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Header from "../Header";
import Loader from "../Loader";
import Sidebar from "../Sidebar";

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	const isAuthenticated = useSelector(
		(state: RootState) => state.auth.authenticated
	);
	const loading = useSelector((state: RootState) => state.common.loading);

	return (
		<>
			{isAuthenticated && (
				<>
					{loading && <Loader />}
					<Header />
					<Sidebar />
				</>
			)}
			<div className="internal-body">{children}</div>
		</>
	);
};

export default Layout;
