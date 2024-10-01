"use client"
import React from 'react'
import Accordian from '@/components/utils/Accordian';
import { useParams, useSearchParams } from 'next/navigation';

const Client = () => {
    const data = useParams(); // Get courseId from the URL params
    
    const faqData = [
        {
            question: 'What is Next.js?',
            answer: 'Next.js is a React framework that enables server-side rendering and static site generation.',
        },
        {
            question: 'How does Tailwind CSS work?',
            answer: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.',
        },
        {
            question: 'What is React?',
            answer: 'React is a JavaScript library for building user interfaces.',
        },
    ];

    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <div className='flex w-full flex-col gap-5 items-center pb-10 justify-end bg-[#333333] h-[300px]'>
                <div className='text-white font-thin text-[30px] capitalize'>{decodeURIComponent(data.services)}</div>
                <div className='flex gap-5 text-white'>
                    <a href="/" className="bg-[#57bad9] rounded-3xl font-bold py-2 px-6 glow-box glow-text">Check Prizes</a>
                    <a href="/" className="bg-[#57bad9] hover:bg-transparent/15 py-2 px-6 transition duration-500 ease-in-out rounded-3xl font-bold ">Order Now</a>
                </div>

            </div>
            <div className='flex py-5 flex-col items-start text-start w-[1200px]'>
                <div className='flex font-thin gap-5 flex-col w-[600px]'>
                    <div>
                        Hello friends! Are you worried about your assignment and looking for assistance? Don’t know how to finish it within a short time? Well, don’t get so much stressed out. Solve Hub is here to support you. Solve Hub is one of the oldest organizations that provide online assistance for writing any kind of assignment. You can be a fresher in a college or a final year student. We always supply a consistent help in case of online writing service.
                    </div>
                    <div>
                        We truly understand the pressure you go through while pursuing an academic course. Doing long research on a difficult topic and writing assignments on that can make your life miserable. Also, there is a risk of whether you can submit your project on time or not. Solve Hub guarantees you that you can submit your work on time and achieve your desire mark with the help of our assistance. So don’t waste your time. Make contact with us and let us serve you. We will do the hard work for you so that you could rest a bit.</div>
                </div>
                <div className='pt-10 w-full'><Accordian data={faqData} /></div>
            </div>
        </div>
    )
}

export default Client