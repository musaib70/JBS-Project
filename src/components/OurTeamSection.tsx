"use client";
import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import Image from "next/image";
import Link from "next/link";
// import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Veqar ul Islam",
    role: "CEO, JBS",
    email: "veqar.islam@jbs.live",
    imagePath: "/assets/AboutUs/Team/Veqar-ul-Islam.jpg",
    linkedin: "https://www.linkedin.com/in/veqar-islam-b4b21a5/",
  },
  {
    name: "Rabia Azfar Nizami",
    role: "Country Head, JBS Consulting",
    email: "rabia.nizami@jbs.live",
    imagePath: "/assets/AboutUs/Team/Rabia-Azfar-Nizami.jpg",
    linkedin: "https://www.linkedin.com/in/rabia-azfar-nizami/",
  },
  {
    name: "Ghaith Baki Zada",
    role: "Senior Sales Manager",
    email: "inayat.koreshi@jbs.live",
    imagePath: "/assets/AboutUs/Team/Ghaith-Baki-Zada.jpg",
    linkedin: "https://www.linkedin.com/in/ghaith-baki-zada-44802484/ ",
  },
  {
    name: "Sohail Saleem",
    role: "General Manager, JBS Consulting",
    email: "muhammad.sohail@jbs.live",
    imagePath: "/assets/AboutUs/Team/Muhammad-Sohail.jpg",
    linkedin: "https://www.linkedin.com/in/sohail-saleem-16310b8/",
  },
  {
    name: "Madiha Aadil",
    role: "Head of Service Delivery",
    email: "madiha.aadil@jbs.live",
    imagePath: "/assets/AboutUs/Team/female.png",
    linkedin: "https://www.linkedin.com/in/madiha-aadil-60519944/",
  },
];

const OurTeamSection: React.FC = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      new Splide(sliderRef.current, {
        type: "loop",
        perPage: 1,
        pagination: true,
        arrows: false,
        autoplay: true,
        interval: 3000,
        speed: 800,
      }).mount();
    }
  }, []);
  return (
    <section className="team-section flex flex-wrap relative lg:flex-nowrap mt-8">
      {/* Mobile Layout */}
      <div className="block md:hidden w-full">
        {/* Mobile Heading */}
        <div className="flex items-center justify-center text-gray-900 pt-10">
          <h2 className="text-center text-3xl font-semibold uppercase tracking-[2px]">
            Our Teams
          </h2>
        </div>

        {/* Splide Slider */}
        <div ref={sliderRef} className="splide p-6">
          <div className="splide__track">
            <ul className="splide__list">
              {teamMembers.slice(0, 3).map((member, index) => (
                <li key={index} className="splide__slide">
                  <div className="relative p-4 ">
                    {/* Image and Title Section */}
                    <div className="flex flex-col items-center">
                      <div className="relative w-72 h-72 overflow-hidden mb-4">
                        <Image
                          src={member.imagePath}
                          alt={member.name}
                          layout="fill"
                          className="h-full w-full"
                        />
                      </div>
                      <p className="text-xl font-semibold text-gray-800">
                        {member.name}
                      </p>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </div>

                    {/* Contact Section */}
                    {/* <div className="mt-4 text-center">
                      <p className="text-xs text-gray-500">{member.email}</p>
                    </div> */}

                    {/* Icons Wrapper */}
                    <div className="flex justify-center gap-4 mt-4">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={member.linkedin}
                        className="size-8 cursor-pointer flex justify-center text-white items-center rounded-full bg-gradient-to-b from-[#1da692] to-[#4355a1]"
                      >
                        <FaLinkedin />
                      </a>
                      {/* <a
                        href={`mailto:${member.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="size-8 cursor-pointer flex justify-center text-white items-center rounded-full bg-gradient-to-b from-[#1da692] to-[#4355a1]"
                      >
                        <FaEnvelope />
                      </a> */}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile View All Button */}
        <div className="flex justify-center mt-10">
          <Link
            href="/about-us/our-team"
            className="inline-block py-2 px-20 rounded text-sm font-semibold text-white bg-gradient-to-b from-[#1da692] to-[#4355a1] shadow-md"
          >
            View All
          </Link>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex w-full">
        {/* Left Section */}
        <div className="right-section md:w-[32%] w-[62%] md:h-[560px] flex flex-col justify-center align-middle relative bg-gradient-to-b from-[#1da692] to-[#4355a1] md:rounded-br-[240px] text-white">
          <h2 className="text-white font-bold uppercase text-3xl absolute md:left-[5%] top-1/4 left-[-10%] mx-2 transform -rotate-90 tracking-[14px] pb-10">
            Our Team
          </h2>
          <div className="absolute md:left-[-20%] left-[-20%] bottom-12 w-full flex justify-center">
            <Link
              href="/about-us/our-team"
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

        {/* Right Section */}
        <div className="absolute top-[15%] left-[16%] grid grid-cols-1 md:grid-cols-4 md:w-[84%] gap-10 justify-between items-center">
          {teamMembers.slice(0, 4).map((team, index) => (
            <div
              key={index}
              className={`flex flex-col items-center w-full  ${index === 0 ? "transform scale-110" : ""
                }`} // Apply scale transformation to the first card
            >
              {/* Team Member Card */}
              <div className="w-full flex flex-col items-center relative group">
                <div
                  className={`relative overflow-hidden w-[260px] h-[auto] rounded-br-[30px]`}
                >
                  <Image
                    src={team.imagePath}
                    alt={`Team Member ${index + 1}`}
                    className="object-contain w-full h-full"
                    width={384}
                    height={451}
                  />
                  {/* Bottom Overlay */}
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-100 text-white opacity-90 transition-opacity duration-300 p-4 rounded-br-[30px] cursor-pointer">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold">{team.name}</h3>
                        <p className="text-[12px]">{team.role}</p>
                      </div>

                      <div>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={team.linkedin}
                          className="size-10 cursor-pointer flex justify-center text-white items-center rounded-full bg-gradient-to-b from-[#1da692] to-[#4355a1]"
                        >
                          <FaLinkedin size={20}/>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
