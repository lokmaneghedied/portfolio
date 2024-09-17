import { BrandColor } from "@/components/ProjectCard";
import { HeaderLinkType, WorkExperienceType } from "@/types";
import {
  wadjed,
  wadjedLandingPage,
  sunthetics,
  spinetNfc,
} from "@/assets/projects";

export const headerLinks: HeaderLinkType[] = [
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

export const workExperience: WorkExperienceType[] = [
  {
    company: "Sunthetics",
    period: { from: "10/2023", to: "Now" },
    projectName: "Sunthetics Machine-Learning Platform",
    projectImage: sunthetics,
    technologies: [
      "React",
      "TypeScript",
      "React Query",
      "AWS Amplify",
      "D3.js",
      "Plotly.js",
      "Cypress",
    ],
    highlights: [
      "Developed a user-friendly multi-step form for project creation, enabling CSV/XLSX file uploads, configurable settings, and real-time data updates in a dynamic table.",
      "Created an interactive multi-dimensional heatmap using D3.js to color-code output values for various input combinations, enhancing data insight.",
      "Implemented a dynamic line chart with Plotly.js to display output values over selected time intervals.",
      "Created an admins dashboard to manage users, including adding, viewing, updating, and deleting user information and license duration.",
      "Created and executed Cypress tests to ensure all functionalities and features work correctly and securely.",
    ],
    brandColor: BrandColor.Green,
  },
  {
    company: "LAZDEK LLC",
    period: { from: "07/2023", to: "Now" },
    projectName: "Wadjed – SAAS Solution for Restaurants",
    projectImage: wadjed,
    technologies: [
      "Go",
      "Templ",
      "HTMX",
      "AlpineJS",
      "TailwindCSS",
      "PostgreSQL",
    ],
    highlights: [
      "Implemented a responsive digital menu and checkout pages, supporting various order types (delivery, takeoff, dine-in).",
      "Developed an intuitive admin dashboard for seamless order management and menu item administration (create, edit, delete) with Zitaled for authentication.",
      "Converted the app into a Progressive Web App (PWA) to enhance performance and user experience.",
      "Built a notification system using WebPush and RabbitMQ for real-time updates.",
    ],
    brandColor: BrandColor.Orange,
  },
  {
    company: "LAZDEK LLC",
    period: { from: "08/2024", to: "08/2024" },
    projectName: "Wadjed – Landing Page",
    projectImage: wadjedLandingPage,
    technologies: ["HTML", "CSS", "JavaScript", "TailwindCSS", "AlpineJS"],
    highlights: [
      "Implemented a clean and modern UI/UX design to attract potential customers and increase conversion rates.",
      "Developed a responsive landing page for Wadjed, a SAAS solution for restaurants.",
      "Optimized the page for performance and SEO to improve search engine ranking and user experience.",
    ],
    brandColor: BrandColor.Orange,
  },
  {
    company: "SPINET NFC",
    period: { from: "02/2023", to: "03/2023" },
    projectName: "SPINET NFC – Platform for users management",
    projectImage: spinetNfc,
    technologies: ["Vue.js", "Pinia", "Firebase", "Vue ApexCharts"],
    highlights: [
      "Developed a user-friendly admin dashboard with login authentication, user and admin management, and a statistics view.",
      "Implemented features for user filtering, creation, and deletion, along with a settings tab for personal information updates.",
      "Visualized user statistics with graphs using Vue ApexCharts.",
    ],
    brandColor: BrandColor.Blue,
  },
];
