"use client";

import Badge from "@/components/Badge";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import CollabCard from "./CollabCard";
import { collaborations } from "@/data/collaborations";
import { useState, useSyncExternalStore } from "react";

function subscribeToHoverChange(callback: () => void) {
  const mediaQuery = window.matchMedia("(hover: hover)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getCanHoverSnapshot() {
  return window.matchMedia("(hover: hover)").matches;
}

function getCanHoverServerSnapshot() {
  return false;
}

export default function CollabGrid() {
  const [selectedCollabId, setSelectedCollabId] = useState<string | null>(null);

  const canHover = useSyncExternalStore(
    subscribeToHoverChange,
    getCanHoverSnapshot,
    getCanHoverServerSnapshot,
  );

  return (
    <section
      className="py-16 bg-powder relative z-10"
      id="collabs"
    >
      <Container className="mb-10 flex flex-col items-start gap-3.5">
        <Badge color="butter">Colaboraciones</Badge>
        <SectionTitle shadow="azure">
          Marcas con las que
          <br />
          ya la rompimos
        </SectionTitle>
      </Container>
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-12 pb-4 min-h-[650px] items-center">
        {collaborations.map((collaboration) => (
          <CollabCard
            key={collaboration.id}
            collaboration={collaboration}
            isSelected={collaboration.id === selectedCollabId}
            onSelect={() => setSelectedCollabId(collaboration.id)}
            onDeselect={() =>
              setSelectedCollabId((prev) =>
                prev === collaboration.id ? null : prev,
              )
            }
            canHover={canHover}
          />
        ))}
      </div>
    </section>
  );
}
