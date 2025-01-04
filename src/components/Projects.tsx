import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectCard = ({ title, description, tags }: { title: string; description: string; tags: string[] }) => (
  <Card className="card-gradient">
    <CardHeader>
      <CardTitle className="text-xl gradient-text">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">{tag}</Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Projects = () => {
  const projects = [
    {
      title: "Moodify",
      description: "A Spotify-inspired music application with multilingual support and emotion-based music recommendations using FaceAPI.",
      tags: ["React.js", "Redux", "Axios", "FaceAPI", "OAuth 2.0"],
    },
    {
      title: "Reinforcement Learning Trading Bot",
      description: "Built a sophisticated trading bot using Q-Learning and LLMs for sentiment analysis, featuring technical indicators and feature engineering.",
      tags: ["Python", "NumPy", "Pandas", "Q-Learning", "LLMs"],
    },
  ];

  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;