// src/App.js or MainPage.js
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import'./Home/Home.css'
function App() {
  return (
    <>
     <Navbar />
     <Home />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Certificates />
      <Contact />
    </>
  );
}

export default App;
