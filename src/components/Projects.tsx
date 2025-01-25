import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
    import { Badge } from "@/components/ui/badge";
    import { Mic, MessageSquare, Gamepad, Music, TrendingUp, Github, Film } from "lucide-react";
    import { Button } from "@/components/ui/button";

    const ProjectCard = ({ 
      title, 
      description, 
      tags, 
      icon: Icon,
      githubLink
    }: { 
      title: string; 
      description: string; 
      tags: string[]; 
      icon: any;
      githubLink?: string;
    }) => (
      <Card className="group transition-all duration-300 hover:scale-102 bg-gradient-to-br from-[#1A1F2C] to-[#2A2F3C] border-primary/20">
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-xl gradient-text flex-1">{title}</CardTitle>
          {githubLink && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open(githubLink, "_blank")}
              className="hover:bg-primary/20 transition-colors"
            >
              <Github className="h-4 w-4" />
            </Button>
          )}
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-muted-foreground mb-4 text-left leading-relaxed">{description}</p>
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
          githubLink: "https://github.com/punyamodi/voice-sentiment-analysis-bert"
        },
        {
          title: "Mental Health Chatbot",
          description: "Integrated multimodal functionality, boosting user accessibility by 30%. Ranked 11th in IIIT Nagpur's Chatgpt-3.5 Solveathon out of 1000+ teams and reached top-6 in CRISPR's offline hackathon.",
          tags: ["Python", "OpenAI", "Gradio", "Pandas", "Scikit-Learn"],
          icon: MessageSquare,
          githubLink: "https://github.com/punyamodi/Mental_Health_Chatbot"
        },
        {
          title: "Subway Surfers Motion Controller",
          description: "Created a motion-controlled version of Subway Surfers using Mediapipe and Movenet, increasing user engagement by 25% and reducing response time by 40%. Showcased at IIIT Bhopal's NIIMACK Fest.",
          tags: ["Mediapipe", "Movnet", "Numpy", "OpenCV"],
          icon: Gamepad,
          githubLink: "https://github.com/punyamodi/Subway-Surfers-Motion-Controlled"
        },
        {
          title: "Moodify",
          description: "Built a Spotify-inspired music application with multilingual support, a responsive design, and integration with the Saavn API. Optimized Axios caching for faster load times, ensuring a seamless experience. Integrated FaceAPI.js to provide emotion-based music recommendations, dynamically adapting playlists to users' moods. Secured sessions and authentication using OAuth 2.0 and JWT, ensuring a secure platform.",
          tags: ["React.js", "Redux", "Axios", "FaceAPI", "Saavn API", "OAuth 2.0", "JWT"],
          icon: Music,
          githubLink: "https://github.com/punyamodi/moodify"
        },
        {
          title: "Reinforcement Learning Trading Bot",
          description: "Built a Reinforcement Learning trading bot using Q-Learning, integrating technical indicators, LLMs for sentiment analysis, and feature engineering to predict market trends and optimize buy/sell strategies. Utilized NumPy and Pandas for data manipulation, designed reward functions for optimal decision-making, and implemented model evaluation metrics to ensure robust performance in volatile markets.",
          tags: ["Numpy", "Pandas", "Q-Learning", "LLMs", "Reinforcement Learning"],
          icon: TrendingUp,
          githubLink: "https://github.com/punyamodi/reinforcement-learning-trading-bot"
        },
        {
          title: "Movie Recommender System",
          description: "Developed a content-based movie recommender system using cosine similarity and TF-IDF vectorization. Implemented a user-friendly interface for movie search and recommendations, enhancing user engagement and discovery of relevant content.",
          tags: ["Python", "Pandas", "Scikit-Learn", "TF-IDF", "Cosine Similarity"],
          icon: Film,
          githubLink: "https://github.com/punyamodi/Movie_Recommender_System.git"
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
