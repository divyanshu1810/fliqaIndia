import React from 'react'
import '../App.css'
function Footer() {
  return (
    <div>
        <div className=' footerA h-80 text-white flex justify-between px-28 pt-20'>
            <div>
                <div className=' text-4xl font-semibold'>
                    <div>Grow your freelancing</div>
                    <div>career with Fliqa Associate</div>
                </div>
                <div className=' ml-10 pt-5'>
                    <div>Register yourself</div>
                    <div>Verification & Quality Check</div>
                    <div>Verified Associate at FliqaIndia</div>
                </div>
            </div>
            <div>
                <span className=' text-black bg-white px-10 py-1 rounded-md'>Join Now</span>
            </div>
        </div>
        <div className=' bg-[#131514] h-96'>
            <div className=' flex justify-evenly text-white pt-10'>
                <div>
                    <div className=' text-2xl'>Never miss a thing.</div>
                    <div className='flex bg-white -ml-2 justify-between rounded-3xl w-12/12 border-black border-4'>
                        <input className='w-11/12 px-2 bg-white rounded-3xl border-none text-center' type="text" placeholder='Email Address' />
                        <div className='rounded-3xl px-4 bg-[#E0E0E0] text-[#4B4B4B]'>Subscribe</div>
                    </div>
                    <div className=' font-semibold text-xl'>Be in touch</div>
                    <div className=' flex'>
                        <img src="/footer/Frame-1.svg" alt="" />
                        <img src="/footer/Frame-2.svg" alt="" />
                        <img src="/footer/Frame-3.svg" alt="" />
                        <img src="/footer/Frame.svg" alt="" />
                        <img src="/footer/Vector.svg" alt="" />
                    </div>
                </div>
                <div>
                    <div className=' text-center text-2xl'>Never miss a thing.</div>
                    <div className=' flex justify-between space-x-40 pt-5'>
                        <div>
                            <div>Services</div>
                            <div>Blog</div>
                            <div>Portfolio</div>
                        </div>
                        <div>
                            <div>Tutorial</div>
                            <div>Careers</div>
                            <div>Film</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' text-2xl'>Never miss a thing.</div>
                    <div className=' pt-5'>
                        <div>Contact Us</div>
                        <div>Feedback</div>
                        <div>FAQ</div>
                        <div>Terms and conditions</div>
                        <div>Privacy Policy</div>
                        <div>Data Deletion Protocol</div>
                    </div>
                </div>
            </div>
            <div className=' text-white text-center mt-10'>
                <div>2019-2021, FliqaIndia Pvt Ltd. -ALL RIGHT RESERVED</div>
                <div>POWERED BY FLIQAINDIA PVT. LTD. </div>
                <div>VERSION 5.1.5</div>
            </div>
        </div>
    </div>
  )
}

export default Footer