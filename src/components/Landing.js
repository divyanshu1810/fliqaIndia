import React from 'react'
import Badges from './Landing/Badges'

function Landing() {
  return (
    <div>
        <img className=' w-full' src="/landing.svg" alt="" />
        <div className=' text-center pt-10'>
            <h1 className=' text-5xl'>India's Leading Creative Platform</h1>
            <h3 className=' pt-4 text-xl font-light'>Experience hassle free bookings. Trusted by 2500+ Customers</h3>
        </div>
        <div className=' flex justify-center'>
            <div className='flex justify-between mt-10 rounded-3xl w-6/12 border-black border-4'>
            <input className=' py-2 w-10/12 px-2 rounded-3xl border-none text-center' type="text" placeholder='Search service, blog and many more…' />
            <div className=' rounded-3xl px-20 py-2 bg-[#221010] text-white'>Search</div>
            </div>
        </div>
        <div className=' flex justify-evenly pt-10'>
            <Badges/>
            <Badges/>
            <Badges/>
            <Badges/>
        </div>
        <div className=' border-[0.5px] my-10 border-black bg-black mx-20'>
        </div>
    </div>
  )
}

export default Landing