import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {

    const nav = useNavigate()

  return (
    <div className='bg-[#FF5200] h-screen relative'>
        
        <nav className='flex justify-between px-8 py-4'>
            <img src="logo.png" className='h-10' alt="" />


            <div className='flex gap-4 text-white'>
                <div>Swiggy Corporate</div>
                <div>Partner with us</div>
                <div>Get the App</div>
                <div>Sign in</div>
            </div>
        </nav>


        <div className='flex flex-col items-center gap-10 mt-10'>


            <h1 className='text-center text-5xl text-white font-bold'>Order food & groceries. Discover <br /> best restaurants. Swiggy it!</h1>
            <input type="text" className='w-[40vw] outline-none h-12 rounded-2xl bg-white px-6' />


            <div className='flex'>
                <img onClick={() => nav("/restaurants")} className='h-75 cursor-pointer' src="one.png" alt="" />
                <img className='h-75 cursor-pointer' src="two.png" alt="" />
                <img className='h-75 cursor-pointer' src="three.png" alt="" />
            </div>

        </div>


        {/* <img className='fixed left-0 top-40 h-100' src="left.png" alt="" />
        <img className='fixed right-0 top-40 h-100' src="right.png" alt="" /> */}

        <img className='absolute left-0 top-40 h-100' src="left.png" alt="" />
        <img className='absolute right-0 top-40 h-100' src="right.png" alt="" />

    </div>
  )
}

export default Landing