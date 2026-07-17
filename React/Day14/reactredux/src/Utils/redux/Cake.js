
const BUY_CAKE = "BUY_CAKE"
const RESTOCK_CAKE = "RESTOCK_CAKE"

export function buyCake(q)
{
    return {
        type : BUY_CAKE,
        payload : q || 1
    }
}

export function restockCake()
{
    return {
        type : RESTOCK_CAKE
    }
}

const intialCakeState = {
    numOfCakes : 20
}


export const cakeReducer = (state = intialCakeState, action) => {
    switch(action.type)
    {
        case BUY_CAKE:
            if(action.payload > state.numOfCakes)
            {
                return state
            }
            return {
                numOfCakes : state.numOfCakes - action.payload
            }

        case RESTOCK_CAKE:
            return {
                numOfCakes : 20
            }

        default:
            return state
    }
}