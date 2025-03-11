"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface IntroSectionReverseProps {
  text: {
    title: string;
    left: number;
    heading: string;
    description: string;
    bulletPoints?: string[];
  };
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

const IntroSectionReverse: React.FC<IntroSectionReverseProps> = ({
  text,
  imageSrc,
  imageAlt,
}) => {
  const [, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100); // Delay for smooth transition on load
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="w-full my-6 md:my-16 flex md:flex-row flex-col gap-10 items-center">
        {/* Content Section */}
        <div className="w-full md:w-1/2 md:pl-10 md:pr-20 px-6 md:px-0">
          <div className="w-full space-y-4">
            <h3 className="text-3xl md:text-4xl font-semibold  text-gray-700 mb-4">
              {text.heading}
            </h3>
            <p className="text-gray-600 font-normal text-lg md:text-[18px]">
              {text.description}
            </p>
            {text.bulletPoints && (
              <ul className="list-disc pl-6 space-y-2 text-gray-600 text-[18px] 2xl:text-[17px]">
                {text.bulletPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Gradient Section */}
        <div className="hidden md:w-1/2 w-full md:h-[900px] md:flex">
          {/* Gradient Box */}
          <div className="relative md:w-3/4 w-[80%] md:h-full bg-gradient-to-r from-[#1da692] to-[#4355a1] rounded-bl-[200px] flex items-center ml-auto">
            <div className="absolute md:w-[82%] w-[50%] -left-48">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={550}
                height={500}
                className="object-cover rounded-bl-[130px]"
                priority
              />
            </div>
          </div>
        </div>
        {/* Mobile Image */}
        <div className="md:hidden w-full rounded-lg px-5">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={550}
            height={550}
            className="object-cover rounded-lg w-full h-auto "
            priority
          />
        </div>
      </section>
    </>
  );
};

export default IntroSectionReverse;
