import { configureStore } from "@reduxjs/toolkit"
import CounterSliceReducer from "./CounterSlice"

export const Store = configureStore({
    reducer : {
        Counter : CounterSliceReducer
    }
})
