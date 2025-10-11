import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
}

export const ServiceCard = ({ title, description, slug }: ServiceCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-lg transition-smooth">
      <CardContent className="p-8">
        <h3 className="font-heading text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6 line-clamp-3">{description}</p>
        <Link 
          to={`/services/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-4 transition-smooth"
        >
          Learn More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
};
