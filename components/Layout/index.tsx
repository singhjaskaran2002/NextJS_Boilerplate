import { Router } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setLoading } from "../../store/reducers/commonSlice";
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

	const dispatch = useDispatch();

	const startLoading = () => {
		dispatch(setLoading(true));
	};

	const stopLoading = () => {
		dispatch(setLoading(false));
	};

	useEffect(() => {
		// Router event handler
		Router.events.on("routeChangeStart", startLoading);
		Router.events.on("routeChangeComplete", stopLoading);
		return () => {
			Router.events.off("routeChangeStart", startLoading);
			Router.events.off("routeChangeComplete", stopLoading);
		};
	}, []);

	return (
		<div data-testid="testid-layout">
			{isAuthenticated && (
				<>
					{loading && <Loader />}
					<Header />
					<Sidebar />
					<div className="internal-body">{children}</div>
				</>
			)}
			{!isAuthenticated && null}
		</div>
	);
};

export default Layout;
