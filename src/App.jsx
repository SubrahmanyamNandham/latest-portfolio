import AboutExperience from "./components/AboutExperience";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Socials from "./components/Socials";

export default function App() {
  return (
    <div className="bg-[#0a0a0f] font-sans">
      <Hero />
      <Socials />
      <AboutExperience />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}
