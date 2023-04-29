//assets
import about from '../assets/about.png'
//motion
import { motion } from "framer-motion";
// fadeIn
import { fadeIn } from '../constants';
//styles
import { styles } from '../style';
//icons
import { AiOutlineArrowDown } from "react-icons/ai";
// Link
import { Link } from 'react-scroll';

const About = () => {
    return ( 
        <section id='about' className='h-full md:h-screen md:flex md:flex-1 md:flex-row items-center xs:space-y-4 sm:pt-10 md:pt-0'>
            <motion.div 
                variants={fadeIn('right',0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once : false, amount: 0.7}} 
                className="flex-1 bg-about bg-contain bg-no-repeat mix-blend-lighten bg-center h-[300px] md:h-1/2">
            </motion.div>
            <div className="flex flex-col justify-center items-center md:items-start lg:h-3/5 md:w-[60%] space-y-4">
                <motion.h1 
                    variants={fadeIn('left',0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once : false, amount: 0.7}} 
                    className={styles.title}>ABOUT ME</motion.h1>
                <motion.p 
                    variants={fadeIn('left',0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once : false, amount: 0.7}} 
                    className={`w-10/12 ${styles.subtitle}` }>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt officiis beatae minima consequatur molestias nobis,</motion.p>
                <motion.p 
                    variants={fadeIn('left',0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once : false, amount: 0.7}} 
                    className={`w-10/12 ${styles.paragraph}`}>With a State Engineer In Mining Engineering, obtained with honors from the National school of mining and metallurgy in Algeria, I also have a significant background in software development, basically self taught using sources like: FreeCodeCamp, W3School, Youtube and Official documentation, and under the guidance of a senior software engineer. In addition to the technical background, my soft skills are well enhanced, for I was an active student in my college years which helped me build a strong personality and respectable leadership abilities.</motion.p>
                <span 
                    className='flex space-x-4 self-end pr-6 z-50'>
                    <p className={styles.gradient__text}>More About Me </p>
                    <Link 
                        to="education" 
                        smooth={true}
                        className='cursor-pointer w-[30px] h-[30px] flex justify-center items-center btn rounded-full'>
                        <AiOutlineArrowDown />
                    </Link>
                </span>
                
            </div>
        </section>
     );
}
 
export default About;