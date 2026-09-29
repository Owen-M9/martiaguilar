import {
  SiInstagram,
  SiYoutube,
  SiTiktok,
  SiPinterest,
} from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa6";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/martiaguilar99/",
    Icon: SiInstagram,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@martinaaguilar99",
    Icon: SiTiktok,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@martiaguilar?sub_confirmation=1",
    Icon: SiYoutube,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/martina-aguilar/",
    Icon: FaLinkedin,
  },
  {
    name: "Pinterest",
    href: "https://www.pinterest.com/martiaguilar99/",
    Icon: SiPinterest,
  },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      {socials.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
