import {configureStore} from "@reduxjs/toolkit"
import UserSliceReducer from "./UserSlice"

const Store = configureStore({
    reducer : {
        User : UserSliceReducer
    }
})

export default Store