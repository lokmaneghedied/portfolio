import { Link } from "react-scroll";
import ScrollDownIndicator from "@/assets/svg/ScrollDownIndicator.svg";
import TitleTicket from "@/components/TitleTicket";

export default function Home() {
  return (
    <section
      id="home"
      className="p-4 h-screen w-full md:w-10/12 lg:w-4/5 xl:w-3/5 flex flex-col items-center justify-center text-center gap-6 bg-custom-radial"
    >
      <TitleTicket
        title="Available for Opportunities"
        icon={
          <div className="relative w-3 h-3">
            <span className="absolute top-0 left-0 w-3 h-3 bg-green-500 block rounded-full"></span>
            <span className="absolute -top-[2px] -left-[2px] w-4 h-4 bg-green-500 block rounded-full animate-ping"></span>
          </div>
        }
      />
      <h1 className="heading1 leading-tight">
        I'm <b className="text-secondary">LOKMANE Ghedied,</b> <br />a Versatile
        Web Developer, Creative Technologist, and Digital Innovator
      </h1>
      <p className="details1">
        Skilled web developer with a passion for creating fully interactive,
        highly dynamic, and performant web applications that deliver exceptional
        user experiences.
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 w-full">
        <Link
          to="contact"
          spy
          smooth
          offset={-100}
          duration={500}
          className="buttonPrimary"
        >
          Let's Connect 👋
        </Link>
        <a
          href="https://drive.google.com/file/d/110TA0Hq2os6vtcJ3-gHAzbPw2xTRPBzS/view?usp=sharing"
          target="_blank"
          className="buttonSecondary"
        >
          View Resume
        </a>
      </div>
      <ScrollDownIndicator />
    </section>
  );
}
