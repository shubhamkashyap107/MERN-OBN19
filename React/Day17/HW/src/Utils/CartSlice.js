import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "Cart",
    initialState : [],
    reducers : {
        addItem : (state, action) => {
            // state.push(something)
            // return [...state, action.payload]
            let flag = false


            const temp = state.map((item) => {
                if(item.id == action.payload.id)
                {
                    flag = true
                    // item.quantity++
                    return {
                        ...item,
                        quantity : item.quantity + 1
                    }

                }
                else
                {
                    return item
                }
            })

            if(!flag)
            {
                temp.push({
                    ...action.payload,
                    quantity : 1
                })
            }

            return temp

        },
        removeItem : (state, action) => {
            let temp = state.map((item) => {
                if(item.id == action.payload)
                {
                    if(item.quantity > 1)
                    {
                        return {
                            ...item,
                            quantity : item.quantity - 1
                        }
                    }
                    else
                    {
                        return false
                    }
                }
                else {
                    return item
                }
            })
            
            let temp2 = temp.filter((item) => {
                return item
            })

            return temp2
        },
        clearCart : () => {
            return []
        }
    }
})



export default cartSlice.reducer
export const{ addItem, removeItem, clearCart } = cartSlice.actions
