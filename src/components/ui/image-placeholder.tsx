interface ImagePlaceholderProps {
  width?: string;
  height?: string;
  text?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ImagePlaceholder = ({ 
  width = "100%", 
  height = "400px", 
  text = "Image Placeholder",
  className = "",
  style
}: ImagePlaceholderProps) => {
  return (
    <div 
      className={`bg-secondary/30 border-2 border-border flex items-center justify-center ${className}`}
      style={{ width, height, ...style }}
    >
      <p className="text-muted-foreground font-medium">{text}</p>
    </div>
  );
};
