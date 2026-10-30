import Image from "next/image";

export function EditorialImage({
  src,
  alt,
  className = "",
  priority = false,
  reveal = true,
  sizes = "(max-width: 720px) 100vw, 50vw",
}) {
  return (
    <figure
      className={`story-image ${className}`}
      data-scroll-visual=""
      data-image-reveal={reveal ? "" : undefined}
    >
      <Image
        src={src}
        alt={alt}
        fill
        preload={priority}
        sizes={sizes}
        quality={75}
        className="story-image__img"
      />
    </figure>
  );
}
