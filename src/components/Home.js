import React, { useEffect } from "react";
import Leftside from "./Leftside";
import Top from "./Topbanner";
import Circle from "./Circle";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Service from "./Service";
import Progress from "./Progress";
import Swiper from "./Swiper";
import Footer from "./Footer";
import Popup from "./popup";

const Home = () => {

    useEffect(() => {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1';
        document.head.appendChild(meta);
    }, []);

    return (
        <>
            <div class="relative max-w-7xl m-auto overflow-hidden z-40 p-3">
                <div class="left-side md:h-screen md:fixed w-full md:w-[300px] float-left">
                   <Leftside />
                </div>

                <div class="right-side w-full md:w-[calc(100%-300px)] md:px-4 sm:mt-0 float-right">
                    <div className="">
                        <Circle />
                        <div className="hidden md:block"><Top /></div>
                        <About />
                        <Resume />
                        <Service />
                        <div className="md:hidden"><Progress /></div>
                        <Portfolio />
                        <Swiper />
                        {/* <Popup /> */}
                        <Footer />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home