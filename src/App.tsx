import NavBar from "@/sections/NavBar";
import Home from "@/sections/Home";
import About from "@/sections/About";
import Skills from "@/sections/Skills";

function App() {
  return (
    <div className="flex flex-col items-center bg-dark">
      <NavBar />
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
