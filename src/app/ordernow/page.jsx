import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='flex items-center pt-36 justify-center w-full'>
            <div className='flex items-start w-[1100px] p-5 justify-start gap-5'>
                <div className='w-full '>
                    <div className='border p-3 bg-gray-300 font-bold'>Personal Details</div>
                    <div className='pt-5 text-start'>
                        <div>Full Name *</div>
                        <input type='text' className='w-full border p-3' placeholder='Full Name...' />
                    </div>
                    <div className='pt-5 text-start'>
                        <div>Email Address *</div>
                        <input type='email' className='w-full border p-3' placeholder='Email Address' />
                    </div>
                    <div className='pt-5 text-start'>
                        <div>Services *</div>
                        <input type='text' className='w-full border p-3' placeholder='Case Study' />
                    </div>
                    <div className='pt-5 text-start'>
                        <div>Country *</div>
                        <input type='text' className='w-full border p-3' placeholder='Select A Contry' />
                    </div>
                    <div className='pt-5 text-start'>
                        <div>Contact Number *</div>
                        <input type='text' className='w-full border p-3' placeholder='Contact Number...' />
                    </div>
                    <div className='pt-5 text-start'>
                        <button className='w-fit px-20 text-white py-2 bg-green-400 font-bold'>Submit</button>
                    </div>
                </div>
                <div className='w-[50%]'>
                    <Image className='' src='https://solvehub.in/themes/garland/img/banner1111.jpg' width={1200} height={1200} alt='Personal' />
                </div>
            </div>
        </div>
    )
}

export default page