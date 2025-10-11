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
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-center mb-6 animate-fade-up">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto animate-fade-up">
            Get in touch with our team to schedule your consultation
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Location */}
              <div className="text-center animate-fade-up">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-foreground text-background rounded-full mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">
                  Bosphorus District<br />
                  Istanbul, Turkey<br />
                  34000
                </p>
              </div>

              {/* Email */}
              <div className="text-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-foreground text-background rounded-full mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">
                  info@bosphorusdermatology.com<br />
                  appointments@bosphorusdermatology.com
                </p>
              </div>

              {/* Hours */}
              <div className="text-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-foreground text-background rounded-full mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday<br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="mb-16 animate-fade-up">
              <h2 className="font-heading text-3xl font-bold mb-6 text-center">
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
              <h2 className="font-heading text-3xl font-bold mb-6 text-center">
                Find Us
              </h2>
              <div className="w-full h-96 bg-secondary/30 border border-border flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">Map integration placeholder</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Bosphorus District, Istanbul, Turkey
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
