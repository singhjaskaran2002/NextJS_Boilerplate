import React from "react";

interface props {
	className: string;
	type: "submit" | "button";
	onClick?: any;
	label: string;
	disabled?: boolean;
}

const Button: React.FC<props> = ({ label, ...props }) => {
	return <button {...props}>{label}</button>;
};

export default Button;
