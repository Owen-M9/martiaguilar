import { Brand } from "@/data/brands";
import Image from "next/image";

interface BrandLogoProps {
  brand: Brand;
}

export default function BrandLogo({ brand }: BrandLogoProps) {
  return (
    <div className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full">
      <Image
        src={brand.logo}
        alt={brand.name}
        className="object-cover"
        sizes="96px"
        fill
      />
    </div>
  );
}
