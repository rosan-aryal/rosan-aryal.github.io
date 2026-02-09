import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface ProjectImageProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
}

export default function ProjectImage({
  src,
  alt,
  title,
  className = "",
}: ProjectImageProps) {
  const hasImage = src && src.trim() !== "";

  if (hasImage) {
    return <img src={src} alt={alt} className={`project-img ${className}`} />;
  }

  return (
    <Avatar className={`project-img ${className}`}>
      <AvatarImage src="" alt="" />
      <AvatarFallback className="project-fallback text-3xl">
        {title.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}
