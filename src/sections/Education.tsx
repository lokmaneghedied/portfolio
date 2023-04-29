//constants
import { educations } from "../constants";
//styles
import { styles } from "../style";
//icons
import { FiExternalLink } from "react-icons/fi";
//motions
import { motion , useScroll } from "framer-motion";
import { useRef } from "react";
import CircleIcon from "../components/CircleIcon";
const Education = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start center","start start"]
        }
    )
    return ( 
        <section ref={ref} className="lg:h-screen w-full flex justify-start items-center relative mt-10 md:mt-0">
            {/* EXPERIENCE */}
            <div  className="w-full h-full sm:h-[90%] space-y-4 flex flex-col justify-center">
                <h1 className={`px-2 ${styles.title}`}>EDUCATION</h1>
                {educations.map((education)=>(
                    <ul ref={ref}  className="education_card relative px-4 py-2 rounded-3xl cursor-pointer flex justify-start space-x-4 " key={education.id}>
                        <CircleIcon />
                        <span className="w-10/12">
                            <h1 className={styles.subtitle}>{education.title}</h1>   
                            <p className={styles.subtitle}>{education.date}</p>
                            {education.chapters && <p className={styles.paragraph}>{education.chapters}</p>}
                            {education.certificate && 
                                <a className="place-self-end flex items-center space-x-2 hover:backdrop-blur-2xl hover:underline underline-offset-4 " href={education.certificate} target="_blank" >
                                    <p className="text-xs md:text-sm lg:text-base font-semibold">See Certificate !</p>
                                    <FiExternalLink />
                                </a>}
                        </span>
                    </ul>
                ))}
            </div>
            {/* LEFT_LINE */}
            <motion.div 
                style={{scaleY : scrollYProgress}}
                className="absolute origin-top top-[60px] lg:top-[130px] xl:top-[170px] left-[27px] lg:left-[28px] bg-accent w-[4px] h-[600px] xs:h-[500px] xxs:h-[400px] md:h-[380px] lg:h-[420px] " />

        </section>
     );
}
 
export default Education;