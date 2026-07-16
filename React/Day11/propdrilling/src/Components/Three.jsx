import React, { createContext, useState } from 'react'
import Four from './Four'

export const CountContext = createContext()

const Three = () => {

  const[count, setCount] = useState(0)

    return (
      <CountContext.Provider value={{count}}>

        <div>
            <button onClick={() => {
              setCount(count + 1)
            }}>Incfrement</button>

            <h1>Three</h1>
            
            <Four  />
        </div>

      </CountContext.Provider>

  )
}

export default Three