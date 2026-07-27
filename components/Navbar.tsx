"use client";

import { useState } from "react";
import NavLink from "@/components/NavLink";
import SocialLinks from "@/components/SocialLinks";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="h-10 px-4 rounded-full bg-white flex items-center justify-center text-black font-bold whitespace-nowrap">
          Marti Aguilar
        </div>
        <div className=" hidden md:flex gap-6">
          <NavLink href="/"> Inicio</NavLink>
          <NavLink href="/cursos">Coming Soon</NavLink>
          <NavLink href="/contacto">Contacto</NavLink>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <div className="hidden md:flex">
            <SocialLinks />
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-end gap-4 px-6 pb-4">
          <NavLink href="/" onClick={() => setIsMenuOpen(false)}>
            {" "}
            Inicio
          </NavLink>
          <NavLink href="/cursos" onClick={() => setIsMenuOpen(false)}>
            Coming Soon
          </NavLink>
          <NavLink href="/contacto" onClick={() => setIsMenuOpen(false)}>
            Contacto
          </NavLink>

          <SocialLinks />
        </div>
      )}
    </>
  );
}
