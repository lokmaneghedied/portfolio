import { lazy, Suspense } from "react";
import LoadingScreen from "@/components/LoadingScreen";
function App() {
  const NavBar = lazy(() => import("@/sections/NavBar"));
  const Home = lazy(() => import("@/sections/Home"));
  const About = lazy(() => import("@/sections/About"));
  const Skills = lazy(() => import("@/sections/Skills"));
  const Experience = lazy(() => import("@/sections/Experience"));
  const PersonalProjects = lazy(() => import("@/sections/PersonalProjects"));
  const Contact = lazy(() => import("@/sections/Contact"));
  const Footer = lazy(() => import("@/sections/Footer"));

  return (
    <section className="flex flex-col items-center bg-dark overflow-hidden">
      <Suspense fallback={<LoadingScreen />}>
        <NavBar />
        <Home />
        <About />
        <Skills />
        <Experience />
        <PersonalProjects />
        <Contact />
        <Footer />
      </Suspense>
    </section>
  );
}

export default App;
