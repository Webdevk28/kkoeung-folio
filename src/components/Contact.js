import React, { useEffect } from 'react'
import Logo from "../assets/kk.png"
import { HiHome } from "react-icons/hi2";
import { MdCall } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { FaGlobe } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from 'react-router-dom';

const Contact = () => {
    useEffect(() => {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=628px';
        document.head.appendChild(meta);
    
        return () => {
          // Cleanup if needed
          document.head.removeChild(meta);
        };
      }, []);


  return (
    <section className="w-full overflow-hidden h-screen">
        <div className="flex justify-center items-center w-full h-full p-4">
            <div className="cv-item flex border border-slate-300 w-[628px] m-auto h-[868px] text-[12px] shadow-xl overflow-hidden">
                {/* <!-- left side --> */}
                <div className="left-side bg-[#414142] w-[200px] opacity-100">
                    <div className="p-2 mt-4 text-gray-100 tracking-wider">
                        {/* <!-- img --> */}
                        <div className="relative flex justify-center w-32 m-auto">
                            <div className='overflow-hidden size-32 rounded-full'><img src={Logo} alt="logo" className="w-full opacity-100" /></div>
                        </div>
                        {/* <!-- name --> */}
                        <div className="name text-lg text-center mt-4 font-semibold leading-5">
                            <span>KHON KOEUNG</span>
                            <span className="block text-xs text-yellow-500 font-base">Web Developer</span>
                        </div>
                        {/* <!-- contact --> */}
                        <div className="name text-[9px] mt-5">
                            <div className="relative flex justify-center text-[13px] text-center mt-4 font-[600] border-b border-gray-400 w-full">
                                <span>CONTACT</span>
                                <div className="w-6 h-0.5 bg-yellow-500 absolute top-[18.5px]"></div>
                            </div>
                            <div className="mt-4 *:mt-2 *:flex *:gap-2 *:items-center">
                                <div>
                                    <div> <MdCall className="text-yellow-500 text-[15px]" /></div>
                                    <span>+855 71 924 7828</span>
                                </div>
                                <div>
                                    <div> <MdLocationOn name="location-outline" className="text-yellow-500 text-[15px]"/></div>
                                    <span>#249,Kokroka,PhnomPenh</span>
                                </div>
                                <div>
                                    <div> <BiLogoGmail className="text-yellow-500 text-[13px]"/></div>
                                    <span>khonkoeung27@gmail.com</span>
                                </div>
                                <div>
                                    <div> <FaGlobe name="globe-outline" className="text-yellow-500 text-[13px]" /></div>
                                    <span>https://kkoeung-folio.vercel.app</span>
                                </div>
                            </div>
                        </div>
                        {/* <!-- skill --> */}
                        <div className="name text-[9px] mt-5">
                            <div className="relative flex justify-center text-[13px] text-center mt-4 font-[600] border-b border-gray-400 w-full">
                                <span>SKILL</span>
                                <div className="w-6 h-0.5 bg-yellow-500 absolute top-[18.5px]"></div>
                            </div>
                            <div className="mt-4 *:flex *:gap-4 *:items-center *:mt-2">
                                {/* <!-- html, css --> */}
                                <div>
                                    <div className="flex w-6/12">
                                        <span>HTML , CSS</span>
                                    </div>
                                    <div className="w-6/12 bg-gray-900 h-1 rounded-full">
                                        <div className="styled-html bg-yellow-500 h-1 rounded-full" style={{width: '90%'}}></div>
                                    </div>
                                </div>
                                {/* <!-- tailwind --> */}
                                <div>
                                    <div className="flex w-6/12">
                                        <span>Tailwind css</span>
                                    </div>
                                    <div className="w-6/12 bg-gray-800 h-1 rounded-full">
                                        <div className="styled-tailwind bg-yellow-500 h-1 rounded-full" style={{width: '90%'}}></div>
                                    </div>
                                </div>
                                {/* <!-- js --> */}
                                <div>
                                    <div className="flex w-6/12">
                                        <span>Javascript</span>
                                    </div>
                                    <div className="w-6/12 bg-gray-800 h-1 rounded-full">
                                        <div className="styled-js bg-yellow-500 h-1 rounded-full" style={{width: '50%'}}></div>
                                    </div>
                                </div>
                                {/* <!-- ract js --> */}
                                <div>
                                    <div className="flex w-6/12">
                                        <span>React Js</span>
                                    </div>
                                    <div className="w-6/12 bg-gray-800 h-1 rounded-full">
                                        <div className="styled-react bg-yellow-500 h-1 rounded-full" style={{width: '50%'}}></div>
                                    </div>
                                </div>
                                {/* <!-- Git --> */}
                                <div>
                                    <div className="flex w-6/12">
                                        <span>Git</span>
                                    </div>
                                    <div className="w-6/12 bg-gray-800 h-1 rounded-full">
                                        <div className="styled-react bg-yellow-500 h-1 rounded-full" style={{width: '70%'}}></div>
                                    </div>
                                </div>
                                {/* <!-- Illustrator --> */}
                                <div>
                                    <div className="flex w-6/12">
                                        <span>Illustrator</span>
                                    </div>
                                    <div className="w-6/12 bg-gray-800 h-1 rounded-full">
                                        <div className="styled-il bg-yellow-500 h-1 rounded-full" style={{width: '50%'}}></div>
                                    </div>
                                </div>

                                {/* <!-- Photoshop --> */}
                                <div>
                                    <div className="flex w-6/12">
                                        <span>Photoshop</span>
                                    </div>
                                    <div className="w-6/12 bg-gray-800 h-1 rounded-full">
                                        <div className="styled-ps bg-yellow-500 h-1 rounded-full" style={{width: '50%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                        {/* <!-- Hobbies --> */}
                        <div className="name text-[9px] mt-5">
                            <div className="text-[13px] text-center mt-4 font-[600] flex justify-center border-b border-gray-400 w-full relative">
                                <span>HOBBIES</span>
                                <div className="w-6 h-0.5 bg-yellow-500 absolute top-[18.5px]"></div>
                            </div>
                            <div className="grid grid-cols-2 *:mt-3 *:block">
                                <span>READING</span>
                                <span>AUTHOR</span>
                                <span>CODING</span>
                                <span>SPORT</span>
                            </div>
                        </div>
                        
                        {/* <!-- Hobbies --> */}
                        <div className="name text-[9px] mt-5">
                            <div className="text-[13px] text-center mt-4 font-[600] flex justify-center border-b border-gray-400 w-full relative">
                                <span>REFERENCES</span>
                                <div className="w-6 h-0.5 bg-yellow-500 absolute top-[18.5px]"></div>
                            </div>
                            <div className="mt-3 *:block">
                                <span>Sothoeurn sochea</span>
                                <span className="text-gray-400">Team Leader</span>
                            </div>
                            <div className="mt-3 *:block">
                                <span>Phone number</span>
                                <span className="text-gray-400">+855 60 483 780</span>
                            </div>
                        </div>
                    </div>
                </div>
    
                {/* <!-- right side --> */}
                <div className="right-side bg-white w-[428px] opacity-100 relative">
                    <Link to="/" className="flex justify-center items-center z-50 absolute top-0 left-2">
                        <HiHome className="text-4xl md:text-3xl p-1 duration-300 text-yellow-600" name="close-circle" />
                    </Link>
                    <div className="p-4 text-black tracking-wider">
                        {/* <!-- About --> */}
                        <div className="mt-5">
                            <div className="name relative border-b border-gray-400 w-full">
                                <span className="text-lg  font-semibold">ABOUT ME</span>
                                <div className="w-5 h-0.5 bg-yellow-500 absolute top-[27px]"></div>
                            </div>
                            <p className="text-[12px] mt-3 text-justify">I am a web developer. I am a punctual and motivated individual who is able to work in a busy environment and produce hight standards of work. I am an excellent team worker and am able to take instructions from all levels and build up good working relationships with all colleagues. I am flexible. reliable and possesss excellent time keeping skills.</p>
                        </div>

                        {/* <!-- Experience --> */}
                        <div className="mt-5">
                            <div className="name relative mt-4 border-b border-gray-400 w-full">
                                <span className="text-lg  font-semibold">EXPERIENCE</span>
                                <div className="w-5 h-0.5 bg-yellow-500 absolute top-[27px]"></div>
                            </div>
                            <div className="*:mt-3 *:grid *:grid-cols-12 *:gap-2">
                                {/* <!-- Phoenix Media --> */}
                                <div>
                                    <div className="col-span-4 *:block">
                                        <span className="font-[600]">Web Deloper</span>
                                        <span>2023 - 2024</span>
                                    </div>
                                    <div className="col-span-8 *:block">
                                        <span className="font-[600]">Phoenix Media</span>
                                        <p className="text-justify">Actively engaged in web creative design and development collaborated with designers and create mobile responsive website on any device with primary use on mobile.</p>
                                    </div>
                                </div>
                                {/* <!-- University --> */}
                                <div>
                                    <div className="col-span-4 *:block">
                                        <span className="font-[600]">UP-University</span>
                                        <span>2021 - 2024</span>
                                    </div>
                                    <div className="col-span-8 *:block">
                                        <span className="font-[600]">School Projects</span>
                                        <p className="text-justify">Responsible work projects, communication with teamate, Finish assessment on time.</p>
                                    </div>
                                </div>
                                {/* <!-- Rodwell Learning --> */}
                                <div>
                                    <div className="col-span-4 *:block">
                                        <span className="font-[600]">General Affair</span>
                                        <span>2019 - 2021</span>
                                    </div>
                                    <div className="col-span-8 *:block">
                                        <span className="font-[600]">Rodwell Learning</span>
                                        <p className="text-justify">Responsible school environments, prepare all events, take care every thing in school.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Education --> */}
                        <div className="mt-5">
                            <div className="name relative mt-4 border-b border-gray-400 w-full">
                                <span className="text-lg  font-semibold">EDUCATION</span>
                                <div className="w-5 h-0.5 bg-yellow-500 absolute top-[27px]"></div>
                            </div>
                            <div className="*:mt-3 *:grid *:grid-cols-12 *:gap-2">
                                {/* <!-- UP University --> */}
                                <div>
                                    <div className="col-span-4 *:block">
                                        <span className="font-[600]">UP University</span>
                                        <span>2020 - 2024</span>
                                    </div>
                                    <div className="col-span-8 *:block">
                                        <span className="font-[600]">Bachelor Degree</span>
                                        <p className="text-justify">Information Technology</p>
                                    </div>
                                </div>

                                {/* <!-- Royal University --> */}
                                <div>
                                    <div className="col-span-4 *:block">
                                        <span className="font-[600]">Royal University of Fine Art</span>
                                        <span>2019 - 2020</span>
                                    </div>
                                    <div className="col-span-8 *:block">
                                        <span className="font-[600]">Bachelor Degree</span>
                                        <p className="text-justify">Architecture</p>
                                    </div>
                                </div>

                                {/* <!-- Royal University --> */}
                                <div>
                                    <div className="col-span-4 *:block">
                                        <span className="font-[600]">High School</span>
                                        <span>2016 - 2018</span>
                                    </div>
                                    <div className="col-span-8 *:block">
                                        <span className="font-[600]">Beltei international school</span>
                                        <p className="text-justify">Graduation</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact