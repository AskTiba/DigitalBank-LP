// components/NavLinkItem.tsx
"use client";

import { NavLink } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkItemProps {
  link: NavLink;
}

export const NavLinkItem = ({ link }: NavLinkItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === link.href;

  return (
    <Link
      href={link.href}
      className={`
        relative group py-1 text-sm font-medium transition-colors duration-200
        ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}
      `}
    >
      {link.label}

      {/* Underline */}
      <span
        className={`
          absolute left-0 right-0 -bottom-5 h-[3px] bg-blue-600
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? "opacity-100 scale-100"
              : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
          }
        `}
      />
    </Link>
  );
};
