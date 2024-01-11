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

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {

	},
	extraReducers(builder) {
		builder.addCase(addProduct.fulfilled, (state: any, action) => {
			state.data = action.payload
		})
	}
})

export default productsSlice.reducer;