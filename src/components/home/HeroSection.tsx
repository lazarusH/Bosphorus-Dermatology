import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-medical-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="animate-fade-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-medium text-accent">Premium Dermatology Care</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
              Bosphorus Dermatology & Aesthetic Center
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Where Medical Excellence Meets Aesthetic Artistry
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="btn-animated-gradient text-foreground shadow-luxury hover:shadow-luxury-hover font-semibold px-10 py-7 text-lg border-0"
              >
                Book Your Consultation
              </Button>
            </Link>
          </div>

          {/* Right Side - Before/After Slider */}
          <div className="h-[500px] lg:h-[600px] animate-fade-up">
            <BeforeAfterSlider />
          </div>
        </div>
      </div>
      
      {/* Animated Gradient Bottom with Fade Motion */}
      <div className="absolute bottom-0 left-0 right-0 h-48 hero-gradient-wave"></div>
    </section>
  );
};
