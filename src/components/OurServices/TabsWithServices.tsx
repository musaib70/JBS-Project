"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiOutlineArrowLongRight, HiOutlineArrowLongLeft } from "react-icons/hi2";

const GradientTabsWithServices = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleTabsCount, setVisibleTabsCount] = useState(5); // Default for desktop

  const tabs = [
    { id: 0, name: "Cloud Services" },
    { id: 1, name: "Data and AI" },
    { id: 2, name: "Application Services" },
    { id: 3, name: "Microsoft Digital Workplace" },
    { id: 4, name: "IT Business Process Outsourcing" },
    { id: 5, name: "Oracle Services" },
  ];

  const services = [
    [
      {
        title: "Cloud Migration Services",
        description: "Efficient migration to the cloud with minimal downtime.",
        link: "/our-services/cloud-services/cloud-migration-services",
      },
      {
        title: "Cloud Managed Services",
        description: "Comprehensive management of cloud infrastructure.",
        link: "/our-services/cloud-services/cloud-managed-services",
      },
      {
        title: "Cloud Providers",
        description:
          "Partnering with top cloud providers for seamless integration.",
        link: "/our-services/cloud-services/cloud-services-provider",
      },
      {
        title: "Cloud Security Services",
        description:
          "Ensuring security and compliance in your cloud environment.",
        link: "/our-services/cloud-services/cloud-security-services",
      },
      {
        title: "Cloud Transformation",
        description: "Transform your business with innovative cloud solutions.",
        link: "/our-services/cloud-services/cloud-transformation",
      },
    ],
    [
      {
        title: "AI Ecosystem",
        description: "Build intelligent solutions for scalable AI deployment.",
        link: "/our-services/data-and-ai/ai-ecosystem",
      },
      {
        title: "Data Foundations",
        description: "Establish robust data frameworks for your enterprise.",
        link: "/our-services/data-and-ai/data-foundations",
      },
      {
        title: "Analytics and AI",
        description: "Enhance decision-making with advanced analytics and AI.",
        link: "/our-services/data-and-ai/analytics-and-ai",
      },
      {
        title: "Workplace AI",
        description: "Implement AI-driven solutions in your workplace.",
        link: "/our-services/data-and-ai/workplace-ai",
      },
    ],
    [
      {
        title: "Application Modernization",
        description: "Modernize legacy applications for better performance.",
        link: "/our-services/application-services/application-modernization",
      },
      {
        title: "Application Development",
        description: "Custom app development tailored to your business needs.",
        link: "/our-services/application-services/application-development",
      },
      {
        title: "Automation",
        description:
          "Streamline processes with cutting-edge automation solutions.",
        link: "/our-services/application-services/automation",
      },
    ],
    [
      {
        title: "Digital Workplace Essentials",
        description: "Essential tools and services for a modern workplace.",
        link: "/our-services/digital-workplace/digital-workplace-essentials",
      },
      {
        title: "Unified Communications",
        description: "Integrate seamless communication solutions.",
        link: "/our-services/digital-workplace/unified-communications",
      },
      {
        title: "Data Backup and Recovery",
        description:
          "Reliable solutions for data backup and disaster recovery.",
        link: "/our-services/digital-workplace/data-backup-and-recovery",
      },
      {
        title: "Workplace Security",
        description: "Protect your workplace with advanced security measures.",
        link: "/our-services/digital-workplace/workplace-security",
      },
      {
        title: "Digital Enablement and Transformation",
        description: "Empower your organization with digital transformation.",
        link: "/our-services/digital-workplace/digital-enablement-and-transformation",
      },
      {
        title: "Software Asset Cost Optimization",
        description: "Optimize costs associated with software assets.",
        link: "/our-services/digital-workplace/software-asset-cost-optimization",
      },
    ],
    [
      {
        title: "Business Process Automation",
        description: "Automate your business processes for efficiency.",
        link: "/our-services/it-bpo/business-process-automation",
      },
      {
        title: "Governance and Strategy",
        description: "Develop strong IT governance and strategic frameworks.",
        link: "/our-services/it-bpo/governance-and-strategy",
      },
      {
        title: "Application Portfolio Consolidation Services",
        description: "Consolidate applications to streamline operations.",
        link: "/our-services/it-bpo/application-portfolio-consolidation",
      },
      {
        title: "Managed Services",
        description: "End-to-end management of IT operations.",
        link: "/our-services/it-bpo/managed-services",
      },
      {
        title: "Optimizing IT Operations",
        description:
          "Enhance IT operations with tailored optimization strategies.",
        link: "/our-services/it-bpo/optimizing-it-operations",
      },
    ],
    [
      {
        title: "Modernize Oracle Solutions",
        description: "JBS Consulting enables businesses to transform their mission-critical CRM.",
        link: "/our-services/oracle-services/modernize-your-crm",
      },
      {
        title: "Oracle Cloud Infrastructure",
        description: "We Provide Oracle Cloud Infrastructure Services tools, expertise, and support.",
        link: "/our-services/oracle-services/oracle-cloud-infrastructure",
      },
      {
        title: "APEX Application Development",
        description: "Oracle APEX, a low-code platform designed to create enterprise-grade applications.",
        link: "/our-services/oracle-services/apex-application-development",
      },
      {
        title: "Oracle EBS",
        description: "JBS Consulting leverages Oracle EBS to provide solutions tailored to meet the evolving needs of businesses.",
        link: "/our-services/oracle-services/oracle-ebs",
      },
    ],
  ];

  // Adjust visibleTabsCount based on screen width
  useEffect(() => {
    const updateVisibleTabs = () => {
      if (window.innerWidth < 640) {
        setVisibleTabsCount(1); // Show 2 tabs on mobile
      } else if (window.innerWidth < 1024) {
        setVisibleTabsCount(2); // Show 3 tabs on tablets
      } else {
        setVisibleTabsCount(4); // Show 5 tabs on desktops
      }
    };

    updateVisibleTabs(); // Run on mount
    window.addEventListener("resize", updateVisibleTabs);

    return () => {
      window.removeEventListener("resize", updateVisibleTabs);
    };
  }, []);

  const handleTabClick = (id: React.SetStateAction<number>) => {
    setActiveTab(id);
  };

  const handleNextTabs = () => {
    if (startIndex + visibleTabsCount < tabs.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrevTabs = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="w-full h-auto px-2">
      {/* Tabs Section */}
      <div className="flex items-center space-x-4 overflow-x-auto">
        {/* Left Arrow */}
        <div
          className={`text-[#1da692] cursor-pointer ${startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={handlePrevTabs}
        >
          <HiOutlineArrowLongLeft size={40} />
        </div>

        {tabs.slice(startIndex, startIndex + visibleTabsCount).map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`w-full py-3 text-[12px] md:text-[14px] font-normal rounded-br-2xl rounded-tl-2xl ${
              activeTab === tab.id
                ? "bg-[#1da692] text-white shadow-md"
                : "bg-gradient-to-r from-[#1da692] to-[#4355a1] text-white"
            }`}
          >
            {tab.name}
          </button>
        ))}

        {/* Right Arrow */}
        <div
          className={`text-[#1da692] cursor-pointer ${
            startIndex + visibleTabsCount >= tabs.length ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleNextTabs}
        >
          <HiOutlineArrowLongRight size={40} />
        </div>
      </div>

      {/* Services Section */}
      <div className="h-auto py-4 my-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services[activeTab]?.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-[#f0f1f4] hover:bg-white hover:shadow-lg hover:text-black transition-all duration-300 mb-4 rounded-br-[30px]"
            >
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 my-4">{service.description}</p>
              <Link href={service.link} className="text-sm font-medium text-[#1da692] hover:underline mt-2 block">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GradientTabsWithServices;