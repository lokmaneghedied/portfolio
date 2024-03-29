import gpt3 from '../assets/gpt3.jpg';
import hoobank from '../assets/hoobank.jpg';
import gericht from '../assets/gericht.jpg';
import gericht_wide from '../assets/gericht_wide.jpg'
import healthy24 from '../assets/healthy24.jpg';
import { TbWorldWww } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from '../constants';

const Projects = () => {
    return ( 
        <section id="projects" className="w-full flex flex-col items-center justify-center space-y-4 lg:space-y-0 pt-8 lg:grid lg:justify-items-center lg:content-center lg:grid-cols-2 gap-4 ">
            {/* TITLE + DESCRIPTION */}
            <motion.div 
                variants={fadeIn('right',0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once : false}} 
                className="w-[90%] h-1/5 lg:h-auto">
                <h1 className='title'>MY LATEST PROJECTS:</h1>
                <p className='paragraph'>Using ReactJS and TailwindCSS I created visually appealing, user-friendly, and responsive websites. You can either check out the live version or view the corresponding repository on GitHub.</p>
            </motion.div>
            {/* Healthy24 */}
            <motion.div
                variants={fadeIn('left',0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once : false}}  
                className="w-[90%] sm:w-[70%] lg:w-[90%] h-1/5 lg:h-full group relative overflow-hidden border-2 border-white/50 rounded-xl">
                    <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-500"></div>
                    <img className="group-hover:scale-125 transition-all duration-500 h-full" src={healthy24} alt="HooBank" loading="lazy" />
                        {/* links */}
                    <span className="absolute -bottom-full left-5 group-hover:bottom-11 transition-all duration-500 z-40">
                        <span className='text_gradient text-xl lg:text-2xl font-extrabold '>Healthy24 </span>
                    </span>
                    <span className="flex space-x-2 absolute -bottom-full left-5 group-hover:bottom-5 transition-all duration-700">
                        <a className="hover:scale-125 transition-all z-40" href="https://lokmaneghedied.github.io/healthy24/" target="_blank">
                            <TbWorldWww className="w-[20px] h-[20px]"/>
                        </a>
                        <a className="hover:scale-125 transition-all z-40 flex items-center" href="https://github.com/lokmaneghedied/healthy24" target="_blank">
                            <BsGithub className="w-[18px] h-[18px]"/>
                        </a>
                    </span>
            </motion.div>
            {/* HooBank */}
            <motion.div
                variants={fadeIn('right',0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once : false}}  
                className="w-[90%] sm:w-[70%] lg:w-[90%] h-1/5 lg:h-full group relative overflow-hidden border-2 border-white/50 rounded-xl">
                    <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-500"></div>
                    <img className="group-hover:scale-125 transition-all duration-500 h-full" src={hoobank} alt="HooBank" loading="lazy" />
                            {/* links */}
                    <span className="absolute -bottom-full left-5 group-hover:bottom-11 transition-all duration-500 z-40">
                        <span className='text_gradient text-xl lg:text-2xl font-extrabold '>HooBank </span>
                    </span>
                    <span className="flex space-x-2 absolute -bottom-full left-5 group-hover:bottom-5 transition-all duration-700">
                        <a className="hover:scale-125 transition-all z-40" href="https://lokmaneghedied.github.io/HooBank/" target="_blank">
                            <TbWorldWww className="w-[20px] h-[20px]"/>
                        </a>
                        <a className="hover:scale-125 transition-all z-40 flex items-center" href="https://github.com/lokmaneghedied/HooBank" target="_blank">
                            <BsGithub className="w-[18px] h-[18px]"/>
                        </a>
                    </span>
            </motion.div>
            {/* GPT3 */}
            <motion.div 
                variants={fadeIn('left',0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once : false}} 
                className="w-[90%] sm:w-[70%] lg:w-[90%] h-1/5 lg:h-full group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-500"></div>
                <img className="group-hover:scale-125 transition-all duration-500 h-full" src={gpt3} alt="GPT-3" loading="lazy"/>
                {/* links */}
                <span className="absolute -bottom-full z-40 left-5 group-hover:bottom-11 transition-all duration-500">
                    <span className='text_gradient text-xl lg:text-2xl font-extrabold '>GPT-3 </span>
                </span>
                <span className="flex space-x-2 absolute -bottom-full left-5 group-hover:bottom-5 transition-all duration-700">
                    <a className="hover:scale-125 transition-all z-40" href="https://lokmaneghedied.github.io/gpt-3/" target="_blank">
                        <TbWorldWww className="w-[20px] h-[20px]" />
                    </a>
                    <a className="hover:scale-125 transition-all z-40 flex items-center" href="https://github.com/lokmaneghedied/gpt-3" target="_blank">
                        <BsGithub className="w-[18px] h-[18px]" />
                    </a>
                </span>
            </motion.div>
            {/* GERICHT */}
            <motion.div 
                variants={fadeIn('left',0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once : false}} 
                className="w-[90%] sm:w-[70%] lg:w-[95%] h-1/5 lg:h-[85%] lg:flex lg:justify-center lg:col-span-2 group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-500"></div>
                <img className="group-hover:scale-125 transition-all duration-500 h-full lg:hidden" src={gericht} alt="GERICHT" loading="lazy" />
                <img className="group-hover:scale-125 transition-all duration-500 h-full hidden lg:block" src={gericht_wide} alt="GERICHT" loading="lazy" />
                {/* links */}
                <span className="absolute -bottom-full z-40 left-5 group-hover:bottom-11 transition-all duration-500">
                    <span className='text_gradient text-xl lg:text-2xl font-extrabold '>GERICHT</span>
                </span>
                <span className="flex space-x-2 absolute -bottom-full left-5 group-hover:bottom-5 transition-all duration-700">
                    <a className="hover:scale-125 transition-all z-40" href="https://lokmaneghedied.github.io/gericht/" target="_blank">
                        <TbWorldWww className="w-[20px] h-[20px]"/>
                    </a>
                    <a className="hover:scale-125 transition-all z-40 flex items-center" href="https://github.com/lokmaneghedied/gericht" target="_blank">
                        <BsGithub className="w-[18px] h-[18px]"/>
                    </a>
                </span>
            </motion.div>
            
        </section>
     );
}
 
export default Projects;