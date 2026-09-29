"use client";

// import { useState } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import SocialLinks from "@/components/SocialLinks";

export default function Hero() {
  // const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section className="py-12 md:py-24 relative overflow-hidden bg-blush" id="hero">
      <Container className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-start gap-5.5">
          <p className="rounded-full border-[2.5px] border-wine bg-butter px-4 py-1.75 text-[13px] font-bold uppercase tracking-[0.4px] text-wine">
            Content creator
          </p>
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
          <SocialLinks variant="circle" />
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
