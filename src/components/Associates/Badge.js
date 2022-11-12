import React from 'react'

function Badge() {
  return (
    <div className='w-2/12 border-2 bg-[#2C2C2C] rounded-3xl'>
        <img src="/associates/profile.svg" alt="" />
        <div className='flex justify-between'>
            <div className=' ml-4'>
                <div>Name Title</div>
                <div>Location : </div>
            </div>
            <div>
                <img src="/associates/rating.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Badge