import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        itemAdded(state, action) {
            const {id, amount} = action.payload;
            const existing = state.find(item => item.id === id)
            if (existing) {
                existing.amount += amount
            }
            else {
                state.push(action.payload)
            }
        },
        clearCart(state, action) {
            state.splice(0, state.length)
        }
    }
})

export const { itemAdded, clearCart } = CartSlice.actions;

export default CartSlice.reducer;