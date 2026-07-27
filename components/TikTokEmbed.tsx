interface TikTokEmbedProps {
  videoUrl: string;
}

export default function TikTokEmbed({ videoUrl }: TikTokEmbedProps) {
  const videoId = videoUrl.split("/").pop();

  return (
    <iframe
      src={`https://www.tiktok.com/player/v1/${videoId}`}
      className="w-full aspect-[9/16] max-w-[325px]"
      allow="fullscreen"
    />
  );
}
