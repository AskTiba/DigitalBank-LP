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
    <>
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 flex h-12 sm:h-16 items-center justify-between px-4 py-3 sm:px-20 shadow-sm bg-white">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <Image src={logo} width={150} alt="Company logo" />
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="focus:outline-none sm:hidden cursor-pointer"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <Image
            src={menuOpen ? close : hamburger}
            alt={menuOpen ? "Close menu" : "Open menu"}
            width={20}
          />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden sm:flex items-center space-x-6 relative text-lg">
          {defaultLinks.map((link) => (
            <NavLinkItem key={link.href} link={link} />
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <Button className="hidden sm:flex rounded-full bg-gradient-to-r from-green-300 to-blue-300">
          Request Invite
        </Button>
      </header>

      {/* Main Content Area */}
      <main>
        {/* Mobile Navigation Overlay */}
        {menuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={toggleMenu}
            />

            {/* Slide-out Menu */}
            <Navigation onClose={() => setMenuOpen(false)} />
          </>
        )}
      </main>
    </>
  );
};

export default Header;
