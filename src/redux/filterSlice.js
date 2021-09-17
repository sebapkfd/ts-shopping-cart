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
        setValues: {
            reducer: (state, action) => {
                const {values} = action.payload
                for (const key in state) {
                    state[key] = values[key]
                }
            },
            prepare: ({values}) => {
                return {
                    payload: {
                        values: {...values, brands: [...new Set(values.brands)]}
                    }
                }
            }
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

export const { setNewFilter, setValues, clearFilter, setBrands } = FilterSlice.actions

export default FilterSlice.reducer;