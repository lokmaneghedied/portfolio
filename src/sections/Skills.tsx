//styles
import { styles } from '../style';
//motion
import { motion } from 'framer-motion';
//icons
import { AiOutlineSafetyCertificate } from "react-icons/ai";
const Skills = () => {
    return ( 
        <section id='skills' className="h-screen w-full flex flex-col justify-around items-start ">
            <h1 className={`px-4 ${styles.title}`}>MY SKILLS</h1>
            <div>
                <AiOutlineSafetyCertificate />

            </div>
        </section>
     );
}
 
export default Skills;