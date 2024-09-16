import { SkillType } from "@/types";
import { useState } from "react";
import TitleTicket from "@/components/TitleTicket";
import StarsIcon from "@/assets/svg/StarsIcon.svg";
import SkillCard from "@/components/SkillCard";
import {
  HtmlIcon,
  CssIcon,
  HtmxIcon,
  TailwindIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NextjsIcon,
  VuejsIcon,
  AlpinejsIcon,
  D3jsIcon,
  PlotlyjsIcon,
  CypressIcon,
  ViteIcon,
  GolangIcon,
  PythonIcon,
  FlaskIcon,
  AmplifyIcon,
  GitIcon,
  GithubIcon,
  PostgressqlIcon,
  MongoDbIcon,
} from "@/assets/svg/skillsIcons";
import DownArrow from "@/assets/svg/DownArrow.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../constants";

export default function Skills() {
  const [isExpanded, setIsExpanded] = useState(false);

  const techSkills: SkillType[] = [
    {
      title: "HTML",
      description: "Creating the structure of web pages.",
      Icon: <HtmlIcon />,
    },
    {
      title: "CSS",
      description: "Styling web pages.",
      Icon: <CssIcon />,
    },
    {
      title: "HTMX",
      description: "Modern HTML interactions.",
      Icon: <HtmxIcon />,
    },
    {
      title: "TAILWIND CSS",
      description: "Utility-first CSS framework.",
      Icon: <TailwindIcon />,
    },
    {
      title: "JavaScript",
      description: "Scripting language for web development.",
      Icon: <JavaScriptIcon />,
    },
    {
      title: "TypeScript",
      description: "JavaScript with static types.",
      Icon: <TypeScriptIcon />,
    },
    {
      title: "React",
      description: "JavaScript library for building user interfaces.",
      Icon: <ReactIcon />,
    },
    {
      title: "Next.js",
      description: "React framework for building web applications.",
      Icon: <NextjsIcon />,
    },
    {
      title: "Vue.js",
      description: "JavaScript framework for building user interfaces.",
      Icon: <VuejsIcon />,
    },
    {
      title: "Alpine.js",
      description: "Lightweight framework.",
      Icon: <AlpinejsIcon />,
    },
    {
      title: "D3.JS",
      description: "Data visualization library.",
      Icon: <D3jsIcon />,
    },
    {
      title: "PLOTLY.JS",
      description: "JavaScript graphing library.",
      Icon: <PlotlyjsIcon />,
    },
    {
      title: "CYPRESS",
      description: "End-to-end testing framework.",
      Icon: <CypressIcon />,
    },
    {
      title: "VITE",
      description: "Build tool.",
      Icon: <ViteIcon />,
    },
    {
      title: "GO",
      description: "Programming language.",
      Icon: <GolangIcon />,
    },
    {
      title: "PYTHON",
      description: "Scripting language.",
      Icon: <PythonIcon />,
    },
    {
      title: "Flask",
      description: "Micro web framework for Python.",
      Icon: <FlaskIcon />,
    },
    {
      title: "AWS AMPLIFY",
      description: "Serverless framework.",
      Icon: <AmplifyIcon />,
    },
    {
      title: "GIT",
      description: "Version control system.",
      Icon: <GitIcon />,
    },
    {
      title: "GITHUB",
      description: "Version control platform.",
      Icon: <GithubIcon />,
    },
    {
      title: "POSTGRESQL",
      description: "Relational database management system.",
      Icon: <PostgressqlIcon />,
    },
    {
      title: "MONGODB",
      description: "NoSQL database.",
      Icon: <MongoDbIcon />,
    },
  ];
  return (
    <section
      id="skills"
      className="sectionContainer flex flex-col items-center justify-center"
    >
      <TitleTicket title="Skills" Icon={<StarsIcon />} />
      <motion.h1
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="heading1 leading-tight"
      >
        Areas of Expertise
      </motion.h1>
      <motion.p
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="details1"
      >
        Here are some of the skills that form the backbone of my ability to
        create effective and engaging web solutions throughout my professional
        journey.
      </motion.p>
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className={`w-full gap-4 grid grid-cols-2 xl:grid-cols-3 overflow-hidden relative ${
          isExpanded ? "max-h-full" : "max-h-96"
        } `}
      >
        {techSkills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-40 z-10 bg-gradient-to-b from-transparent to-dark"></div>
        )}
      </motion.div>
      <button
        className="buttonPrimary group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "See all skills"}
        <span className={isExpanded ? "rotate-180" : ""}>
          <DownArrow />
        </span>
      </button>
    </section>
  );
}
