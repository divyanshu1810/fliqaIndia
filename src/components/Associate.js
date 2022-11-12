import React from 'react'
import Badge from './Associates/Badge'

function Associate() {
  return (
    <div className=' bg-[#A1E3D8] text-[#4C696D] h-96'>
        <div className=' flex pt-10 items-center justify-between px-20'>
            <div className=' '>
                <div className=' text-3xl'>Find Trusted Associates</div>
                <div className=' text-xl'>Find the best Fliqa Associate for your special day.</div>
            </div>
            <div>See More &gt;&gt; </div>
        </div>
        <div className=' pt-10 flex justify-evenly'>
            <Badge/>
            <Badge/>
            <Badge/>
            <Badge/>
        </div>
    </div>
  )
}

export default Associate