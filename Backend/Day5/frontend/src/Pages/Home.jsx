import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

const Home = () => {

    const [data, setData] = useState([])
    const [flag, setFlag] = useState(true)

    useEffect(() => {
        fetch(import.meta.env.VITE_BACKEND_URL + "/todos")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                setData(data.data)
                setFlag(false)
            })
    }, [])

    if (data.length == 0 && flag) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-10 h-10 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
                    <h1 className="text-lg font-medium text-slate-600">
                        Loading tasks...
                    </h1>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-5">

            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">
                        My Tasks
                    </h1>

                    <p className="text-slate-500 mt-1">
                        Manage your tasks easily
                    </p>
                </div>

                {/* Task List */}
                <div className="space-y-4">

                    {
                        data.length > 0 ? (

                            data.map((item) => {
                                return <Card key={item.id} data={data} setData={setData} title={item.title} desc={item.desc} id={item.id} />
                            })

                        ) : (

                            <div className="bg-white border border-dashed border-slate-300 rounded-xl py-16 text-center">

                                <div className="text-5xl mb-4">
                                    📋
                                </div>

                                <h2 className="text-xl font-semibold text-slate-700">
                                    No tasks available
                                </h2>

                                <p className="text-slate-400 mt-2">
                                    You don't have any tasks yet.
                                </p>

                            </div>

                        )
                    }

                </div>

            </div>

        </div>
    )
}

export default Home