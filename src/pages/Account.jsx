import React from 'react'
import Likes from '../components/Likes'
import netflix from '../assets/netflix.png'

const Account = () => {
  return (
    <>
      <div id='account' className=" w-full">
        <img src={netflix} alt='movies' className='h-[430px] w-full object-cover' />
      <div id='accountLayout' className="bg-black/60 w-full h-[430px] fixed top-0 left-0 ">
        {/* <div className='flex justify-center items-center absolute top-[10%]'> */}
          <h2 className='text-white text-bold text-4xl z-10 absolute left-[15%] top-[24%] max-[1100px]:top-[48%] lg:top-[45%]'>My List</h2>
          
        </div>
      </div>
       <Likes />
    </>
  )
}

export default Account