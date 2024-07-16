import { createSlice } from "@reduxjs/toolkit";

const toggleMode = createSlice({
    'name': "toggle-mode",
    initialState: {
        activeDark : false,
    },
    reducers: {
        setActiveDark:(state, action) =>{
            state.activeDark = action.payload;
        }
    }
})

export const { setActiveDark } = toggleMode.actions;
export default toggleMode.reducer;