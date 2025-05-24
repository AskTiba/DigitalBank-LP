"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import hamburger from "@/assets/images/icon-hamburger.svg";
import close from "@/assets/images/icon-close.svg";
import Navigation from "./Navigation";
import { Button } from "../ui/button";
import { NavLinkItem } from "./NavLinkItem";
import { defaultLinks } from "@/lib/data";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <main className="relative">
      <header className="sticky sm:px-20 top-0 z-50 flex items-center justify-between px-4 py-3 shadow-sm bg-white">
        <a href="/" className="flex-shrink-0">
          <Image src={logo} width={120} alt="Company logo" />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="focus:outline-none p-2 sm:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <Image
            src={menuOpen ? close : hamburger}
            alt={menuOpen ? "Close menu" : "Open menu"}
            width={24}
            height={24}
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center space-x-6 relative">
          {defaultLinks.map((link) => (
            <NavLinkItem key={link.href} link={link} />
          ))}
        </nav>

        <Button className="hidden sm:flex rounded-full bg-linear-to-r from-green-300 to-blue-300">
          Request Invite
        </Button>
      </header>

      {/* Overlay for Mobile */}
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
