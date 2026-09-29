import Badge from "@/components/Badge";
import Container from "@/components/Container";

export default function AboutMe() {
  return (
    <section id="about-me" className="bg-cream py-12 md:py-27.5">
      <Container className="grid grid-cols-1 md:grid-cols-5 md:gap-12">
        <div className="md:col-span-2" />
        <div className="flex flex-col items-start gap-4.5 md:col-span-3">
          <Badge color="powder">Sobre mí</Badge>
          <h2 className="font-display text-5xl leading-[1.05] font-bold uppercase text-berry text-shadow-[4px_4px_0_var(--color-mint)]">
            La chica detrás
            <br />
            de la pantalla
          </h2>
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
