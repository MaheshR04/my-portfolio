import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <main className="overflow-x-hidden w-full relative">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience /> 
      <Contact />
    </main>
  );
}

export default App;
