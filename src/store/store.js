import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from './slices/sectionSlice'

const store = configureStore({
    reducer:{
        section: sectionReducer,
    }
});
export default store;