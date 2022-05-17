import React from "react";
import Button from "./FormUI/Button";

interface ISearchBoxProps {
	placeholder: string;
	onClick: () => {};
}

const SearchBox: React.FC<ISearchBoxProps> = ({ placeholder, onClick }) => {
	return (
		<div className="search-box mb-3">
			<i className="fa-solid fa-magnifying-glass"></i>
			<input
				type="text"
				className="form-control"
				placeholder={placeholder}
				aria-label=""
				aria-describedby="basic-addon1"
			/>
			<Button
				className="btn btn-primary btn-md search-button"
				label="Search"
				type="button"
				onClick={onClick}
			/>
		</div>
	);
};

export default SearchBox;
