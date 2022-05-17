import { apiRequest } from "../axios";
import { IProduct } from "../interfaces/product.interface";

export const getAllProducts = async (
	limit: number = 10,
	page: number = 0
): Promise<IProduct[]> => {
	const { data } = await apiRequest({
		url: `https://fakestoreapi.com/products?limit=${limit}`,
	});
	return data;
};
