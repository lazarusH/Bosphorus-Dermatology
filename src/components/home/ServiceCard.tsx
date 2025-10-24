import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
}

const serviceImages: Record<string, string> = {
  'hair-transplant': 'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600&auto=format&fit=crop',
  'prp-therapy': 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&auto=format&fit=crop',
  'hydrafacial': 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop',
};

export const ServiceCard = ({ title, description, slug }: ServiceCardProps) => {
  const imageUrl = serviceImages[slug] || 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop';
  
  return (
    <Card className="group overflow-hidden border border-border bg-white shadow-luxury hover:shadow-luxury-hover transition-smooth h-full">
      <div className="h-[220px] overflow-hidden">
        <img 
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
      </div>
      <CardContent className="p-8">
        <h3 className="font-heading text-2xl font-semibold mb-4 text-foreground">{title}</h3>
        <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">{description}</p>
        <Link 
          to={`/services/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 group-hover:gap-4 transition-smooth"
        >
          Learn More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
};
