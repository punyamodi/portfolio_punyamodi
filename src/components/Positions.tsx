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
  <Card className="card-gradient animate-slide-up hover:shadow-lg transition-shadow duration-300">
    <CardHeader className="flex flex-row items-center gap-4">
      {position.icon === "ml" ? (
        <Brain className="h-8 w-8 text-primary" />
      ) : (
        <GraduationCap className="h-8 w-8 text-primary" />
      )}
      <div className="flex-1">
        <h3 className="text-xl font-semibold gradient-text">{position.title}</h3>
        <p className="text-muted-foreground">{position.organization}</p>
        <p className="text-sm text-muted-foreground">{position.period}</p>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground mb-4">{position.description}</p>
      <div className="flex flex-wrap gap-2">
        {position.skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="hover:bg-primary/20 transition-colors">
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
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
        Positions of Responsibility
      </h2>
      <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
        {positions.map((position) => (
          <PositionCard key={position.title} position={position} />
        ))}
      </div>
    </section>
  );
};

export default Positions;