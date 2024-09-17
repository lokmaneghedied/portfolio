import { useState } from "react";

type ProjectCardProps = {
  projectName: string;
  company: string;
  period: { from: string; to: string };
  projectImage: string;
  technologies: string[];
  highlights: string[];
  brandColor: BrandColor;
};

export enum BrandColor {
  Orange = "orange",
  Green = "green",
  Blue = "blue",
}

const styleVariant: {
  [key: string]: { backgroundColor: string; text: string };
} = {
  orange: {
    backgroundColor: "bg-orange",
    text: "text-orange",
  },
  green: {
    backgroundColor: "bg-green",
    text: "text-green",
  },
  blue: {
    backgroundColor: "bg-blue",
    text: "text-blue",
  },
};

export default function ProjectCard({
  projectName,
  company,
  period,
  projectImage,
  technologies,
  highlights,
  brandColor,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpand = () => {
    if (window.innerWidth >= 1024) {
      document.body.style.overflow = isExpanded ? "auto" : "hidden";
    }
    setIsExpanded(!isExpanded);
  };
  return (
    <div
      className={
        isExpanded
          ? "lg:fixed lg:top-0 lg:left-0 lg:h-dvh lg:w-full bg-black/30 backdrop-blur-2xl lg:z-40 lg:flex lg:items-center lg:justify-center"
          : ""
      }
    >
      <div
        className={`bg-slate rounded-[26px] border border-grayBorder grid content-start gap-4 p-4 w-full h-fit ${
          isExpanded ? "lg:w-4/5 xl:w-3/5 lg:h-4/5 overflow-y-auto lg:pb-0" : ""
        } `}
      >
        <div
          className={`w-full h-max relative group overflow-hidden rounded-[10px] ${
            isExpanded ? "lg:w-fit place-self-center" : ""
          } ${styleVariant[brandColor].backgroundColor}`}
        >
          <span className="group-hover:bg-black/50 w-full h-full absolute z-10 transition-all duration-500"></span>
          <img
            loading="lazy"
            src={projectImage}
            alt={projectName + " image"}
            className="w-full lg:h-96 object-contain group-hover:scale-105 transition-all duration-500"
          />
        </div>
        <p className="details2 text-white">
          {period.from} - {period.to} • {company}
        </p>
        <h1
          className={`heading2 ${isExpanded ? "" : "truncate w-full"} ${
            styleVariant[brandColor].text
          }`}
        >
          {projectName}
        </h1>
        <p className={`details1 ${isExpanded ? "" : "truncate w-full"}`}>
          <b>Technologies: </b> {technologies.join(", ")}.
        </p>
        {isExpanded && (
          <span className="space-y-1">
            <p className="details1">
              <b>Highlights:</b>{" "}
            </p>
            <ul className="list-disc list-inside">
              {highlights.map((highlight, index) => (
                <li key={index} className="details1">
                  {highlight}
                </li>
              ))}
            </ul>
          </span>
        )}
        <div
          className={
            isExpanded ? "lg:sticky lg:bottom-0 lg:bg-slate lg:py-4" : ""
          }
        >
          <button
            onClick={handleExpand}
            className="buttonSecondary max-w-full w-full"
          >
            {isExpanded ? "Less" : "More"} Details
          </button>
        </div>
      </div>
    </div>
  );
}
