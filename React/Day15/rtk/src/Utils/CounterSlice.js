import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name : "MyCounter",
    initialState : 0,
    reducers : {
        increment : (state, action) => {
            // console.log(action.payload)
            return state + 1
        },
        decrement : (state, action) => {
            return state - 1
        },
        reset : () => {
            return 0
        }
    }
})

// console.log(CounterSlice)


export default CounterSlice.reducer
export const{ increment, decrement, reset} = CounterSlice.actions