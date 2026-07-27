import CollabCard from "./CollabCard";
import { collaborations } from "@/data/collaborations";

export default function CollabGrid() {
  return (
    <section className="px-6 py-16">
      <h2 className="text-2xl font-bold text-center mb-10">Colaboraciones</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {collaborations.map((collab) => (
          <CollabCard key={collab.id} collaboration={collab} />
        ))}
      </div>
    </section>
  );
}
