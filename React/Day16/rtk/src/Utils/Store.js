import { configureStore } from "@reduxjs/toolkit"
import textSliceReducer from "./TextSlice"


export const Store = configureStore({
    reducer : {
        text : textSliceReducer
    }
})