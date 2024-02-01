import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosAdmin from "../../api/axios";
import Invoice from "../../layoutAdmin/Invoice";

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

export const getOrder = createAsyncThunk(
	"getOrder",
	( _ , { rejectWithValue }) => {
		try {
			const order = axiosAdmin.get("order/getorder")
			return order;
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)

export const deleteOrder = createAsyncThunk(
	"orders/delete",
	async (payload: any, { rejectWithValue }) => {
		console.log(payload)
		try {
			const response =  axiosAdmin.post("order/delete", { id: payload })
			return payload
		}catch(error: any) {
			throw rejectWithValue(error.message)
		}
	}
)

export const getInvoice = createAsyncThunk(
	"orders/invoice",
	async (payload: any, { rejectWithValue }) => {
		try {
			const response = await axiosAdmin.post("order/invoice", { id: payload })
			return response
		}catch(error: any) {
			throw rejectWithValue(error.message)
		}
	}
)

const orderSlice = createSlice({
	name: "order",
	initialState: {
		order: [],
		status: '',
		invoice: {}
	},
	reducers: {

	},
	extraReducers(builder) {
		builder.addCase(getOrder.fulfilled, (state: any, action) => {
			state.order = action.payload
		})
		builder.addCase(deleteOrder.fulfilled, (state: any, action) => {
			state.order = state.order.filter((order: any) => order._id !== action.payload)
		})
		builder.addCase(getInvoice.fulfilled, (state: any, action) => {
			state.invoice = action.payload
		})
	}
})

export default orderSlice.reducer;