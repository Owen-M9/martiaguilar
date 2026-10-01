import Image from "next/image";

const sizes = {
  sm: {
    circle: "size-16 border-3 shadow-[3px_3px_0_var(--color-wine)]",
    imageSizes: "64px",
  },
  md: {
    circle:
      "size-20 border-[2.5px] shadow-[4px_4px_0_var(--color-wine)] md:size-30",
    imageSizes: "(min-width: 768px) 120px, 80px",
  },
};

interface BrandLogoProps {
  src: string;
  alt: string;
  size?: keyof typeof sizes;
}

export default function BrandLogo({ src, alt, size = "md" }: BrandLogoProps) {
  const { circle, imageSizes } = sizes[size];

  return (
    // overflow-hidden no recorta la box-shadow del propio elemento, solo su contenido.
    <div
      className={`relative shrink-0 overflow-hidden rounded-full border-wine bg-white ${circle}`}
    >
      <Image
        src={src}
        alt={alt}
        className="object-cover"
        sizes={imageSizes}
        fill
      />
    </div>
  );
}
