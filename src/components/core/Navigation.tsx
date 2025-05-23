import React from "react";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

interface NavigationProps {
  onClose: () => void;
  links?: NavLink[];
}

const defaultLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

const Navigation: React.FC<NavigationProps> = ({
  onClose,
  links = defaultLinks,
}) => {
  return (
    <nav
      className="absolute flex flex-col items-center justify-center top-16 left-0 right-0 m-4 z-50 px-4 py-6 bg-white text-gray-800 rounded-md shadow-md"
      aria-label="Main mobile menu"
    >
      <ul className="space-y-4 text-sm text-center font-semibold">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onClose}
              className="hover:text-green-700 transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
