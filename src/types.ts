import { BrandColor } from "./components/ProjectCard";

export type HeaderLinkType = {
  title: string;
  link: string;
};

export type EducationType = {
  title: string;
  date: string;
  certificateLink?: string;
  Icon?: React.ReactElement;
};

export type SkillType = {
  title: string;
  description: string;
  Icon: React.ReactElement;
};

export type ContactType = {
  title: string;
  Icon: React.ReactElement;
  handleClick?: () => void;
};

export type WorkExperienceType = {
  company: string;
  period: { from: string; to: string };
  projectName: string;
  projectImage: string; // ? image path
  technologies: string[];
  highlights: string[];
  brandColor: BrandColor;
};
