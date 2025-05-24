export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationProps {
  onClose: () => void;
  links?: NavLink[];
}

export const defaultLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

export const FooterNavLinks = [
  { label: "About Us", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Support", href: "#" },
  { label: "Privacy Policy", href: "#" },
];
