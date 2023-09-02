
import { AiOutlineHome , AiOutlineUser  } from "react-icons/ai";
import { IoBriefcaseOutline  } from "react-icons/io5";
import { BsChatSquareText , BsClipboardData } from "react-icons/bs";
import { Link } from "react-scroll";

const NavBar = () => {
    return ( 
        <section className="grid w-full">
            <nav className=" fixed bottom-4 xs:bottom-4 lg:bottom-8 z-50 flex justify-around items-center place-self-center w-10/12 sm:w-1/2 lg:w-1/3 h-[70px] bg-black/20 rounded-full backdrop-blur-2xl">
                <Link 
                    to="home" 
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    className='navLink'>
                    <AiOutlineHome />
                </Link>
                <Link 
                    to="about" 
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    className='navLink'>
                    <AiOutlineUser />
                </Link>
                <Link 
                    to="experience" 
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    className='navLink'>
                    <IoBriefcaseOutline />
                </Link>
                <Link 
                    to="skills" 
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    className='navLink'>
                    <BsClipboardData />
                </Link>
                <Link 
                    to="contact" 
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    className='text-white navLink'>
                    <BsChatSquareText />
                </Link>
            </nav>
        </section>
     );
}
 
export default NavBar;