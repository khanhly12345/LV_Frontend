import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosAdmin from "../../api/axios"

interface ProductsState {
	data: any[]; // Replace 'any' with the actual type of your data
	status: string;
  }

const initialState: ProductsState = {
	data: [],
	status: "idle",
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
		try {
			const response = await axiosAdmin.get("products/edit/" + payload)
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
		builder.addCase(addProduct.pending, (state: any) => {
			state.status = "loading"
		})
		builder.addCase(addProduct.fulfilled, (state: any, action) => {
			state.status = "successed"
			state.data = action.payload
		})
		builder.addCase(editProduct.pending, (state: any) => {
			state.status = "loading"
		})
		builder.addCase(editProduct.fulfilled, (state: any, action) => {
			state.status = "successed"
			state.data = action.payload
		})
		builder.addCase(getAllProduct.pending, (state: any) => {
			state.status = "loading"
		})
		.addCase(getAllProduct.fulfilled,  (state: any, action) => {
			state.status = "successed"
			state.data = action.payload
			// state.status = "init"
		})
		builder.addCase(getProductById.pending, (state: any) => {
			state.status = "loading"
		})
		.addCase(getProductById.fulfilled,  (state: any, action) => {
			state.status = "successed"
			state.data = action.payload

		})
		.addCase(deleteProduct.pending,  (state: ProductsState) => {
			state.status = "loading"
		})
		.addCase(deleteProduct.fulfilled,  (state: ProductsState, action) => {
			state.status = "successed"
			state.data = state.data.filter((product: any) => product._id !== action.payload)
			// state.status = "init"
		})
	}
})

export default productsSlice.reducer;