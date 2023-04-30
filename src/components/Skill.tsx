interface Props {
    title : string,
    x: string,
    y : string
}
//motions
import { motion } from "framer-motion";
import { transTo } from "../constants";

const Skill = ({title,x,y}:Props) => {
    return ( 
        <motion.div 
            variants={transTo(x,y)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once : true, amount: 0.7}}
            className="bg-white/80 text-accent cursor-pointer text-xs p-2 font-bold rounded-full absolute top-1/2 left-1/2">
                {title}
        </motion.div>
     );
}
 
export default Skill;