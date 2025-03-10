"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface IntroSectionProps {
  text: {
    title: string;
    left: number;
    heading: string;
    description: string;
    bulletPoints?: string[]; // Allow HTML in bullet points
  };
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

const IntroSection: React.FC<IntroSectionProps> = ({
  text,
  imageSrc,
  imageAlt,
  reverse = false,
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100); // Delay for smooth transition on load
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`relative w-full mt-4 md:flex ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } flex-col md:pt-0`}
    >
      {/* Gradient Background */}
      <div className="hidden md:w-[50%] w-[100%] md:h-[500px] md:flex items-center">
        {/* <div className="md:w-[70%] w-[80%] relative md:h-[100%] py-3 bg-gradient-to-r from-[#1da692] to-[#4355a1] rounded-br-[240px] flex items-center"></div> */}

        {/* Image */}
        <div className="md:w-[100%] w-[100%] mb-0 md:mb-0">
          <div
            className={`transform transition-transform flex justify-center duration-500 ease-in-out ${
              loaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={500}
              height={400}
              className="object-cover rounded-br-[0px] "
              priority
            />
          </div>
        </div>
      </div>

      {/* Mobile Image */}
      <div className="md:hidden mt-16">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={450}
          className="object-cover rounded-lg w-full max-w-[90%] mx-auto h-auto"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="md:w-[50%] w-full flex flex-col md:flex-row md:items-start lg:items-center md:pl-10 md:pr-10 max-md:px-5 max-md:py-10">
        {/* Text Content */}
        <div className="w-full space-y-1">
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">
            {text.heading}
          </h3>
          <p className="text-gray-600 font-normal text-lg md:text-[16px]">
            {text.description}
          </p>
          {text.bulletPoints && (
            <ul className="list-disc pl-6 space-y-2 text-gray-600 text-[16px] 2xl:text-[16px]">
              {text.bulletPoints.map((point, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
