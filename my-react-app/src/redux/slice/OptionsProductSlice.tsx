import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosAdmin from "../../api/axios"

interface ProductOptionsState {
	data: any[]; // Replace 'any' with the actual type of your data
	status: string;
	dataOptions: any[]
  }

const initialState: ProductOptionsState = {
	data: [],
	status: "loading" || "success",
	dataOptions: []
}

export const addProductOptions = createAsyncThunk(
	"productOptions/add",
	async (payload: any, { rejectWithValue }) => {
		console.log(payload)
		try {
			const response = await axiosAdmin.post("products/options/create", payload)
			return response
		}catch(error: any) {
			throw rejectWithValue(error.message)
		}
	}
)

export const getProductOptionsById = createAsyncThunk(
	"productOptions/getById",
	async (payload: any, { rejectWithValue }) => {
		console.log(payload)
		try {
			const response = await axiosAdmin.get("products/options/getById/" + payload)
			return response
		}catch(error: any) {
			throw rejectWithValue(error.message)
		}
	}
)

const productOptionsSlice = createSlice({
	name: 'productOptions',
	initialState,
	reducers: {

	},
	extraReducers(builder) {
		builder.addCase(addProductOptions.fulfilled, (state: any, action) => {
			state.data = action.payload
		})
		builder.addCase(getProductOptionsById.fulfilled, (state: any, action) => {
			console.log(action.payload)
			state.dataOptions = action.payload
		})
	}
})

export default productOptionsSlice.reducer;