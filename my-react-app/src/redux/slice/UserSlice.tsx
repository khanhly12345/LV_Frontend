import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosAdmin from "../../api/axios";

export const signUp = createAsyncThunk(
	"user/signup",
	async (payload: any, { rejectWithValue }) => {
		delete payload.confirmPassword
		try {
			const response = await axiosAdmin.post('auth/signup', payload)
			return response;
		} catch (error) {
			return rejectWithValue(error)
		}
	}
);

export const logIn = createAsyncThunk(
	"user/login",
	async (payload: any, { rejectWithValue }) => {
		try {
			const response = await axiosAdmin.post('auth/login', payload)
			console.log(response)
			return response;
		} catch (error) {
			return rejectWithValue(error)
		}
	}
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
	status: ''
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(signUp.fulfilled, (state: any, actions) => {
		state.status = 'sucess'
	});
  },
});

export default userSlice.reducer;
