import NavBar from "@/sections/NavBar";
import Home from "@/sections/Home";
import About from "@/sections/About";

function App() {
  return (
    <div className="flex flex-col items-center bg-dark">
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
