import { Brand } from "@/data/brands";
import Image from "next/image";

interface BrandLogoProps {
  brand: Brand;
}

export default function BrandLogo({ brand }: BrandLogoProps) {
  return (
    <div className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-white/10 bg-white/5">
      <Image
        src={brand.logo}
        alt={brand.name}
        className="object-contain"
        sizes="96px"
        fill
      />
    </div>
  );
}
