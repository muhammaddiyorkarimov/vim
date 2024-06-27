import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	isLoggedIn: false,
	user: null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		// login
		loginUserStart: state => {
			state.isLoading = true;
		},
		loginUserSuccess: state => {},
		loginUserFailure: state => {},

		// register
		registerUserStart: state => {
			state.isLoading = true;
		},
		registerUserSuccess: state => {},
		registerUserFailure: state => {},
	}
})

export const {loginUserStart} = authSlice.actions
export default authSlice.reducer