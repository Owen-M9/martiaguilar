import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row md:justify-between items-center gap-6 px-6 py-8 mt-auto">
      <p className="text-gray-400 text-sm">
        © 2026 Marti Aguilar. Todos los derechos reservados.
      </p>

      <div className="flex gap-6">
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

      <a href="mailto:marti@ejemplo.com" className="text-gray-400 text-sm">
        marti@ejemplo.com
      </a>
    </footer>
  );
}
