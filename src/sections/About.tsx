import TitleTicket from "@/components/TitleTicket";
import { BsStars } from "react-icons/bs";
import about from "@/assets/about.webp";
import EducationCard from "@/components/EducationCard";
import { FaFreeCodeCamp } from "react-icons/fa";
import { Education } from "@/types";

export default function About() {
  const educations: Education[] = [
    {
      title: "JAVASCRIPT ALGORITHMS AND DATA STRUCTURES",
      date: "10/2022 – 11/2022: Freecodecamp.org",
      certificateLink:
        "https://www.freecodecamp.org/certification/lokmaneghedied/javascript-algorithms-and-data-structures",
      Icon: <FaFreeCodeCamp />,
    },
    {
      title: "SCIENTIFIC COMPUTING WITH PYTHON",
      date: "09/2022 – 10/2022: Freecodecamp.org",
      certificateLink:
        "https://www.freecodecamp.org/certification/lokmaneghedied/scientific-computing-with-python-v7",
      Icon: <FaFreeCodeCamp />,
    },
    {
      title:
        "STATE ENGINEER IN MINING ENGINEERING AND MASTER IN ADVANCED LAND CONTROL",
      date: "09/2017 – 11/2020: National school of mining and metallurgy, Algeria",
    },
    {
      title: "PREPARATORY CLASS IN SCIENCES AND TECHNOLOGIES",
      date: "09/2015 – 06/2017: National School Of Public Works, Algeria",
    },
  ];
  return (
    <section
      id="about"
      className="sectionContainer flex flex-col items-center justify-center"
    >
      <TitleTicket title="About Me" Icon={<BsStars />} />
      <h1 className="heading1 text-secondary leading-tight">
        Innovative Web Developer Committed to Excellence
      </h1>
      <p className="details1">
        As an enthusiastic and adaptable web developer, I specialize in crafting
        cutting-edge, user-friendly applications that seamlessly blend form and
        function. Driven by a passion for continuous learning and technological
        innovation, I am dedicated to building visually captivating experiences
        that set new standards for usability and design. With a keen eye for
        detail and a commitment to excellence, I am eager to contribute my
        skills and creativity to forward-thinking projects.
      </p>
      <div className="border border-grayBorder rounded-[10px] p-4 pb-0 bg-slate">
        <img loading="lazy" src={about} alt="lokmane ghedied image" />
      </div>
      <TitleTicket title="Education" Icon={<BsStars />} />
      <h1 className="heading1 leading-tight">
        Academic Pursuits and Certifications
      </h1>
      <div className="flex flex-col w-full gap-4 lg:grid lg:grid-cols-2">
        {educations.map((item, index) => (
          <EducationCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
