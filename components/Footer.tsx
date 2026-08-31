import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="py-8 mt-auto border-t border-white/[10%]">
      <Container className="relative flex flex-col md:flex-row md:justify-between items-center gap-6">
        <p className="text-gray-400 text-sm">
          © 2026 Marti Aguilar. Todos los derechos reservados.
        </p>

        <div className="flex gap-6 md:absolute md:left-1/2 md:-translate-x-1/2">
          <Link href="#hero" className="hover:text-white">
            Inicio
          </Link>
          <Link href="#about-me" className="hover:text-white">
            About me
          </Link>
          <Link href="#collabs" className="hover:text-white">
            Collabs
          </Link>
          <Link href="#asesorias" className="hover:text-white">
            Asesorías 1:1
          </Link>
          <Link href="#ebook" className="hover:text-white">
            E-book
          </Link>
          <Link href="#marcas" className="hover:text-white">
            Marcas
          </Link>
        </div>

        <SocialLinks />
      </Container>
    </footer>
  );
}
