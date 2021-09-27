import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    brands: {
        Asus : true,
        Acer: true,
        LG: true,
        Razer: true,
        MSI: true
    },
    minPrice: 0,
    maxPrice: 99999,
    ram: 8,
    storage: 256,
    pickUp: true,
    shipping: true
}

const FilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setNewFilter: (state, action) => {
            const {key, value} = action.payload
            state[key] = value
        },
        clearFilter: (state, action) => {
            for (const key in state) {
                state[key] = initialState[key]
            }
        },
        setBrands: (state, action) => {
            const { brand } = action.payload
            state.brands[brand] = !state.brands[brand]
        }
    }
})

export const { setNewFilter, clearFilter, setBrands } = FilterSlice.actions;

export default FilterSlice.reducer;