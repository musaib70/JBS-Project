"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {

  type MenuItem = {
    label: string;
    href?: string; // Optional, since some items just expand
    id?: string; // Optional, only for expandable submenus
    subMenu?: MenuItem[]; // Optional, only for expandable submenus
  };
  
  const router = useRouter();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  //const [sapSubMenuOpen, setSapSubMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | number | null>(
    "cloud-services" as string | number | null
  );
const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);


  const [, setIsInsightsOpen] = useState(false);

  const categories: MenuItem[] = [
    {
      id: "cloud-services",
      label: "Cloud Services",
      subMenu: [
        {
          href: "/our-services/cloud-services/cloud-migration-services",
          label: "Cloud Migration Services",
        },
        {
          href: "/our-services/cloud-services/cloud-services-provider",
          label: "Cloud Service Provider",
        },
        {
          href: "/our-services/cloud-services/cloud-managed-services",
          label: "Cloud Managed Services",
        },
        {
          href: "/our-services/cloud-services/cloud-security-services",
          label: "Cloud Security",
        },
        {
          href: "/our-services/cloud-services/cloud-transformation",
          label: "Cloud Transformation",
        },
      ],
    },
    {
      id: "data-and-ai",
      label: "Data and AI",
      subMenu: [
        {
          href: "/our-services/data-and-ai/ai-ecosystem",
          label: "AI Ecosystem",
        },
        {
          href: "/our-services/data-and-ai/data-foundations",
          label: "Data Foundations",
        },
        {
          href: "/our-services/data-and-ai/analytics-and-ai",
          label: "Analytics and AI",
        },
        {
          href: "/our-services/data-and-ai/workplace-ai",
          label: "Workplace AI",
        },
      ],
    },
    {
      id: "application-services",
      label: "Application Services",
      subMenu: [
        {
          href: "/our-services/application-services/application-modernization",
          label: "Application Modernization",
        },
        {
          href: "/our-services/application-services/application-development",
          label: "Application Development",
        },
        {
          href: "/our-services/application-services/automation",
          label: "Automation",
        },
      ],
    },
    {
      id: "digital-workplace",
      label: "Microsoft Digital Workplace",
      subMenu: [
        {
          href: "/our-services/digital-workplace/digital-workplace-essentials",
          label: "Digital Workplace Essentials",
        },
        {
          href: "/our-services/digital-workplace/unified-communications",
          label: "Unified Communications",
        },
        {
          href: "/our-services/digital-workplace/data-backup-and-recovery",
          label: "Data Backup & Recovery",
        },
        {
          href: "/our-services/digital-workplace/workplace-security",
          label: "Workplace Security",
        },
        {
          href: "/our-services/digital-workplace/digital-enablement-and-transformation",
          label: "Digital Enablement and Transformation",
        },
        {
          href: "/our-services/digital-workplace/software-asset-cost-optimization",
          label: "Software Asset Cost Optimization",
        },
      ],
    },
    {
      id: "it-bpo",
      label: "IT BPO",
      subMenu: [
        {
          href: "/our-services/it-bpo/business-process-automation",
          label: "Business Process Automation",
        },
        {
          href: "/our-services/it-bpo/governance-and-strategy",
          label: "Governance and Strategy",
        },
        {
          href: "/our-services/it-bpo/application-portfolio-consolidation",
          label: "Application Portfolio Consolidation",
        },
        {
          href: "/our-services/it-bpo/managed-services",
          label: "Managed Services",
        },
        {
          href: "/our-services/it-bpo/optimizing-it-operations",
          label: "Optimizing IT Operations",
        },
      ],
    },
    {
      id: "enterprise-app-services",
      label: "Enterprise Application Services",
      href: "",
      subMenu: [
        {
          id: "oracle",
          label: "Oracle Services",
          href: "", // No direct link, used for expansion
          subMenu: [
            {
              href: "/our-services/oracle-services/modernize-your-crm",
              label: "Modernize Oracle Solutions",
            },
            {
              href: "/our-services/oracle-services/oracle-cloud-infrastructure",
              label: "Oracle Cloud Infrastructure",
            },
            {
              href: "/our-services/oracle-services/apex-application-development",
              label: "APEX Application Development",
            },
            {
              href: "/our-services/oracle-services/oracle-ebs",
              label: "Oracle EBS",
            },
          ],
        },
        {
          id: "sap-more",
          label: "SAP Services",
          href: "", // No direct link, used for expansion
          subMenu: [
            { id: "4", label: "SAP Consulting", href: "/sap-consulting" },
            { id: "5", label: "SAP Implementation", href: "/sap-implementation" },
          ],
        },
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
  //const toggleSapSubMenu = () => setSapSubMenuOpen(!sapSubMenuOpen);

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
                  href="/about-us"
                  className="block text-black font-semibold"
                  onClick={() => {
                    setTimeout(() => {
                      setIsMobileMenuOpen(false);
                      setIsMegaMenuOpen(false);
                    }, 1000); // 3-second delay before closing
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/our-services"
                  className="block text-black font-semibold"
                  onClick={() => {
                    setTimeout(() => {
                      setIsMobileMenuOpen(false);
                      setIsMegaMenuOpen(false);
                    }, 1000); // 3-second delay before closing
                  }}
                >
                  Our Services
                </Link>
              </li>
              {categories.map((category) => (
  <li className="pl-8" key={category.id}>
    <div
      className="block text-black font-semibold cursor-pointer"
      onClick={() =>
        setActiveCategory((prev) =>
          prev === category.id ? null : category.id ?? null
        )
      }
      
    >
      {category.label}
    </div>

    {/* First-Level Submenu */}
    {activeCategory === category.id && category.subMenu && (
      <ul className="pl-4 space-y-3">
        {category.subMenu.map((subMenu) => (
          <li key={subMenu.id || subMenu.label}>  {/* Ensuring unique keys */}
            {subMenu.subMenu ? (
              <>
                <div
                  className="block text-gray-700 font-semibold cursor-pointer"
                  onClick={() =>
                    setActiveSubCategory((prev) =>
                      prev === subMenu.id ? null : subMenu.id ?? null
                    )
                  }
                  
                >
                  {subMenu.label}
                </div>

                {/* Second-Level Submenu (Oracle & More SAP Services) */}
                {activeSubCategory === subMenu.id && (
                  <ul className="pl-4 space-y-3">
                    {subMenu.subMenu.map((nestedItem) => (
                      <li key={nestedItem.label}>
                        <Link href={nestedItem.href!} className="block text-gray-700">
                          {nestedItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link href={subMenu.href!} className="block text-gray-700">
                {subMenu.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    )}
  </li>
))}


              {/* Insights Section for mobile */}

              <li>
                <Link href="#" className="block text-black font-semibold">
                  Insights
                </Link>
                <ul>
                  <li>
                    <Link
                      href="/blogs"
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                      onClick={() => {
                        setTimeout(() => {
                          setIsMobileMenuOpen(false);
                          setIsMegaMenuOpen(false);
                        }, 1000); // 3-second delay before closing
                      }}
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/case-studies"
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                      onClick={() => {
                        setTimeout(() => {
                          setIsMobileMenuOpen(false);
                          setIsMegaMenuOpen(false);
                        }, 1000); // 3-second delay before closing
                      }}
                    >
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/news"
                      className="block px-4 py-2 text-black hover:bg-gray-200"
                      onClick={() => {
                        setTimeout(() => {
                          setIsMobileMenuOpen(false);
                          setIsMegaMenuOpen(false);
                        }, 1000); // 3-second delay before closing
                      }}
                    >
                      News
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  href="/careers"
                  className="block text-black font-semibold"
                  onClick={() => {
                    setTimeout(() => {
                      setIsMobileMenuOpen(false);
                      setIsMegaMenuOpen(false);
                    }, 1000); // 3-second delay before closing
                  }}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  onClick={() => {
                    setTimeout(() => {
                      setIsMobileMenuOpen(false);
                      setIsMegaMenuOpen(false);
                    }, 1000); // 3-second delay before closing
                  }}
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
            href="/about-us"
            onClick={() => {
              setTimeout(() => setIsMegaMenuOpen(false), 500); // Close after 3 seconds
            }}
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
              <Link href="/our-services"
              onClick={() => {
                setTimeout(() => setIsMegaMenuOpen(false), 500); // Close after 3 seconds
              }}
              > Our Services </Link>
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
                          onMouseEnter={() => setActiveCategory(category.id ?? null)}
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
{categories.find((category) => category.id === activeCategory)?.subMenu?.map((subMenu) => (
  <li key={subMenu.id || subMenu.label}> {/* Ensuring unique keys */}
    {subMenu.subMenu ? (
      <>
        <span
          className="cursor-pointer block text-gray-700 font-semibold"
          onClick={() =>
            setActiveSubCategory((prev) =>
              prev === subMenu.id ? null : subMenu.id ?? null
            )
          }
          
        >
          {subMenu.label}
        </span>

        {/* Oracle Services & More SAP Services */}
        {activeSubCategory === subMenu.id && (
          <ul className="pl-4 space-y-3">
            {subMenu.subMenu.map((nestedItem) => (
              <li key={nestedItem.label}>
                <Link href={nestedItem.href!} className="block text-gray-700">
                  {nestedItem.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </>
    ) : (
      <Link href={subMenu.href!} className="block text-gray-700">
        {subMenu.label}
      </Link>
    )}
  </li>
))}



                      </ul>
                    </div>

                      {/* Blog Section */}
                      <div className="space-y-4">
                        <div className="flex flex-row md:justify-between space-x-4">
                          <div className="max-w-[200px]">
                            <Image
                              src="/assets/Blog01.jpg"
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
                                <Link href="/blogs/679cc2a2953e85ba33101fd6">Read More</Link>
                              </button>
                            </div>
                          </div>
                          <div className="">
                            <Image
                              src="/assets/Blog02.jpg"
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
                                <Link href="/blogs/679cc5270c97fd0a6518b0c8">Read More</Link>
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
                    href="/blogs"
                    onClick={() => {
                      setTimeout(() => setIsMegaMenuOpen(false), 500); // Close after 3 seconds
                    }}
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                    
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies"
                    onClick={() => {
                      setTimeout(() => setIsMegaMenuOpen(false), 500); // Close after 3 seconds
                    }}
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    onClick={() => {
                      setTimeout(() => setIsMegaMenuOpen(false), 500); // Close after 3 seconds
                    }}
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
            href="/careers"
            onClick={() => {
              setTimeout(() => setIsMegaMenuOpen(false), 500); // Close after 3 seconds
            }}
            className="text-black text-sm md:text-[20px] font-semibold px-6"
          >
            Careers
          </Link>
          <Link
            href="/contact-us"
            onClick={() => {
              setTimeout(() => setIsMegaMenuOpen(false), 500); // Close after 3 seconds
            }}
            className="bg-gradient-to-r from-[#1da692] to-[#4355a1] text-white max-md:text-center px-4 py-4 rounded-tl-2xl rounded-br-2xl shadow-md text-sm md:text-[14px] font-semibold"
          >
            Get Connected
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
