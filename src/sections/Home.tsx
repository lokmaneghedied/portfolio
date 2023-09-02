import image from '../assets/image.svg'
import { BsSend } from "react-icons/bs";
import {FaGithub , FaLinkedinIn , FaFreeCodeCamp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn , resume } from '../constants';

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
        <section className="h-screen w-full flex flex-col justify-start ">            
            <div className="w-11/12 lg:w-10/12 h-3/4 flex flex-col justify-center lg:flex-row lg:items-center place-self-center">
                {/* title + BUTTONS + LINK */}
                <div className="lg:w-2/3 space-y-4 lg:space-y-6 flex flex-col justify-center items-center lg:items-start">
                    {/* title */}
                    <span className='space-y-3'>
                        <motion.h1
                        variants={fadeIn('down',0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once : false}} 
                        className='font-extrabold text-4xl sm:text-5xl lg:text-6xl text-center lg:text-start '>
                            Lokmane GHEDIED
                        </motion.h1>
                        <motion.p 
                            variants={fadeIn('down',0.3)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once : false}}
                            className='font-bold text-xl lg:text-3xl h-10 lg:h-auto text-center lg:text-start'>
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
                        viewport={{once : false}} 
                        className='w-10/12 lg:w-2/3 text-center lg:text-start paragraph'>
                            Skilled web developer with a passion for creating fully interactive, highly dynamic, and performant web applications that deliver exceptional user experiences.
                    </motion.p>
                    {/* BUTTONS */}
                    <span className='flex space-x-3'>
                        <motion.span 
                            variants={fadeIn('down',0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once : false}} 
                            className='gradient_btn'>
                            <BsSend />
                            <button onClick={sendMail}>Contact Me</button>
                        </motion.span>
                        <motion.span
                            variants={fadeIn('down',0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once : false}}  
                            className='gradient__text'>
                            <button onClick={downloadResume}>My Resume</button>
                        </motion.span>
                    </span>
                    {/* LINKS */}
                    <span className='flex items-center space-x-4 lg:space-x-3'>
                        <motion.a
                            variants={fadeIn('down',0.5)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once : false}}  
                            href="https://github.com/lokmaneghedied" target='_blank'><FaGithub className='icon'/>
                        </motion.a>
                        <motion.a 
                            variants={fadeIn('down',0.5)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once : false}}                         
                            href="https://www.linkedin.com/in/lokmane-ghedied/" target='_blank'><FaLinkedinIn className='icon'/>
                        </motion.a>
                        <motion.a
                            variants={fadeIn('down',0.5)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once : false}}  
                            href="https://www.freecodecamp.org/lokmaneghedied" target='_blank'><FaFreeCodeCamp className='icon'/>
                        </motion.a> 
                    </span>
                </div>
                {/* image */}
                <motion.div 
                    variants={fadeIn('up',0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once : false}} 
                    className="hidden lg:block lg:w-1/3">
                    <img src={image} alt="lokmane_ghedied_image" loading="lazy"/>
                </motion.div>
            </div>
        </section>
     );
}
 
export default Home;