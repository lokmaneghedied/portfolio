import { motion } from "framer-motion";
import { fadeIn } from "../constants";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section
      id="about"
      className="h-full md:h-screen md:flex md:flex-1 md:flex-row md:items-center space-y-4"
    >
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false }}
        className="flex-1 bg-about bg-contain bg-no-repeat mix-blend-lighten bg-center h-[300px] md:h-1/2 "
      ></motion.div>
      <div className="flex flex-col justify-center items-center md:items-start lg:h-3/5 md:w-[60%] space-y-2 md:space-y-4">
        <motion.h1
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
          className="title"
        >
          ABOUT ME
        </motion.h1>
        <motion.p
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
          className="w-10/12 subtitle"
        >
          Enthusiastic and adaptable web developer with a passion for creating
          cutting-edge, user-friendly applications. Committed to perpetual
          learning and professional growth, my dedication extends to the pursuit
          of building visually captivating applications that seamlessly merge
          form and function, culminating in an unparalleled user experience.
        </motion.p>
        <motion.p
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
          className="w-10/12 paragraph"
        >
          Driven by a fervor for staying at the forefront of technological
          advancements, I am poised to contribute my skills and creativity to
          projects that demand both innovation and precision. With a keen eye
          for details and a commitment to staying ahead in the dynamic world of
          web development, I am eager to bring my expertise to a team that
          values excellence.
        </motion.p>
        <span className="flex space-x-4 self-end pr-6 z-40">
          <p className="gradient__text">More About Me </p>
          <Link
            to="education"
            smooth={true}
            className="cursor-pointer w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] flex justify-center items-center btn rounded-full"
          >
            <AiOutlineArrowDown className="w-[15px] h-[15px] lg:w-auto lg:h-auto" />
          </Link>
        </span>
      </div>
    </section>
  );
};

export default About;
