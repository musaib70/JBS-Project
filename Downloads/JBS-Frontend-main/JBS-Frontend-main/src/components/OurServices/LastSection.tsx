"use client";

import Image from "next/image";
import React from "react";

const LastSection = () => {
  return (
    <section className=" w-full  md:h-[850px] flex flex-col md:flex-row">
      {/* Left Section */}
      <div className=" md:flex hidden right-section md:w-[32%] w-[62%] md:h-[750px] h-[1250px] flex flex-col justify-center align-middle relative bg-gradient-to-b from-[#1da692] to-[#4355a1] md:rounded-br-[100px] text-white">
        <h2 className="text-white -rotate-90 text-2xl uppercase absolute md:left-[9%] left-[-15%] top-[42%] md:top-[33%] tracking-[10px] ">
          Why Choose Us
        </h2>
      </div>
      <div className="md:hidden">
        <h2 className="text-gray-800 text-3xl text-center uppercase tracking-[2px] mb-6 font-semibold">
          Why Choose Us
        </h2>
      </div>
      {/* Right Section */}
      <div className="w-full md:w-[70%] py-4 bg-white">
        <div className="space-y-6">
          {/* Section 1 */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-[90%] mx-auto bg-[#f0f1f4] rounded-br-[30px] shadow-md overflow-hidden">
                {/* Image Section */}
                <Image
                  src="/assets/OurServices/Comprehensive-IT-Expertise.png"
                  alt="Laptop in tech environment"
                  width={256}
                  height={96}
                  className="w-full"
                />

                {/* Text Section */}
                <div className="p-6">
                  <h4 className="text-[16px] 2xl:text-[19px] font-semibold text-gray-800">
                    Comprehensive IT Expertise
                  </h4>
                  <p className="mt-3 text-[14px] 2xl:text-[15px] text-gray-600">
                    With a diverse portfolio of services, ranging from IT
                    Business Process Outsourcing to Digital Workplace Solutions,
                    we offer end-to-end expertise to businesses
                  </p>
                </div>
              </div>

              <div className="w-[90%] mx-auto bg-[#f0f1f4] rounded-br-[30px] shadow-md overflow-hidden">
                {/* Image Section */}
                <Image
                  src="/assets/OurServices/client.png"
                  alt="Laptop in tech environment"
                  width={256}
                  height={96}
                  className="w-full"
                />
                {/* Text Section */}
                <div className="p-6">
                  <h4 className="text-[16px] 2xl:text-[19px] font-semibold text-gray-800">
                    Tailored, Client-Centric Approach
                  </h4>
                  <p className="mt-3 text-[14px] 2xl:text-[15px] text-gray-600">
                    Our solutions are custom-designed to align with your
                    business goals, ensuring measurable outcomes and seamless
                    integration into your existing IT ecosystem
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="w-[90%] mx-auto bg-[#f0f1f4] rounded-br-[30px] shadow-md overflow-hidden">
                {/* Image Section */}
                <Image
                  src="/assets/OurServices/Commitment-to-Innovation.png"
                  alt="Laptop in tech environment"
                  width={256}
                  height={96}
                  className="w-full"
                />

                {/* Text Section */}
                <div className="p-6">
                  <h4 className="text-[16px] 2xl:text-[19px] font-semibold text-gray-800">
                    Commitment to Innovation
                  </h4>
                  <p className="mt-3 text-[14px] 2xl:text-[15px] text-gray-600">
                    We leverage cutting-edge technologies like AI, automation,
                    and advanced analytics to future-proof your IT operations
                  </p>
                </div>
              </div>

              <div className="w-[90%] mx-auto bg-[#f0f1f4] rounded-br-[30px] shadow-md overflow-hidden">
                {/* Image Section */}
                <Image
                  src="/assets/OurServices/Proven-Track-Record-of-Success.png"
                  alt="Laptop in tech environment"
                  width={256}
                  height={96}
                  className="w-full"
                />
                {/* Text Section */}
                <div className="p-6">
                  <h4 className="text-[16px] 2xl:text-[19px] font-semibold text-gray-800">
                    Proven Track Record of Success
                  </h4>
                  <p className="mt-3 text-[14px] 2xl:text-[15px] text-gray-600">
                    From cost savings and process efficiency to enhanced
                    security and compliance, we deliver real value that drives
                    sustainable growth
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastSection;
