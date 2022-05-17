import React from "react";
import { ToastContainer } from "react-toastify";

const Toast = () => {
	return (
		<ToastContainer
			position="top-right"
			autoClose={3000}
			hideProgressBar={true}
			newestOnTop={true}
			rtl={false}
			theme={"dark"}
		/>
	);
};

export default Toast;
