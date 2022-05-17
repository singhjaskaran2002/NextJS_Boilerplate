import React from "react";
import { IProduct } from "../../utils/interfaces/product.interface";

interface ProductCardProps {
	product: IProduct;
}

function ProductCard({ product }: ProductCardProps) {
	return (
		<figure>
			<img
				src={product.image}
				alt={product.title}
			/>
			<figcaption>
				<a href="#">{product.title}</a>
			</figcaption>
		</figure>
	);
}

export default ProductCard;
