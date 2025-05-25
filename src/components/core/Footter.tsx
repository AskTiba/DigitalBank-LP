// components/shared/Footer.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import facebook from "@/assets/images/icon-facebook.svg";
import youtube from "@/assets/images/icon-youtube.svg";
import twitter from "@/assets/images/icon-twitter.svg";
import pinterest from "@/assets/images/icon-pinterest.svg";
import instagram from "@/assets/images/icon-instagram.svg";
import { Button } from "../ui/button";
import Logo from "./Logo";

const socialLinks = [
  { src: facebook, alt: "Facebook", href: "#" },
  { src: youtube, alt: "YouTube", href: "#" },
  { src: twitter, alt: "Twitter", href: "#" },
  { src: pinterest, alt: "Pinterest", href: "#" },
  { src: instagram, alt: "Instagram", href: "#" },
];

const navLinks = [
  "About Us",
  "Contact",
  "Blog",
  "careers",
  "Support",
  "Privacy Policy",
];

const Footer = () => {
  return (
    <footer className="bg-[#2d314d] text-white py-10 sm:px-32 sm:w-full">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center gap-6">
        <aside className="sm:flex gap-28">
          <div className="flex flex-col items-center justify-center sm:">
            {/* Logo */}
            <Link
              href="/"
              className="flex-shrink-0 sm:mb-8 inline-block"
              aria-label="Go to homepage"
            >
              <Logo stroke="#fff" />
            </Link>
            {/* Social Media Icons */}
            <section
              className="flex gap-4 items-cent my-5"
              aria-label="Social media"
            >
              {socialLinks.map((icon, idx) => (
                <Link
                  key={idx}
                  href={icon.href}
                  aria-label={`Visit our ${icon.alt}`}
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={20}
                    height={20}
                    className="hover:opacity-80 transition-opacity"
                  />
                </Link>
              ))}
            </section>
          </div>
          {/* Navigation Links */}
          <nav className="text-center sm:text-left text-sm font-semibold">
            <ul className="grid sm:grid-cols-2 gap-x-24 gap-4 space-x-2 sm:place-content-center">
              {navLinks.map((text, idx) => (
                <li key={idx}>
                  <Link
                    href="#"
                    className="hover:text-green-300 transition-colors"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Right Section: CTA and Copyright */}
        <div className="flex flex-col items-center sm:items-end gap-6">
          <Button className="rounded-full bg-gradient-to-r from-green-400 to-blue-400 px-6 py-2 hover:opacity-90">
            Request Invite
          </Button>
          <p className="text-sm sm:text-base text-center sm:text-right">
            © Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
