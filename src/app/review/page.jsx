import StarRating from '@/components/utils/rating'
import Image from 'next/image'
import React from 'react'

const page = () => {

  return (
    <div className='flex flex-col items-center pt-[113px] justify-center w-full'>
      <div className='flex w-full flex-col gap-5 items-center pb-10 justify-end bg-[#333333] '>
        <div className='flex gap-5 py-10 text-white'>
          <a href="/" className="bg-[#57bad9] rounded-3xl font-bold py-2 px-6 glow-box glow-text">Check Prizes</a>
          <a href="/" className="bg-[#57bad9] hover:bg-transparent/15 py-2 px-6 transition duration-500 ease-in-out rounded-3xl font-bold ">Order Now</a>
        </div>

      </div>
      <div className='w-[1200px] flex flex-col gap-5 py-10'>
        <div className=' w-full p-2 border border-[#ebebeb] bg-[#fbfbfb] font-bold text-[24px] capitalizes'>My Latest Review</div>
        <div className='relative shadow-md shadow-black/45 mx-5 mt-10 p-10 flex flex-col'>
          <Image src='https://solvehub.in/themes/garland/img/quote-orange.png' width={1200} height={1200} className='w-[40px] right-5 -top-4  absolute' alt='dasd' />
          <div className='flex items-start justify-between'>
            <div className='  flex flex-col w-full p-2 border-[0.5px] border-[#ebebeb] bg-[#fbfbfb] font-bold text-[16px] capitalizes'>
              <div>Tanya</div>
              <div>on2 October 2019</div>
              <p className=" capitalize bg-[#323e66] mt-7 p-px w-[50px]"></p>
            </div>
            <div className=' w-full p-2 flex items-end justify-end bg-[#fbfbfb] font-bold text-[24px] capitalizes'>
              <StarRating />
            </div>
          </div>

          <div className='text-start w-full font-playfair bg-[#fbfbfb] font-bold text-[12px] capitalizes'>I like moovie script writing service.</div>
        </div>
      </div>
    </div>
  )
}

export default page