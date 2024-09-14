import NavBar from "@/sections/NavBar";
import Home from "@/sections/Home";

function App() {
  return (
    <div className="flex flex-col items-center bg-dark text-white">
      <NavBar />
      <Home />
      <div className="h-screen" id="about">
        about
      </div>
      <div className="h-screen" id="skills">
        skills
      </div>
      <div className="h-screen" id="work">
        Work
      </div>
      <div className="h-screen" id="contact">
        contact
      </div>
    </div>
  );
}

export default App;
