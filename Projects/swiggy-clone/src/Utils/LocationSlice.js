import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getData = createAsyncThunk("getlocationdata", async(_, thunk) => {
    try {


        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        return {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
            timestamp: position.timestamp,
        };

 
    } catch (error) {
        return thunk.rejectWithValue("Something went wrong...")
    }
})

const locationSLice = createSlice({
    name : "location", 
    initialState : {
        error : null,
        loading : false,
        data : null
    },
    reducers : {},
    extraReducers : (builder) => {
        builder
          .addCase(getData.pending, (state, action) => {
            return {
                ...state,
                loading : true
            }
          })
          .addCase(getData.fulfilled, (state, action) => {
            return {
                ...state,
                loading : false,
                data : action.payload
            }
          })
          .addCase(getData.rejected, (state, action) => {
            return {
                ...state,
                loading : false,
                error : action.payload
            }
          })
    }   
})

export default locationSLice.reducer