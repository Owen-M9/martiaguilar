import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import CollabGrid from "@/components/CollabGrid";
import BrandsGrid from "@/components/BrandsGrid";
import PlaceholderSection from "@/components/PlaceholderSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <CollabGrid />
      <PlaceholderSection id="ebook" title="E-book" />
      <PlaceholderSection id="asesorias" title="Asesorías 1:1" />
      <BrandsGrid />
    </main>
  );
}
