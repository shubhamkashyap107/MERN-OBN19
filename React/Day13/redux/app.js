// action is an object
// {
//     type : "kya karna hai", // BUY_CAKE, RESTOCK_CAKE
//     payload? : "some data"
// }

const { createStore, combineReducers } = require("redux");

const buyCake = "BUY_CAKE"
const restockCake = "RESTOCK_CAKE"
const buyIceCream = "BUY_ICECREAM"
const restockIceCream = "RESTOCK_ICECREAM"


// action creator
function BUY_CAKE(q)
{
    return {
        type : buyCake,
        data : q || 1
    }
}




function RESTOCK_CAKE()
{
    return {
        type : restockCake
    }
}

function BUY_ICECREAM(q)
{
    return {
        type : buyIceCream,
        data : q || 1
    }
}

function RESTOCK_ICECREAM()
{
    return {
        type : restockIceCream
    }
}

const initialCakeState = {
    numOfCakes : 12,
}

const initialIceCreamState = {
    numOfIceCreams : 50
}

// whatever you return from a reducer fn, that will replace the state and take its place
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type)
    {
        case buyCake:
            if(action.data > state.numOfCakes)
            {
                return state
            }
            return {
                numOfCakes : state.numOfCakes - action.data
            }

        case restockCake:
            return {
                numOfCakes : 12
            }

        default:
            return state

    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type)
    {
        case buyIceCream:
            if(action.data > state.numOfIceCreams)
            {
                return state
            }
            return {
                numOfIceCreams : state.numOfIceCreams - action.data
            }

        case restockIceCream: 
            return {
                numOfIceCreams : 50
            }

        default:
            return state
    }
}


// const Store = createStore(cakeReducer, iceCreamReducer) wrong


const rootReducer = combineReducers({
    cakes : cakeReducer,
    iceCream : iceCreamReducer
})
const Store = createStore(rootReducer)

const unsubscribe = Store.subscribe(() => {
    console.log(Store.getState())
})


Store.dispatch(BUY_CAKE())
Store.dispatch(BUY_CAKE())
Store.dispatch(BUY_CAKE())
Store.dispatch(BUY_CAKE(5))
Store.dispatch(BUY_CAKE(5))
Store.dispatch(BUY_ICECREAM())
Store.dispatch(BUY_ICECREAM())
Store.dispatch(BUY_ICECREAM())
Store.dispatch(BUY_ICECREAM(40))
Store.dispatch(BUY_ICECREAM(40))


// async thunk