import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import CollabGrid from "@/components/CollabGrid";
import Ebook from "@/components/Ebook";
import BrandsGrid from "@/components/BrandsGrid";
import PlaceholderSection from "@/components/PlaceholderSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <CollabGrid />
      <Ebook />
      <PlaceholderSection id="asesorias" title="Asesorías 1:1" />
      <BrandsGrid />
    </main>
  );
}
