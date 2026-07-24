import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("kuchbhilikhdo", async(_, {rejectWithValue}) => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/")
        const data = await res.json()
        return data
    } catch (error) {
        return rejectWithValue(error.message)
        // return error.message
    }
   
})



const userSlice = createSlice({
    name : "UserData",
    initialState : {
        loading : false,
        error : null,
        data : []
    },  
    reducers : {},
    extraReducers : (builder) => {
        builder
        .addCase(getUsers.pending, (state, action) => {
            return {
                ...state,
                loading : true
            }
        })
        .addCase(getUsers.fulfilled, (state, action) => {
            return {
                error : null,
                loading : false,
                data : action.payload
            }
        })
        .addCase(getUsers.rejected, (state, action) => {
            return {
                // ...state,
                data : [],
                loading : false,
                error : action.payload
            }
        })
    }
    
})


// const userSlice = createSlice({
//     name : "UserData",
//     initialState : [],
//     reducers : {
//         addData : (state, action) => {
//             return action.payload
//         }
//     }
// })




export default userSlice.reducer
