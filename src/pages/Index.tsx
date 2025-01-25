import Hero from "@/components/Hero";
    import Skills from "@/components/Skills";
    import Projects from "@/components/Projects";
    import Positions from "@/components/Positions";
    import Experience from "@/components/Experience";
    import About from "@/components/About";
    import Certifications from "@/components/Certifications";

    const Index = () => {
      return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background to-card/30">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Positions />
          <Certifications />
          <Projects />
        </div>
      );
    };

    export default Index;
