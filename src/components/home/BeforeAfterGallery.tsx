import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import beforeAfter3 from "@/assets/before-after-3.jpg";

const galleryImages = [
  {
    src: beforeAfter1,
    alt: "Skin treatment transformation results",
    title: "Skin Rejuvenation",
  },
  {
    src: beforeAfter2,
    alt: "Hair transplant transformation results",
    title: "Hair Restoration",
  },
  {
    src: beforeAfter3,
    alt: "Hydrafacial treatment results",
    title: "Hydrafacial Treatment",
  },
];

export const BeforeAfterGallery = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Real Results, Real Transformations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Witness the remarkable transformations achieved through our advanced treatments and expert care.
          </p>
        </div>

        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {galleryImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="relative overflow-hidden group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto object-cover transition-smooth group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-foreground/80 text-background p-4">
                      <h3 className="font-heading text-xl font-semibold">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
};
