import { Github, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContent = () => {
    const skillsSection = document.getElementById('skills');
    skillsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative">
      <div className="animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="gradient-text">Punya Modi</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          I design and develop scalable full-stack web applications, integrating advanced AI models
          to create innovative and efficient data-driven solutions.
        </p>
        <div className="flex gap-6 justify-center">
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => window.open("https://github.com", "_blank")}
            className="hover:scale-105 transition-transform"
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => window.open("https://linkedin.com", "_blank")}
            className="hover:scale-105 transition-transform"
          >
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
        </div>
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute bottom-8 animate-bounce"
        onClick={scrollToContent}
      >
        <ArrowDown className="h-6 w-6" />
      </Button>
    </section>
  );
};

export default Hero;