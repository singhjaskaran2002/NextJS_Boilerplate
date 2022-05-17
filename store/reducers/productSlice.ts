import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../utils/interfaces/product.interface";

interface ProductState {
	products: Array<IProduct>;
}

const initialState: ProductState = {
	products: [],
};

const productSlice = createSlice({
	initialState,
	name: "product",
	reducers: {
		setProducts: (state: ProductState, { payload }: PayloadAction<any>) => {
			state.products = payload;
		},
	},
});

export const productReducer = productSlice.reducer;
export const { setProducts } = productSlice.actions;
