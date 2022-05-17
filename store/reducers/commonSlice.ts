import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CommmonState {
	loading: boolean;
}

const initialState: CommmonState = {
	loading: false,
};

const commonSlice = createSlice({
	initialState,
	name: "common",
	reducers: {
		setLoading: (state: CommmonState, { payload }: PayloadAction<any>) => {
			state.loading = payload;
		},
	},
});

export const commonReducer = commonSlice.reducer;
export const { setLoading } = commonSlice.actions;
