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
                if (existing.amount + amount <= existing.stock) {
                    existing.amount += amount
                }
            }
            else {
                state.push(action.payload)
            }
        },
        clearCart(state, action) {
            state.splice(0, state.length)
        },
        itemRemoved(state, action) {
            const { id } = action.payload;
            const itemToDelete = state.find(item => item.id === id )
            const indexToDelete = state.indexOf(itemToDelete)
            state.splice(indexToDelete, 1)
        },
        changeAmount(state, action) {
            const {id, amount} = action.payload;
            const existing = state.find(item => item.id === id)
            if (existing) {
                existing.amount = amount
            }
        }
    }
})

export const { itemAdded, clearCart, itemRemoved, changeAmount } = CartSlice.actions;

export const selectItemById = (state, id) => state.cart.find(item => item.id === id)

export default CartSlice.reducer;