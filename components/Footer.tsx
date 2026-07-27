import Link from "next/link";
import {
  SiInstagram,
  SiYoutube,
  SiTiktok,
} from "@icons-pack/react-simple-icons";

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

      <div className="flex items-center gap-4">
        <a
          href="https://www.instagram.com/martiaguilar99/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@martinaaguilar99"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiTiktok />
        </a>
        <a
          href="https://www.youtube.com/@martiaguilar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiYoutube />
        </a>
      </div>

      <a href="mailto:marti@ejemplo.com" className="text-gray-400 text-sm">
        marti@ejemplo.com
      </a>
    </footer>
  );
}
