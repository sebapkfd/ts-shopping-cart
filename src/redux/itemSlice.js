import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;

const ItemSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        itemAdded(state, action) {
            state.push(action.payload)
        }
    }
})

export const { itemAdded } = ItemSlice.actions;

export default ItemSlice.reducer;