import React, { useState } from 'react'

const Calculator = () => {

  const[val, setVal] = useState("0")
  let operators = ["+", "-", "*", "/"]

  function btnCLickHandler(e)
  {

    
    
    let enteredValue = e.target.innerText
    if(val == 0 && operators.includes(enteredValue))return

    if(operators.includes(val[val.length - 1]) && operators.includes(enteredValue) && val[val.length - 1] == enteredValue)
    {
      return
    }


    if(operators.includes(val[val.length - 1]) && operators.includes(enteredValue) && val[val.length - 1] != enteredValue)
    {
      setVal(val.slice(0, val.length - 1) + enteredValue)
      return
    }



    if(val == 0)
    {
      setVal(enteredValue)
    }
    else
    {
      setVal(val + enteredValue)
    }
  }

  return (
    <div id='screen'>
      <div id='calc'>
        <div id='display'>
          {val}
        </div>


        <div id='btns-container'>
          <button onClick={btnCLickHandler} className='btn'>0</button>
          <button onClick={btnCLickHandler} className='btn'>+</button>
          <button onClick={btnCLickHandler} className='btn'>-</button>
          <button onClick={() => setVal("0")} className='btn'>C</button>

          <button onClick={btnCLickHandler} className='btn'>7</button>
          <button onClick={btnCLickHandler} className='btn'>8</button>
          <button onClick={btnCLickHandler} className='btn'>9</button>
          <button onClick={btnCLickHandler} className='btn'>*</button>

          <button onClick={btnCLickHandler} className='btn'>4</button>
          <button onClick={btnCLickHandler} className='btn'>5</button>
          <button onClick={btnCLickHandler} className='btn'>6</button>
          <button onClick={btnCLickHandler} className='btn'>/</button>

          <button onClick={btnCLickHandler} className='btn'>1</button>
          <button onClick={btnCLickHandler} className='btn'>2</button>
          <button onClick={btnCLickHandler} className='btn'>3</button>
          <button onClick={() => {
            let ans = eval(val)
            setVal(ans)
          }} className='btn'>=</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator