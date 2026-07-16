import { createContext, useContext, useState } from "react";

export const CounterContext = createContext()


export function CounterContextProvider({children})
{

    const[count, setCount] = useState(0)

    return <CounterContext.Provider value={{count, setCount}}>
        {children}
    </CounterContext.Provider>
}


// custom hooks


export function useCounterContext()
{
    return useContext(CounterContext)
}