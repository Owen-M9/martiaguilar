import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Container from "@/components/Container";
import Polaroid from "@/components/Polaroid";
import SectionTitle from "@/components/SectionTitle";

export default function Asesorias() {
  return (
    <section id="asesorias" className="bg-mauve py-12 md:py-25">
      <Container className="flex flex-col gap-12 md:flex-row md:items-center md:justify-center md:gap-15">
        <div className="flex w-full max-w-135 flex-col items-start gap-4">
          <Badge color="cream">Asesorías 1:1</Badge>
          <SectionTitle shadow="cream">
            Asesorías personalizadas
            <br />
            para crecer como influencer
          </SectionTitle>
          <p className="text-base leading-[1.6] text-wine/85">
            Una reunión 1:1 conmigo para armar tu estrategia de crecimiento:
            cómo ganar seguidores, conseguir marcas y construir una comunidad
            real. Los detalles de agenda y pago se van a terminar de definir
            próximamente — por ahora, esto es solo un adelanto de la sección.
          </p>
          <Button variant="muted" disabled>
            Muy pronto
          </Button>
        </div>
        {/* 246×310: a 280px de ancho del marco, la foto mide 310px de alto */}
        <Polaroid
          src="/images/Marti_Aguilar/Asesorias.jpg"
          alt="Marti Aguilar"
          photoWidth={246}
          photoHeight={310}
          className="w-70 shrink-0 self-center -rotate-4 shadow-[9px_9px_0_var(--color-wine)]"
        />
      </Container>
    </section>
  );
}
