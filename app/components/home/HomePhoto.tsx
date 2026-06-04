import Image from "next/image";

type HomePhotoProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  quality?: number;
};

const DEFAULT_SIZES = "(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1240px";

export default function HomePhoto({
  src,
  alt,
  className,
  priority = false,
  sizes = DEFAULT_SIZES,
  fill = false,
  quality = 85,
}: HomePhotoProps) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        priority={priority}
        sizes={sizes}
        quality={quality}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1600}
      height={1200}
      className={className}
      priority={priority}
      sizes={sizes}
      quality={quality}
      style={{ width: "100%", height: "auto" }}
    />
  );
}
