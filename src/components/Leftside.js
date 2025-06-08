import React, { useEffect, useRef } from 'react';
import Logo from "../assets/03.jpg"
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { LiaHandPointRight } from "react-icons/lia";
import AOS from "aos";
import "aos/dist/aos.css";

import Typed from "typed.js";
import Darkmode from './Darkmode';
import Progress from './Progress';
import { Link } from 'react-router-dom';


const Leftside = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const typedRef = useRef(null);
    useEffect(() => {
        const typed = new Typed(typedRef.current, {
            strings: ["Web Developer", "IT Supporter", "Web Designer", "Graphic Designer"],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
        });

        return () => {
            typed.destroy();
        };

    }, []);


    return (
        <>
            <section className='l-side'>
                <div className="py-8">
                    <div className='absolute top-5 right-5 md:top-2 md:right-2'><Darkmode /></div>

                    <div className="relative flex justify-center w-48 m-auto">
                        <div className='overflow-hidden size-48 rounded-full border-2 border-yellow-500/80'><img src={Logo} alt="logo" className="w-full opacity-100" /></div>
                        <span class="animate-ping absolute bottom-5 right-4 inline-flex size-5 rounded-full bg-sky-400 opacity-75"></span>
                        <div className="absolute bottom-5 right-4 rounded-full border-[2px] hover:border-[1px] border-slate-800 bg-yellow-400 size-5 hover:w-40 duration-500 overflow-hidden text-center *:hidden *:hover:block">
                            <p className="hover:w-full text-[12px] tracking-wider">AVAILABLE FOR HIRE</p> 
                        </div>
                    </div>
                    <span className="text-lg mt-3 text-center font-semibold block">KHON KOEUNG</span>
                    <div className='l-span text-sm mt-2 tracking-wide text-center text-yellow-400'>
                        <span ref={typedRef}></span>
                    </div>

                    <div className='flex gap-3 justify-center mt-4 text-[16px] *:duration-300'>
                        <div className='hover:text-yellow-400 hover:scale-125'><a href="https://github.com/Webdevk28"><FaGithub /></a> </div>
                        <div className='hover:text-yellow-400 hover:scale-125'><a href="https://t.me/kkoeung27"><FaTelegram /></a></div>
                        <div className='hover:text-yellow-400 hover:scale-125'> <a href="https://kkoeung-folio.vercel.app/"><FaGlobe /></a> </div>
                    </div>
                </div>
                <p className='hidden md:block h-[2px] mx-auto bg-gradient-to-l from-transparent via-yellow-500 to-transparent' />

                {/* Progress Myskills */}
                <div data-aos="zoom-in-down" className='hidden md:block mt-5'><Progress /></div>

                <p className='hidden md:block h-[2px] w-1/2 mx-auto bg-gradient-to-l from-transparent via-yellow-500 to-transparent mt-3' />

                {/* View Resume */}
                <div className='flex justify-center items-center p-4'>
                    <Link to="/Cv" className='px-6 py-1.5 bg-yellow-400 rounded-full text-sm text-gray-800 hover:bg-yellow-500 duration-300 hover:scale-x-110'>View Resume</Link>
                </div>
            </section>
        </>
    )
}


export default Leftside
