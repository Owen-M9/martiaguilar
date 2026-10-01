import Badge from "@/components/Badge";
import SectionTitle from "@/components/SectionTitle";
import Container from "./Container";
import BrandLogo from "./BrandLogo";
import { brandRows } from "@/data/brands";

export default function BrandsGrid() {
  return (
    <section className="py-16 bg-cream" id="marcas">
      <Container>
        <div className="mb-10 flex flex-col items-center gap-3.5 text-center">
          <Badge color="bubblegum">Marcas</Badge>
          <SectionTitle shadow="butter">Marcas que ya confiaron</SectionTitle>
        </div>
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
