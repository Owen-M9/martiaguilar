import Image from "next/image";

interface BrandLogoProps {
  src: string;
  alt: string;
  size?: "sm" | "md";
}

export default function BrandLogo({ src, alt, size = "md" }: BrandLogoProps) {
  const sizeClasses = size === "sm" ? "h-16 w-16" : "h-20 w-20 sm:h-24 sm:w-24";

  return (
    <div
      className={`relative ${sizeClasses} overflow-hidden rounded-full border border-white/10 bg-white/5`}
    >
      <Image
        src={src}
        alt={alt}
        className="object-contain"
        sizes={size === "sm" ? "64px" : "96px"}
        fill
      />
    </div>
  );
}
