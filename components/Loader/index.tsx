import React from "react";
import { SpinnerCircular } from "spinners-react";

const Loader = () => {
	return (
		<div className="loaderDiv" data-testid="testid-loader-div">
			<SpinnerCircular
				data-testid="testid-spinner"
				className="loader"
				size={90}
				thickness={180}
				speed={100}
				color="rgba(0, 0, 0, 0.76)"
				secondaryColor="rgba(255, 255, 255, 0.58)"
			/>
		</div>
	);
};

export default Loader;
