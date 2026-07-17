const BUY_ICECREAM = "BUY_ICECREAM"
const RESTOCK_ICECREAM = "RESTOCK_ICECREAM"


export function buyIceCream(q)
{
    return {
        type : BUY_ICECREAM,
        payload : q || 1
    }
}

export function restockIceCream()
{
    return {
        type : RESTOCK_ICECREAM,
    }
}

const initialIceCreamState = {
    numOfIceCreams : 50
}

export const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type)
    {
        case BUY_ICECREAM:
            if(action.payload > state.numOfIceCreams)
            {
                return state
            }
            return {
                numOfIceCreams : state.numOfIceCreams - action.payload
            }


        case RESTOCK_ICECREAM:
            return {
                numOfIceCreams : 50
            }

        default :
            return state
    }
}