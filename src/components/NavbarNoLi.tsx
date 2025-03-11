"use client";

import { useState, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NavbarNoLi = () => {
  const router = useRouter();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | number | null>(
    "cloud-services"
  );

  const [, setIsInsightsOpen] = useState(false);

  const categories = [
    {
      id: "cloud-services",
      label: "Cloud Services",
      subMenu: [
        { href: "/maintenance", label: "Cloud Migration Services" },
        { href: "/maintenance", label: "Cloud Service Provider" },
        { href: "/maintenance", label: "Cloud Managed Services" },
        { href: "/maintenance", label: "Cloud Security" },
        { href: "/maintenance", label: "Cloud Transformations" },
      ],
    },
    {
      id: "data-and-ai",
      label: "Data and AI",
      subMenu: [
        { href: "/maintenance", label: "AI Ecosystem" },
        { href: "/maintenance", label: "Data Foundations" },
        { href: "/maintenance", label: "Analytics and AI" },
        { href: "/maintenance", label: "Workplace AI" },
      ],
    },
    {
      id: "application-services",
      label: "Application Services",
      subMenu: [
        { href: "/maintenance", label: "Application Modernization" },
        { href: "/maintenance", label: "Application Development" },
        { href: "/maintenance", label: "Automation" },
      ],
    },
    {
      id: "digital-workplace",
      label: "Digital Workplace",
      subMenu: [
        { href: "/maintenance", label: "Digital Workplace Essentials" },
        { href: "/maintenance", label: "Unified Communications" },
        { href: "/maintenance", label: "Data Backup & Recovery" },
        { href: "/maintenance", label: "Workplace Security" },
      ],
    },
    {
      id: "it-bpo",
      label: "IT BPO",
      subMenu: [
        { href: "/maintenance", label: "Business Process Automation" },
        { href: "/maintenance", label: "Governance and Strategy" },
        { href: "/maintenance", label: "Application Portfolio Consolidation" },
        { href: "/maintenance", label: "Managed Services" },
        { href: "/maintenance", label: "Optimizing IT Operations" },
      ],
    },
  ];

  const handleMouseEnter = () => {
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMegaMenuOpen(false);
  };

  const handleInsightsMouseEnter = () => {
    setIsInsightsOpen(true);
  };

  const handleInsightsMouseLeave = () => {
    setIsInsightsOpen(false);
  };

  return (
    <nav className="bg-white md:px-4 lg:px-4 xl:px-8 2xl:px-16 py-2">
      <div className="md:px-0 px-4 flex flex-wrap items-center justify-between h-[80px]">
        {/* Logo and Hamburger Menu */}
        <div className="w-full md:w-auto flex justify-between items-center mb-4 md:mb-0">
          <div
            className="relative md:max-h-[65px] h-28 w-60 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image
              src="/assets/JBS Logo.png"
              alt="JBS Logo"
              objectFit="contain"
              layout="fill"
            />
          </div>

          <div className="w-2/5 flex justify-end md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-[95px] border-t left-0 w-full bg-white shadow-lg z-50">
            <ul className="p-4 space-y-4">
              <li>
                <Link
                  href="/maintenance"
                  className="block text-black font-semibold"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/maintenance"
                  className="block text-black font-semibold"
                >
                  Our Services
                </Link>
              </li>
              {categories.map(
                (category: {
                  id: string | number; // Restricting the type of `id` to valid `key` types
                  label: ReactNode; // Simplified to match typical React usage
                  subMenu: { href: string; label: string }[]; // Added typing for `subMenu`
                }) => (
                  <li className="pl-8" key={category.id}>
                    <div
                      className="block text-black font-semibold cursor-pointer"
                      onClick={() =>
                        setActiveCategory((prev) =>
                          prev === category.id ? "" : category.id
                        )
                      }
                    >
                      {category.label}
                    </div>
                    {activeCategory === category.id && (
                      <ul className="pl-4 space-y-3">
                        {category.subMenu.map((subMenu, index) => (
                          <li className="" key={index}>
                            <Link
                              href={subMenu.href}
                              className="block text-gray-700"
                            >
                              {subMenu.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              )}

              {/* Insights Section for mobile */}

              <li>
                <Link
                  href="/maintenance"
                  className="block text-black font-semibold"
                >
                  Insights
                </Link>
                <ul>
                  <li>
                    <Link
                      href="/maintenance"
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/maintenance"
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                    >
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/maintenance"
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                    >
                      News
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  href="/maintenance"
                  className="block text-black font-semibold"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block bg-gradient-to-r from-[#1da692] to-[#4355a1] text-white px-4 py-2 rounded-md shadow-md font-semibold"
                >
                  Get Connected
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Desktop Links */}
        <div className="hidden md:flex w-full md:w-auto justify-center md:justify-end items-center space-y-4 md:space-y-0 md:space-x-8">
          {/* Other Links */}
          <Link
            href="/maintenance"
            className="text-black text-sm md:text-[20px] font-semibold px-6"
          >
            About Us
          </Link>

          {/* Mega Menu */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="text-black text-sm md:text-[20px] font-semibold px-6 cursor-pointer">
              Our Services
            </div>
            {isMegaMenuOpen && (
              <div className="absolute -left-[700px] top-[100%]  w-[1200px] z-50">
                <div className="w-full mt-10 bg-white shadow-lg">
                  <div className="flex">
                    {/* Categories */}
                    <div className="w-1/5 bg-gray-100 p-4">
                      {categories.map((category) => (
                        <div
                          key={category.id}
                          onMouseEnter={() => setActiveCategory(category.id)}
                          className={`py-4 px-4 text-lg cursor-pointer hover:bg-gray-200 ${
                            activeCategory === category.id
                              ? "bg-gray-200 font-bold"
                              : ""
                          }`}
                        >
                          {category.label}
                        </div>
                      ))}
                    </div>

                    {/* Content Area */}
                    <div className="w-4/5 p-4 grid grid-cols-2 gap-8">
                      {/* Sub Menu */}
                      <div>
                        <ul className="space-y-4">
                          {categories
                            .find((category) => category.id === activeCategory)
                            ?.subMenu.map((subMenu, index) => (
                              <li key={index}>
                                <Link
                                  href={subMenu.href}
                                  className="block text-black text-lg hover:text-gray-600 hover:font-bold"
                                >
                                  {subMenu.label}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>

                      {/* Blog Section */}
                      <div className="space-y-4">
                        <div className="flex flex-row md:justify-between space-x-4">
                          <div className="max-w-[200px]">
                            <Image
                              src="/assets/OurServices/cloud-migration/dummy.png"
                              alt="Blog Image"
                              width={200}
                              height={100}
                              className="rounded-md"
                            />
                            <div className="py-5">
                              <h3 className="text-black font-bold">
                                We&apos;re thrilled to announce the opening of
                                our new office in Riyadh, a significant
                                milestone in our mission to &apos;Works
                                Better&apos;
                              </h3>
                              <p className="text-gray-600 text-sm"></p>
                              <button className="text-blue-600 hover:underline">
                                <Link href="/maintenance">Read More</Link>
                              </button>
                            </div>
                          </div>
                          <div className="">
                            <Image
                              src="/assets/OurServices/cloud-migration/dummy.png"
                              alt="Blog Image"
                              width={200}
                              height={100}
                              className="rounded-md"
                            />
                            <div className="py-5">
                              <h3 className="text-black font-bold">
                                Modernizing Security Operations with Microsoft
                                Sentinel: The Future of Cyber Defense
                              </h3>
                              <p className="text-gray-600 text-sm"></p>

                              <button className="text-blue-600 hover:underline">
                                <Link href="/maintenance">Read More</Link>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Insights Dropdown */}
          <div
            className="relative group"
            onMouseEnter={handleInsightsMouseEnter}
            onMouseLeave={handleInsightsMouseLeave}
          >
            {/* Trigger for Dropdown */}
            <div className="text-black text-sm md:text-[20px] font-semibold px-6 cursor-pointer">
              Insights
            </div>

            {/* Dropdown Menu */}
            <div
              className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out`}
            >
              <ul>
                <li>
                  <Link
                    href="/maintenance"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/maintenance"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/maintenance"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    News
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Other Links */}
          <Link
            href="/maintenance"
            className="text-black text-sm md:text-[20px] font-semibold px-6"
          >
            Careers
          </Link>
          <Link
            href="/maintenance"
            className="bg-gradient-to-r from-[#1da692] to-[#4355a1] text-white px-4 py-4 rounded-tl-2xl rounded-br-2xl shadow-md text-sm md:text-[14px] font-semibold"
          >
            Get Connected
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarNoLi;
