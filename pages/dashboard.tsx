import React from "react";
import withAuthentication from "../components/HOC/WithAuthentication";

const dashboard = () => {
	return (
		<div>
			<h1>Coming soon...</h1>
		</div>
	);
};

export default withAuthentication(dashboard);
