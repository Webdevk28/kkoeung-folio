import React from "react";
import Avatar from "../assets/02.png"
import bgg from "../assets/bg.png"

const Top = () => {
    return (
        <>
            <section className="r-side md:h-[60vh] flex justify-center items-center rounded-t-lg" style={{ backgroundImage: `url(${bgg})` }}>
                <div className="grid md:grid-cols-2 gap-3 p-5">
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col gap-3 tracking-wide">
                            <h1 className="text-3xl font-semibold inline-block text-gray-100"> Khon <span className="l-span">Koeung</span></h1>
                            <span className="l-span text-[13px]">I'm Web Developer</span>
                            <span className="text-gray-100">I'm Khon Koeung. I am proficient in frontend web development & ui design. I have been working with one year experience in this field.</span>
                            {/* <div><button className="text-gray-100 px-4 py-1 bg-yellow-500 rounded text-sm">Download</button></div> */}
                        </div>
                    </div>
                    <div><img src={Avatar} /></div>
                </div>
            </section>
        </>
    )
}

export default Top