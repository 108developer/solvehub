import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col items-center pt-[113px] justify-center w-full'>
            <div className='w-[1200px] flex flex-col gap-5 py-10'>
                <div className=' w-full p-2 border border-[#ebebeb] bg-[#fbfbfb] font-bold text-[24px] capitalizes'>Price Details</div>
                <form className='flex items-center justify-center gap-5 flex-wrap'>
                    <div className='w-[360px] flex flex-col'>
                        <label className='text-[12px] font-semibold' for="fullName">Full Name: *</label>
                        <input className='border p-2 outline-none' type="text" id="fullName" name="fullName" placeholder="Full Name.." required />
                        <br></br>
                    </div>

                    <div className='w-[360px] flex flex-col'>
                        <label className='text-[12px] font-semibold' for="email">Email Address: *</label>
                        <input className='border p-2 outline-none' type="email" id="email" name="email" placeholder="Email Address.." required />
                        <br></br>
                    </div>

                    <div className='w-[360px] flex flex-col'>
                        <label className='text-[12px] font-semibold' for="country">Country: *</label>
                        <input className='border p-2 outline-none' type="text" id="country" name="country" placeholder="Country name" required />
                        <br></br>
                    </div>

                    <div className='w-[360px] flex flex-col'>
                        <label className='text-[12px] font-semibold' for="contactNumber">Contact Number: *</label>
                        <input className='border p-2 outline-none' type="tel" id="contactNumber" name="contactNumber" placeholder="Contact Number.." required />
                        <br></br>
                    </div>
                    <div className='w-[360px] flex flex-col'>
                        <label className='text-[12px] font-semibold' for="documentType">Type of Document: *</label>
                        <select className='border p-2 outline-none' id="documentType" name="documentType" required>
                            <option value="" disabled selected>Select Document Type</option>
                            <option value="admissionEssays">Admission Essays</option>
                        </select>
                        <br></br>
                    </div>

                    <div className='w-[360px] flex flex-col'>
                        <label className='text-[12px] font-semibold' for="currency">Currency:</label>
                        <input className='border p-2 outline-none' type="text" id="currency" name="currency" value="INR" readonly />
                        <br></br>
                    </div>
                    <div className='w-[360px] flex flex-col'>

                        <label className='text-[12px] font-semibold' for="urgency">Urgency: *</label>
                        <select className='border p-2 outline-none' id="urgency" name="urgency" required>
                            <option value="within7days">Within 7 days</option>
                        </select>
                        <br></br>
                    </div>

                    <div className='w-[360px] flex flex-col'>
                        <label className='text-[12px] font-semibold' for="wordLimit">Total Word Limit:</label>
                        <input className='border p-2 outline-none' type="number" id="wordLimit" name="wordLimit" placeholder="Number of Pages.." />
                        <br></br>
                    </div>

                    <div className='w-[360px] flex flex-col'>
                        <label className='text-[12px] font-semibold' for="pages">Number of Pages: (approximately 275 words per page)</label>
                        <input className='border p-2 outline-none' type="number" id="pages" name="pages" placeholder="Number of Pages.." min="1" />
                        <br></br>
                    </div>

                    <div className='w-[360px] flex flex-col'>
                        <button className='border glow-box glow-text bg-[#57bad9] font-bold text-white rounded-full p-2 outline-none' type="submit">Submit</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default page