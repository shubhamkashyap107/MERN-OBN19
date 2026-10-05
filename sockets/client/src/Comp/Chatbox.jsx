import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { io } from "socket.io-client"

const Chatbox = () => {

    const[msgs, setMsgs] = useState([])
    const textRef = useRef(null)
    const socketRef = useRef(null)
    

    useEffect(() => {
        const socket = io("http://localhost:8080")

        socket.on("rec-msg", (data) => {
          // console.log("OK", data)
          setMsgs(prev => [...prev, data.msg])
        })

        socketRef.current = socket



        return () => socket.disconnect()
    }, [])

  return (
    <div className='h-[50vh] w-[50vw] border'>


   


      <div>
        <input ref={textRef} type="text" />
        <button 
          onClick={() => {

            if(!textRef.current.value)
            {
              alert("Please enter a msg")
              return
            }
            socketRef.current.emit("send-msg", {
              msg : textRef.current.value
            })
            setMsgs([...msgs, textRef.current.value])
          }}
        >Send</button>
      </div>


      <div>
        {
          msgs.map((item) => {
            return <p>{item}</p>
          })
        }
      </div>


    </div>
  )
}

export default Chatbox