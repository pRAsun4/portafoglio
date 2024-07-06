import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    'name': 'sidebar',
    initialState: {
        activeSideBar: null,
    },
    reducers:{
        setActiveSideBar:(state, action) =>{
            state.activeSideBar = action.payload;
        },
        toggleActiveSidebar: (state, action) => {
            state.activeSideBar = state.activeSideBar === action.payload ? null : action.payload;

        }
    }

});

export const { setActiveSideBar, toggleActiveSidebar} = sidebarSlice.actions;
export default sidebarSlice.reducer;