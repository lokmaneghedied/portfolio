import { 
  NavBar,
  Header,
  Home,
  About,
  Education,
  Experience,
  Projects,
  Skills,
  Contact, 
} from "./sections"

function App() {

  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden text-white">
      <NavBar />
      <Header />
      <Home />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default App
