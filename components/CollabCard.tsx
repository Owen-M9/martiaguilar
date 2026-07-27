import TikTokEmbed from "./TikTokEmbed";
import { Collaboration } from "@/data/collaborations";

interface CollabCardProps {
  collaboration: Collaboration;
}

export default function CollabCard({ collaboration }: CollabCardProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <TikTokEmbed videoUrl={collaboration.videoUrl} />
      <div className="text-center">
        <p className="font-semibold">{collaboration.brand}</p>
        <p className="text-gray-400 text-sm">{collaboration.campaign}</p>
      </div>
    </div>
  );
}
