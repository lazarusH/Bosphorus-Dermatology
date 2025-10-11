import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { services } from "@/data/services";

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
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-center mb-6 animate-fade-up">
            {service.title}
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-up">
            {service.description}
          </p>
        </div>
      </section>

      {/* Service Images Gallery */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ImagePlaceholder height="300px" text="Treatment Image 1" className="w-full" />
            <ImagePlaceholder height="300px" text="Treatment Image 2" className="w-full" />
            <ImagePlaceholder height="300px" text="Treatment Image 3" className="w-full" />
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 animate-fade-up">
              <h2 className="font-heading text-3xl font-bold mb-6">Treatment Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {service.fullDescription}
              </p>
            </div>

            {/* Before/After Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <ImagePlaceholder height="350px" text="Before Treatment" className="w-full" />
              <ImagePlaceholder height="350px" text="After Treatment" className="w-full" />
            </div>

            {/* Benefits */}
            <Alert className="mb-12 border-foreground/20 bg-secondary/30 animate-fade-up">
              <AlertDescription>
                <h3 className="font-heading text-2xl font-bold mb-6">Key Benefits</h3>
                <div className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <p className="text-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </AlertDescription>
            </Alert>

            {/* Additional Treatment Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <ImagePlaceholder height="300px" text="Treatment Process" className="w-full" />
              <ImagePlaceholder height="300px" text="Results" className="w-full" />
            </div>

            {/* CTA */}
            <div className="text-center animate-fade-up">
              <h3 className="font-heading text-2xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6">
                Schedule a consultation with our expert team to discuss your treatment options
              </p>
              <Link to="/contact">
                <Button size="lg" className="px-8 py-6 text-lg">
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
