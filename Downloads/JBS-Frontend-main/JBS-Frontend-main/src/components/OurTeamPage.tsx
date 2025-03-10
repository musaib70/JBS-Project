"use client";
import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import Image from "next/image";
//import Link from "next/link";
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
    linkedin: "https://www.linkedin.com/in/ghaith-baki-zada-44802484/",
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
    imagePath: "/assets/female.png",
    linkedin: "https://www.linkedin.com/in/madiha-aadil-60519944/",
  },
];

const OurTeamPageSection: React.FC = () => {
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
    <section className="team-section flex flex-wrap relative mt-8">
      {/* Mobile Layout */}
      <div className="block md:hidden w-full">
        <div className="flex items-center justify-center text-gray-900 pt-10">
          <h2 className="text-center text-3xl font-semibold uppercase tracking-[2px]">
           
          </h2>
        </div>

        {/* Splide Slider */}
        <div ref={sliderRef} className="splide p-6">
          <div className="splide__track">
            <ul className="splide__list">
              {teamMembers.map((member, index) => (
                <li key={index} className="splide__slide">
                  <div className="relative p-4 flex flex-col items-center">
                    {/* Image */}
                    <div className="relative w-72 h-72 overflow-hidden rounded-md">
                      <Image
                        src={member.imagePath}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                    <p className="text-xl font-semibold text-gray-800 mt-4">
                      {member.name}
                    </p>
                    <p className="text-sm text-gray-500">{member.role}</p>

                    {/* Contact Section */}
                    {/* <p className="text-xs text-gray-500 mt-2">{member.email}</p> */}

                    {/* Icons */}
                    <div className="flex justify-center gap-4 mt-4">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={member.linkedin}
                        className="size-8 flex justify-center text-white items-center rounded-full bg-gradient-to-b from-[#1da692] to-[#4355a1]"
                      >
                        <FaLinkedin />
                      </a>
                      {/* <a
                        href={`mailto:${member.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="size-8 flex justify-center text-white items-center rounded-full bg-gradient-to-b from-[#1da692] to-[#4355a1]"
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
        {/* <div className="flex justify-center mt-10">
          <Link
            href="/maintenance"
            className="inline-block py-2 px-20 rounded text-sm font-semibold text-white bg-gradient-to-b from-[#1da692] to-[#4355a1] shadow-md"
          >
            View All
          </Link>
        </div> */}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-10">
        {teamMembers.map((team, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-full bg-white shadow-md p-4 rounded-lg"
          >
            {/* Image */}
            <div className="relative w-full aspect-square overflow-hidden rounded-md">
              <Image
                src={team.imagePath}
                alt={`Team Member ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>

            {/* Info */}
            <div className="text-center mt-4">
              <h3 className="text-lg font-semibold">{team.name}</h3>
              <p className="text-sm text-gray-500">{team.role}</p>
              {/* <p className="text-xs text-gray-500">{team.email}</p> */}
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={team.linkedin}
                className="size-8 flex justify-center text-white items-center rounded-full bg-gradient-to-b from-[#1da692] to-[#4355a1]"
              >
                <FaLinkedin />
              </a>
              {/* <a
                href={`mailto:${team.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="size-8 flex justify-center text-white items-center rounded-full bg-gradient-to-b from-[#1da692] to-[#4355a1]"
              >
                <FaEnvelope />
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeamPageSection;
