import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosAdmin from "../../api/axios";


export const createRate = createAsyncThunk(
	"rate/create",
	async ( payload: any, { rejectWithValue } ) => {
		try {
			const response = await axiosAdmin.post('/products/rate', payload)
			console.log(response);
			return response
		} catch (error) {
			return rejectWithValue(error)
		}

	}
)

export const getRateById = createAsyncThunk(
	"rate/get",
	async ( payload: any, { rejectWithValue } ) => {
		try {
			const response = await axiosAdmin.post('/products/getRate', {id: payload})
			return response
		} catch (error) {
			return rejectWithValue(error)
		}

	}
)

const rateSlice = createSlice({
	name: 'rate',
	initialState: {
		rate: [],
		status: ''
	},
	reducers: {

	},
	extraReducers(build) {
		build.addCase(getRateById.fulfilled, (state: any, action) => {
			state.rate = action.payload;
		})
	}
})

export default rateSlice.reducer;