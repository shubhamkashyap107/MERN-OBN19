import { combineReducers, createStore } from "redux"
import { applyMiddleware } from "redux"
import { composeWithDevTools } from "@redux-devtools/extension"
import { cakeReducer } from "./Cake"
import { iceCreamReducer } from "./IceCream"

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : iceCreamReducer
})

export const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))
