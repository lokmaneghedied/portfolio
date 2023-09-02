import spinet1 from "../assets/spinet1.png"
import spinet2 from "../assets/spinet2.png"
import spinet3 from "../assets/spinet3.png"
import { motion } from "framer-motion";
import {fadeIn} from "../constants";
import { Link } from "react-scroll";
import { AiOutlineArrowDown } from "react-icons/ai";

const Education = () => {
    return ( 
        <section id='experience' className="h-full lg:h-screen w-full flex flex-col justify-start items-center lg:flex-row lg:justify-around space-y-6 lg:space-y-0 py-4 lg:py-0">
                {/* DESCRIPTION */}
                <div className="w-11/12 lg:w-[55%] h-[70%] xxs:h-[60%] sm:h-[50%] lg:h-fit flex flex-col justify-center items-start lg:space-y-2 ">
                    <motion.h1 
                        variants={fadeIn('right',0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once : false}} 
                        className='title'>
                            EXPERIENCE
                    </motion.h1>
                    <motion.h2 
                        variants={fadeIn('right',0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once : false}} 
                        className='subtitle'>
                            ● INDEPENDENT CONTRACTOR FRONT END DEVELOPER:
                    </motion.h2>
                    <motion.h2 
                        variants={fadeIn('right',0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once : false}} 
                        className='subtitle'>02/2023 - 03/2023 | SPINET NFC</motion.h2>
                    <motion.p 
                        variants={fadeIn('right',0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once : false}} 
                        className='paragraph'>
                            As a front-end developer, I designed and created an admin dashboard with multiple features and functionalities using Vue.js, and state management (Pinia) to provide efficient data management. The dashboard included :
                    </motion.p>
                    <motion.p 
                        variants={fadeIn('right',0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once : false}} 
                        className='paragraph'>
                            - Login page with authentication (Firebase).
                    </motion.p>
                    <motion.p 
                        variants={fadeIn('right',0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once : false}} 
                        className='paragraph'>
                            - Main page with a list of all users and the ability to filter users by name, email, or phone number. It also included the ability to create and delete users.
                    </motion.p>
                    <motion.p 
                        variants={fadeIn('right',0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once : false}} 
                        className='paragraph'>
                            - I also created an admins tab with functionality similar to the users' page but specifically for admins.
                    </motion.p>
                    <motion.p 
                        variants={fadeIn('right',0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once : false}} 
                        className='paragraph'>
                            - The dashboard also had a statistics tab that displays a graph representing users' statistics of check-ins and exchanges made per user, as well as a list of these stats each weekday(using Vue ApexCharts library).
                    </motion.p>
                    <motion.p 
                        variants={fadeIn('right',0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once : false}} 
                        className='paragraph'>- Lastly, I created a settings tab where the admin can edit personal information like name, password, and phone number. The dashboard was intuitive and user-friendly and allow for easy management of users and admins.
                        </motion.p>
                    {/* See_More */}
                    <motion.span
                        variants={fadeIn('right',0.6)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once : false}} 

                        className='flex space-x-4 self-end z-40 w-full pt-2'>
                        <p className='gradient__text'>My Latest projects </p>
                        <Link 
                            to="projects" 
                            smooth={true}
                            className='cursor-pointer w-[20px] h-[20px] lg:w-[25px] lg:h-[25px] flex justify-center items-center btn rounded-full'>
                            <span >
                                <AiOutlineArrowDown className="w-[15px] h-[15px] lg:w-auto lg:h-auto" />
                            </span>
                        </Link>
                    </motion.span>
                </div>
                {/* CARDS */}
                <motion.div 
                    variants={fadeIn('left',0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once : false}} 
                    className="w-[80%] lg:w-[35%] h-[18rem] md:h-[22rem] lg:h-[50%] grid place-items-center relative">
                        <div className="card top-1 translate-x-3">
                            <img className="h-[12rem] md:h-[16rem] lg:h-auto" src={spinet3} alt="spinet" loading="lazy" />
                        </div>
                        <div className="card">
                            <img className="h-[12rem] md:h-[16rem] lg:h-auto" src={spinet2} alt="spinet" loading="lazy" />
                        </div>
                        <div className="card bottom-1 -translate-x-3">
                            <img className="h-[12rem] md:h-[16rem] lg:h-auto" src={spinet1} alt="spinet" loading="lazy" />
                        </div>
                </motion.div>
        </section>
     );
}
 
export default Education;

