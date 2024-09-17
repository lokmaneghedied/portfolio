import NavBar from "@/sections/NavBar";
import Home from "@/sections/Home";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Experience from "@/sections/Experience";

function App() {
  return (
    <div className="flex flex-col items-center bg-dark overflow-hidden">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
