import React from "react"
import { MdOutlineDeveloperMode } from "react-icons/md";
import { MdPhoneAndroid } from "react-icons/md";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoCreate } from "react-icons/io5";
import { MdDashboardCustomize } from "react-icons/md";
import { MdContactSupport } from "react-icons/md";
import { TiVendorMicrosoft } from "react-icons/ti";
import { IoHardwareChipSharp } from "react-icons/io5";
import { AiFillPrinter } from "react-icons/ai";

const Service = () => {
    return(
        <>
            <section className="r-side p-5 mt-10">
                <div className="flex flex-col py-5">
                    <span className="text-lg text-slate-500 text-center block">What I do</span>
                    <h1 className="text-2xl font-semibold text-center">PROJECTS AND SOLUTIONS</h1>
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                        <div data-aos="zoom-in-right" data-aos-duration="1000" className="r-side-item flex gap-2 p-5 rounded-lg border border-slate-500/10">
                            <div className="text-xl text-yellow-400"><MdOutlineDeveloperMode /></div>
                            <div className="tracking-wide">
                                <span className="text-lg font-semibold">WEB DEVELOPMENT</span>
                                <p className="text-[15px] mt-2 line-clamp-3 text-justify">Create website front end website actively engaged in web creative design.</p>
                            </div>
                        </div>

                        <div data-aos="zoom-in-right" data-aos-duration="1500" className="r-side-item flex gap-2 p-5 rounded-lg border border-slate-500/10">
                            <div className="text-2xl text-yellow-400"><MdPhoneAndroid /></div>
                            <div className="tracking-wide">
                                <span className="text-lg font-semibold">ULTRA RESPONSIVE</span>
                                <p className="text-[15px] mt-2 line-clamp-3 text-justify">Mobile responsive website on any device with primary use on mobile</p>
                            </div>
                        </div>

                        <div data-aos="zoom-in-right" data-aos-duration="2000" className="r-side-item flex gap-2 p-5 rounded-lg border border-slate-500/10">
                            <div className="text-2xl text-yellow-400"><MdOutlineDesignServices /></div>
                            <div className="tracking-wide">
                                <span className="text-lg font-semibold">WEB DESIGN</span>
                                <p className="text-[15px] mt-2 line-clamp-3 text-justify">Actively creative design and development mobile responsive website on any device.</p>
                            </div>
                        </div>

                        <div data-aos="zoom-in-left" data-aos-duration="1000" className="r-side-item flex gap-2 p-5 rounded-lg border border-slate-500/10">
                            <div className="text-2xl text-yellow-400"><IoCreate /></div>
                            <div className="tracking-wide">
                                <span className="text-lg font-semibold">CREATIVE IDEAS</span>
                                <p className="text-[15px] mt-2 line-clamp-3 text-justify">Creative provide new ideas and group meeting to find solutions...</p>
                            </div>
                        </div>

                        <div data-aos="zoom-in-left" data-aos-duration="1500" className="r-side-item flex gap-2 p-5 rounded-lg border border-slate-500/10">
                            <div className="text-2xl text-yellow-400"><MdDashboardCustomize /></div>
                            <div className="tracking-wide">
                                <span className="text-lg font-semibold">EASY CUSTOMIZATION</span>
                                <p className="text-[15px] mt-2 line-clamp-3 text-justify">Find easy customization and safe ways to get work done fast and be on time...</p>
                            </div>
                        </div>

                        <div data-aos="zoom-in-left" data-aos-duration="2000" className="r-side-item flex gap-2 p-5 rounded-lg border border-slate-500/10">
                            <div className="text-2xl text-yellow-400"><MdContactSupport /></div>
                            <div className="tracking-wide">
                                <span className="text-lg font-semibold">SUPPER SUPPORT</span>
                                <p className="text-[15px] mt-2 line-clamp-3 text-justify">Always active support teammates, provide new approaches and solutions...</p>
                            </div>
                        </div>

                        <div data-aos="zoom-in-left" data-aos-duration="2000" className="r-side-item flex gap-2 p-5 rounded-lg border border-slate-500/10">
                            <div className="text-2xl text-yellow-400"><TiVendorMicrosoft /></div>
                            <div className="tracking-wide">
                                <span className="text-lg font-semibold">Microsoft Office</span>
                                <p className="text-[15px] mt-2 line-clamp-3 text-justify">Install Setup Cofigure microsoft office like word, Excel, powerpoint, access...</p>
                            </div>
                        </div>

                        <div data-aos="zoom-in-left" data-aos-duration="2000" className="r-side-item flex gap-2 p-5 rounded-lg border border-slate-500/10">
                            <div className="text-2xl text-yellow-400"><IoHardwareChipSharp /></div>
                            <div className="tracking-wide">
                                <span className="text-lg font-semibold">Hardware & Software</span>
                                <p className="text-[15px] mt-2 line-clamp-3 text-justify">Maintenance Computer have issues and Installing any software use in office...</p>
                            </div>
                        </div>

                        <div data-aos="zoom-in-left" data-aos-duration="2000" className="r-side-item flex gap-2 p-5 rounded-lg border border-slate-500/10">
                            <div className="text-2xl text-yellow-400"><AiFillPrinter /></div>
                            <div className="tracking-wide">
                                <span className="text-lg font-semibold">Pinter & Camera</span>
                                <p className="text-[15px] mt-2 line-clamp-3 text-justify">Printer and Camera installing software and update drive checking problem to maintenance and supports...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service