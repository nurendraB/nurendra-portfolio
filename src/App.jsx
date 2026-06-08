import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Terminal from "./components/Terminal";
import ToolMarquee from "./components/ToolMarquee";
import ThreatFeed from "./components/ThreatFeed";
import Dashboard from "./components/Dashboard";
import Radar from "./components/Radar";
import SecurityImpact from "./components/SecurityImpact";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Labs from "./components/Labs";
import Achievements from "./components/Achievements";
import Timeline from "./components/Timeline";
import Findings from "./components/Findings";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import StatusBar from "./components/StatusBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ToolMarquee />
      <ThreatFeed />
      <Stats />
      <Terminal />
      <Dashboard />
      <Radar />
      <Achievements />
      <SecurityImpact />
      <About />
      <Skills />
      <Projects />
      <Labs />
      <Timeline />
      <Findings />
      <Certifications />
      <Contact />
      <StatusBar />
      <Footer />
    </>
  );
}

export default App;