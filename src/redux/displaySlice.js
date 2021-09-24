import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 'table' };

const DisplaySlice = createSlice({
    name: 'display',
    initialState,
    reducers: {
        setDisplay: (state, action) => {
            const { newDisplay } = action.payload
            state.value = newDisplay
        }
    }
})

export const { setDisplay } = DisplaySlice.actions;


export default DisplaySlice.reducer;