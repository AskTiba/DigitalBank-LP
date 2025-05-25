import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import bg_intro_mobile from "@/assets/images/bg-intro-mobile.svg";
import ok from "@/assets/images/image-mockups.png";
import desktop from "@/assets/images/bg-intro-desktop.svg";

const Hero = () => {
  return (
    <main className="sm:flex sm:items-center">
      <section className="sm:order-2 sm:flex relative sm:gap-40">
        <article className="sm:hidden">
          <div className="w-full relative sm:hidden -mt-5">
            <Image
              src={bg_intro_mobile}
              className="w-full"
              alt="Company logo"
            />
          </div>
          <div className="w-fit absolute inset-0 -top-20 sm:hidden">
            <Image src={ok} className="" alt="Company logo" />
          </div>
        </article>
        <article className="hidden sm:flex overflow-x-hidden">
          <div className="relative left-20 bottom-44">
            <Image src={desktop} className="" alt="Company logo" />
          </div>
          <div className="absolute inset-0 -top-24 left-54">
            <Image src={ok} className="" alt="Company logo" />
          </div>
        </article>
      </section>
      <section className="flex sm:w-1/2 flex-col sm:items-start sm:inset-0 justify-center items-center text-center gap-6 mx-5 sm:order-1 sm:text-left">
        <div className="sm:flex gap-5 flex flex-col sm:flex-col sm:relative sm:self-start sm:pl-28">
          <h3 className="text-4xl font-normal sm:text-5xl">
            Next generation digital banking
          </h3>
          <p className="text-gray-500">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button className="rounded-full self-center sm:self-start w-fit bg-linear-to-r from-green-300 to-blue-300 px-10 py-6">
            Request Invite
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Hero;
