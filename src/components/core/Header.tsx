"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import hamburger from "@/assets/images/icon-hamburger.svg";
import close from "@/assets/images/icon-close.svg";
import Link from "next/link";
import Navigation from "./Navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <main className="relative">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 shadow-sm">
        {/* Logo */}
        <Link href="/">
          <div>
            <Image src={logo} width={120} alt="Company logo" />
          </div>
        </Link>

        {/* Hamburger / Close Toggle */}
        <button
          onClick={toggleMenu}
          className="focus:outline-none cursor-pointer p-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <div className="flex items-center justify-center w-5 h-5">
            <Image
              src={menuOpen ? close : hamburger}
              alt={menuOpen ? "Close menu icon" : "Hamburger menu icon"}
              width={24}
              height={24}
              className="object-contain"
            />
          </div>
        </button>
      </header>

      {/* Overlay and Dropdown Menu */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={toggleMenu}
          />
          <Navigation onClose={() => setMenuOpen(false)} />
        </>
      )}
    </main>
  );
};

export default Header;
