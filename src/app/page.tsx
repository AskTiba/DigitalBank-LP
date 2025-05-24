import Footer from "@/components/core/Footter";
import Header from "@/components/core/Header";
import Hero from "@/components/core/Hero";
import Latest_Articles from "@/components/core/Latest_Articles";
import WhyChooseEasyBank from "@/components/core/WhyChooseEasyBank";
import React from "react";

const Page = () => {
  return (
    <main className="">
      <Header />
      <Hero />
      <WhyChooseEasyBank />
      <Latest_Articles />
      <Footer />
    </main>
  );
};

export default Page;
