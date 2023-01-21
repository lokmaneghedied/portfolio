import { useState } from "react";

const NavBar = () => {
    const [toggleNavBar, setToggleNavBar] = useState(false)
    const toggle = "flex justify-between items-center bg-slate-800 h-20 w-full shadow-md";
    const intoggle = "flex justify-start ";
    const btn = 'w-10 h-10 cursor-pointer animate-bounce ' ;
    const rotateBtn = 'w-10 h-10 cursor-pointer hover:scale-125 rotate-180 ';
    return ( 
        <div className={toggleNavBar ? toggle : intoggle}>
                <button onClick={()=>setToggleNavBar(!toggleNavBar)} className="p-2 m-2 bg-white shadow-md rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className={toggleNavBar ? btn : rotateBtn}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>
                </button>
                {toggleNavBar && <nav id="nav" className='flex items-center text-red-500 sm:font-extrabold'>
                    <a href="#home" className='sm:p-2 sm:hover:scale-110 p-0.5 text-xs m-1 hover:text-red-500 underline decoration-dashed underline-offset-4 sm:uppercase'> Home</a>
                    <a href="#about" className='sm:p-2 sm:hover:scale-110 p-0.5 text-xs m-1 hover:text-red-500 underline decoration-dashed underline-offset-4 sm:uppercase'> About</a>
                    <a href="#skills" className='sm:p-2 sm:hover:scale-110 p-0.5 text-xs m-1 hover:text-red-500 underline decoration-dashed underline-offset-4 sm:uppercase'> Skills</a>
                    <a href="#projects" className='sm:p-2 sm:hover:scale-110 p-0.5 text-xs m-1 hover:text-red-500 underline decoration-dashed underline-offset-4 sm:uppercase'> Projects</a>
                    <a href="#contact" className='sm:p-2 sm:hover:scale-110 p-0.5 text-xs m-1 hover:text-red-500 underline decoration-dashed underline-offset-4 sm:uppercase'> Contact</a>
                </nav>}
        </div>
     );
}
 
export default NavBar;