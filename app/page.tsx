import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import CollabGrid from "@/components/CollabGrid";
import Ebook from "@/components/Ebook";
import Asesorias from "@/components/Asesorias";
import BrandsGrid from "@/components/BrandsGrid";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <CollabGrid />
      <Ebook />
      <Asesorias />
      <BrandsGrid />
    </main>
  );
}
