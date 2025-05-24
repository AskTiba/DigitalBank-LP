// components/ArticleCard.tsx
import React from "react";
import Image, { StaticImageData } from "next/image";

interface ArticleCardProps {
  image: StaticImageData;
  author: string;
  title: string;
  summary: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  image,
  author,
  title,
  summary,
}) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-md shadow-sm transition-all hover:shadow-md bg-white">
      {/* Image Section */}
      <Image src={image} alt={title} className="w-full object-c h-48 sm:h-56" />

      {/* Content Section */}
      <div className="flex flex-col gap-2 p-6">
        <h3 className="text-xs text-gray-500 font-medium">By {author}</h3>
        <h2 className="text-md font-semibold text-gray-800 hover:text-blue-600 cursor-pointer transition">
          {title}
        </h2>
        <p className="text-sm text-gray-600">{summary}</p>
      </div>
    </article>
  );
};

export default ArticleCard;
