import NavBar from "@/sections/NavBar";

function App() {
  return (
    <div className="bg-dark text-white">
      <NavBar />
      <div className="h-screen" id="home">
        home
      </div>
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
