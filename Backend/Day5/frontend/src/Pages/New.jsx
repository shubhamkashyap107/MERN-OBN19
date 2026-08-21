import React, { useRef } from 'react'
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const New = () => {

  const titleRef = useRef(null)
  const descRef = useRef(null)
  const nav = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Add New Task
        </h1>

        <div className="space-y-5">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Title
            </label>

            <input
              ref={titleRef}
              id="title"
              type="text"
              placeholder="Enter task title"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Description
            </label>

            <textarea
              ref={descRef}
              id="description"
              placeholder="Enter task description"
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <button
            onClick={() => {
              if(!titleRef.current.value || !descRef.current.value)
              {
                toast.error("Please enter all the fields...")
                return
              }




              fetch(
                import.meta.env.VITE_BACKEND_URL + "/todos/", 
                {
                  method : "post",
                  body : JSON.stringify({
                    title : titleRef.current.value,
                    desc : descRef.current.value,
                  }),
                  headers : {
                    "content-type" : "application/json"
                  }
                })
                .then((res) => {
                  return res.json()
                })
                .then(() => {
                  nav("/")
                })


                
            }}








            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  )
}

export default New