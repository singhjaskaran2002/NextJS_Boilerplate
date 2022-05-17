import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { appRoutes } from "../../utils/constants";
import { notify } from "../../utils/notify";
import Layout from "../Layout";

const withAuthentication = (WrappedComponent: any) => {
	return (props: any) => {
		const router = useRouter();

		const isAuthenticated = useSelector(
			(state: RootState) => state.auth.authenticated
		);

		useEffect(() => {
			if (!isAuthenticated) {
				notify("error", "Please login to proceed.");
				router.replace(appRoutes.LOGIN);
			}
		}, [isAuthenticated]);

		return (
			isAuthenticated && (
				<Layout>
					<WrappedComponent {...props} />
				</Layout>
			)
		);
	};
};

export default withAuthentication;
