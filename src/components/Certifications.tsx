import { Card, CardContent, CardHeader } from "@/components/ui/card";
    import { Badge } from "@/components/ui/badge";
    import { GraduationCap, Cloud, Code, Brain } from "lucide-react";

    interface Certification {
      title: string;
      provider: string;
      period: string;
      description?: string;
      icon?: any;
      cardColor?: string;
    }

    const certifications: Certification[] = [
      {
        title: "Google Cloud Gen AI Study Jams Certification",
        provider: "Google Cloud Skill Boost",
        period: "May 2024",
        icon: Cloud,
        cardColor: "bg-blue-100/20 border-blue-300/20",
      },
      {
        title: "Generative AI with Large Language Models",
        provider: "Deeplearning.ai",
        period: "March 2024 - May 2024",
        icon: Brain,
        cardColor: "bg-green-100/20 border-green-300/20",
      },
      {
        title: "Deep Learning Specialization by Deeplearning.ai",
        provider: "Deeplearning.ai",
        period: "July 2023 – December 2023",
        icon: Brain,
        cardColor: "bg-purple-100/20 border-purple-300/20",
      },
      {
        title: "Google Cloud Computing Foundations",
        provider: "Google Cloud Skill Boost",
        period: "August 2023 - September 2023",
        icon: Cloud,
        cardColor: "bg-yellow-100/20 border-yellow-300/20",
      },
      {
        title: "Machine Learning Specialization by Deeplearning.ai",
        provider: "Deeplearning.ai & Stanford University",
        period: "June 2023 – September 2023",
        icon: Brain,
        cardColor: "bg-red-100/20 border-red-300/20",
      },
    ];

    const CertificationCard = ({ certification }: { certification: Certification }) => (
      <Card className={`group hover:scale-102 transition-all duration-300 bg-gradient-to-br from-card to-transparent border-primary/20 ${certification.cardColor}`}>
        <CardHeader className="flex flex-row items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            {certification.icon ? (
              <certification.icon className="h-6 w-6 text-primary" />
            ) : (
              <GraduationCap className="h-6 w-6 text-primary" />
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold gradient-text">{certification.title}</h3>
            <p className="text-sm text-muted-foreground">{certification.provider}</p>
            <p className="text-xs text-muted-foreground">{certification.period}</p>
          </div>
        </CardHeader>
        <CardContent className="p-3">
          {certification.description && (
            <p className="text-muted-foreground mb-4 leading-relaxed">{certification.description}</p>
          )}
        </CardContent>
      </Card>
    );

    const Certifications = () => {
      return (
        <section className="py-20 px-4 bg-gradient-to-b from-background to-card/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
              Certifications
            </h2>
            <div className="space-y-6">
              {certifications.map((certification) => (
                <CertificationCard key={certification.title} certification={certification} />
              ))}
            </div>
          </div>
        </section>
      );
    };

    export default Certifications;
