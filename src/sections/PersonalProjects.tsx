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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, unde
        iusto. Consequatur aperiam amet architecto sunt magnam tempore odit cum
        illum iste labore quas optio possimus molestias, pariatur eos. Enim.
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
