
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCart } from "../../utils/constant";
import axiosAdmin from "../../api/axios";

// export const getCart = () => {
// 	const cartString = localStorage.getItem('cart');
// 	const cart = cartString ? JSON.parse(cartString) : []
// 	return cart
// }

export const getProductOptions = createAsyncThunk(
	"cart/getCart",
	async ( _ , { rejectWithValue }) => {
		try {
			const cart = getCart()
			const productOptions = axiosAdmin.post('products/cart', cart);
			return productOptions;
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)


const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cartId: getCart(),
		cartItems: []
	},
	reducers: {
		getAllCartId: (state) => {
			state.cartId = getCart()
			console.log(state.cartId)
		},
		addCartId: (state, actions) => {
			const cartId  = state.cartId
			if(!cartId.includes(actions.payload)) {
				localStorage.setItem("cart", JSON.stringify([...cartId, actions.payload]));
				state.cartId.push(actions.payload)
			}
		}
	},
	extraReducers(builder) {
		builder.addCase(getProductOptions.fulfilled, (state: any, actions) => {
			state.cartItems = actions.payload
		})
	}
})

export const { getAllCartId, addCartId } = cartSlice.actions;
export default cartSlice.reducer;