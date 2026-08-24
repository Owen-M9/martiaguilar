import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="py-8 mt-auto">
      <Container className="relative flex flex-col md:flex-row md:justify-between items-center gap-6">
      <p className="text-gray-400 text-sm">
        © 2026 Marti Aguilar. Todos los derechos reservados.
      </p>

      <div className="flex gap-6 md:absolute md:left-1/2 md:-translate-x-1/2">
        <Link href="/" className="hover:text-white">
          Inicio
        </Link>
        <Link href="/cursos" className="hover:text-white">
          Coming Soon
        </Link>
        <Link href="/contacto" className="hover:text-white">
          Contacto
        </Link>
      </div>

      <SocialLinks />
      </Container>
    </footer>
  );
}
