import { Code, Database, Brain, GitBranch, Server, Cpu } from "lucide-react";
    import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        <Card className="group hover:scale-102 transition-all duration-300 bg-gradient-to-br from-card to-transparent border-primary/20 skill-card">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Icon className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-xl font-semibold gradient-text">{category.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
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
          </CardContent>
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
