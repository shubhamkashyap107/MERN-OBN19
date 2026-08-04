import { configureStore } from "@reduxjs/toolkit";
import locationSliceReducer from "./LocationSlice"

export const Store = configureStore({
    reducer : {
        location : locationSliceReducer
    }
})