import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authSlice";
import { commonReducer } from "./reducers/commonSlice";
import { productReducer } from "./reducers/productSlice";

const store = configureStore({
	reducer: {
		common: commonReducer,
		auth: authReducer,
		products: productReducer,
	},
});

export const AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
