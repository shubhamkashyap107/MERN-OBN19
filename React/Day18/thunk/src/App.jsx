import React, { useEffect } from 'react'
import Users from './Components/Users'
import Email from './Components/Email'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from './Utils/UserSlice'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <div>
      <Users />
      <Email />
    </div>
  )
}

export default App