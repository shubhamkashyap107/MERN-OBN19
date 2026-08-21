import React, { useState } from 'react'
import { useSearchParams, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const Edit = () => {

  const arr = useSearchParams()
  const nav = useNavigate()

  const initalTitle = arr[0].get("title")
  const initalDesc = arr[0].get("desc")
  const id = arr[0].get("id")

  const [title, setTitle] = useState(initalTitle)
  const [desc, setDesc] = useState(initalDesc)

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-5 py-10">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-200 p-8">

        {/* Header */}
        <div className="mb-7">
          <h1 className="text-2xl font-bold text-slate-800">
            Edit Task
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            Update your task details
          </p>
        </div>

        <div className="space-y-5">

          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              Title
            </label>

            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
              }}
              id="title"
              type="text"
              placeholder="Enter task title"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg outline-none text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              Description
            </label>

            <textarea
              onChange={(e) => {
                setDesc(e.target.value)
              }}
              value={desc}
              id="description"
              placeholder="Enter task description"
              rows="5"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg outline-none resize-none text-slate-800 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          {/* Save */}
          <button
            onClick={() => {
              if (!title || !desc) {
                toast.error("Please enter all the fields....")
                return
              }

              if (title == initalTitle && desc == initalDesc) {
                toast.error("Cannot save without making any changes...")
                return
              }

              fetch(
                import.meta.env.VITE_BACKEND_URL + "/todos/" + id,
                {
                  method: "PATCH",
                  body: JSON.stringify({ title, desc }),
                  headers: {
                    "content-type": "application/json"
                  }
                }
              )
                .then((res) => {
                  return res.json()
                })
                .then(() => {
                  nav("/")
                })
            }}
            className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-sm hover:shadow-md"
          >
            Save Changes
          </button>

        </div>
      </div>
    </div>
  )
}

export default Edit