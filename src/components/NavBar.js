const NavBar = () => {
    return ( 
        <nav className='flex justify-between bg-slate-700 text-white'>
            <p className='py-2 m-2 cursor-pointer hover:text-red-600'>LOKMANE GHEDIED</p>
            <div className='flex items-center'>
                <a href="#home" className='p-2 m-1 hover:text-red-600'> HOME</a>
                <a href="#about" className='p-2 m-1 hover:text-red-600'> ABOUT</a>
                <a href="#about" className='p-2 m-1 hover:text-red-600'> SKILLS</a>
                <a href="#about" className='p-2 m-1 hover:text-red-600'> PROJECTS</a>
                <a href="#about" className='p-2 m-1 hover:text-red-600'> CONTACT</a>
            </div>
        </nav>
     );
}
 
export default NavBar;