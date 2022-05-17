import { AxiosResponse } from "axios";
import React from "react";
import useHttp from "../../hooks/use-http";
import { IListingProps } from "../../pages/product";
import { apiRoutes, appRoutes } from "../../utils/constants";
import Table from "../UI/Table";

const Listing: React.FC<IListingProps> = ({ products }) => {
	const { sendRequest } = useHttp();

	const DeleteActionHandler = (id: number) => {
		sendRequest(
			{ apiUrl: `${apiRoutes.products.BASE_URL}/${id}` },
			(response: AxiosResponse) => {
				console.log("Product deleted, ", response.data);
			}
		);
	};

	const headings: Array<string> = [
		"id",
		"image",
		"title",
		"category",
		"price",
	];
	const rowKeys = ["id", "image", "title", "category", "price"];
	return (
		<Table
			rowNavigation={true}
			deletionKey={"id"}
			navigatorKey={":id"}
			detailsPagePath={appRoutes.PRODUCT_DETAILS}
			headings={headings}
			rowKeys={rowKeys}
			rows={products}
			DeleteAction={DeleteActionHandler}
		/>
	);
};

export default Listing;
