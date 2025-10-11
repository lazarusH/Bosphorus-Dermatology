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
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
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
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Our Featured Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
