import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
    return (
        <section className="r-side mt-5 overflow-hidden bg-white px-5 py-10 md:py-20">
            <div className="max-w-screen-lg m-auto flex justify-center sm:justify-start items-center h-full w-full">
                <div className="flex gap-3 flex-col text-sm tracking-wide">
                    <span className="text-gray-500 text-lg font-semibold block">Information</span>
                    <span className=" text-2xl font-semibold block">MY CONTACT</span>
                    <span className="text-md font-bold mt-3">PHNOMPENH</span>
                    <div className="flex gap-2 sm:items-center">
                        <IoLocationSharp className="text-yellow-500 text-lg" /> 
                        <b>ADDRESS:</b> #249, Kokroka, Phnom Penh
                    </div>

                    <div className="flex gap-2 sm:items-center">
                        <MdCall className="text-yellow-500 text-lg" /> 
                        <b>PHONE-CALL:</b> +855 71 924 7828
                    </div>

                    <div className="flex gap-2 sm:items-center">
                        <FaTelegramPlane className="text-yellow-500 text-lg" /> 
                        <b>TELEGRAM:</b> <a href="https://t.me/koeung28" className="hover:text-blue-500">https://t.me/kkoeung27</a>
                    </div>

                    <div className="flex gap-2 sm:items-center">
                        <BiLogoGmail className="text-yellow-500 text-lg" /> 
                        <b>E-MAIL:</b> khonkoeung27@gmail.com
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer