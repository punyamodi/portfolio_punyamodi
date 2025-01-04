import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Hi, I'm <span className="gradient-text">Punya Modi</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
        I design and develop scalable full-stack web applications, integrating advanced AI models
        to create innovative and efficient data-driven solutions.
      </p>
      <div className="flex gap-4">
        <Button variant="outline" size="lg" onClick={() => window.open("https://github.com", "_blank")}>
          <Github className="mr-2 h-5 w-5" />
          GitHub
        </Button>
        <Button variant="outline" size="lg" onClick={() => window.open("https://linkedin.com", "_blank")}>
          <Linkedin className="mr-2 h-5 w-5" />
          LinkedIn
        </Button>
      </div>
    </section>
  );
};

export default Hero;