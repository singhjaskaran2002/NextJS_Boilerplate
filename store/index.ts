import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authSlice";
import { commonReducer } from "./reducers/commonSlice";

const store = configureStore({
	reducer: {
		common: commonReducer,
		auth: authReducer,
	},
});

export const AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
