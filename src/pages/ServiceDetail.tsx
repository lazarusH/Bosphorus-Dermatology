import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { services } from "@/data/services";
import beforeImage from "@/assets/before.png";
import afterImage from "@/assets/after.png";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-medical-gradient">
        <div className="container mx-auto px-4">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6 mx-auto text-center w-fit">
            <span className="text-sm font-medium text-accent uppercase tracking-wide">Treatment Details</span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-center mb-6 animate-fade-up text-foreground">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-up">
            {service.description}
          </p>
        </div>
      </section>

      {/* Service Images Gallery */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop"
              alt="Modern treatment room"
              className="w-full h-[300px] object-cover rounded-lg shadow-luxury"
            />
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&auto=format&fit=crop"
              alt="Advanced medical equipment"
              className="w-full h-[300px] object-cover rounded-lg shadow-luxury"
            />
            <img 
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop"
              alt="Professional consultation"
              className="w-full h-[300px] object-cover rounded-lg shadow-luxury"
            />
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-16 animate-fade-up">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-sm font-medium text-accent uppercase tracking-wide">Overview</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-foreground">Treatment Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {service.fullDescription}
              </p>
            </div>

            {/* Before/After Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="relative rounded-lg shadow-luxury overflow-hidden">
                <img 
                  src={beforeImage}
                  alt="Before Treatment"
                  className="w-full"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-4 py-2 rounded-full">
                  <span className="font-semibold text-foreground">Before</span>
                </div>
              </div>
              <div className="relative rounded-lg shadow-luxury overflow-hidden">
                <img 
                  src={afterImage}
                  alt="After Treatment"
                  className="w-full"
                />
                <div className="absolute top-4 left-4 bg-primary/90 px-4 py-2 rounded-full">
                  <span className="font-semibold text-foreground">After</span>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-16 bg-secondary/50 border border-border/50 rounded-lg p-8 shadow-luxury animate-fade-up">
              <div className="inline-block px-4 py-2 bg-white/70 rounded-full mb-6">
                <span className="text-sm font-medium text-accent uppercase tracking-wide">Benefits</span>
              </div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-foreground">Key Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/70 p-4 rounded-lg">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5 text-accent" />
                    <p className="text-foreground font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Treatment Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&auto=format&fit=crop"
                alt="Treatment Process"
                className="w-full h-[300px] object-cover rounded-lg shadow-luxury"
              />
              <img 
                src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&auto=format&fit=crop"
                alt="Treatment Results"
                className="w-full h-[300px] object-cover rounded-lg shadow-luxury"
              />
            </div>

            {/* CTA */}
            <div className="text-center animate-fade-up bg-medical-gradient p-12 rounded-lg shadow-luxury">
              <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Schedule a consultation with our expert team to discuss your treatment options
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-luxury hover:shadow-luxury-hover px-10 py-7 text-lg transition-smooth">
                  Book Your Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
