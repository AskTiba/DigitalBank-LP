import Footter from "@/components/core/Footter";
import Header from "@/components/core/Header";
import Latest_Articles from "@/components/core/Latest_Articles";
import React from "react";

const Page = () => {
  return (
    <main className="">
      <Header />
      <Latest_Articles />
      <Footter />
    </main>
  );
};

export default Page;
