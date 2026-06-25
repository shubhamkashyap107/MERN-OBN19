import React, { useState } from 'react'

const Left = ({ setText}) => {
  return (
    <div style={{width : "50vw"}}>
        <input 
         onInput={(e) => {
            setText(e.target.value)
         }}
         type="text" 
        />
    </div>
  )
}

export default Left