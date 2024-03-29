import { motion } from 'framer-motion';
import { fadeIn, soft_skills } from '../constants';
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { backend_skills, frontend_skills } from '../constants';

const Skills = () => {
    return ( 
        <section id='skills' className="h-full lg:h-screen w-full flex justify-center items-center py-6 md:py-14 lg:py-0">
            <div className='w-[95%] h-4/5 flex flex-col justify-center items-center space-y-4 '>
                <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl text-accent self-start md:self-auto'>MY SKILLS</h1>
                {/* MAIN-DIV */}
                <div className='flex flex-col justify-center sm:items-center md:grid md:justify-items-center md:grid-cols-2 md:gap-4 w-full h-full md:h-fit lg:h-full space-y-4 md:space-y-0'>
                    {/* FRONT-END */}
                    <motion.div 
                        variants={fadeIn('right',0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once : false}} 
                        className='flex flex-col items-center w-full h-fit lg:h-[100%] sm:w-10/12 md:w-full md:py-4 space-y-3 md:space-y-5 border rounded-2xl divide-y py-2 px-4 education_card'>
                        <h2 className='md:text-base lg:text-lg sm:text-xl font-extrabold '>FRONT-END</h2>
                        <div className='flex justify-around h-full w-full pt-2 md:pt-5 text-white/80'>
                            {/* BASICS */}
                            <span className='flex flex-col gap-1'>
                                {frontend_skills.basics.map((skill=>(
                                    <ul key={skill.id} className='flex items-center space-x-2'>
                                        <AiOutlineSafetyCertificate />
                                        <p className='md:text-base lg:text-lg sm:text-xl'>{skill.name}</p>
                                    </ul>
                                )))}
                            </span>
                            {/* FRAMEWORKS */}
                            <span className='flex flex-col gap-1'>
                                {frontend_skills.frameworks.map((skill=>(
                                    <ul key={skill.id} className='flex items-center space-x-2'>
                                        <AiOutlineSafetyCertificate />
                                        <p className='md:text-base lg:text-lg sm:text-xl'>{skill.name}</p>
                                    </ul>
                                )))}
                            </span>
                        </div>
                    </motion.div>
                    {/* BACK-END */}
                    <motion.div 
                        variants={fadeIn('left',0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once : false}} 
                        className='flex flex-col items-center w-full h-fit lg:h-[100%]  sm:w-10/12 md:w-full md:py-4 space-y-3 md:space-y-5 border rounded-2xl divide-y py-2 px-4 education_card'>
                        <h2 className='md:text-base lg:text-lg sm:text-xl font-extrabold '>BACK-END</h2>
                        <div className='flex justify-around h-full w-full pt-2 md:pt-5 text-white/80'>
                            {/* BASICS */}
                            <span className='flex flex-col gap-1'>
                                {backend_skills.basics.map((skill=>(
                                    <ul key={skill.id} className='flex items-center space-x-2'>
                                        <AiOutlineSafetyCertificate />
                                        <p className='md:text-base lg:text-lg sm:text-xl'>{skill.name}</p>
                                    </ul>
                                )))}
                            </span>
                            {/* FRAMEWORKS */}
                            <span className='flex flex-col gap-1'>
                                {backend_skills.extra.map((skill=>(
                                    <ul key={skill.id} className='flex items-center space-x-2'>
                                        <AiOutlineSafetyCertificate />
                                        <p className='md:text-base lg:text-lg sm:text-xl'>{skill.name}</p>
                                    </ul>
                                )))}
                            </span>
                        </div>
                    </motion.div>
                    {/* SOFT-SKILLs */}
                    <motion.div 
                        variants={fadeIn('right',0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once : false}} 
                        className='flex flex-col items-center w-full h-fit lg:h-[100%] sm:w-10/12 md:col-span-2 md:w-[60%] md:py-4 space-y-3 md:space-y-5 border rounded-2xl divide-y py-2 px-4 education_card'>
                        <h2 className='md:text-base lg:text-lg sm:text-xl font-extrabold '>SOFT-SKILLS</h2>
                        <div className='flex justify-around h-full w-full pt-2 md:pt-5 text-white/80'>
                            {/* BASICS */}
                            <span className='flex flex-col gap-1'>
                                {soft_skills.basics.map((skill=>(
                                    <ul key={skill.id} className='flex items-center space-x-2'>
                                        <AiOutlineSafetyCertificate />
                                        <p className='md:text-base lg:text-lg sm:text-xl'>{skill.name}</p>
                                    </ul>
                                )))}
                            </span>
                            {/* FRAMEWORKS */}
                            <span className='flex flex-col gap-1'>
                                {soft_skills.extra.map((skill=>(
                                    <ul key={skill.id} className='flex items-center space-x-2'>
                                        <AiOutlineSafetyCertificate />
                                        <p className='md:text-base lg:text-lg sm:text-xl'>{skill.name}</p>
                                    </ul>
                                )))}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
     );
}
 
export default Skills;