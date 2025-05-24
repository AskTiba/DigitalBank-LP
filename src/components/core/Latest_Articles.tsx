// components/LatestArticles.tsx
"use client";

import React from "react";
import mulla from "@/assets/images/image-currency.jpg";
import plane from "@/assets/images/image-plane.jpg";
import water from "@/assets/images/image-confetti.jpg";
import restaurant from "@/assets/images/image-restaurant.jpg";
import ArticleCard from "./ArticleCard";

const articles = [
  {
    image: mulla,
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    summary:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    image: restaurant,
    author: "Claire Robinson",
    title: "Treat yourself without worrying about money",
    summary:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month.",
  },
  {
    image: plane,
    author: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    summary:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad.",
  },
  {
    image: water,
    author: "Wilson Hutton",
    title: "Our invite-only Beta accounts are now live",
    summary:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …",
  },
];

const LatestArticles = () => {
  return (
    <section className="py-10 px-4 bg-gray-50">
      <h1 className="text-3xl sm:text-3xl font-normal text-center mb-10 text-gray-800">
        Latest Articles
      </h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </section>
  );
};

export default LatestArticles;
