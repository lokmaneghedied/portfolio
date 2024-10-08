import { Link } from "react-scroll";
import Logo from "@/assets/svg/logo.svg";
import { useEffect, useState } from "react";
import MenuHamburger from "@/assets/svg/MenuHamburger.svg";
import CloseIcon from "@/assets/svg/CloseIcon.svg";
import { headerLinks } from "@/constants";

const calculateScrollPercentage = () => {
  const totalScrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollPercentage = (scrollTop / totalScrollableHeight) * 100;
  return scrollPercentage;
};

export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollPercentage(calculateScrollPercentage);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 flex justify-center items-center border-b border-grayBorder w-full backdrop-blur-2xl z-30">
      <div
        className="fixed bottom-0 left-0 h-[2px] rounded-full bg-offWhite"
        style={{ width: `${scrollPercentage}%` }}
      >
        <div className="absolute -bottom-7 -right-10 blur-sm w-20 h-14 bg-custom-radial-white"></div>
      </div>

      <div className="flex flex-col items-center p-4 xl:flex-row xl:justify-between w-full md:w-10/12 lg:w-4/5 xl:w-3/5 gap-8">
        <div className="w-full xl:w-fit flex items-center justify-between">
          <Link
            to="home"
            smooth
            offset={-100}
            onClick={() => setIsNavOpen(false)}
            className="cursor-pointer"
          >
            <Logo />
          </Link>
          <button
            className="xl:hidden text-white"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <CloseIcon /> : <MenuHamburger />}
          </button>
        </div>
        <div
          className={`flex-col xl:flex-row justify-start items-center gap-8 w-full xl:w-fit ${
            isNavOpen ? "flex" : "hidden xl:flex"
          } `}
        >
          {headerLinks.map(({ title, link }, indx) => (
            <Link
              key={indx}
              to={link}
              spy
              smooth
              offset={-100}
              activeClass="text-secondary"
              className="text-base xl:text-sm font-medium text-[#f7f6f7] cursor-pointer hover:scale-95 hover:text-gray transition-all duration-300"
              onClick={() => setIsNavOpen(false)}
            >
              {title}
            </Link>
          ))}
        </div>
        <Link
          to="contact"
          spy
          smooth
          offset={-100}
          className={`buttonPrimary xl:buttonSecondary ${
            isNavOpen ? "block" : "hidden xl:block"
          }`}
          onClick={() => setIsNavOpen(false)}
        >
          Let's talk 👋
        </Link>
      </div>
    </header>
  );
}
