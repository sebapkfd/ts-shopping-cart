import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
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
        setNewFilter: (state, action) => {
            const {key, value} = action.payload
            state[key] = value
        },
        setValues: (state, action) => {
            const {values} = action.payload
            for (const key in state) {
                state[key] = values[key]
            }
        }
    }
})

export const { setNewFilter, setValues } = FilterSlice.actions

export default FilterSlice.reducer;