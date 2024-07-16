import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from './slices/sectionSlice'
import sideBarReducer from './slices/sidebarSlice'
import toggleReducer from './slices/toggleMode'
const store = configureStore({
    reducer:{
        toggleMode: toggleReducer,
        section: sectionReducer,
        sidebar: sideBarReducer,
    }
});
export default store;