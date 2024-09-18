import TitleTicket from "@/components/TitleTicket";
import StarsIcon from "@/assets/svg/StarsIcon.svg";
import PicturesGrid from "@/components/PicturesGrid";
import {
  gericht1,
  gericht2,
  gericht3,
  gpt,
  gpt2,
  gpt3,
  hoobank,
  hoobank2,
} from "@/assets/personal-projects";

export default function PersonalProjects() {
  return (
    <section className="sectionContainer flex flex-col items-center justify-center">
      <TitleTicket title="Personal Projects" Icon={<StarsIcon />} />
      <h1 className="heading1 leading-tight">Latest Personal Projects</h1>
      <p className="details1">
        A collection of my personal projects that showcase my skills in web
        development.
      </p>
      <PicturesGrid
        pictures={[
          gericht1,
          gpt,
          gpt2,
          gericht2,
          gericht3,
          hoobank,
          hoobank2,
          gpt3,
        ]}
      />
    </section>
  );
}
