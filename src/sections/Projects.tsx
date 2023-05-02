//styles
import { styles } from "../style";
//assets
import gpt3 from '../assets/gpt3.jpg';
import hoobank from '../assets/hoobank.jpg';
import gericht from '../assets/gericht.jpg';
//icons
import { TbWorldWww } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
//motion
import { motion } from "framer-motion";
// fadeIn
import { fadeIn } from '../constants';

const Projects = () => {
    return ( 
        <section id="projects" className="lg:h-full w-full flex flex-col items-center justify-center space-y-4 pt-8 lg:pt-0 lg:grid lg:justify-items-center lg:content-center lg:grid-cols-2 gap-4">
            {/* TITLE + DESCRIPTION */}
            <motion.div 
                variants={fadeIn('right',0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once : false, amount: 0.7}} 
                className="w-[90%] h-1/5 lg:h-auto">
                <h1 className={styles.title}>MY LATEST PROJECTS:</h1>
                <p className={styles.paragraph}>Using ReactJS and TailwindCSS I created visually appealing, user-friendly, and responsive websites. You can either check out the websites or view the source code.</p>
            </motion.div>
            {/* HooBank */}
            <motion.div
                variants={fadeIn('left',0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once : false, amount: 0.7}}  
                className="w-[90%] h-1/5 lg:h-full group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-500"></div>
                <img className="group-hover:scale-125 transition-all duration-500 h-full" src={hoobank} alt="HooBank" />
                {/* links */}
                <span className="absolute -bottom-full left-5 group-hover:bottom-10 transition-all duration-500 z-40">
                    <span className='text_gradient text-xl lg:text-2xl font-extrabold '>HooBank </span>
                </span>
                <span className="flex space-x-3 absolute -bottom-full left-5 group-hover:bottom-5 transition-all duration-700">
                    <a className="hover:scale-125 transition-all z-40" href="https://lokmaneghedied.github.io/HooBank/" target="_blank">
                        <TbWorldWww />
                    </a>
                    <a className="hover:scale-125 transition-all z-40" href="https://github.com/lokmaneghedied/HooBank" target="_blank">
                        <BsGithub />
                    </a>
                </span>
            </motion.div>
            {/* GPT3 */}
            <motion.div 
                variants={fadeIn('right',0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once : false, amount: 0.7}} 
                className="w-[90%] h-1/5 lg:h-full group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-500"></div>
                <img className="group-hover:scale-125 transition-all duration-500 h-full" src={gpt3} alt="GPT-3" />
                {/* links */}
                <span className="absolute -bottom-full z-40 left-5 group-hover:bottom-10 transition-all duration-500">
                    <span className='text_gradient text-xl lg:text-2xl font-extrabold '>GPT-3 </span>
                </span>
                <span className="flex space-x-3 absolute -bottom-full left-5 group-hover:bottom-5 transition-all duration-700">
                    <a className="hover:scale-125 transition-all z-40" href="https://lokmaneghedied.github.io/gpt-3/" target="_blank">
                        <TbWorldWww />
                    </a>
                    <a className="hover:scale-125 transition-all z-40" href="https://github.com/lokmaneghedied/gpt-3" target="_blank">
                        <BsGithub />
                    </a>
                </span>
            </motion.div>
            {/* GERICHT */}
            <motion.div 
                variants={fadeIn('left',0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once : false, amount: 0.7}} 
                className="w-[90%] h-1/5 lg:h-full group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/50 w-full h-full absolute z-40 transition-all duration-500"></div>
                <img className="group-hover:scale-125 transition-all duration-500 h-full" src={gericht} alt="GERICHT" />
                {/* links */}
                <span className="absolute -bottom-full z-40 left-5 group-hover:bottom-10 transition-all duration-500">
                    <span className='text_gradient text-xl lg:text-2xl font-extrabold '>COMING SOON...  </span>
                </span>
                <span className="flex space-x-3 absolute -bottom-full left-5 group-hover:bottom-5 transition-all duration-700">
                    <a className="hover:scale-125 transition-all z-40" href="" target="_blank">
                        <TbWorldWww />
                    </a>
                    <a className="hover:scale-125 transition-all z-40" href="" target="_blank">
                        <BsGithub />
                    </a>
                </span>
            </motion.div>
            
        </section>
     );
}
 
export default Projects;