import React, { useState, useEffect } from "react";
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
  subTitle: string;
  description: string;
  onClick: () => void;
}

const colors = [
  "#eff1f7",
  "#f2e7e2",
  "#c3ddf2",
  "#cbcbcb",
  "#ddf5f3",
  "#f2e7e2",
]; // Define color options

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  subTitle,
  description,
  onClick,
}) => {
  const [randomBgColor, setRandomBgColor] = useState<string>("");

  useEffect(() => {
    // Generate the random color on the client after hydration
    setRandomBgColor(getRandomColor());
  }, []);

  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div
        className="h-64 rounded-tr-lg rounded-tl-lg flex justify-center items-center"
        style={{ backgroundColor: randomBgColor }}
      >
        <div className="w-full relative h-48">
          <Image
            className="object-contain"
            src={imageSrc}
            alt={title}
            layout="fill"
          />
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-1">{title}</div>
        <div className="text-[#1da692] font-semibold text-md mb-2">
          {subTitle}
        </div>
        <p className="text-gray-400 text-base">{description}</p>
      </div>
      <div className="px-6 py-4 flex justify-center">
        <button
          onClick={onClick}
          className="text-white bg-gradient-to-b from-[#1da692] to-[#4355a1] px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity text-sm"
        >
          View Case Study
        </button>
      </div>
    </div>
  );
};

export default Card;
