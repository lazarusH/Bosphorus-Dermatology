import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-medical-gradient">
        <div className="container mx-auto px-4">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6 mx-auto text-center w-fit">
            <span className="text-sm font-medium text-accent uppercase tracking-wide">Our Services</span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-center mb-6 animate-fade-up text-foreground">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-up">
            Comprehensive dermatology and aesthetic treatments tailored to your unique needs
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="block group"
              >
                <div
                  className="py-8 border-b border-border last:border-b-0 transition-smooth hover:bg-secondary/30 px-6 -mx-6 rounded-lg animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4 group-hover:text-accent transition-smooth text-foreground">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
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
