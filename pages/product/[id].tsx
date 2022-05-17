import React from "react";
import withAuthentication from "../../components/HOC/WithAuthentication";

const ProductDetail = () => {
	return (
		<div>
			<h1>Product details page..</h1>
		</div>
	);
};

export default withAuthentication(ProductDetail);
