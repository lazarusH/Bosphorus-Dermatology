import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-center mb-6 animate-fade-up">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-up">
            Comprehensive dermatology and aesthetic treatments tailored to your unique needs
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="block group"
              >
                <div
                  className="py-8 border-b border-border last:border-b-0 transition-smooth hover:bg-secondary/20 px-4 -mx-4 animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <h2 className="font-heading text-3xl font-semibold mb-3 group-hover:text-muted-foreground transition-smooth">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
