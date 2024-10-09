'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Footer from './footer';
import Dropdown from './utils/Dropdown';
import LoginModal from './utils/loginmodal';
import useAuthStore from '@/store/store';
import EditModal from './utils/editModal';

const Navbar = ({ children }) => {
    const { user, loadServices, loadSubjects, allSubjects, allServices } = useAuthStore()
    const [bgColor, setBgColor] = useState('bg-transparent/75'); // Initial state for background color
    const [bgimage, setBgimage] = useState('https://solvehub.in/themes/garland/img/logo4.png'); // Initial state for background color

    // Load services when component mounts if not already loaded
    useEffect(() => {
        if (!allServices.length || !allSubjects.length) {
            loadServices();
            loadSubjects()
        }
    }, [ loadSubjects, loadServices]);

    // Change background color based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) { // Change 200 to the position you want
                setBgColor('bg-white'); // Set to white background
                setBgimage('https://solvehub.in/themes/garland/img/logo10.png'); // Set to white background
            } else {
                setBgimage('https://solvehub.in/themes/garland/img/logo4.png'); // Set to white background
                setBgColor('bg-transparent/75'); // Keep it transparent
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const services = [
        "Assignment Writing Services",
        "Case Study Help",
        "Coursework Writing Services",
        "Dissertation Writing Service",
        "Essay Writing Services",
        "Financial Analysis Writing Service",
        "Lab Report Help",
        "Marketing Plan Writing Service",
        "Online Research Paper Writing Service",
        "Project Report",
        "Project Synopsis or Proposal",
        "Term Paper Writing Services",
        "Thesis Proposal Writing"
    ];


    const subjects = [
        "AC & Finance",
        "Best Business Assignment Writing",
        "IT Software Assignment and Paper",
        "Law Assignment Writing",
        "Management Assignment Writing",
        "Nursing Assignment Writing"
    ];

    const handleSelect = (item) => {
        console.log('Selected item:', item); // Handle the selected item
    };
    console.log(allSubjects)
    return (
        <div className='relative'>
            <div className=''>
                <div className='w-full  fixed z-50  flex flex-col'>
                    <div className=' absolute top-0 z-50 text-[#e4e9f0] w-full items-center justify-center flex p-3 bg-[#1160a3]'>
                        <div className='flex justify-between w-[1100px] bg-[#1160a3]'>
                            <div className='flex gap-2 items-center'>
                                <svg fill='#60b57a' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 24 24">
                                    <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>
                                </svg>
                                <a href='https://api.whatsapp.com/send/?phone=918826401566&text&type=phone_number&app_absent=0' className="glow-text">
                                    Click to WhatsApp
                                </a>

                            </div>
                            <div className='flex gap-4'>
                                <div className='flex gap-2 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                    </svg>
                                    <span className=''>+91-8826401566</span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                    <span className='glow-text'>
                                        {user ? <EditModal /> : <LoginModal />}
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className={`top-[49px] z-40 absolute ${bgColor == 'bg-transparent/75' ? 'text-[#e4e9f0]' : 'text-black'} ${bgColor} w-full items-center justify-center flex p-5 transition-colors duration-300`}>
                        <div className='flex justify-between w-[1100px]'>
                            <Image src={bgimage} width={120} height={120} alt='png' />
                            <div className='capitalize flex gap-7'>
                                <a href={`/`} className='font-bold glow-text'>Home</a>
                                <div className='font-bold flex gap-px relative'>
                                    <Dropdown
                                        title="Services"
                                        items={allServices}
                                        onSelect={handleSelect}
                                    />
                                </div>
                                <div className='font-bold'><Dropdown
                                    title="Subjects"
                                    items={allSubjects}
                                    onSelect={handleSelect}
                                /></div>
                                <div className='font-bold glow-text'>Blog</div>
                                <a href={`/review`} className='font-bold glow-text'>Review</a>
                                <a href={`/contacts`} className='font-bold glow-text'>Contacts</a>
                                <a href={`/pricedetails`} className='font-bold glow-text'>Price</a>
                                <a href={`/ordernow`} className='font-bold glow-text'>Order Now</a>
                                <a href={`/contacts`} className='font-bold glow-text'>Site Map</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Navbar