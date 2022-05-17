import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type User = {
	name?: string;
	id?: number;
	token?: string;
	email?: string;
	image?: string;
	role?: string;
};

interface AuthState {
	authenticated: boolean;
	loggedUser: User | null;
}

const initialState: AuthState = {
	authenticated: false,
	loggedUser: null,
};

const authSlice = createSlice({
	initialState,
	name: "auth",
	reducers: {
		userLogin: (state: AuthState, { payload }: PayloadAction<any>) => {
			state.loggedUser = payload;
			state.authenticated = true;
		},
		userLogout: (state: AuthState) => {
			state.loggedUser = null;
			state.authenticated = false;
		},
	},
});

export const authReducer = authSlice.reducer;
export const { userLogin, userLogout } = authSlice.actions;
