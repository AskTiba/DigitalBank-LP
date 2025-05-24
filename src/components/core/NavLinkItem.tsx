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
      className={`relative py-1 text-sm font-medium transition-colors duration-200
        ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}
      `}
    >
      {link.label}

      {/** Underline indicator */}
      <span
        className={`absolute left-0 right-0 -bottom-[1.25rem] h-[4px] bg-blue-600 transition-all duration-200 ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      />
    </Link>
  );
};
