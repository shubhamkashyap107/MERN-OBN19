import { createContext, useContext, useState } from "react";

const ListContext = createContext()

export function ListContextProvider({children})
{
    const[data, setData] = useState([])
    return (
        <ListContext.Provider value={{data, setData}}>
            {children}
        </ListContext.Provider>
    )
}

export function useListContext()
{
    return useContext(ListContext)
}