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
