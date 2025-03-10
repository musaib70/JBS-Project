"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const AboutAfterHero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100); // Delay for smooth transition on loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full my-6 md:flex md:flex-row flex-col  md:pt-16">
      {/* Gradient Background */}

      <div className="hidden md:w-[50%] w-[100%] md:h-[900px] md:flex">
        <div className="md:w-[70%] w-[80%] relative md:h-[100%] py-3 bg-gradient-to-r from-[#1da692] to-[#4355a1] rounded-br-[240px] flex items-center">
          {/* Centered Rotated Title */}
          <h2
            className={`text-white font-bold uppercase text-3xl absolute md:left-20 top-1/4 left-[-10%] mx-2 transform -rotate-90 tracking-[14px] pb-10`}
          >
            About Us
          </h2>
        </div>
        {/* Image */}
        <div className=" md:w-[30%] w-[30%] mb-8 md:mb-0 absolute md:left-72 left-40 md:top-40 sm:top-12 top-40">
          <div
            className={`transform transition-transform duration-500 ease-in-out ${
              loaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
          >
            <Image
              src="/assets/about-us.png"
              alt="About Us Image"
              width={500}
              height={500}
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>

      <div className="md:hidden mt-16">
        <Image
          src="/assets/about-us.png"
          alt="About Us Image"
          width={400}
          height={450}
          className="object-cover rounded-lg w-full max-w-[90%] mx-auto h-auto"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="md:w-[50%] w-full flex flex-col md:flex-row md:items-start lg:items-center p-8 md:pl-24">
        {/* Text Content */}
        <div className="w-full space-y-4">
          <h3 className="text-3xl font-semibold  text-gray-700 mb-4">
            About Us
          </h3>
          <p className="text-gray-600 font-normal text-lg md:text-[18px]">
            JBS Consulting combines decades of expertise with cutting-edge
            technology to deliver innovative solutions. We specialize in
            AI-driven strategies, cloud solutions, and end-to-end digital
            transformations. Trusted by global clients, we partner with industry
            leaders like SAP, Oracle, and Microsoft to empower businesses with
            seamless technology transitions and impactful results. At JBS
            Consulting, we deliver technology that works better.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutAfterHero;
