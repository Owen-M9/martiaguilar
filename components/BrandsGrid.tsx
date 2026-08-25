import Container from "./Container";
import BrandLogo from "./BrandLogo";
import { brandRows } from "@/data/brands";

export default function BrandsGrid() {
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-2xl font-bold text-center mb-10">
          Marcas con las que colaboré
        </h2>
        <div className="flex flex-col items-center gap-8">
          {brandRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-center gap-6">
              {row.map((brand) => (
                <BrandLogo key={brand.id} brand={brand} />
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
