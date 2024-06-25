import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    avtiveSection: 1,
    activeButton:0,
};

const sectionSlice = createSlice({
    name: 'section',
    initialState,
    reducers:{
        setActiveSection:(state, action) => {
            state.avtiveSection = action.payload.section;
            state.activeButton = action.payload.buttonIndex;
        },
    },
});

export const { setActiveSection } = sectionSlice.actions;
export default sectionSlice.reducer;