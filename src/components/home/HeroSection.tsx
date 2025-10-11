import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-clinic.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-up">
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-background mb-6 max-w-4xl mx-auto leading-tight">
          Bosphorus Dermatology & Aesthetic Center
        </h1>
        <p className="text-xl md:text-2xl text-background/90 mb-8 max-w-2xl mx-auto">
          Where Medical Excellence Meets Aesthetic Artistry
        </p>
        <Link to="/contact">
          <Button 
            size="lg" 
            className="bg-background text-foreground hover:bg-background/90 font-semibold px-8 py-6 text-lg transition-smooth"
          >
            Book Your Consultation
          </Button>
        </Link>
      </div>
    </section>
  );
};
