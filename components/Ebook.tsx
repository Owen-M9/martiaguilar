import Image from "next/image";
import Badge from "@/components/Badge";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

export default function Ebook() {
  return (
    <section id="ebook" className="bg-butter py-12 md:py-25">
      <Container className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center md:gap-17.5">
        <div className="flex max-w-140 flex-col items-start gap-4">
          <Badge color="white">E-book gratuito</Badge>
          <SectionTitle shadow="magenta">
            Guía gratis: primeros pasos
            <br />
            como content creator
          </SectionTitle>
          <p className="text-base leading-[1.6] text-wine/85">
            Dejá tu mail y te mando una guía en PDF con los primeros pasos para
            arrancar como content creator: cómo grabar, animarte a mostrarte y
            publicar con confianza. El puntapié inicial antes de pedir una
            asesoría 1:1.
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-120">
          <div
            aria-hidden
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-[14px] border-3 border-wine bg-magenta"
          />
          <div className="relative -rotate-3 rounded-[14px] border-3 border-wine bg-cream px-2.5 pt-2.5 pb-3.5 shadow-[7px_7px_0_var(--color-berry)]">
            <div className="relative aspect-[455/307] overflow-hidden rounded-md">
              <Image
                src="/images/Marti_Aguilar/Ebook.jpg"
                alt="Marti Aguilar"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 455px, 100vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
