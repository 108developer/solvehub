"use client";
import React, { useEffect, useState } from "react";
import Accordian from "@/components/utils/Accordian";
import { useParams } from "next/navigation";
import useAuthStore from "@/store/store";

const Client = () => {
    const { services } = useParams() // Get courseId from the URL params
    const { loadServiceBySlug, serviceData } = useAuthStore()

    const faqData = [
        {
            question: "What is Next.js?",
            answer:
                "Next.js is a React framework that enables server-side rendering and static site generation.",
        },
        {
            question: "How does Tailwind CSS work?",
            answer:
                "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
        },
        {
            question: "What is React?",
            answer: "React is a JavaScript library for building user interfaces.",
        },
    ];    // Load services when component mounts if not already loaded
    // Load service data when the component mounts
    useEffect(() => {
        const fetchService = async () => {
            try {
                if (!serviceData || Object.keys(serviceData).length === 0) {
                    await loadServiceBySlug(services);
                }
            } catch (error) {
                console.error("Error loading service data:", error);
            }
        };

        fetchService();
    }, [loadServiceBySlug]);
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex w-full flex-col gap-5 items-center pb-10 justify-end bg-[#333333] h-[300px]">
                <div className="text-white font-thin text-[30px] capitalize">
                    {serviceData.title}
                </div>
                <div className="flex gap-5 text-white">
                    <a href="/" className="bg-[#57bad9] rounded-3xl font-bold py-2 px-6 glow-box glow-text">
                        Check Prizes
                    </a>
                    <a href="/" className="bg-[#57bad9] hover:bg-transparent/15 py-2 px-6 transition duration-500 ease-in-out rounded-3xl font-bold">
                        Order Now
                    </a>
                </div>
            </div>

            <div className="flex py-5 flex-col items-start text-start w-[1200px]">
                <div className="flex font-thin gap-5 flex-col w-[600px]">
                    {serviceData.paragraphs && serviceData.paragraphs.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))}
                </div>
                <div className="pt-10 w-full">
                    <Accordian data={serviceData.faqs || faqData} />
                </div>
            </div>
        </div>
    );
};

export default Client;
