import { createSlice } from "@reduxjs/toolkit";

const getInitialMode = () => {
    const saveMode = localStorage.getItem("darkMode");
    return saveMode ? JSON.parse(saveMode) : false;
}

const toggleMode = createSlice({
    'name': "toggle-mode",
    initialState: {
        activeDark : getInitialMode(),
    },
    reducers: {
        setActiveDark:(state, action) =>{
            state.activeDark = action.payload;
            localStorage.setItem("darkMode", JSON.stringify(action.payload));
            console.log(action.payload ,"frm tooglemode");
        }
    }
})

export const { setActiveDark } = toggleMode.actions;
export default toggleMode.reducer;