import { Code, Database, Brain, GitBranch, Server, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  icon: any;
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: Code,
    title: "Frontend Development",
    skills: ["React.js", "JavaScript/TypeScript", "HTML5", "CSS3", "Redux", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: ["Node.js", "Python", "Django", "Flask", "SpringBoot", "RESTful APIs"],
  },
  {
    icon: Brain,
    title: "AI/ML",
    skills: ["TensorFlow", "scikit-learn", "Neural Networks", "LLMs", "Transformers", "Reinforcement Learning"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "SQL", "NoSQL"],
  },
  {
    icon: Cpu,
    title: "DevOps",
    skills: ["Docker", "Kubernetes", "AWS", "GCloud", "CI/CD", "Microservices"],
  },
  {
    icon: GitBranch,
    title: "Version Control",
    skills: ["Git", "GitHub", "GitLab", "Bitbucket"],
  },
];

const SkillCard = ({ category }: { category: SkillCategory }) => {
  const Icon = category.icon;
  return (
    <Card className="card-gradient animate-slide-up hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Icon className="h-8 w-8 text-primary" />
          <h3 className="text-xl font-semibold gradient-text">{category.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <Badge 
              key={skill} 
              variant="secondary"
              className="hover:bg-primary/20 transition-colors"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Skills = () => {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {skillCategories.map((category) => (
          <SkillCard key={category.title} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Skills;