import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getProductDataThunk = createAsyncThunk("getProductDataThunk", async(_, thunk) => {

    try {
        const res = await fetch("https://dummyjson.com/products")
        const data = await res.json()

        return data.products
    } catch (error) {
        return thunk.rejectWithValue(error.message)
    }

})



const prodSlice = createSlice({
    name : "products",
    initialState : {
        loading : false,
        error : null,
        data : [],
        fav : []
    },
    reducers : {

        add2Fav : (state, action) => {
            let flag = state.fav.find((item) => {
                return item.id == action.payload.id
            })
            if(!flag)
            {
                state.fav.push(action.payload)
            }
        },

        removeFromFav : (state, action) => {
            let fa = state.fav.filter((item) => {
                return item.id != action.payload
            })
            state.fav = fa
        }


    },
    extraReducers : (builder) => {
        builder
          .addCase(getProductDataThunk.pending, (state, action) => {
            return {
                ...state,
                loading : true
            }
          })
          .addCase(getProductDataThunk.fulfilled, (state, action) => {
            return {
                ...state,
                loading : false,
                data : action.payload
            }
          })
          .addCase(getProductDataThunk.rejected, (state, action) => {
            return {
                ...state,
                loading : false,
                error : action.payload
            }
          })
    }
})

export default prodSlice.reducer
export const{ add2Fav } = prodSlice.actions