import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import withAuthentication from "../../components/HOC/WithAuthentication";
import Listing from "../../components/Products/Listing";
import ProductForm from "../../components/Products/ProductForm";
import CustomModal from "../../components/UI/CustomModal";
import Button from "../../components/UI/FormUI/Button";
import Pagination from "../../components/UI/Pagination";
import SearchBox from "../../components/UI/SearchBox";
import useHttp from "../../hooks/use-http";
import { apiRoutes } from "../../utils/constants";
import { IProduct } from "../../utils/interfaces/product.interface";

export interface IListingProps {
	products: Array<IProduct>;
}

function products() {
	const [products, setProducts] = useState<IProduct[]>([]);
	const [showModal, setShowModal] = useState<boolean>(false);

	const { sendRequest } = useHttp();

	const searchProductHandler = () => {
		return true;
	};

	useEffect(() => {
		sendRequest(
			{ apiUrl: `${apiRoutes.products.BASE_URL}?limit=${5}` },
			(response: AxiosResponse) => {
				setProducts(response.data);
			}
		);
	}, []);

	return (
		<>
			<CustomModal
				children={<ProductForm />}
				show={showModal}
				hideModal={setShowModal}
			/>
			<div className="add-product-div">
				<Button
					label="Add Product"
					type="button"
					className="btn btn-primary btn-md add-product"
					onClick={() => setShowModal(true)}
				/>
			</div>
			<SearchBox
				placeholder="Search product..."
				onClick={searchProductHandler}
			/>
			<Listing products={products} />
			<Pagination />
		</>
	);
}

export default withAuthentication(products);
