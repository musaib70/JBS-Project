"use client";

import { useEffect, useRef, useState } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";

interface ServicesSectionBoxSlideType {
  title: string;
  description: string;
  image: string;
}

interface ServicesSectionBoxSlideProps {
  types: ServicesSectionBoxSlideType[];
  sectionTitle: string;
  sectionDescription?: string;
  height: number;
  headingHegihgt: number; // Fixed typo from headingHegihgt
}

const AllServicesSectionBoxSlide: React.FC<ServicesSectionBoxSlideProps> = ({
  types,
  sectionTitle,
  sectionDescription,
  height,
  headingHegihgt,
}) => {
  const splideRef = useRef<HTMLDivElement | null>(null);
  const [, setAdjustedHeight] = useState(height);

  // Handle responsive height adjustment for larger screens
  useEffect(() => {
    const handleResize = () => {
      const is2xl = window.matchMedia("(min-width: 1536px)").matches; // Tailwind's 2xl breakpoint is 1536px
      setAdjustedHeight(is2xl ? height * 1.14 : height); // Increase height by 20% if 2xl
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [height]);

  // Initialize Splide carousel
  useEffect(() => {
    const splide = new Splide(splideRef.current!, {
      type: "slide",
      perMove: 1,
      perPage: Math.min(types.length, 3),
      gap: "2rem",
      breakpoints: {
        1024: { perPage: Math.min(types.length, 3) },
        768: { perPage: Math.min(types.length, 2) },
        640: { perPage: 1 },
      },
      pagination: true,
      rewind: true,
      arrows: true,
    });

    splide.mount();

    return () => {
      splide.destroy(); // Clean up the instance when the component unmounts
    };
  }, [types.length]);

  return (
    <div className="mx-auto px-4 md:px-0 mb-6 md:h-full mt-8 max-md:-mt-2">
      {/* Section Title */}
      <h3 className="text-3xl 2xl:text-4xl font-semibold text-center max-md:text-left px-4 text-[#069986] mb-2">
        {sectionTitle}
      </h3>
      {/* Section Description */}
      {sectionDescription && (
        <p className="text-lg text-center text-gray-600 mb-6">
          {sectionDescription}
        </p>
      )}
      {/* Carousel */}
      <div ref={splideRef} className="splide myCarousel mt-6 ">
        <div className="splide__track px-16">
          <ul className="splide__list">
            {types.map((type, index) => (
              <li key={index} className="splide__slide py-12">
                <div
                  className={`p-8 bg-white shadow-lg rounded-2xl border-b-[6px] min-h-[350px] transition-all ${
                    index >= 0
                      ? "border-[#069986] hover:shadow-xl hover:border-transparent"
                      : "border-[#ccc] hover:shadow-lg"
                  }`}
                >
                  {/* Icon */}
                  <div className="mb-4 flex items-start">
                    <div className="flex-shrink-0 size-16 bg-[#069986] rounded-br-xl rounded-tl-xl flex justify-center items-center">
                      <Image
                        src={type.image}
                        alt={type.title}
                        width={75}
                        height={75}
                        className="rounded-full"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h4
                    className={`text-[16px] 2xl:text-[20px] flex items-center  font-semibold ${
                      index >= 0 ? "text-gray-800" : "text-[#4355a1]"
                    }`}
                    style={{ minHeight: `${headingHegihgt}px` }}
                  >
                    {type.title}
                  </h4>

                  {/* Description */}
                  <p
                    className={`2xl:mt-5 text-[14px] 2xl:text-[15px] leading-relaxed mt-2 ${
                      index >= 0 ? "text-[#333]" : "text-[#555555]"
                    }`}
                  >
                    {type.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllServicesSectionBoxSlide;
