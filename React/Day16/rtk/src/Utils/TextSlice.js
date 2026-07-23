import { createSlice } from "@reduxjs/toolkit";


const textSlice = createSlice({
    name : "MyText",
    initialState : [],
    reducers : {
        addText : (state, action) => {
            return [...state, action.payload]
        }
    }
})

// console.log(textSlice)
export default textSlice.reducer
export const{ addText } = textSlice.actions