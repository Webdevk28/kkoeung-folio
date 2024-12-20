import React, { useState } from 'react'
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const Darkmode = () => {

    const [theme, setTheme] = useState(false);
    const toggleTheme = () => {
        setTheme(!theme);
        let DarkTheme = document.querySelector("body");
        DarkTheme.classList.toggle("dark-theme");
    }

    return (
        <div className="flex items-center gap-1">
            <div onClick={toggleTheme} className='text-xl'>
                { theme ?
                    (<MdDarkMode className="dark-icon text-slate-500" />
                    ) : (<MdLightMode className="light-icon text-yellow-400" />)}
            </div>
        </div>
    )
}

export default Darkmode