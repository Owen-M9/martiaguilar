import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-6 py-8 md:py-12 lg:py-16 border-t border-white/[10%]">
      <div className="relative mx-auto max-w-2xl aspect-[3/2]">
        <Image
          src="/images/hero-placeholder.jpeg"
          alt="Marti Aguilar"
          className="object-cover"
          priority
          fill
          sizes="(min-width: 672px) 672px, 100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center gap-6 px-6">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
            Marti Aguilar
          </h1>
          <p className="text-gray-400 max-w-xl">
            Texto de ejemplo que va a tener descripción o lo que sea que se
            decida colocar aca a modo de introducción sobre Marti.
          </p>
        </div>
      </div>
    </section>
  );
}
