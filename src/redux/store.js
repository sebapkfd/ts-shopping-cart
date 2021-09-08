import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import filterReducer from './filterSlice'

export default configureStore({
    reducer: {
        cart: cartReducer,
        filter: filterReducer
    }
})