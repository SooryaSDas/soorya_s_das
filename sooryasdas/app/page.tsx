import About from "./components/About";
import ContactSection from "./components/ContactSection";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <SkillsSection />
      <ServicesSection/>
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
