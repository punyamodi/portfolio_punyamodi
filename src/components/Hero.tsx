import { Github, Linkedin, ArrowDown, Code, Cpu, Database, Brain, Server } from "lucide-react";
    import { Button } from "@/components/ui/button";
    import { cn } from "@/lib/utils";
    import * as React from "react";
    import { Card, CardContent } from "@/components/ui/card";

    const Hero = () => {
      const scrollToContent = () => {
        const skillsSection = document.getElementById('skills');
        skillsSection?.scrollIntoView({ behavior: 'smooth' });
      };

      const [animatedText, setAnimatedText] = React.useState(false);

      React.useEffect(() => {
        const timer = setTimeout(() => {
          setAnimatedText(true);
        }, 200);

        return () => clearTimeout(timer);
      }, []);

      return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative py-20">
          <div className="animate-fade-in align-center">
            <h1 className={cn("text-6xl md:text-7xl font-bold mb-6 transform-gpu", animatedText && "animate-text-3d")}>
              Hi, I'm <span className="gradient-text">Punya Modi</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-16 leading-relaxed text-center mx-auto">
              {/* Changed text-left to text-center + added mx-auto */}
              I design and develop scalable full-stack web applications, integrating advanced AI models
              to create innovative and efficient data-driven solutions.
            </p>
            <div className="flex gap-6 justify-center mb-12">
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => window.open("https://github.com/punyamodi", "_blank")}
                className="hover:scale-105 transition-transform"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => window.open("https://linkedin.com/in/punyamodi", "_blank")}
                className="hover:scale-105 transition-transform"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => window.open("https://www.codechef.com/users/punyamodi", "_blank")}
                className="hover:scale-105 transition-transform"
              >
                <Code className="mr-2 h-5 w-5" />
                CodeChef
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => window.open("https://codeforces.com/profile/PunyaModi", "_blank")}
                className="hover:scale-105 transition-transform"
              >
                <Code className="mr-2 h-5 w-5" />
                Codeforces
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => window.open("https://leetcode.com/u/PunyaModi/", "_blank")}
                className="hover:scale-105 transition-transform"
              >
                <Code className="mr-2 h-5 w-5" />
                LeetCode
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
              <Card className="bg-[#1A1F2C] border-primary/20 hover:scale-102 transition-all duration-300">
                <CardContent className="flex flex-col items-center justify-center p-4 gap-2">
                  <Code className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Full Stack</span>
                  <span className="text-xs text-muted-foreground">Development</span>
                </CardContent>
              </Card>
              <Card className="bg-[#1A1F2C] border-primary/20 hover:scale-102 transition-all duration-300">
                <CardContent className="flex flex-col items-center justify-center p-4 gap-2">
                  <Brain className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">AI/ML</span>
                  <span className="text-xs text-muted-foreground">Integration</span>
                </CardContent>
              </Card>
              <Card className="bg-[#1A1F2C] border-primary/20 hover:scale-102 transition-all duration-300">
                <CardContent className="flex flex-col items-center justify-center p-4 gap-2">
                  <Server className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">System</span>
                  <span className="text-xs text-muted-foreground">Architecture</span>
                </CardContent>
              </Card>
              <Card className="bg-[#1A1F2C] border-primary/20 hover:scale-102 transition-all duration-300">
                <CardContent className="flex flex-col items-center justify-center p-4 gap-2">
                  <Database className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">Data</span>
                  <span className="text-xs text-muted-foreground">Analytics</span>
                </CardContent>
              </Card>
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="relative" style={{ perspective: '1000px' }}>
              <div className="absolute top-0 left-0 w-full h-full bg-primary/10 rounded-full" style={{ transform: 'translateZ(-100px)' }} />
              <div className="absolute top-0 left-0 w-full h-full bg-accent/10 rounded-full" style={{ transform: 'translateZ(-50px)' }} />
            </div>
          </div>
        </section>
      );
    };

    export default Hero;
