import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

const experiences: Experience[] = [
  {
    title: "Generative AI Intern",
    company: "Constituents AI",
    period: "February 2024 - March 2024",
    description: "Designed and deployed advanced AI models, including Diffusion and LLMs, achieving 40% boost in content creation efficiency. Collaborated with cross-functional teams to integrate AI models.",
    skills: ["AI Models", "LLMs", "Cross-functional collaboration"],
  },
  {
    title: "Programming Engineer Intern",
    company: "OGES Solutions Pvt Ltd",
    period: "December 2023 - January 2024",
    description: "Optimized Genetic Algorithms and Ant Colony Optimization for route optimization, achieving 75% improvement in performance. Developed data-driven prototypes for analyzing key driving parameters.",
    skills: ["Genetic Algorithms", "ACO", "Data Analysis"],
  },
  {
    title: "Teaching Assistant",
    company: "Department of Computer Science",
    period: "July 2023 - December 2023",
    description: "Assisted professors in conducting programming labs and tutorials. Helped students understand complex programming concepts and debug their code. Contributed to course material development.",
    skills: ["Teaching", "Programming", "Mentoring"],
  },
];

const ExperienceCard = ({ experience }: { experience: Experience }) => (
  <Card className="group hover:scale-102 transition-all duration-300 bg-gradient-to-br from-card to-transparent border-primary/20">
    <CardHeader className="flex flex-row items-center gap-4">
      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
        <Briefcase className="h-8 w-8 text-primary" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold gradient-text">{experience.title}</h3>
        <p className="text-muted-foreground">{experience.company}</p>
        <p className="text-sm text-muted-foreground">{experience.period}</p>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground mb-6 leading-relaxed">{experience.description}</p>
      <div className="flex flex-wrap gap-2">
        {experience.skills.map((skill) => (
          <Badge 
            key={skill} 
            variant="secondary" 
            className="hover:bg-primary/20 transition-colors duration-300"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;