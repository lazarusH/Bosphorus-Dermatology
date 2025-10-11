import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { services } from "@/data/services";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background border-b border-border transition-smooth ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <ImagePlaceholder 
              width={scrolled ? "40px" : "56px"}
              height={scrolled ? "40px" : "56px"}
              text="Logo"
              className="transition-smooth"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-smooth hover:text-foreground ${
                  location.pathname === item.href ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth focus:outline-none">
                Services
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 max-h-96 overflow-y-auto bg-background z-50 border border-border">
                {services.map((service) => (
                  <DropdownMenuItem key={service.slug} asChild>
                    <Link 
                      to={`/services/${service.slug}`}
                      className="cursor-pointer w-full"
                    >
                      {service.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/contact">
              <Button variant="default" size="sm">
                Book Consultation
              </Button>
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-96 overflow-y-auto">
              <div className="flex flex-col gap-6 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className={`text-lg font-medium transition-smooth hover:text-foreground ${
                      location.pathname === item.href ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Services List */}
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold mb-3 text-foreground">All Services</p>
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
                
                <Link to="/contact" onClick={() => setOpen(false)}>
                  <Button variant="default" className="w-full">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
