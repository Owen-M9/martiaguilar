"use client";

// import { useState } from "react";
import Image from "next/image";
import Badge from "@/components/Badge";
import Container from "@/components/Container";
import Polaroid from "@/components/Polaroid";
import SocialLinks from "@/components/SocialLinks";

const buttonBase =
  "rounded-full border-3 px-6.5 py-3.5 text-base font-bold";

export default function Hero() {
  // const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section className="py-12 md:py-24 relative overflow-hidden bg-blush" id="hero">
      <Container className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex flex-col items-start gap-5.5">
          <Badge color="butter">Content creator</Badge>
          <h1>
            <Image
              src="/images/logo/logo-wordmark.png"
              alt="Marti Aguilar"
              width={2544}
              height={780}
              priority
              className="h-auto w-full max-w-72 md:max-w-120"
              sizes="(min-width: 768px) 480px, 288px"
            />
          </h1>
          <p className="max-w-130 text-[19px] leading-[1.55] text-wine">
            Creo contenido para TikTok, Instagram y YouTube con humor,
            autenticidad y un toque bien pop. Colaboro con marcas que se animan
            a sumarse a la fiesta — sin perder mi esencia en el camino.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href="#collabs"
              className={`${buttonBase} border-wine bg-berry text-cream shadow-[5px_5px_0_var(--color-wine)]`}
            >
              Ver colaboraciones
            </a>
            <a href="#asesorias" className={`${buttonBase} border-berry text-berry`}>
              Trabajemos juntos
            </a>
          </div>
          <SocialLinks variant="circle" />
        </div>
        <div className="relative mx-auto aspect-[520/620] w-full max-w-130">
          <Polaroid
            src="/images/Marti_Aguilar/Hero_2.jpg"
            alt="Foto de Marti Aguilar"
            className="absolute top-0 right-0 w-[65.4%] rotate-7 shadow-[7px_7px_0_var(--color-berry)]"
          />
          <Polaroid
            src="/images/Marti_Aguilar/Hero_1.jpg"
            alt="Foto de Marti Aguilar"
            className="absolute bottom-0 left-0 z-10 w-[65.4%] -rotate-4 shadow-[9px_9px_0_var(--color-berry)]"
          />
        </div>
      </Container>
      {/* Easter egg de Cookie, oculto temporalmente */}
      {/*
      <Image
        src="/images/Cookie-logo.PNG"
        alt="Cookie"
        className={`absolute bottom-0 right-4 transition-transform duration-300 cursor-pointer ${
          isRevealed ? "translate-y-0" : "translate-y-[51%]"
        }`}
        // ${!isRevealed ? "animate-bounce" : ""} es para que la imagen rebote
        priority
        width={280}
        height={280}
        onMouseEnter={() => setIsRevealed(true)}
        onMouseLeave={() => setIsRevealed(false)}
        onClick={() => setIsRevealed((prev) => !prev)}
      />
      */}
    </section>
  );
}
