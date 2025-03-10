"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CloudBenefitsChallengesProps {
  benefitsTitle: string;
  benefitsList: { title: string; description?: string }[];
  challengesTitle: string;
  challengesList: { title: string; description?: string }[];
  benefitsImage: string;
  challengesImage: string;
  rightSectionTitle: string;
}

const CloudBenefitsChallenges: React.FC<CloudBenefitsChallengesProps> = ({
  benefitsTitle,
  benefitsList,
  challengesTitle,
  challengesList,
  benefitsImage,
  challengesImage,
  rightSectionTitle,
}) => {
  // Set the first benefit and challenge open by default
  const [openBenefit, setOpenBenefit] = useState<number>(0);
  const [openChallenge, setOpenChallenge] = useState<number>(0);

  const toggleBenefit = (index: number) => {
    // Allow toggling, but always keep the first benefit open
    setOpenBenefit(openBenefit === index ? (index === 0 ? 0 : -1) : index);
  };

  const toggleChallenge = (index: number) => {
    // Allow toggling, but always keep the first challenge open
    setOpenChallenge(openChallenge === index ? (index === 0 ? 0 : -1) : index);
  };

  return (
    <section className="">
      <div className="flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-[70%] md:h-[900px] 2xl:h-[900px] max-h-[900px] max-md:h-[300]  bg-white py-6 pr-6 max-md:px-2">
          {/* Upper Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Benefits Section */}
            <div className="relative w-full h-full min-h-[360px]">
              <Image src={benefitsImage} alt="Benefits illustration" className="w-full rounded-br-[90px]" layout="fill" objectFit="cover" />
            </div>
            <div className="md:pl-10 max-md:px-4">
              <h4 className="text-3xl font-semibold 2xl:text-4xl mb-4 text-[#069986] ">
                {benefitsTitle}
              </h4>
              <ul className="space-y-4">
                {benefitsList.map((benefit, index) => (
                  <li key={index}>
                    <button
                      className="flex items-center w-full text-left text-[17px] 2xl:text-[20px] font-medium focus:outline-none"
                      onClick={() => toggleBenefit(index)}
                    >
                      {benefit.title}
                      <span className="ml-2">{openBenefit === index ? "↑" : "↓"}</span>
                    </button>
                    {openBenefit === index && benefit.description && (
                      <div
                        className="transition-all duration-300 ease-in-out opacity-100 mt-2"
                        style={{ transition: "all 0.3s ease-in-out" }}
                      >
                        <p className="text-[14px] 2xl:text-[17px] leading-relaxed text-gray-500">{benefit.description}</p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Lower Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Challenges Section */}
            <div className="md:pr-10 max-md:px-4">
              <h4 className="text-3xl font-semibold 2xl:text-4xl mb-4 text-[#069986]">
                {challengesTitle}
              </h4>
              <ul className="space-y-4">
                {challengesList.map((challenge, index) => (
                  <li key={index}>
                    <button
                      className="flex items-center w-full text-left text-[17px] 2xl:text-[20px] font-medium focus:outline-none"
                      onClick={() => toggleChallenge(index)}
                    >
                      {challenge.title}
                      <span className="ml-2">{openChallenge === index ? "↑" : "↓"}</span>
                    </button>
                    {openChallenge === index && challenge.description && (
                      <div
                        className="transition-all duration-300 ease-in-out opacity-100 mt-2"
                        style={{ transition: "all 0.3s ease-in-out" }}
                      >
                        <p className="text-[14px] 2xl:text-[17px] leading-relaxed text-gray-500">{challenge.description}</p>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Placeholder */}
            <div className="max-md:hidden relative w-full h-full min-h-[360px]">
              <Image src={challengesImage} alt="Challenges illustration" className="w-full rounded-br-[90px]"  layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="max-md:hidden right-section md:w-[30%] w-full md:h-[780px] 2xl:h-[900px] h-[900px] flex flex-col justify-center align-middle relative bg-gradient-to-b from-[#1da692] to-[#4355a1] md:rounded-bl-[240px] text-white">
          <h2 className="text-white -rotate-90 text-2xl uppercase absolute md:left-[-36%] left-[-15%] top-[28%] md:right-[-41%] md:top-[24%] tracking-[10px]">
            {rightSectionTitle}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CloudBenefitsChallenges;
