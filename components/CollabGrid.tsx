"use client";

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
    <section className="px-6 py-16 bg-white/[3%] relative z-10 border-t border-white/[10%]">
      <h2 className="text-2xl font-bold text-center mb-10">Colaboraciones</h2>
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 pb-4 min-h-[650px] items-center">
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
