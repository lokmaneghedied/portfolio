// styles
import { styles } from '../style';
// assets
import image from '../assets/image.svg'
// icons
import { HiDownload } from "react-icons/hi";
import { BsSend } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import {FaGithub , FaLinkedinIn , FaFreeCodeCamp } from "react-icons/fa";
// type_animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// fadeIn
import { fadeIn } from '../constants';
//constants
import { resume } from '../constants'

const Home = () => {

    const downloadResume = () => {
        var pdfDataUri = "data:application/pdf;base64," + resume;
        var link = document.createElement("a");
        link.download = "ResumeLokmaneGHEDIED.pdf";
        link.href = pdfDataUri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

    const sendMail= () => {
      if( /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
        window.open("mailto:lokmane.ghedied@gmail.com")
      } else {
        window.open("https://mail.google.com/mail/?view=cm&to=lokmane.ghedied@gmail.com");
      }
    }

    return ( 
        <section id='home' className="h-screen w-full flex flex-col justify-start ">            
            {/* MAIN-DIV */}
            <div className="w-11/12 lg:w-10/12 h-3/4 flex flex-col justify-center lg:flex-row lg:items-center place-self-center">
                {/* title + BUTTONS + LINK */}
                <div className="lg:w-2/3 space-y-4 lg:space-y-6 flex flex-col justify-center items-center lg:items-start">
                    {/* title */}
                    <span className='space-y-3'>
                        <motion.h1
                        variants={fadeIn('down',0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once : false, amount: 0.7}} 
                        className='font-extrabold text-4xl sm:text-5xl lg:text-6xl text-center lg:text-start '>
                            Lokmane GHEDIED
                        </motion.h1>
                        <motion.p 
                            variants={fadeIn('down',0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once : false, amount: 0.7}}
                            className='font-bold text-xl lg:text-3xl h-16 lg:h-auto text-center lg:text-start'>
                                I AM A <TypeAnimation 
                                    sequence={[
                                        'WEB DEVELOPER',
                                        2000,
                                        'FRONT-END DEVELOPER',
                                        2000,
                                        'BACK-END DEVELOPER',
                                        2000,
                                        ]}
                                    speed={50}
                                    repeat={Infinity}
                                    className='text-accent w-2/3 lg:w-auto'/>
                        </motion.p>
                    </span>
                    {/* A LITTLE ABOUT */}
                    <motion.p 
                        variants={fadeIn('down',0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once : false, amount: 0.7}} 
                        className='w-10/12 lg:w-2/3 text-slate-300'>
                            Skilled web developer with a passion for creating high-quality, User-friendly and Responsive webpages that deliver exceptional user experiences.
                    </motion.p>
                    {/* BUTTONS */}
                    <span className='flex space-x-3'>
                        <motion.span 
                            variants={fadeIn('down',0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once : false, amount: 0.3}} 
                            className={styles.gradient_btn}>
                            <BsSend />
                            <button onClick={sendMail}>Contact Me</button>
                        </motion.span>
                        <motion.span
                            variants={fadeIn('down',0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once : false, amount: 0.3}}  
                            className={styles.gradient__text}>
                            <button onClick={downloadResume}>My Resume</button>
                        </motion.span>
                    </span>
                    {/* LINKS */}
                    <span className='flex items-center space-x-4 lg:space-x-3'>
                        <motion.a
                            variants={fadeIn('down',0.5)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once : false, amount: 0.7}}  
                            className='cursor-pointer' href="https://github.com/lokmaneghedied" target='_blank'><FaGithub  className='cursor-pointer'/>
                        </motion.a>
                        <motion.a
                            variants={fadeIn('down',0.5)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once : false, amount: 0.7}}  
                            className='cursor-pointer' href="https://leetcode.com/lokmane_ghedied/" target='_blank'><SiLeetcode  className='cursor-pointer'/>
                        </motion.a> 
                        <motion.a 
                            variants={fadeIn('down',0.5)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once : false, amount: 0.7}}                         
                            className='cursor-pointer' href="https://www.linkedin.com/in/lokmane-ghedied/" target='_blank'><FaLinkedinIn  className='cursor-pointer'/>
                        </motion.a>
                        <motion.a
                            variants={fadeIn('down',0.5)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once : false, amount: 0.7}}  
                            className='cursor-pointer' href="https://www.freecodecamp.org/lokmaneghedied" target='_blank'><FaFreeCodeCamp  className='cursor-pointer'/>
                        </motion.a> 
                    </span>
                </div>
                {/* image */}
                <motion.div 
                    variants={fadeIn('up',0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once : false, amount: 0.7}} 
                    className="hidden lg:block lg:w-1/3">
                    <img src={image} alt="" />
                </motion.div>
            </div>
        </section>
     );
}
 
export default Home;