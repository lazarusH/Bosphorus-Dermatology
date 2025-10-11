import { useState } from "react";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

export const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging && e.type !== 'mousedown' && e.type !== 'touchstart') return;

    const container = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((clientX - container.left) / container.width) * 100;
    
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div 
      className="relative w-full h-full overflow-hidden cursor-ew-resize select-none"
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e);
      }}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMove}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e);
      }}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={handleMove}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <ImagePlaceholder 
          height="100%" 
          text="After Treatment"
          className="w-full h-full"
        />
      </div>

      {/* Before Image (Sliding overlay) */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <ImagePlaceholder 
          height="100%" 
          text="Before Treatment"
          className="w-full h-full absolute inset-0"
          style={{ width: '100vw', maxWidth: 'none' }}
        />
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-background cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-background border-2 border-foreground rounded-full flex items-center justify-center shadow-lg">
          <div className="flex gap-1">
            <div className="w-0.5 h-4 bg-foreground"></div>
            <div className="w-0.5 h-4 bg-foreground"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
