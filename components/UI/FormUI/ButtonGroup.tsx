import React from "react";

interface props {
	children: any;
	className?: string;
}

const ButtonGroup: React.FC<props> = ({ children, className }) => {
	return (
		<div className={className ? className : "form-group button-groups"}>
			{children}
		</div>
	);
};

export default ButtonGroup;
