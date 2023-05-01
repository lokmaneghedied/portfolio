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
  Footer
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
      <Footer />
    </div>
  )
}

export default App
