import { Card, CardContent } from "@/components/ui/card";
    import * as React from "react";

    const About = () => {
      return (
        <section className="py-10 px-4 relative">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-card to-transparent border-primary/20">
              <CardContent className="p-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 gradient-text">
                  About Me
                </h2>
                <p className="text-muted-foreground leading-relaxed text-center">
                  I'm a Computer Science student at IIIT Bhopal, driven by a passion for creating innovative solutions. My expertise spans full-stack web development, AI model integration, and algorithm optimization. Always eager to learn and contribute to impactful projects that push the boundaries of what's possible.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            {/* Placeholder for 3D character animation */}
            <div className="h-40 w-40 rounded-full bg-primary/10 animate-spin-slow" />
          </div>
        </section>
      );
    };

    export default About;
