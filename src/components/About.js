import React from "react";
import person from "../assets/04.png"
import { IoIosContact } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { BsChatDotsFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";
import { BsEmojiSunglassesFill } from "react-icons/bs";

function About () {

    return (
        <section className="r-side mt-10 px-5 py-10">
           <div className="grid md:grid-cols-2 gap-5">
                <div className="hidden md:block">
                    <div data-aos="zoom-in" data-aos-duration="2000" ><img src={person} alt="person" className="opacity-90"/></div>
                </div>

                <div className="">
                    <div data-aos="zoom-in" data-aos-duration="2000" className="flex flex-col gap-4 tracking-wide">
                        <h1 className="text-2xl font-semibold inline-block">ABOUT ME</h1>
                        <span className="l-span text-sm">Web Developer</span>
                        <p>I am a IT Support & Web Developer. I am a punctual and motivated individual who is able to work in a busy environment and produce hight standards of work.</p>
                        <p>I am an excellent team worker and am able to take instructions from all levels and build up good working relationships with all colleagues. I am flexible reliable and possesss excellent time keeping skills.</p>

                        <div className="grid text-[14px] gap-3 mt-2 *:flex *:items-center *:gap-2 *:px-1*:rounded-lg tracking-wider">
                            <div><div><IoIosContact className="text-lg text-yellow-400"/></div> Khon Koeung</div>
                            <div><div><IoLocation className="text-lg text-yellow-400"/></div> #249,Kokroka,PhnomPenh</div>
                            <div><div><IoIosMail className="text-lg text-yellow-400"/></div> khonkoeung27@gmail.com</div>
                            <div><div><BsChatDotsFill className="text-lg text-yellow-400"/></div> +855 71 924 7828</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 text-[15px] gap-4 *:flex *:items-center *:justify-center *:gap-2 *:px-1 *:py-4 *:rounded-lg *:border *:border-slate-500/10">
                <div data-aos="fade-right" data-aos-duration="1500" className="r-side-item"><div><FaCalendarAlt className="text-lg text-yellow-400"/></div> 5000+ Working Hours</div>
                <div data-aos="fade-right" data-aos-duration="1000" className="r-side-item"><div><FaGlobe className="text-lg text-yellow-400"/></div> 03+ Total Projects</div>

                <div data-aos="fade-left" data-aos-duration="1000" className="r-side-item"><div><MdLightMode className="text-lg text-yellow-400"/></div> 3+ Years Journey</div>

                <div data-aos="fade-left" data-aos-duration="1500" className="r-side-item"><div><BsEmojiSunglassesFill className="text-lg text-yellow-400"/></div>03+ Total Client</div>
            </div>
        </section>
    )
}

export default About
