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
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between px-4 sm:px-32 shadow-sm bg-white">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src={logo} width={150} alt="Company logo" />
        </Link>

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

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center space-x-6 relative text-lg">
          {defaultLinks.map((link) => (
            <NavLinkItem key={link.href} link={link} />
          ))}
        </nav>

        {/* Desktop CTA */}
        <Button className="hidden sm:flex rounded-full bg-gradient-to-r from-green-300 to-blue-300">
          Request Invite
        </Button>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <>
          {/* Backdrop that covers everything except the header */}
          <div
            className="fixed inset-0 top-16 z-40 bg-black/40 sm:hidden"
            onClick={toggleMenu}
          />

          {/* Mobile Menu that appears just below the sticky header */}
          <div className="fixed top-16 left-0 right-0 z-50 sm:hidden">
            <Navigation onClose={() => setMenuOpen(false)} />
          </div>
        </>
      )}
    </>
  );
};

export default Header;
