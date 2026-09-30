import Image from "next/image";

interface PolaroidProps {
  src: string;
  alt: string;
  className?: string;
  // Medidas de la foto con el marco a su ancho de diseño; la foto escala manteniendo esta proporción.
  photoWidth?: number;
  photoHeight?: number;
}

export default function Polaroid({
  src,
  alt,
  className = "",
  photoWidth = 306,
  photoHeight = 380,
}: PolaroidProps) {
  return (
    <div
      className={`rounded-md border-3 border-wine bg-cream px-3.5 pt-3.5 pb-12.5 ${className}`}
    >
      <div
        className="relative w-full"
        style={{ aspectRatio: `${photoWidth} / ${photoHeight}` }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes={`(min-width: 768px) ${photoWidth}px, 100vw`}
        />
      </div>
    </div>
  );
}
