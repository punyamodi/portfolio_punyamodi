import { Code, Database, Brain, GitBranch, Server, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";

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
    <Card className="bg-[#0D1117]/60 border-[#1F2937] p-6 rounded-lg backdrop-blur-sm hover:bg-[#1F2937]/40 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-white">{category.title}</h3>
      </div>
      <ul className="space-y-2">
        {category.skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary/60" />
            <span className="text-gray-300 hover:text-primary transition-colors duration-200">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-[#0A0F1A]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;