import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosAdmin from "../../api/axios";
import { getIdFromToken } from "../../utils/constant";

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
			return response;
		} catch (error) {
			console.log(error)
			return rejectWithValue(error)
		}
	}
);

export const getUser = createAsyncThunk(
	"user/getUser",
	async ( _ , { rejectWithValue }) => {
		try {
			const response = await axiosAdmin.get('users/profile')
			return response;
		} catch (error) {
			return rejectWithValue(error)
		}
	}
);

export const addUser = createAsyncThunk(
	"user/addUser",
	async ( payload: any , { rejectWithValue }) => {
		console.log(payload)
		const id = getIdFromToken()
		try {
			const response = await axiosAdmin.post('users/adduser/'+ id, payload)
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
	status: '',
	profile: {}
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(signUp.fulfilled, (state: any, actions) => {
		state.status = 'sucess'
	});
	builder.addCase(getUser.fulfilled, (state: any, actions) => {
		console.log(actions.payload)
		state.profile = actions.payload
	});
  },
});

export default userSlice.reducer;
