import HeroSection from './components/custom/heroSection';
import About from './components/custom/about';
import Experience from './components/custom/experience';
import Project from './components/custom/project';
import Contact from './components/custom/contact';


function App() {
  return (
    <div className="max-md:px-8 scroll-smooth">
      <section id="home"><HeroSection /></section>
      <section id="experience"><Experience /></section>
      <section id="about"><About /></section>
      <section id="project"><Project /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
