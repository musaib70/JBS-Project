"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

type LogoSliderProps = {
  logos: string[];
  slideInterval?: number;
  altText?: string;
  textColor?: string;
};

const LogoSlider: React.FC<LogoSliderProps> = ({
  logos,
  slideInterval = 100,
  altText = "Partner Logo",
  textColor,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          left: sliderRef.current.offsetWidth,
          behavior: "smooth",
        });

        // Reset to the beginning when reaching the end
        if (
          sliderRef.current.scrollLeft + sliderRef.current.offsetWidth >=
          sliderRef.current.scrollWidth
        ) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, slideInterval);

    return () => clearInterval(interval);
  }, [slideInterval]);

  return (
    <section className="w-full mb-6 mt-3">
      <div className=" ">
        <h3
          className={`2xl:text-4xl text-3xl font-semibold text-center ${
            textColor ? textColor : "text-[#069986]"
          } mb-6`}
        >
          Our Partners
        </h3>
        <div
          ref={sliderRef}
          className="flex overflow-x-hidden scrollbar-none space-x-6 px-4 py-4"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[100%] md:w-[33.33%] lg:w-[25%] h-[100px] flex items-center justify-center rounded-md"
            >
              <Image
                src={logo}
                alt={altText}
                className="h-full w-auto object-contain"
                layout="fill" objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;
