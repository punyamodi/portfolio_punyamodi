import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, GraduationCap } from "lucide-react";

interface Position {
  title: string;
  organization: string;
  period: string;
  description: string;
  skills: string[];
  icon: "ml" | "tech";
}

const positions: Position[] = [
  {
    title: "Machine Learning Developer",
    organization: "Google Developer Student Clubs",
    period: "August 2023 - Present",
    description: "Led machine learning initiatives and workshops, developing innovative solutions for real-world problems. Mentored students in ML concepts and implemented various ML models for community projects.",
    skills: ["Machine Learning", "Technical Leadership", "Mentoring"],
    icon: "ml"
  },
  {
    title: "Technical Secretary",
    organization: "Computer Science Department",
    period: "June 2023 - Present",
    description: "Organized technical events and workshops, managing departmental technical activities. Coordinated with various teams to ensure smooth execution of technical programs and initiatives.",
    skills: ["Event Management", "Leadership", "Technical Coordination"],
    icon: "tech"
  }
];

const PositionCard = ({ position }: { position: Position }) => (
  <Card className="group hover:scale-102 transition-all duration-300 bg-gradient-to-br from-card to-transparent border-primary/20">
    <CardHeader className="flex flex-row items-center gap-4">
      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
        {position.icon === "ml" ? (
          <Brain className="h-8 w-8 text-primary" />
        ) : (
          <GraduationCap className="h-8 w-8 text-primary" />
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold gradient-text">{position.title}</h3>
        <p className="text-muted-foreground">{position.organization}</p>
        <p className="text-sm text-muted-foreground">{position.period}</p>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground mb-6 leading-relaxed">{position.description}</p>
      <div className="flex flex-wrap gap-2">
        {position.skills.map((skill) => (
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

const Positions = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Positions of Responsibility
        </h2>
        <div className="space-y-8">
          {positions.map((position) => (
            <PositionCard key={position.title} position={position} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Positions;