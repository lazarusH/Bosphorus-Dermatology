import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

const galleryImages = [
  {
    alt: "Skin treatment transformation results",
    title: "Skin Rejuvenation",
  },
  {
    alt: "Hair transplant transformation results",
    title: "Hair Restoration",
  },
  {
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
                    <ImagePlaceholder 
                      height="500px"
                      text={image.title}
                      className="w-full transition-smooth group-hover:scale-105"
                    />
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
