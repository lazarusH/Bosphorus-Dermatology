import { HeroSection } from "@/components/home/HeroSection";
import { ServiceCard } from "@/components/home/ServiceCard";
import { BeforeAfterGallery } from "@/components/home/BeforeAfterGallery";
import { featuredServices } from "@/data/services";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />

      {/* About Snippet */}
      <section className="py-24 container mx-auto px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-accent uppercase tracking-wide">About Us</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Welcome to Bosphorus
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Bosphorus Dermatology & Aesthetic Center, we blend cutting-edge medical expertise 
            with aesthetic artistry to deliver transformative results. Our board-certified dermatologists 
            and aesthetic specialists are dedicated to helping you achieve your skin and hair goals 
            through personalized, evidence-based treatments in a luxurious, comfortable environment.
          </p>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block px-4 py-2 bg-white/50 rounded-full mb-6">
              <span className="text-sm font-medium text-accent uppercase tracking-wide">Our Services</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Featured Treatments
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Discover our most sought-after treatments designed to enhance your natural beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                slug={service.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <BeforeAfterGallery />
      <Footer />
    </div>
  );
};

export default Home;
