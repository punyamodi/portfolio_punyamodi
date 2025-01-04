import { Code, Database, Brain, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SkillCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <Card className="card-gradient">
    <CardContent className="p-6 flex flex-col items-center text-center">
      <Icon className="h-12 w-12 mb-4 text-primary" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const Skills = () => {
  const skills = [
    {
      icon: Code,
      title: "Full Stack",
      description: "Development",
    },
    {
      icon: Brain,
      title: "AI/ML",
      description: "Integration",
    },
    {
      icon: Database,
      title: "System",
      description: "Architecture",
    },
    {
      icon: BarChart,
      title: "Data",
      description: "Analytics",
    },
  ];

  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {skills.map((skill) => (
          <SkillCard key={skill.title} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;