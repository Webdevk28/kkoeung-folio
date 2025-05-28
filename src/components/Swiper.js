import React, { useRef, useState } from "react";
import PopupComponent from './PopupApp';

import frisbee from '../assets/Frisbee-MIR.jpg'
import img2 from '../assets/012.png'
import img3 from '../assets/013.png'
import { IoWalkOutline } from "react-icons/io5";

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
// import "swiper/css/navigation";
// import 'swiper/css/scrollbar';

import '../App.css';


const Slider = () => {
  const [type, setType] = useState(null);

  const popupRef = useRef();
  
    const handleShowPopup = () => {
        popupRef.current?.show('mail');
    };

    const handleShowMedal = () => {
        popupRef.current?.show('medal');
    };

  return (
    <>

        <section className="r-side mt-10 py-10 p-4">
            <h1 className="text-2xl font-semibold text-center">MY BLOG</h1>
            <Swiper className="mt-5"
                slidesPerView = {1}
                loop = {true}
                spaceBetween={20}
                rewind={true}
                speed={1500}
                autoplay={{delay: 12000}}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
                modules={[Autoplay, Pagination]}
            >
                <SwiperSlide>
                    <div className=" border-2">
                        <img src={frisbee} className="cursor-grab" /> 
                    </div>
                    
                    <div className="p-4 bg-slate-700 text-white md:h-28 cursor-pointer relative" onClick={handleShowPopup}>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <IoWalkOutline />
                                <p>THE MAKE IT RAIN 2025</p>
                            </div>
                            <div><p>17-18-May-2025</p></div>
                        </div>
                        <div><p class="line-clamp-3 mt-3">Unforgettable Experience at the May 2025 Frisbee Tournament 12 Teams, Intense Battles, and I Earned Top Assist Honors!</p></div>
                    </div>
                    <PopupComponent ref={popupRef} />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={img2} className="cursor-grab" /> 
                    <div className="p-4 bg-[#fefae0] text-slate-800 md:h-28 cursor-pointer" onClick={handleShowMedal}>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <IoWalkOutline />
                                <p>My Quote</p>
                            </div>
                            <div><p>28-Nov-2024</p></div>
                        </div>
                        <div><p class="line-clamp-3 mt-3"> Life is simple but we insist on making it complicated</p></div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <img src={img3} className="cursor-grab" />
                    <div className="p-4 bg-[#fefae0] text-slate-800 md:h-28 cursor-pointer">
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <IoWalkOutline />
                                <p>Ream</p>
                            </div>
                            <div><p>8-Apr-2024</p></div>
                        </div>
                        <div><p class="line-clamp-3 mt-3"> When the bird is alive, it eats ants, When the bird is dead, ants eat it</p></div>
                    </div> 
                </SwiperSlide>
                
            </Swiper>
        </section>
    </>
  )
}

export default Slider