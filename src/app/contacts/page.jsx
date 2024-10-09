import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='flex items-center pt-36 justify-center w-full'>
            <div className='flex items-start  justify-between w-[1200px] gap-5 p-5'>
                <div className='flex flex-col items-start w-full py-5 justify-start '>
                    <div className=' w-full p-2 border border-[#ebebeb] bg-[#fbfbfb] font-bold text-[24px] capitalizes'>Quick Enquiry</div>
                    <form className='flex py-5 items-center justify-between flex-wrap'>
                        <div className='w-[220px] flex flex-col'>
                            <label className='text-[12px] font-semibold' for="firstName">First Name: *</label>
                            <input className='border p-2 outline-none' type="text" id="firstName" name="firstName" placeholder="First Name.." required />
                            <br></br>
                        </div>
                        <div className='w-[220px] flex flex-col'>
                            <label className='text-[12px] font-semibold' for="lastName">Last Name: *</label>
                            <input className='border p-2 outline-none' type="text" id="lastName" name="lastName" placeholder="Last Name.." required />
                            <br></br>
                        </div>

                        <div className='w-[220px] flex flex-col'>
                            <label className='text-[12px] font-semibold' for="email">Email Address: *</label>
                            <input className='border p-2 outline-none' type="email" id="email" name="email" placeholder="Email Address.." required />
                            <br></br>
                        </div>

                        <div className='w-[220px] flex flex-col'>
                            <label className='text-[12px] font-semibold' for="contactNumber">Contact Number: *</label>
                            <input className='border p-2 outline-none' type="tel" id="contactNumber" name="contactNumber" placeholder="Contact Number.." required />
                            <br></br>
                        </div>

                        <div className='w-full flex flex-col'>
                            <label className='text-[12px] font-semibold' for="message">Message: *</label>
                            <textarea className='border p-2 outline-none' type="tel" id="message" name="message" placeholder="Write your query.." required />
                            <br></br>
                        </div>

                        <div className=' flex flex-col w-full'>
                            <button className='border glow-box glow-text w-[220px] bg-[#57bad9] font-bold text-white rounded-full p-2 outline-none' type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <div className='flex flex-col items-start w-[60%] py-5 justify-start gap-3'>
                    <div className=' w-full p-2 border-b border-[#ebebeb] font-light text-[24px] capitalizes'>Keep In Touch</div>
                    <div className='flex gap-2'>
                        <Image src='https://solvehub.in/themes/garland/img/lo.png' alt='address' width={100} height={100} className='w-8 h-8' />
                        <span className='flex flex-col w-full font-light'>
                            <span className='flex w-full font-bold'>
                                Address:
                            </span>
                            This is my office address you can change it from admin.
                        </span>
                    </div>
                    <div className='flex gap-2'>
                        <Image src='https://solvehub.in/themes/garland/img/call.png' alt='address' width={100} height={100} className='w-8 h-8' />
                        <span className='flex flex-col w-full font-light'>
                            <span className='flex w-full font-bold'>
                                Phone:
                            </span>
                            +91-8826401566
                        </span>
                    </div>
                    <div className='flex gap-2'>
                        <Image src='https://solvehub.in/themes/garland/img/ww.png' alt='address' width={100} height={100} className='w-8 h-8' />
                        <span className='flex flex-col w-full font-light'>
                            <span className='flex w-full font-bold'>
                                Whats app:
                            </span>
                            +91-8826401566
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page