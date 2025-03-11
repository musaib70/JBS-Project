"use client";
import { useEffect, useRef, useState } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";

interface MigrationType {
  title: string;
  description: string;
  image: string;
}

interface MigrationTypesProps {
  types: MigrationType[];
  sectionTitle: string;
  sectionDescription?: string;
  height: number;
  headingHegihgt: number; // Fixed typo from headingHegihgt
}

const CloudMigrationTypes: React.FC<MigrationTypesProps> = ({
  types,
  sectionTitle,
  sectionDescription,
  height,
  headingHegihgt,
}) => {
  const splideRef = useRef<HTMLDivElement | null>(null);
  const [adjustedHeight, setAdjustedHeight] = useState(height);

  // Handle responsive height adjustment for larger screens
  useEffect(() => {
    const handleResize = () => {
      const is2xl = window.matchMedia("(min-width: 1536px)").matches; // Tailwind's 2xl breakpoint is 1536px
      setAdjustedHeight(is2xl ? height * 1 : height); // Increase height by 20% if 2xl
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
      type: "loop",
      perMove: 1,
      perPage: Math.min(types.length, 4),
      breakpoints: {
        1024: { perPage: Math.min(types.length, 4) },
        768: { perPage: Math.min(types.length, 2) },
        640: { perPage: 1 },
      },
      pagination: true,
      //loop: true,
      arrows: true,
      rewind: false, // Enable rewind to loop seamlessly
    });

    splide.mount();

    return () => {
      splide.destroy(); // Clean up the instance when the component unmounts
    };
  }, [types.length]);

  return (
    <div className="mx-auto px-4 md:px-0 mb-6 md:h-full ">
      {/* Section Title */}
      <h3 className="text-3xl 2xl:text-4xl font-semibold text-center max-md:text-left px-4 text-[#069986] mb-6">
        {sectionTitle}
      </h3>
      {/* Section Description */}
      {sectionDescription && (
        <p className="text-lg text-center text-gray-600 mb-6">
          {sectionDescription}
        </p>
      )}
      {/* Carousel */}
      <div ref={splideRef} className="splide myCarousel mt-10">
        <div className="splide__track">
          <ul className="splide__list">
            {types.map((type, index) => (
              <li key={index} className="splide__slide">
                <div className="p-2 mb-5 min-h-[400px] h-full">
                  <div
                    className="bg-[#ececec] mb-4 overflow-hidden rounded-br-[60px] flex flex-col"
                    style={{ height: `${adjustedHeight}px` }}
                  >
                    {/* Image */}
                    <Image
                      src={type.image}
                      alt={type.title}
                      className="w-full object-cover"
                      width={285}
                      height={180}
                    />

                    {/* Content */}
                    <div className="p-4 flex-1 flex flex-col justify-start">
                      <h4
                        className="text-[16px] 2xl:text-[17px] flex items-center font-semibold text-gray-800"
                        style={{ minHeight: `${headingHegihgt}px` }}
                      >
                        {type.title}
                      </h4>
                      <p className="my-0 text-[14px] 2xl:text-[15px] leading-relaxed text-gray-700">
                        {type.description}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CloudMigrationTypes;
