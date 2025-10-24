import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex min-h-[70vh] items-center justify-center bg-medical-gradient">
        <div className="text-center px-4 animate-fade-up">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-accent uppercase tracking-wide">Error 404</span>
          </div>
          <h1 className="mb-6 text-7xl md:text-8xl font-bold font-heading text-foreground">404</h1>
          <p className="mb-8 text-2xl md:text-3xl text-muted-foreground">Oops! Page not found</p>
          <p className="mb-8 text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-luxury hover:shadow-luxury-hover px-10 py-7 text-lg transition-smooth">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
