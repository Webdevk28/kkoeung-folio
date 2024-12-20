import React, { useRef, useState } from "react";
import img1 from '../assets/011.png'
import img2 from '../assets/012.png'
import img3 from '../assets/013.png'
import { IoWalkOutline } from "react-icons/io5";

import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination, Navigation, EffectFade, A11y} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import "swiper/css/navigation";
import 'swiper/css/scrollbar';

const Slider = () => {
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
                autoplay={{delay: 5000}}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
                modules={[Autoplay, Pagination,Navigation, EffectFade, A11y]}
            >
                <SwiperSlide>
                    <img src={img1} /> 
                    <div className="p-4 bg-[#fefae0] text-slate-800 md:h-28">
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <IoWalkOutline />
                                <p>My Quote</p>
                            </div>
                            <div><p>18-Feb-2024</p></div>
                        </div>
                        <div><p class="line-clamp-3 mt-3">You may not control all the events that happen to you, but you can decide not to be reduced by them.</p></div>
                    </div>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} /> 
                    <div className="p-4 bg-[#fefae0] text-slate-800 md:h-28">
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
                    <img src={img3} />
                    <div className="p-4 bg-[#fefae0] text-slate-800 md:h-28">
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