import Badge from "@/components/Badge";
import Container from "@/components/Container";
import Polaroid from "@/components/Polaroid";
import SectionTitle from "@/components/SectionTitle";

export default function AboutMe() {
  return (
    <section id="about-me" className="bg-cream py-12 md:py-27.5">
      <Container className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_3fr]">
        <div>
          {/* 386×460: a 420px de ancho del marco, la foto mide 460px de alto */}
          <Polaroid
            src="/images/Marti_Aguilar/AboutMe.png"
            alt="Marti Aguilar"
            photoWidth={386}
            photoHeight={460}
            className="mx-auto w-full max-w-105 rotate-4 shadow-[9px_9px_0_var(--color-wine)]"
          />
        </div>
        <div className="flex flex-col items-start gap-4.5">
          <Badge color="powder">Sobre mí</Badge>
          <SectionTitle shadow="mint">
            La chica detrás
            <br />
            de la pantalla
          </SectionTitle>
          <p className="text-[17px] leading-[1.65] text-wine">
            Arranqué grabando videos con el celular por diversión y hoy es mi
            trabajo de todos los días. Me gusta contar las cosas como son, sin
            filtros de más, y encontrar el lado divertido hasta en el peor de los
            días.
          </p>
          <p className="text-[17px] leading-[1.65] text-wine">
            Cuando no estoy grabando o editando, me encontrás en un recital,
            probándome ropa que no voy a comprar o mandando memes al grupo de
            amigas. Todo lo que hago en redes sale de ahí: de ser yo, nada más.
          </p>
        </div>
      </Container>
    </section>
  );
}
