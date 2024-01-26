import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosAdmin from "../../api/axios";

export const createOrder = createAsyncThunk(
	"createOrder",
	( payload: any , { rejectWithValue }) => {
		console.log(payload)
		try {
			const order = axiosAdmin.post("order/create", payload)
			return order;
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)

const orderSlice = createSlice({
	name: "order",
	initialState: {
		order: [],
		status: ''
	},
	reducers: {

	},
	extraReducers(builder) {

	}
})

export default orderSlice.reducer;