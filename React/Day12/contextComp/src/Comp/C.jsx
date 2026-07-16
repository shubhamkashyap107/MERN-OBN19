import React, { useContext } from 'react'
import { CounterContext, useCounterContext } from '../Utils/CounterContext'

const C = () => {

  // const{count} = useContext(CounterContext)
  const{count} = useCounterContext()

  return (
    <div>{count}</div>
  )
}

export default C