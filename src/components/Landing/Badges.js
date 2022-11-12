import React from 'react'

function Badges() {
  return (
    <div className=' flex items-center space-x-2'>
        <div>
            <img src="/landing/reviews.svg" alt="" />
        </div>
        <div>
            <div className=' font-extrabold text-xl'>Verified Reviews</div>            
            <div className=' -mt-2'>for verified reviewers</div>            
        </div>
    </div>
  )
}

export default Badges