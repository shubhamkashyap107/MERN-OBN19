import { configureStore } from "@reduxjs/toolkit"
import CartSliceReducer from "./CartSlice"


const Store = configureStore({
    reducer : {
        Cartz : CartSliceReducer
    }
})

export default Store