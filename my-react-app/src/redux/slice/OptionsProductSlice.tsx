import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosAdmin from "../../api/axios"

interface ProductOptionsState {
	data: any[]; // Replace 'any' with the actual type of your data
	status: string;
  }

const initialState: ProductOptionsState = {
	data: [],
	status: "loading" || "success",
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

const productOptionsSlice = createSlice({
	name: 'productOptions',
	initialState,
	reducers: {

	},
	extraReducers(builder) {
		builder.addCase(addProductOptions.fulfilled, (state: any, action) => {
			state.data = action.payload
		})
	}
})

export default productOptionsSlice.reducer;