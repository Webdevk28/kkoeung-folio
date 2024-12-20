import React from "react";
import { FaCode } from "react-icons/fa";
import { RiSettings2Fill } from "react-icons/ri";
import { SiCodeproject } from "react-icons/si";
import { IoIosSchool } from "react-icons/io";
import { LiaSchoolSolid } from "react-icons/lia";
import { FaUniversity } from "react-icons/fa";

const Resume = () => {
    return(
        <>
            <section className="mt-10">
                <div className="r-side px-5 py-10">
                    <span className="text-lg text-slate-500 text-center block">My Resume</span>
                    <h1 className="text-2xl font-semibold text-center">Education & Experience</h1>

                    <div className="grid sm:grid-cols-2 gap-4 mt-10">
                        <div className="*:mt-5">
                            <div data-aos="zoom-in" data-aos-duration="1500" className="r-side-item lg:h-48 flex gap-2 p-3 rounded-lg border border-slate-500/10">
                                <div className="text-2xl text-yellow-500"><FaCode /></div>
                                <div className="*:mt-2">
                                    <span className="text-xl font-semibold">Web Developer</span>
                                    <p>Phoenix Media (2022-2024)</p>
                                    <p className="line-clamp-3">Actively engaged in web creative design and development collaborated with designers and create mobile responsive website on any device</p>
                                </div>
                            </div>

                            <div data-aos="zoom-in" data-aos-duration="1500" className="r-side-item lg:h-48 flex gap-2 p-3 rounded-lg border border-slate-500/10">
                                <div className="text-2xl text-yellow-500"><RiSettings2Fill /></div>
                                <div className="*:mt-2">
                                    <span className="text-xl font-semibold">General Affair</span>
                                    <p>Rodwell Learning (2019-2021)</p>
                                    <p className="line-clamp-3">Responsible school environments, prepare all events, take care every thing in school.</p>
                                </div>
                            </div>

                            <div data-aos="zoom-in" data-aos-duration="1500" className="r-side-item lg:h-48 flex gap-2 p-3 rounded-lg border border-slate-500/10">
                                <div className="text-2xl text-yellow-500"><SiCodeproject /></div>
                                <div className="*:mt-2">
                                    <span className="text-xl font-semibold">School Projects</span>
                                    <p>UP-University (2020-2024)</p>
                                    <p className="line-clamp-3">Responsible work projects, communication with teamate, Finish assessment on time</p>
                                </div>
                            </div>
                        </div>


                        <div className="*:mt-5">
                            <div data-aos="zoom-in" data-aos-duration="1500" className="r-side-item lg:h-48 flex gap-2 p-3 rounded-lg border border-slate-500/10">
                                <div className="text-2xl text-yellow-500"><IoIosSchool /></div>
                                <div className="*:mt-2">
                                    <span className="text-xl font-semibold">Bachelor Degree</span>
                                    <p>UP-University (2020-2024)</p>
                                    <p className="line-clamp-3">Information Technology</p>
                                </div>
                            </div>

                            <div data-aos="zoom-in" data-aos-duration="1500" className="r-side-item lg:h-48 flex gap-2 p-3 rounded-lg border border-slate-500/10">
                                <div className="text-2xl text-yellow-500"><FaUniversity /></div>
                                <div className="*:mt-2">
                                    <span className="text-xl font-semibold">Bachelor Degree</span>
                                    <p>Royal University of Fine Art</p>
                                    <p className="line-clamp-3">Architecture</p>
                                </div>
                            </div>

                            <div data-aos="zoom-in" data-aos-duration="1500" className="r-side-item lg:h-48 flex gap-2 p-3 rounded-lg border border-slate-500/10">
                                <div className="text-2xl text-yellow-500"><LiaSchoolSolid /></div>
                                <div className="*:mt-2">
                                    <span className="text-xl font-semibold">High School</span>
                                    <p>Beltei international school (2018))</p>
                                    <p className="line-clamp-3">Graduation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume