import spinet1 from "../../assets/spinet1.png"
import spinet2 from "../../assets/spinet2.png"
import spinet3 from "../../assets/spinet3.png"
//styles
import { styles } from "../../style";
import './index.css'
//motion
import { motion } from "framer-motion";
//variants
import {fadeIn} from "../../constants";
//Link_for
import { Link } from "react-scroll";
//icons
import { AiOutlineArrowDown } from "react-icons/ai";

const Education = () => {
    return ( 
        <section id='experience' className="h-[700px] md:h-[800px] lg:h-screen w-full flex flex-col justify-start items-center lg:flex-row lg:justify-around space-y-16 sm:space-y-0">
                {/* DESCRIPTION */}
                <div className="w-11/12 lg:w-[50%] h-[70%] xxs:h-[60%] sm:h-[50%] lg:h-fit flex flex-col justify-center items-start lg:space-y-2 ">
                    <motion.h1 
                        variants={fadeIn('right',0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        className={styles.title}>
                            EXPERIENCE
                    </motion.h1>
                    <motion.h2 
                        variants={fadeIn('right',0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        className={styles.subtitle}>
                            ● INDEPENDENT CONTRACTOR FRONT END DEVELOPER:
                    </motion.h2>
                    <motion.h2 
                        variants={fadeIn('right',0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        className={styles.subtitle}>02/2023 - 03/2023 | SPINET NFC</motion.h2>
                    <motion.p 
                        variants={fadeIn('right',0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        className={styles.paragraph}>
                            As a front-end developer, I designed and created an admin dashboard with multiple features and functionalities using Vue.js, and state management (Pinia) to provide efficient data management. The dashboard included :
                    </motion.p>
                    <motion.p 
                        variants={fadeIn('right',0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        className={styles.paragraph}>
                            - Login page with authentication (Firebase).
                    </motion.p>
                    <motion.p 
                        variants={fadeIn('right',0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        className={styles.paragraph}>
                            - Main page with a list of all users and the ability to filter users by name, email, or phone number. It also included the ability to create and delete users.
                    </motion.p>
                    <motion.p 
                        variants={fadeIn('right',0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        className={styles.paragraph}>
                            - I also created an admins tab with functionality similar to the users' page but specifically for admins.
                    </motion.p>
                    <motion.p 
                        variants={fadeIn('right',0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        className={styles.paragraph}>
                            - The dashboard also had a statistics tab that displays a graph representing users' statistics of check-ins and exchanges made per user, as well as a list of these stats each weekday(using Vue ApexCharts library).
                    </motion.p>
                    <motion.p 
                        variants={fadeIn('right',0.5)}
                        initial='hidden'
                        whileInView={'show'}
                        className={styles.paragraph}>- Lastly, I created a settings tab where the admin can edit personal information like name, password, and phone number. The dashboard was intuitive and user-friendly and allow for easy management of users and admins.
                        </motion.p>
                    {/* See_More */}
                    <motion.span
                        variants={fadeIn('right',0.6)}
                        initial='hidden'
                        whileInView={'show'} 
                        className='flex space-x-4 self-end z-40 w-full pt-2'>
                        <p className={styles.gradient__text}>My Latest projects </p>
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
                <div className="w-[80%] sm:w-[60%] lg:w-[40%] h-[30%] xxs:h-[300px] sm:h-[350px] lg:h-full object-contain relative ">
                    <motion.div
                        variants={fadeIn('left',0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        className="cards w-full left-0 bottom-0 lg:bottom-1/4 absolute md:hidden lg:block">
                        <div className="card one left-0 bottom-[75px] lg:bottom-[90px] ">
                            <img src={spinet3} alt="spinet" />
                        </div>
                        <div className="card two -left-1 bottom-[45px] lg:bottom-[45px]">
                            <img  src={spinet2} alt="spinet" />
                        </div>
                        <div className="card three -left-2 bottom-[15px] lg:bottom-[5px]">
                            <img  src={spinet1} alt="spinet" />
                        </div>
                    </motion.div>
                    <div
                        className="cards w-full left-0 bottom-0 absolute hidden md:block lg:hidden">
                        <div className="card one left-0 bottom-[95px]">
                        <img src={spinet3} alt="spinet" />
                        </div>
                        <div className="card two -left-1 bottom-[60px]">
                            <img  src={spinet2} alt="spinet" />
                        </div>
                        <div className="card three -left-2 bottom-[25px]">
                            <img  src={spinet1} alt="spinet" />
                        </div>
                    </div>
                </div>
        </section>
     );
}
 
export default Education;

