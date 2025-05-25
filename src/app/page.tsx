import Footer from "@/components/core/Footter";
import Header from "@/components/core/Header";
import Hero from "@/components/core/Hero";
import { HeroTest } from "@/components/core/HeroTest";
import Latest_Articles from "@/components/core/Latest_Articles";
import WhyChooseEasyBank from "@/components/core/WhyChooseEasyBank";
import React from "react";

const Page = () => {
  return (
    <main className="">
      <Header />
      <HeroTest />
      <Hero />
      <WhyChooseEasyBank />
      <Latest_Articles />
      <Footer />
    </main>
  );
};

export default Page;
