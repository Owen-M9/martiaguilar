import Image from "next/image";

interface PolaroidProps {
  src: string;
  alt: string;
  className?: string;
}

export default function Polaroid({ src, alt, className = "" }: PolaroidProps) {
  return (
    <div
      className={`rounded-md border-3 border-wine bg-cream px-3.5 pt-3.5 pb-12.5 ${className}`}
    >
      {/* 306×380: a 340px de ancho del marco, la foto mide 380px de alto */}
      <div className="relative aspect-[306/380] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(min-width: 768px) 310px, 65vw"
        />
      </div>
    </div>
  );
}
