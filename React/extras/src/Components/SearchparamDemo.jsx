import React from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchparamDemo = () => {
    const [obj] = useSearchParams()
    const count = obj.get("count")
    const name = obj.get("name")
    const isPresent = obj.get("ispresent")
  return (
    <div>
        <h1>Count is {count}</h1>
        <h1>Name is {name}</h1>
        <h1>Present is {isPresent}</h1>
    </div>
  )
}

export default SearchparamDemo