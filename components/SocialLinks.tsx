import {
  SiInstagram,
  SiYoutube,
  SiTiktok,
  SiPinterest,
} from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa6";

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
        href="https://www.youtube.com/@martiaguilar?sub_confirmation=1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiYoutube />
      </a>
      <a
        href="https://www.linkedin.com/in/martina-aguilar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://www.pinterest.com/martiaguilar99/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiPinterest />
      </a>
    </div>
  );
}
