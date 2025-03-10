"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageTextSectionAllPagesProps {
  text: {
    title: string;
    left: number;
    heading: string;
    description: React.ReactNode; // Updated to allow JSX
  };
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean; // New prop for layout reversal
}

const ImageTextSectionAllPages: React.FC<ImageTextSectionAllPagesProps> = ({
  text,
  imageSrc,
  imageAlt,
  reverse = false, // Default: gradient on left
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100); // Delay for smooth transition on load
    return () => clearTimeout(timer);
  }, []);

  // const gradientRoundedClass = reverse
  //   ? "rounded-bl-[150px]" // Rounded for right-side gradient
  //   : "rounded-br-[150px]"; // Rounded for left-side gradient

  // const imageRoundedClass = reverse
  //   ? "rounded-bl-[140px]" // Rounded for right-side image
  //   : "rounded-br-[140px]"; // Rounded for left-side image

  return (
    <section
      className={`relative w-full mt-4 md:flex ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } flex-col md:pt-0`}
    >
      {/* Gradient Background with Title */}
      <div className="hidden md:w-[50%] w-[100%] md:h-[500px] md:flex items-center">
        {/* <div
          className={`md:w-[70%] w-[80%] relative md:h-[100%] py-3 bg-gradient-to-r from-[#1da692] to-[#4355a1] ${gradientRoundedClass}`}
        >
           <h2
            className={`text-white font-bold uppercase text-3xl absolute ${
              reverse ? "md:left-20 left-[-10%]" : "md:right-20 right-[-10%]"
            } top-1/4 mx-2 transform rotate-90 tracking-[14px] pb-10`}
            style={{ [reverse ? "left" : "right"]: `-${text.left}%` }}
          >
            {text.title}
          </h2> 
        </div> */}

        {/* Image */}
        <div
          className="md:w-[100%] w-[100%] mb-0 md:mb-0"
        >
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
      <div className="md:w-[50%] w-full flex flex-col md:flex-row md:items-start lg:items-center md:pl-10 md:pr-10">
        <div className="w-full space-y-1">{text.description}</div>
      </div>
    </section>
  );
};

export default ImageTextSectionAllPages;
