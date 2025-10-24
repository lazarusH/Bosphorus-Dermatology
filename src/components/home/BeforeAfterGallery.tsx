import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import beforeImage from "@/assets/before.png";
import afterImage from "@/assets/after.png";

const galleryImages = [
  {
    url: afterImage,
    alt: "Skin treatment transformation results",
    title: "After Treatment Results",
  },
  {
    url: beforeImage,
    alt: "Before treatment condition",
    title: "Before Treatment",
  },
  {
    url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&auto=format&fit=crop",
    alt: "Professional dermatology consultation",
    title: "Professional Care",
  },
];

export const BeforeAfterGallery = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-accent uppercase tracking-wide">Transformations</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Real Results, Real Transformations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Witness the remarkable transformations achieved through our advanced treatments and expert care.
          </p>
        </div>

        <Carousel className="max-w-6xl mx-auto">
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-2">
                  <div className="relative overflow-hidden group rounded-lg shadow-luxury">
                    <img 
                      src={image.url}
                      alt={image.alt}
                      className="w-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <h3 className="text-white font-heading text-2xl font-semibold">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-accent text-accent-foreground hover:bg-accent/90 shadow-md" />
          <CarouselNext className="right-4 bg-accent text-accent-foreground hover:bg-accent/90 shadow-md" />
        </Carousel>
      </div>
    </section>
  );
};
