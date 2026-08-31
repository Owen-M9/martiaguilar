import Hero from "@/components/Hero";
import CollabGrid from "@/components/CollabGrid";
import BrandsGrid from "@/components/BrandsGrid";
import PlaceholderSection from "@/components/PlaceholderSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <PlaceholderSection id="about-me" title="About me" />
      <CollabGrid />
      <PlaceholderSection id="asesorias" title="Asesorías 1:1" />
      <PlaceholderSection id="ebook" title="E-book" />
      <BrandsGrid />
    </main>
  );
}
