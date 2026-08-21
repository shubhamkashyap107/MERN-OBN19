import React from 'react'
import { useNavigate } from "react-router-dom"

const Card = ({id, title, desc, setData, data}) => {
    const nav = useNavigate()
  return (
    <article
        key={id}
        className="bg-white border border-slate-200 rounded-xl p-5 flex items-center justify-between gap-6 shadow-sm hover:shadow-md transition-all duration-200"
    >

        {/* Task Details */}
        <div className="flex-1 min-w-0">

            <h2 className="text-lg font-semibold text-slate-800 truncate">
                {title}
            </h2>

            <p className="text-sm text-slate-500 mt-1">
                {desc}
            </p>

        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">

            <button
                onClick={() => {
                    nav(`/edit?title=${title}&desc=${desc}&id=${id}`)
                }}
                className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
            >
                Edit
            </button>

            <button
                onClick={() => {
                    // const fa = data.filter((item) => {
                    //     return item.id != id
                    // })

                    // setData(fa)

                    fetch(import.meta.env.VITE_BACKEND_URL + "/todos/" + id,
                        {
                            method : "delete"
                        }
                    )
                    .then((res) => {
                        return res.json()
                    })
                    .then((d) =>{
                        // setData(data.data)
                        const fa = data.filter((item) => {
                            return item.id != id
                        })

                        setData(fa)
                        
                    })
                }}
                className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition"
            >
                Delete
            </button>

        </div>

    </article>
  )
}

export default Card