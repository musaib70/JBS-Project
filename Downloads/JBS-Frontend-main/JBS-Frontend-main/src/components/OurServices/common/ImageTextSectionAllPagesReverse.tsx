"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ImageTextSectionAllPagesReverseProps {
  text: {
    title: string;
    left: number;
    heading: string;
    description: React.ReactNode; // Updated to allow JSX
  };
  imageSrc: string;
  imageAlt: string;
}

const ImageTextSectionAllPagesReverse: React.FC<
  ImageTextSectionAllPagesReverseProps
> = ({ text, imageSrc, imageAlt }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100); // Delay for smooth transition on load
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`relative w-full my-6 md:flex md:flex-row flex-col md:py-16`}
    >
      {/* Content Section */}
      <div className="md:w-[50%] w-full flex flex-col md:flex-row md:items-start lg:items-center md:pr-16 px-6 md:px-0">
        <div className="w-full space-y-4 text-justify">{text.description}</div>
      </div>

      {/* Gradient Background with Title */}
      <div className="hidden md:flex md:w-[50%] w-[100%] md:h-[900px]">
        <div
          className={`md:w-[70%] w-[80%] relative md:h-[100%] py-3 bg-gradient-to-r from-[#1da692] to-[#4355a1] ml-auto rounded-bl-[200px]`}
        >
          {/* <h2
            className={`text-white font-bold uppercase text-3xl absolute ${
              reverse ? "md:left-20 left-[-10%]" : "md:right-20 right-[-10%]"
            } top-1/4 mx-2 transform rotate-90 tracking-[14px] pb-10`}
            style={{ [reverse ? "left" : "right"]: `-${text.left}%` }}
          >
            {text.title}
          </h2> */}
        </div>

        {/* Image */}
        <div
          className={`md:w-[30%] w-[30%] mb-8 md:mb-0 absolute md:top-40 md:right-56 sm:top-12`}
        >
          <div
            className={`transform transition-transform duration-500 ease-in-out ${
              loaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={550}
              height={500}
              className={`object-cover rounded-bl-[200px]`}
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
    </section>
  );
};

export default ImageTextSectionAllPagesReverse;
