import Image from "next/image";

export function MenuCard({
  src,
  alt,
  ariaHidden = false,
  className = "",
  sizes,
}: {
  src: string;
  alt: string;
  ariaHidden?: boolean;
  className?: string;
  sizes: string;
}) {
  return (
    <figure className={`image-frame ${className}`} aria-hidden={ariaHidden || undefined}>
      <Image src={src} alt={alt} fill sizes={sizes} className="image-frame__media" />
    </figure>
  );
}
