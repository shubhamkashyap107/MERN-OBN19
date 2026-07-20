import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from '@redux-devtools/extension';

const ADD_ITEM = "ADD_ITEM"

export function addItem(d)
{
    return {
        type : ADD_ITEM,
        payload : d
    }
}

const intialListState = {
    data : []
}

const listReducer = (state = intialListState, action) => {
    switch(action.type)
    {
        case ADD_ITEM:
            return {
                data : [...state.data, action.payload]
            }

        default:
            return state
    }
}


export const Store = createStore(listReducer, composeWithDevTools(applyMiddleware()))