
import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slice/ProductsSlice";
import OptionsProductSlice from "./slice/OptionsProductSlice";
import { useDispatch } from "react-redux";
import CartSlice from "./slice/CartSlice";


export const store = configureStore({
	reducer: {
		productOptions: OptionsProductSlice,
		products: productsSlice,
		carts: CartSlice
	}
})

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export type AppDispatch = typeof store.dispatch;

// Export types for useSelector and useDispatch hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


export default store;