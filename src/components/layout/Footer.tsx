import { Link } from "react-router-dom";
import { Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-foreground py-16 mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img 
              src={logo}
              alt="Bosphorus Dermatology Center"
              className="h-20 mb-4 object-contain"
            />
            <p className="text-sm text-foreground/80 leading-relaxed">
              Leading dermatology and aesthetic center offering advanced treatments for skin care and hair restoration.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-foreground/80 hover:text-foreground transition-smooth">
                Home
              </Link>
              <Link to="/about" className="text-sm text-foreground/80 hover:text-foreground transition-smooth">
                About Us
              </Link>
              <Link to="/services" className="text-sm text-foreground/80 hover:text-foreground transition-smooth">
                Services
              </Link>
              <Link to="/contact" className="text-sm text-foreground/80 hover:text-foreground transition-smooth">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact Information</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 text-foreground/90" />
                <p className="text-sm text-foreground/80">Istanbul, Turkey</p>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0 text-foreground/90" />
                <p className="text-sm text-foreground/80">info@bosphorusdermatology.com</p>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0 text-foreground/90" />
                <p className="text-sm text-foreground/80">Mon-Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-foreground/70">
            © {new Date().getFullYear()} Bosphorus Dermatology & Aesthetic Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
