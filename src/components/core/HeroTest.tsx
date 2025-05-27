import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import desktop from "@/assets/images/bg-intro-desktop.svg";
import mockups from "@/assets/images/image-mockups.png";

export const HeroTest = () => {
  return (
    <main className="overflow-x-clip">
      <div className="mb-40 justify-between relative hidden sm:flex ">
        <section className="w-1/3 ml-32 flex  flex-col gap-6 mt-40">
          <h1 className="text-5xl">Next generation digital banking</h1>
          <p className="sm:text-[17px] text-gray-500 mr-10">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button className="rounded-full self-center py-5 sm:self-start w-fit bg-linear-50 from-green-600 to-blue-600 px-10">
            Request Invite
          </Button>
        </section>

        <section className="w-1/2">
          <div className="relative left-54 bottom-2">
            <Image
              src={desktop}
              className="inline-block scale-[2]"
              alt="Company logo"
            />
          </div>
          <div className="absolute -right-40 -top-32">
            <Image src={mockups} className="" alt="Company logo" />
          </div>
        </section>
      </div>
    </main>
  );
};
