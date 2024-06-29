import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	isLoggedIn: false,
	error: null,
	user: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		signInUserStart: state => {
			state.isLoading = true
		},
		signInUserSuccess: (state, action) => {
			state.isLoading = false
			state.isLoggedIn = true
			state.user = action.payload
		},
		signInUserFailure: state => {
			state.isLoading = false
			state.error = action.payload
		},
	}
});

export const { signInUserStart, signInUserSuccess,signInUserFailure } = authSlice.actions
export default authSlice.reducer