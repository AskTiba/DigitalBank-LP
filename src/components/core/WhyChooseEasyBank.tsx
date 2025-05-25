// components/WhyChooseEasyBank.tsx
"use client";

import React from "react";
import FeatureCard from "./FeatureCard";
import { features } from "@/lib/data/features";

const WhyChooseEasyBank = () => {
  return (
    <main className="bg-gray-500/10 mt-10 py-12 sm:px-28">
      {/* Heading Section */}
      <section className="text-center sm:text-left  flex flex-col gap-5 px-4 sm:w-1/2 sm:self-start">
        <h1 className="text-5xl sm:text-4xl font-normal text-gray-900 ">
          Why choose EasyBank?
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </section>

      {/* Feature Cards Section */}
      <section className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>
    </main>
  );
};

export default WhyChooseEasyBank;
