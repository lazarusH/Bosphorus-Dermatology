import { Link } from "react-router-dom";
import { Mail, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-xl mb-4">Bosphorus Dermatology</h3>
            <p className="text-sm text-background/80">
              Leading dermatology and aesthetic center offering advanced treatments for skin care and hair restoration.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-background/80 hover:text-background transition-smooth">
                Home
              </Link>
              <Link to="/about" className="text-sm text-background/80 hover:text-background transition-smooth">
                About Us
              </Link>
              <Link to="/services" className="text-sm text-background/80 hover:text-background transition-smooth">
                Services
              </Link>
              <Link to="/contact" className="text-sm text-background/80 hover:text-background transition-smooth">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <p className="text-sm text-background/80">Istanbul, Turkey</p>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <p className="text-sm text-background/80">info@bosphorusdermatology.com</p>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                <p className="text-sm text-background/80">Mon-Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Bosphorus Dermatology & Aesthetic Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
