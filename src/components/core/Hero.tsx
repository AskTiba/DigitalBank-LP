import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import bg_intro_mobile from "@/assets/images/bg-intro-mobile.svg";
import ok from "@/assets/images/image-mockups.png";

type Props = {};

const Hero = (props: Props) => {
  return (
    <main className="">
      <section className="">
        <div className="w-fit relative sm:hidden -mt-5">
          <Image src={bg_intro_mobile} className="" alt="Company logo" />
        </div>
        <div className="w-fit absolute inset-0 -top-20 sm:hidden">
          <Image src={ok} className="" alt="Company logo" />
        </div>
      </section>
      <section className="flex flex-col justify-center items-center text-center gap-6 mx-5 my-10">
        <h3 className="text-4xl font-normal">
          Next generation digital banking
        </h3>
        <p className="text-gray-500">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <Button className="rounded-full bg-linear-to-r from-green-300 to-blue-300 px-10 py-6">
          Request Invite
        </Button>
      </section>
    </main>
  );
};

export default Hero;
