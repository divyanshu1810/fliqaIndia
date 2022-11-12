import React from 'react'

function Header() {
  return (
    <div className=' flex px-10 py-3 justify-between items-center text-white bg-[#131514]'>
        <div className=' flex'>
            <div className=' '><img src="/logo.svg" alt="" /></div>
            <div className=' flex items-center space-x-8 ml-10'>
                <div>Home</div>
                <div>Service</div>
                <div>Portfolio</div>
                <div>Community</div>
                <div>Blog</div>
            </div>
        </div>
        <div className=' flex space-x-8'>
            <div className=' rounded-3xl px-6 py-2 bg-[#004D58]'>Sign Up</div>
            <div className=' rounded-3xl px-6 py-2 bg-[#004D58]'>Sign In</div>
        </div>
    </div>
  )
}

export default Header