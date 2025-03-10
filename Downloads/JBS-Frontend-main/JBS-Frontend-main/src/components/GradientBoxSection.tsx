"use client";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";

const GradientBoxSection: FC = () => {
  return (
    <section className="py-12">
      {/* Desktop and Tablet Layout */}
      <div className="hidden md:flex mx-auto flex-col md:flex-row items-center justify-between relative">
        {/* Left Gradient Box */}
        <div className="md:w-[35%] w-full h-[450px] bg-gradient-to-b from-[#1da692] to-[#4355a1] md:rounded-br-[140px] py-4 flex flex-col items-start justify-center relative">
          {/* First Inner Box - Vertical Text "OUR SERVICES" */}
          <div className="lg:w-[82%] md:[80%] transform absolute lg:left-[-30%] md:left-[-42%] left-[-26%] top-[44%] -translate-y-1/2">
            <h2 className="text-white -rotate-90 text-2xl flex justify-center uppercase tracking-[15px]">
              OUR SERVICES
            </h2>
          </div>

          {/* Second Inner Box - Contains Text and Button */}
          <div className="flex flex-col w-[70%] items-start text-white mt-5 absolute right-10 lg:top-6 md:top-[-5%] top-[5%]">
            <div className="text-[18px] text-left">
              <ul className="space-y-[5px] lg:space-y-[10px] uppercase">
                <li>
                  <Link href="#" className="">
                    Cloud Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="">
                    Data and AI
                  </Link>
                </li>
                <li>
                  <Link href="#" className="">
                    Application Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="">
                    Digital Workplace
                  </Link>
                </li>
                <li>
                  <Link href="#" className="">
                    IT BPO
                  </Link>
                </li>
              </ul>
            </div>
            {/* View All Button */}
            <div className="mt-16">
              <Link
                href="/our-services"
                className="inline-block py-2 px-6 text-sm font-semibold text-white relative group"
              >
                <span className="absolute top-0 left-0 w-[100%] h-[1px] bg-white origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-300"></span>
                View All
                <span className="absolute bottom-0 right-0 w-[100%] h-[1px] bg-white origin-right scale-x-50 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:mt-0 w-full md:w-[68%] md:absolute md:left-[30%]">
          <Image
            src="/assets/Capture.JPG"
            alt="Cloud Services"
            className="w-full h-auto"
            width={800}
            height={300}
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col items-center py-10">
        {/* Gradient Box */}
        <div className="w-full bg-gradient-to-b from-[#1da692] to-[#4355a1] py-10 px-8 flex flex-col items-center text-center space-y-8">
          {/* Heading */}
          <h2 className="text-white text-3xl uppercase tracking-widest relative">
            <span className="absolute inset-0 blur-[4px] opacity-20 bg-gradient-to-r from-[#1da692] to-[#4355a1] rounded-full"></span>
            <span className="relative z-10">OUR SERVICES</span>
          </h2>

          {/* Content */}
          <div className="text-white text-base space-y-6 w-full">
            <ul className="space-y-6 uppercase">
            <li className="text-center">
                  <Link href="#" className="">
                    Cloud Services
                  </Link>
                </li>
                <li className="text-center">
                  <Link href="#" className="">
                    Data and AI
                  </Link>
                </li>
                <li className="text-center">
                  <Link href="#" className="">
                    Application Services
                  </Link>
                </li>
                <li className="text-center">
                  <Link href="#" className="">
                    Digital Workplace
                  </Link>
                </li>
                <li className="text-center">
                  <Link href="#" className="">
                    IT BPO
                  </Link>
                </li>
              </ul>
          </div>

          {/* View All Button */}
          <div className="mt-6">
            <Link
              href="/our-services"
              className="inline-block py-2 px-6 text-sm font-semibold text-white relative group"
            >
              {/* Top Border */}
              <span className="absolute top-0 left-0 w-full h-[1px] bg-white origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-300"></span>
              {/* Button Text */}
              View All
              {/* Bottom Border */}
              <span className="absolute bottom-0 right-0 w-full h-[1px] bg-white origin-right scale-x-50 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GradientBoxSection;
