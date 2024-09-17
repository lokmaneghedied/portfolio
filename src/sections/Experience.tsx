import TitleTicket from "@/components/TitleTicket";
import StarsIcon from "@/assets/svg/StarsIcon.svg";
import ProjectCard from "@/components/ProjectCard";
import { workExperience } from "@/constants";

export default function Experience() {
  return (
    <section
      id="work"
      className="sectionContainer flex flex-col items-center justify-center"
    >
      <TitleTicket title="Work Experience" Icon={<StarsIcon />} />
      <h1 className="heading1 leading-tight">My Work History So Far</h1>
      <p className="details1">
        Throughout my career as a web developer, I have collaborated with
        various companies, taking on key roles that have honed my skills and
        broadened my expertise. My journey encompasses diverse projects and
        challenges, each contributing to my growth in the field.
      </p>
      <div className="flex flex-col w-full gap-4 lg:grid lg:grid-cols-2">
        {workExperience.map((item, index) => (
          <ProjectCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
