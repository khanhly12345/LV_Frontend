import { createSlice } from "@reduxjs/toolkit";
import { getAllProduct } from "./ProductsSlice";



const filterSlice = createSlice({
	name: 'filter',
	initialState: {
		list: [],
		ram: '',
		brand: '',
		category: '',
	},
	reducers: {
		filterProduct: (state: any, action) => {
			console.log(action.payload)
			state.list = state.list.filter((product: any) => product.category === action.payload.category)
		}
	},
	extraReducers(build) {
		build.addCase(getAllProduct.fulfilled, (state: any, action) => {
			state.list = action.payload;
		})
	}
})
export const { filterProduct } = filterSlice.actions;
export default filterSlice.reducer;