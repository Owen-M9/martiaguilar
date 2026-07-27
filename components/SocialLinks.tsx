import {
  SiInstagram,
  SiYoutube,
  SiTiktok,
} from "@icons-pack/react-simple-icons";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://www.instagram.com/martiaguilar99/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiInstagram />
      </a>
      <a
        href="https://www.tiktok.com/@martinaaguilar99"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiTiktok />
      </a>
      <a
        href="https://www.youtube.com/@martiaguilar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiYoutube />
      </a>
    </div>
  );
}
