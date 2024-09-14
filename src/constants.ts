import { HeaderLink } from "@/types";

export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const headerLinks: HeaderLink[] = [
  {
    title: "Home",
    link: "home",
  },
  {
    title: "About Me",
    link: "about",
  },
  {
    title: "Skills",
    link: "skills",
  },
  {
    title: "Work",
    link: "work",
  },
];

export const educations = [
  {
    id: 1,
    title: "JAVASCRIPT ALGORITHMS AND DATA STRUCTURES",
    date: "10/2022 – 11/2022: Freecodecamp.org",
    chapters:
      "ES6, Debugging, Basic Data Structures, Object Oriented Programming, Functional Programming.",
    certificate:
      "https://www.freecodecamp.org/certification/lokmaneghedied/javascript-algorithms-and-data-structures",
  },
  {
    id: 2,
    title: "SCIENTIFIC COMPUTING WITH PYTHON",
    date: "09/2022 – 10/2022: Freecodecamp.org",
    chapters:
      "Different data structures, Functional programming, Object oriented programming, Common python libraries: numpy, pandas",
    certificate:
      "https://www.freecodecamp.org/certification/lokmaneghedied/scientific-computing-with-python-v7",
  },
  {
    id: 3,
    title:
      "STATE ENGINEER IN MINING ENGINEERING AND MASTER IN ADVANCED LAND CONTROL",
    date: "09/2017 – 11/2020: National school of mining and metallurgy, Algeria",
  },
  {
    id: 4,
    title: "PREPARATORY CLASS IN SCIENCES AND TECHNOLOGIES",
    date: "09/2015 – 06/2017: National School Of Public Works, Algeria",
    chapters:
      "Algebra, Mathematical Analysis ,Physics , Chemistry, Rational Mechanics, Computer Science, Statistics, Probabilities.",
  },
];
