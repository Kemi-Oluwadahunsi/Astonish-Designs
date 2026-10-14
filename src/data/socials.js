import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

// Entries without an href are hidden; add the real profile URL to show them.
const allSocials = [
  { href: "https://www.instagram.com/astonishdesigns", icon: faInstagram, label: "Instagram" },
  { href: "https://www.facebook.com/officialastonishdesigns", icon: faFacebookSquare, label: "Facebook" },
  { href: "", icon: faXTwitter, label: "X (Twitter)" },
  { href: "", icon: faLinkedin, label: "LinkedIn" },
];

export const socials = allSocials.filter((s) => s.href);
