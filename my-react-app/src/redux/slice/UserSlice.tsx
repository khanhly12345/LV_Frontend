import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosAdmin from "../../api/axios";
import { BASE_URL, accessTokenAdmin, decodedTokenAdmin, getIdFromToken } from "../../utils/constant";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

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

export const getAllUser = createAsyncThunk(
	"user/getAllUser",
	async ( _ , { rejectWithValue }) => {
		try {
			const response = await axiosAdmin.get('users/getAllUser')
			return response;
		} catch (error) {
			return rejectWithValue(error)
		}
	}
);

export const deleteUser = createAsyncThunk(
	"user/delete",
	async (payload: any, { rejectWithValue }) => {
		console.log(payload)
		try {
			const response = await axiosAdmin.post("users/delete/" + payload)
			return payload
		}catch(error: any) {
			throw rejectWithValue(error.message)
		}
	}
)

export const editUser = createAsyncThunk(
	"user/edit",
	async (payload: any, { rejectWithValue }) => {
		console.log(payload)
		try {
			const response = await axiosAdmin.post("users/edit", payload)
			return payload
		}catch(error: any) {
			throw rejectWithValue(error.message)
		}
	}
)

export const loginAdmin = createAsyncThunk(
	"user/loginAdmin",
	async (payload: any, { rejectWithValue }) => {
		try {
			const response = await axios.post(BASE_URL + 'auth/admin/login', payload)
			return response;
		} catch (error) {
			console.log(error)
			return rejectWithValue(error)
		}
	}
);

export const changePassword = createAsyncThunk(
	"user/changePassword",
	async (payload: any, { rejectWithValue }) => {
		const id = getIdFromToken()
		try {
			const response = await axiosAdmin.post("auth/changePassword", {
				id,
				...payload
			})
			return response;
		}catch(error: any) {
			throw rejectWithValue(error.message)
		}
	}
)

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
	status: '',
	profile: {},
	data: [],
	profileAdmin: {}
  },
  reducers: {
	removeProfile: (state) => {
		state.profile = {}
	},
	getProfileAdmin: (state) => {
		const profile: any = decodedTokenAdmin()
		state.profileAdmin = profile?.email
	}
  },
  extraReducers(builder) {
    builder.addCase(signUp.fulfilled, (state: any, actions) => {
		state.status = 'sucess'
	});
	builder.addCase(getUser.fulfilled, (state: any, actions) => {
		console.log(actions.payload)
		state.profile = actions.payload
	});
	builder.addCase(getAllUser.fulfilled, (state: any, actions) => {
		state.data = actions.payload
	})
	.addCase(deleteUser.fulfilled,  (state: any, action) => {
		state.data = state.data.filter((user: any) => user._id !== action.payload)
	})
	.addCase(editUser.fulfilled,  (state: any, actions) => {
		state.profile = { ...state.profile, ...actions.payload}
	})
	.addCase(loginAdmin.fulfilled,  (state: any, actions) => {
		let decoded: any;
		if(actions.payload.data.access_token) {
			decoded = jwtDecode(actions.payload.data.access_token)
		}
		state.profileAdmin = decoded?.email
	})
  },
});

export const { removeProfile, getProfileAdmin } = userSlice.actions;
export default userSlice.reducer;
