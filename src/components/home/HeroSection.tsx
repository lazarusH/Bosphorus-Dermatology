import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="animate-fade-up">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Bosphorus Dermatology & Aesthetic Center
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Where Medical Excellence Meets Aesthetic Artistry
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-foreground text-background hover:bg-background hover:text-foreground hover:border-2 hover:border-foreground font-semibold px-8 py-6 text-lg transition-smooth"
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
    </section>
  );
};
