import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosAdmin from "../../api/axios"

interface ProductsState {
	data: any[]; // Replace 'any' with the actual type of your data
	status: boolean;
  }

const initialState: ProductsState = {
	data: [],
	status: true
}

export const addProduct = createAsyncThunk(
	"products/add",
	async (payload: any, { rejectWithValue }) => {
		console.log(payload)
		try {
			const response = await axiosAdmin.post("products", payload)
			return response
		}catch(error: any) {
			throw rejectWithValue(error.message)
		}
	}
)

export const deleteProduct = createAsyncThunk(
	"products/delete",
	async (payload: any, { rejectWithValue }) => {
		console.log(payload)
		try {
			const response = await axiosAdmin.delete("products/delete/" + payload)
			return payload
		}catch(error: any) {
			throw rejectWithValue(error.message)
		}
	}
)

export const editProduct = createAsyncThunk(
	"products/edit",
	async (payload: any, { rejectWithValue }) => {
		console.log(payload)
		try {
			const response = await axiosAdmin.post("products/edit/" + payload.id, payload.data)
			return response
		}catch(error: any) {
			throw rejectWithValue(error.message)
		}
	}
)

export const getProductById = createAsyncThunk(
	"products/getProductById",
	async ( payload: any ,{ rejectWithValue }) => {
		console.log(payload)
		try {
			const response = await axiosAdmin.get("products/edit/" + payload)
			console.log(response)
			return response
		}catch(error: any) {
			throw rejectWithValue(error.message)
		}
	}
)

export const getAllProduct = createAsyncThunk(
	"products/getAll",
	async ( _ ,{ rejectWithValue }) => {

		try {
			const response = await axiosAdmin.get("products")
			return response
		}catch(error: any) {
			throw rejectWithValue(error.message)
		}
	}
)

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {

	},
	extraReducers(builder) {
		builder.addCase(addProduct.fulfilled, (state: any, action) => {
			state.data = action.payload
		})
		.addCase(getAllProduct.fulfilled,  (state: any, action) => {
			state.data = action.payload

		})
		.addCase(getProductById.fulfilled,  (state: any, action) => {
			state.data = action.payload
		})
		.addCase(deleteProduct.fulfilled,  (state: ProductsState, action) => {
			console.log(state)
			console.log(action.payload)
			state.data = state.data.filter((product: any) => product._id !== action.payload)
		})
	}
})

export default productsSlice.reducer;