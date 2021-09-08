import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    brands: ['Asus', 'Acer', 'LG', 'Razer', 'MSI'],
    minPrice: 0,
    maxPrice: 99999,
    minRam: 0,
    minStorage: 0
}

const FilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setNewFilter(state, action) {
            const {key, value} = action.payload
            state[key] = value
        }
    }
})

export const { setNewFilter } = FilterSlice.actions

export default FilterSlice.reducer;