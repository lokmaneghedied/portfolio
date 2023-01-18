import { useState } from "react";

const NavBar = () => {
    const [toggleNavBar, setToggleNavBar] = useState(false)
    const toggle = "flex justify-around items-center bg-white h-20 w-full border-b border-red-500";
    const intoggle = "flex justify-start";
    return ( 
        <div className={toggleNavBar ? toggle : intoggle}>
                <button onClick={()=>setToggleNavBar(!toggleNavBar)} className="p-2 m-2 bg-white rounded-lg shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-10 h-10 cursor-pointer hover:scale-110">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>
                </button>
                {toggleNavBar && <nav id="nav" className='flex items-center sm:font-extrabold'>
                    <a href="#home" className='sm:p-2 sm:hover:scale-110 p-0.5 text-xs m-1 hover:text-red-500 underline decoration-dashed underline-offset-4'> HOME</a>
                    <a href="#about" className='sm:p-2 sm:hover:scale-110 p-0.5 text-xs m-1 hover:text-red-500 underline decoration-dashed underline-offset-4'> ABOUT</a>
                    <a href="#skills" className='sm:p-2 sm:hover:scale-110 p-0.5 text-xs m-1 hover:text-red-500 underline decoration-dashed underline-offset-4'> SKILLS</a>
                    <a href="#projects" className='sm:p-2 sm:hover:scale-110 p-0.5 text-xs m-1 hover:text-red-500 underline decoration-dashed underline-offset-4'> PROJECTS</a>
                    <a href="#contact" className='sm:p-2 sm:hover:scale-110 p-0.5 text-xs m-1 hover:text-red-500 underline decoration-dashed underline-offset-4'> CONTACT</a>
                </nav>}
        </div>
     );
}
 
export default NavBar;