// components/FeatureCard.tsx
import React from "react";
import Image, { StaticImageData } from "next/image";

interface FeatureCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <article className="flex flex-col sm:items-start items-center sm:text-left text-center gap-4 px-4 sm:px-0">
      <Image src={icon} alt={title} width={72} height={72} />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500 max-w-xs">{description}</p>
    </article>
  );
};

export default FeatureCard;
