const NavBar = () => {
    return ( 
        <nav className='flex justify-between bg-gradient-to-r from-violet-900 via-slate-500 to-violet-900 text-white '>
            <p className='py-2 m-2 cursor-pointer hover:text-red-600'>LOKMANE GHEDIED</p>
            <div className='flex items-center'>
                <a href="#home" className='p-2 m-1 hover:text-red-600'> HOME</a>
                <a href="#about" className='p-2 m-1 hover:text-red-600'> ABOUT</a>
                <a href="#skills" className='p-2 m-1 hover:text-red-600'> SKILLS</a>
                <a href="#projects" className='p-2 m-1 hover:text-red-600'> PROJECTS</a>
                <a href="#contact" className='p-2 m-1 hover:text-red-600'> CONTACT</a>
            </div>
        </nav>
     );
}
 
export default NavBar;