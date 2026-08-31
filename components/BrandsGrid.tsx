import Container from "./Container";
import BrandLogo from "./BrandLogo";
import { brandRows } from "@/data/brands";

export default function BrandsGrid() {
  return (
    <section className="py-16 border-t border-white/[10%]">
      <Container>
        <h2 className="text-2xl font-bold text-center mb-10">
          Marcas con las que colaboré
        </h2>
        <div className="md:hidden grid grid-cols-4 place-items-center gap-6">
          {brandRows.flat().map((brand) => (
            <BrandLogo key={brand.id} src={brand.logo} alt={brand.name} />
          ))}
        </div>

        <div className="hidden md:flex flex-col items-center gap-8">
          {brandRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center gap-6">
              {row.map((brand) => (
                <BrandLogo key={brand.id} src={brand.logo} alt={brand.name} />
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
