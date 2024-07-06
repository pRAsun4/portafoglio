import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from './slices/sectionSlice'
import sideBarReducer from './slices/sidebarSlice'

const store = configureStore({
    reducer:{
        section: sectionReducer,
        sidebar: sideBarReducer,
    }
});
export default store;