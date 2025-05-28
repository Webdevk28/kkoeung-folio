import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import PopupComponent from './PopupApp';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../App.css';


import frisbee from '../assets/Frisbee-MIR.jpg'
import img2 from '../assets/Trick-code.jpg'
import img3 from '../assets/013.png'
import { IoWalkOutline } from "react-icons/io5";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
    const popupRef = useRef();
      
        const handleFrisbee = () => {
            popupRef.current?.show('frisbee');
        };
        const handleCodetrick = () => {
            popupRef.current?.show('codetrick');
        };

        const handleMyblog = () => {
        popupRef.current?.show('myblog');
    };

  return (
    <>
    <section className='r-side mt-10 py-5 p-4'>
        <h1 className="text-2xl font-semibold text-center py-8">MY BLOG</h1>
        <Swiper
            slidesPerView = {1}
            loop = {true}
            spaceBetween={20}
            rewind={true}
            speed={1500}
            autoplay={{delay: 12000}}
            pagination={{ clickable: true, dynamicBullets: true, }}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
            }}
            modules = {[Autoplay, Pagination]}
        >
            <SwiperSlide className='swiper-slide'>
                <div className="swiper-img">
                    <img src={frisbee} className="cursor-grab" /> 
                </div>
                
                <div className="swiper-content px-4 py-2 *:py-1 bg-slate-800 shadow-md text-white md:h-28 cursor-pointer relative text-base" onClick={handleFrisbee}>
                    <div className="flex font-semibold justify-between items-center">
                        <p>THE MAKE IT RAIN 2025</p>
                        <p className='text-sm'>17-18-May-2025</p>
                    </div>
                    <div><p className="line-clamp-2 text-justify">Unforgettable Experience at the May 2025 Frisbee Tournament 12 Teams, Intense Battles, and I Earned Top Assist Honors!</p></div>
                </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide className='swiper-slide'>
                <div className="swiper-img">
                    <img src={img2} className="cursor-grab" /> 
                </div>
                
                <div className="swiper-content px-4 py-2 *:py-1 bg-slate-800 shadow-md text-white md:h-28 cursor-pointer relative text-base" onClick={handleCodetrick}>
                    <div className="flex font-semibold justify-between items-center">
                        <p>A Passion for Exploring Code</p>
                        <p className='text-sm'>01-jan-2025</p>
                    </div>
                    <div><p className="line-clamp-2 text-justify">Enjoy watching trick coding videos and exploring clever programming techniques that challenge the way I think</p></div>
                </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide className='swiper-slide'>
                <div className="swiper-img">
                    <img src={img3} className="cursor-grab" /> 
                </div>
                
                <div className="swiper-content px-4 py-2 *:py-1 bg-slate-800 shadow-md text-white md:h-28 cursor-pointer relative text-base" onClick={handleMyblog}>
                    <div className="flex font-semibold justify-between items-center">
                        <p>A Father's Regret</p>
                        <p className='text-sm'>27-Apr-2021</p>
                    </div>
                    <div><p class="line-clamp-2 text-justify">“Daddy, your new car is back now, but when will you return my hands to me?”</p></div>
                </div>
            </SwiperSlide>
            <PopupComponent ref={popupRef} />
        </Swiper>
    </section>
    </>
  );
}
