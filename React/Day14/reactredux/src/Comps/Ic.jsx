import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../Utils/redux/IceCream'

const Ic = () => {
    const dis = useDispatch()
    const { numOfIceCreams } = useSelector(store => store.iceCream)

  return (
    <div>
        <h1>Num of ice creams : {numOfIceCreams}</h1>
        {/* <button onClick={() => {
            dis(buyIceCream())
        }}>Buy Ice Cream</button> */}
    </div>
  )
}

export default Ic