import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle } from "lucide-react";
import clinicInterior from "@/assets/clinic-interior.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-center mb-6 animate-fade-up">
            About Bosphorus
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-up">
            Excellence in Dermatology & Aesthetic Medicine
          </p>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-up">
              <img
                src={clinicInterior}
                alt="Bosphorus Dermatology Clinic Interior"
                className="w-full h-auto object-cover shadow-lg"
              />
            </div>
            <div className="animate-fade-up">
              <h2 className="font-heading text-4xl font-bold mb-6">Our Philosophy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Bosphorus Dermatology & Aesthetic Center, we believe that true beauty emerges 
                from healthy, well-cared-for skin. Our philosophy combines medical excellence with 
                aesthetic artistry, ensuring every treatment is both scientifically sound and 
                aesthetically refined.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We don't just treat symptoms—we address the root causes of skin and hair concerns 
                using evidence-based medicine and the latest technological innovations. Our goal 
                is to help you look and feel your absolute best while maintaining the natural 
                beauty that makes you unique.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every patient receives personalized care in our state-of-the-art facility, where 
                comfort meets cutting-edge technology. We're committed to delivering exceptional 
                results while prioritizing your safety, comfort, and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Dermatology */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl font-bold mb-8 text-center animate-fade-up">
              Comprehensive Dermatology & Aesthetic Care
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 animate-fade-up">
              Our practice encompasses the full spectrum of dermatological and aesthetic services. 
              From medical dermatology addressing skin diseases and conditions to advanced cosmetic 
              procedures enhancing your appearance, we offer complete care under one roof.
            </p>
            <p className="text-muted-foreground leading-relaxed animate-fade-up">
              Our board-certified dermatologists and licensed aesthetic practitioners stay at the 
              forefront of medical advancements, continuously updating their skills and knowledge to 
              bring you the most effective, safest treatments available. We invest in the latest 
              FDA-approved technologies and premium products to ensure superior outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Bosphorus */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl font-bold mb-12 text-center animate-fade-up">
              Why Choose Bosphorus
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Board-certified dermatologists and experienced aesthetic specialists",
                "State-of-the-art facility with cutting-edge technology",
                "Personalized treatment plans tailored to your unique needs",
                "Comprehensive range of medical and cosmetic services",
                "Evidence-based treatments with proven results",
                "Commitment to patient safety and satisfaction",
                "Luxurious, comfortable environment",
                "Ongoing support and follow-up care",
                "Transparent pricing and consultation",
                "Convenient location in Istanbul",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
