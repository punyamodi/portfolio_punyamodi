import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Positions from "@/components/Positions";
import Experience from "@/components/Experience";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card/30">
      <Hero />
      <Skills />
      <Experience />
      <Positions />
      <Projects />
    </div>
  );
};

export default Index;