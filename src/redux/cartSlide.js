import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        itemAdded(state, action) {
            state.push(action.payload)
        },
        clearCart(state, action) {
            state.splice(0, state.length)
        }
    }
})

export const { itemAdded, clearCart } = CartSlice.actions;

export default CartSlice.reducer;