import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import Container from "./Container";

const linkClass =
  "font-display text-[13px] font-semibold uppercase tracking-[0.3px] text-wine hover:text-berry";

export default function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-wine/18 bg-cream pt-6.5 pb-8">
      <Container className="flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link href="#hero" className={linkClass}>
            Inicio
          </Link>
          <Link href="#about-me" className={linkClass}>
            Sobre mí
          </Link>
          <Link href="#collabs" className={linkClass}>
            Colabs
          </Link>
          <Link href="#ebook" className={linkClass}>
            E-book
          </Link>
          <Link href="#asesorias" className={linkClass}>
            Asesorías
          </Link>
          <Link href="#marcas" className={linkClass}>
            Marcas
          </Link>
        </div>

        <SocialLinks variant="compact" />

        <p className="text-center text-[13px] text-wine/65">
          © 2026 Marti Aguilar. Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}
