import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import filterReducer from './filterSlice';
import displayReducer from './displaySlice';

export default configureStore({
    reducer: {
        cart: cartReducer,
        filter: filterReducer,
        display: displayReducer
    }
})