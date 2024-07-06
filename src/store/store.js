import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from './slices/sectionSlice'
import sideBarReducer from './slices/sectionSlice'

const store = configureStore({
    reducer:{
        section: sectionReducer,
        sidebar: sideBarReducer,
    }
});
export default store;