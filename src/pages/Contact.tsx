import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Mail, Clock } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Contact = () => {
  const hours = [
    { day: "Monday", hours: "9:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
    { day: "Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-medical-gradient">
        <div className="container mx-auto px-4">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6 mx-auto text-center w-fit">
            <span className="text-sm font-medium text-accent uppercase tracking-wide">Get In Touch</span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-center mb-6 animate-fade-up text-foreground">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-up">
            Get in touch with our team to schedule your consultation
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {/* Location */}
              <div className="text-center animate-fade-up bg-secondary/30 p-8 rounded-lg shadow-luxury">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-4 shadow-md">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">Location</h3>
                <p className="text-muted-foreground">
                  Bole<br />
                  Addis Ababa, Ethiopia
                </p>
              </div>

              {/* Email */}
              <div className="text-center animate-fade-up bg-secondary/30 p-8 rounded-lg shadow-luxury" style={{ animationDelay: "0.1s" }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-4 shadow-md">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">Email</h3>
                <p className="text-muted-foreground">
                  bosphorus@gmail.com
                </p>
              </div>

              {/* Hours */}
              <div className="text-center animate-fade-up bg-secondary/30 p-8 rounded-lg shadow-luxury" style={{ animationDelay: "0.2s" }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent text-accent-foreground rounded-full mb-4 shadow-md">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday<br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="mb-20 animate-fade-up bg-secondary/30 p-8 rounded-lg shadow-luxury">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
                Operating Hours
              </h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Day</TableHead>
                    <TableHead className="font-semibold">Hours</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {hours.map((item) => (
                    <TableRow key={item.day}>
                      <TableCell className="font-medium">{item.day}</TableCell>
                      <TableCell className="text-muted-foreground">{item.hours}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Map Placeholder */}
            <div className="animate-fade-up">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
                Find Us
              </h2>
              <div className="w-full h-96 bg-secondary/30 border border-border rounded-lg shadow-luxury flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-accent" />
                  <p className="text-muted-foreground font-medium">Map integration placeholder</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Bole, Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
