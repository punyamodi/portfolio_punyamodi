import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, MessageSquare, Gamepad } from "lucide-react";

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  icon: Icon 
}: { 
  title: string; 
  description: string; 
  tags: string[]; 
  icon: any;
}) => (
  <Card className="group transition-all duration-300 hover:scale-102 bg-gradient-to-br from-[#1A1F2C] to-[#2A2F3C] border-primary/20">
    <CardHeader className="flex flex-row items-center gap-4">
      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <CardTitle className="text-xl gradient-text">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground mb-4 text-left">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge 
            key={tag} 
            variant="secondary"
            className="hover:bg-primary/20 transition-colors duration-300"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Projects = () => {
  const projects = [
    {
      title: "Voice Sentiment Analysis BERT",
      description: "Designed an audio analysis system with Gradio and Whisper ASR, improving transcription accuracy by 34% and sentiment analysis by 30% using advanced NLP techniques. Incorporated enhanced customer insights.",
      tags: ["Pandas", "Numpy", "Transformer", "NLP", "Gradio"],
      icon: Mic,
    },
    {
      title: "Mental Health Chatbot",
      description: "Integrated multimodal functionality, boosting user accessibility by 30%. Ranked 11th in IIIT Nagpur's Chatgpt-3.5 Solveathon out of 1000+ teams and reached top-6 in CRISPR's offline hackathon.",
      tags: ["Python", "OpenAI", "Gradio", "Pandas", "Scikit-Learn"],
      icon: MessageSquare,
    },
    {
      title: "Subway Surfers Motion Controller",
      description: "Created a motion-controlled version of Subway Surfers using Mediapipe and Movenet, increasing user engagement by 25% and reducing response time by 40%. Showcased at IIIT Bhopal's NIIMACK Fest.",
      tags: ["Mediapipe", "Movnet", "Numpy", "OpenCV"],
      icon: Gamepad,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-background to-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text animate-fade-in">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-in">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;