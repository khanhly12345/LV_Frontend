
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCart, getQuantities } from "../../utils/constant";
import axiosAdmin from "../../api/axios";
import Cart from "../../layouts/Cart";

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
		},
		addCartId: (state, actions) => {
			const cartId  = state.cartId
			if(!cartId.includes(actions.payload)) {
				localStorage.setItem("cart", JSON.stringify([...cartId, actions.payload]));
				state.cartId.push(actions.payload)
			}
		},
		deleteCart: (state, actions) => {
			const cartId = getCart()
			const quantity = getQuantities()
			console.log("quantity: ", quantity)
			quantity.splice(actions.payload.index, 1)
			console.log("new quantity: ", quantity)
			const filterCart = cartId.filter((cart:any) => cart != actions.payload.id)
			localStorage.setItem("cart", JSON.stringify(filterCart));
			localStorage.setItem("quantity", JSON.stringify(quantity));
			state.cartItems = state.cartItems.filter((cart: any) => cart._id != actions.payload.id)
		}
	},
	extraReducers(builder) {
		builder.addCase(getProductOptions.fulfilled, (state: any, actions) => {
			state.cartItems = actions.payload
		})
	}
})

export const { getAllCartId, addCartId, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;