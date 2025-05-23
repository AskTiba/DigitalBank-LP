"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import hamburger from "@/assets/images/icon-hamburger.svg";
import close from "@/assets/images/icon-close.svg";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <main className="bg-red-500/20 p-4">
      <header className="flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="">
          <div className="">
            <Image src={logo} width={130} alt="Company logo" />
          </div>
        </Link>

        {/* Hamburger / Close Toggle */}
        <button
          onClick={toggleMenu}
          className="focus:outline-none"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <div className="">
            <Image
              src={menuOpen ? close : hamburger}
              // width={20}
              // // height={16}
              alt={menuOpen ? "Close menu icon" : "Hamburger menu icon"}
              className="transition-transform duration-200"
            />
          </div>
        </button>
      </header>
    </main>
  );
};

export default Header;
