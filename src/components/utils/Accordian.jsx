"use client"
import React, { useState } from 'react';

const Accordian = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="w-full p-3 shadow-xl shadow-black/25 rounded-md rounded-tr-xl rounded-bl-xl  mx-auto">
                {data.map((faq, index) => (
                    <div key={index} className=" flex flex-col mb-2 border-gray-200">
                        <button
                            className="w-full text-left p-4 flex bg-gray-200 justify-between items-center"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="font-semibold text-lg">{faq.ques}</span>
                            <svg
                                className={`w-5 h-5 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        <div
                            className={` overflow-hidden transition-[max-height] duration-300 ease-in-out ${openIndex === index ? 'max-h-screen border' : 'max-h-0'
                                }`}
                        >
                            <p className="p-4 text-gray-600">{faq.ans}</p>
                        </div>
                    </div>
                ))}
            </div >
        </>

    );
};

export default Accordian;
