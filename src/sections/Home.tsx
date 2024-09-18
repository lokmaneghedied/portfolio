import { Link } from "react-scroll";
import ScrollDownIndicator from "@/assets/svg/ScrollDownIndicator.svg";
import DownArrow from "@/assets/svg/DownArrow.svg";
import TitleTicket from "@/components/TitleTicket";
import { useEffect, useRef } from "react";

export default function Home() {
  const lastScrollTop = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = document.documentElement.scrollTop;
      const element = document.getElementById("scrollUpButton");
      if (
        element &&
        (currentScrollTop == 0 || lastScrollTop.current <= currentScrollTop)
      ) {
        element.classList.add("hidden");
      } else if (element) {
        element.classList.remove("hidden");
      }
      lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };
    if (lastScrollTop.current === 0) {
      handleScroll();
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="sectionContainer px-4 py-20 md:py-4 min-h-screen flex flex-col items-center justify-center text-center bg-custom-radial"
    >
      <TitleTicket
        title="Available for Opportunities"
        Icon={
          <div className="relative w-3 h-3">
            <span className="absolute top-0 left-0 w-3 h-3 bg-green block rounded-full"></span>
            <span className="absolute -top-[2px] -left-[2px] w-4 h-4 bg-green block rounded-full animate-ping"></span>
          </div>
        }
      />
      <h1 className="heading1 leading-tight">
        I'm <b className="text-secondary">Lokmane Ghedied,</b> <br />a Versatile
        Web Developer, Creative Technologist, and Digital Innovator
      </h1>
      <p className="details1">
        Skilled web developer with a passion for creating fully interactive,
        highly dynamic, and performant web applications that deliver exceptional
        user experiences.
      </p>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full">
        <Link to="contact" spy smooth offset={-100} className="buttonPrimary">
          Let's Connect 👋
        </Link>
        <a
          href="https://drive.google.com/file/d/1G3whwlWPv-ef9cBGQR1RzRzIoZVDV2O-/view?usp=sharing"
          target="_blank"
          className="buttonSecondary"
        >
          View Resume
        </a>
      </div>
      <ScrollDownIndicator />
      <Link
        id="scrollUpButton"
        to="home"
        smooth
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white rotate-180 cursor-pointer hover:bg-primary/80 transition-all duration-300 z-20"
      >
        <DownArrow />
      </Link>
    </section>
  );
}
