import TikTokEmbed from "./TikTokEmbed";
import { Collaboration } from "@/data/collaborations";
import BrandLogo from "./BrandLogo";

interface CollabCardProps {
  collaboration: Collaboration;
  isSelected: boolean;
  onSelect: () => void;
  canHover: boolean;
  onDeselect: () => void;
}

export default function CollabCard({
  collaboration,
  isSelected,
  onSelect,
  canHover,
  onDeselect,
}: CollabCardProps) {
  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    onSelect();
    e.currentTarget.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  return (
    <div
      onClick={handleClick}
      onMouseEnter={canHover ? onSelect : undefined}
      onMouseLeave={canHover ? onDeselect : undefined}
      className={`flex flex-col items-center gap-3 flex-shrink-0 snap-center cursor-pointer transition-all duration-300 ${
        isSelected ? "w-[325px]" : "w-[160px]"
      }`}
    >
      <div className="relative flex flex-col items-center gap-3">
        {isSelected && (
          <BrandLogo
            src={collaboration.logo}
            alt={collaboration.brand}
            size="sm"
          />
        )}
        <TikTokEmbed videoUrl={collaboration.videoUrl} />
        {!isSelected && <div className="absolute inset-0" />}
      </div>
      <div className="text-center">
        <p className="font-semibold">{collaboration.brand}</p>
        <p className="text-gray-400 text-sm">{collaboration.campaign}</p>
      </div>
    </div>
  );
}
