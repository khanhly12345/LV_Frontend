
import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slice/ProductsSlice";
import { useDispatch } from "react-redux";


export const store = configureStore({
	reducer: {
		products: productsSlice
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