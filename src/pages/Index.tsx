import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Positions from "@/components/Positions";
import Experience from "@/components/Experience";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <Experience />
      <Positions />
      <Projects />
    </div>
  );
};

export default Index;