//icons
import { AiOutlinePhone , AiOutlineWhatsApp } from "react-icons/ai";
import {FaGithub , FaLinkedinIn } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
//Link
import { Link } from "react-scroll";

const Footer = () => {

    const openPhone = ():void =>{
        if( /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
          window.location.href = "tel:+213672132633";
        }
      }

    const openMaps= ():void => {
        window.open("https://www.google.com/maps/place/Jijel+Province/@36.7270623,5.3041575,9z/data=!3m1!4b1!4m6!3m5!1s0x12f2469374b8be63:0x13bd084ff97ca4da!8m2!3d36.7179681!4d5.9832577!16zL20vMDU0MGhm")
      }

    return ( 
        <section className="h-64 w-full p-5 bg-[#020224] flex flex-col divide-y divide-white/40 space-y-3">
            {/* LOGO + CONTACTS */}
            <div className="flex justify-between">
                {/* LOGO + TITLE */}
                <div>
                    <Link 
                        to="home" 
                        activeClass="active"
                        smooth={true}
                        spy={true}
                        offset={-200}
                        className='font-extrabold cursor-pointer -space-y-3 lg:-space-y-2'>
                        <span className="text-2xl lg:text-3xl logo">Lokmane</span>
                        <h1 className='text-lg lg:text-xl'>GHEDIED</h1>
                    </Link>
                    <p className="text-white/50 text-xs md:text-sm xl:text-base">Web developer</p>
                </div>
                {/* LINKS */}
                <div className="flex flex-col items-start ">
                    <p className="text-xs md:text-sm xl:text-base font-bold">CONTACT INFO</p>
                    <a className="text-xs md:text-sm xl:text-base text-white/60 hover:text-white/90 decoration-white/90 transition-all hover:underline underline-offset-2" href="https://www.linkedin.com/in/lokmane-ghedied/" target='_blank'>LinkedIn</a>
                    <a className="text-xs md:text-sm xl:text-base text-white/60 hover:text-white/90 decoration-white/90 transition-all hover:underline underline-offset-2" href="https://github.com/lokmaneghedied" target='_blank'>GitHub</a>
                    <a className="text-xs md:text-sm xl:text-base text-white/60 hover:text-white/90 decoration-white/90 transition-all hover:underline underline-offset-2" href="https://www.facebook.com/lokmane.ghedied/" target='_blank'>Facebook</a>
                    <a className="text-xs md:text-sm xl:text-base text-white/60 hover:text-white/90 decoration-white/90 transition-all hover:underline underline-offset-2" href="https://wa.me/qr/OAEK2373L7XIH1" target='_blank'>WhatsApp</a>
                </div>
            </div>
            {/* ICONS */}
            <div className="flex justify-between pt-2 ">
                <p className="text-xs md:text-sm xl:text-base text-white/50 w-1/2">April 2023 - GHEDIED Lokmane</p>
                <span className="flex justify-end items-center space-x-2 ">
                    <a href="https://www.linkedin.com/in/lokmane-ghedied/" target='_blank'>
                       <FaLinkedinIn className="w-4 h-4 lg:w-5 lg:h-5 hover:scale-125 transition-all"/>
                    </a>
                    <a href="https://github.com/lokmaneghedied" target='_blank'>
                        <FaGithub  className="w-4 h-4 lg:w-5 lg:h-5 hover:scale-125 transition-all"/>
                    </a>
                    <a href="https://wa.me/qr/OAEK2373L7XIH1" target='_blank'>
                        <AiOutlineWhatsApp  className="w-4 h-4 lg:w-5 lg:h-5 hover:scale-125 transition-all"/>
                    </a>
                    <CiLocationOn onClick={openMaps} className="w-4 h-4 lg:w-5 lg:h-5 cursor-pointer hover:scale-125 transition-all"/>
                    <AiOutlinePhone onClick={openPhone} className="w-4 h-4 lg:w-5 lg:h-5 cursor-pointer hover:scale-125 transition-all"/>
                </span>
            </div>
        </section>
     );
}
 
export default Footer;
