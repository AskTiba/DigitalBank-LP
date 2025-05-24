import React from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";
import { Button } from "../ui/button";
import YouTube from "../svg_components/YouTube";
import Facebook from "../svg_components/Facebook";
import Twitter from "../svg_components/Twitter";
import LinkedIn from "../svg_components/LinkedIn";
import Instagram from "../svg_components/Instagram";
import GitHub from "../svg_components/GitHub";

type Props = {};

const Footter = (props: Props) => {
  return (
    <footer className="flex bg-[#2d314d] justify-center items-center py-10 text-white flex-col gap-6">
      <Link href="/" className="flex-shrink-0">
        <Image className="bg-white" src={logo} width={130} alt="Company logo" />
      </Link>
      <section className="flex gap-4">
        <Facebook />
        <YouTube />
        <Twitter />
        <LinkedIn />
        <GitHub />
        <Instagram />
      </section>
      <nav className="flex flex-col text-center text-sm font-semibold gap-4">
        <Link href="#" className="">
          About Us
        </Link>
        <Link href="#" className="">
          Contact
        </Link>
        <Link href="#" className="">
          Blog
        </Link>
        <Link href="#" className="">
          Support
        </Link>
        <Link href="#" className="">
          Privacy Policy
        </Link>
      </nav>
      <Button className="sm:flex rounded-full bg-linear-to-r from-green-300 to-blue-300">
        Request Invite
      </Button>
      <p className="text-sm">© Easybank. All Rights Reserved</p>
    </footer>
  );
};

export default Footter;
