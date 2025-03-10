"use client";
import Link from "next/link";
import { FC, useState } from "react";
import { GrServices } from "react-icons/gr";

const tabData = {
  "Cloud Services": {
    description:
      "Cloud Services provide businesses with a flexible and scalable infrastructure to store, manage, and secure data. From cloud migration to security and managed services, businesses can achieve improved performance, cost-efficiency, and seamless access to applications. Transform your IT operations with secure and reliable cloud solutions that meet your business needs.",
    list: [
      { label: "Cloud Migration Services", link: "/our-services/cloud-services/cloud-migration-services" },
      { label: "Cloud Managed Services", link: "/our-services/cloud-services/cloud-managed-services" },
      { label: "Cloud Security Services", link: "/our-services/cloud-services/cloud-security-services" },
      { label: "Cloud Transformation", link: "/our-services/cloud-services/cloud-transformation" },
      
    ],
  },
  "Data and AI": {
    description:
      "Harness the power of Data and AI to drive innovation and improve decision-making. By utilizing advanced data analytics, machine learning, and AI technologies, businesses can gain valuable insights, optimize processes, and enhance customer experiences. Empower your organization with smarter solutions that transform data into actionable insights for better business outcomes.",
    list: [
      { label: "AI Ecosystem", link: "/our-services/data-and-ai/ai-ecosystem" },
      { label: "Data Foundations", link: "/our-services/data-and-ai/data-foundations" },
      { label: "Analytics and AI", link: "/our-services/data-and-ai/analytics-and-ai" },
      { label: "Workplace AI", link: "/our-services/data-and-ai/workplace-ai" },
    ],
  },
  "Application Services": {
    description:
      "Application Services help businesses modernize, develop, and manage applications to stay competitive in the digital age. From application development to automation and modernization, these services ensure that applications are agile, secure, and optimized for performance. Enhance operational efficiency and user satisfaction with applications that drive business growth and innovation.",
    list: [
      { label: "Application Modernization", link: "/our-services/application-services/application-modernization" },
      { label: "Application Development", link: "/our-services/application-services/application-development" },
      { label: "Automation", link: "/our-services/application-services/automation" },
    ],
  },
  "Digital Workplace": {
    description:
      "Digital Workplace solutions empower organizations by enabling seamless collaboration, communication, and data access across teams. By integrating advanced technologies, businesses can enhance productivity, improve employee engagement, and create a more flexible, collaborative, and efficient work environment. Empower your workforce with innovative tools that promote collaboration and help teams achieve greater success.",
    list: [
      { label: "Digital Workplace Essentials", link: "/our-services/digital-workplace/digital-workplace-essentials" },
      { label: "Unified Communications", link: "/our-services/digital-workplace/unified-communications" },
      { label: "Data Backup and Recovery", link: "/our-services/digital-workplace/data-backup-and-recovery" },
      { label: "Workplace Security", link: "/our-services/digital-workplace/workplace-security" },
      { label: "Digital Enablement and Transformation", link: "/our-services/digital-workplace/digital-enablement-and-transformation" },
      { label: "Software Asset Cost Optimization", link: "/our-services/digital-workplace/software-asset-cost-optimization" },
    ],
  },
  "IT BPO": {
    description:
      "IT BPO (Business Process Outsourcing) helps organizations streamline IT operations, reduce costs, and improve service efficiency. From process automation to IT management, businesses can outsource non-core IT functions, ensuring high-quality service delivery and allowing teams to focus on innovation. Optimize your IT landscape with managed services tailored to your business needs.",
    list: [
      { label: "Business Process Automation", link: "/our-services/it-bpo/business-process-automation" },
      { label: "Governance and Strategy", link: "/our-services/it-bpo/governance-and-strategy" },
      { label: "Application Portfolio Consolidation", link: "/our-services/it-bpo/application-portfolio-consolidation" },
      { label: "Managed Services", link: "/our-services/it-bpo/managed-services" },
      { label: "Optimizing IT Operations", link: "/our-services/it-bpo/optimizing-it-operations" },
    ],
  },
  "Oracle Services": {
    description:
      "Oracle Services provide comprehensive solutions for managing and optimizing enterprise data and applications. With expert support in Oracle cloud, database management, and enterprise resource planning (ERP), businesses can streamline operations, improve performance, and enhance scalability. Leverage Oracle’s powerful capabilities to ensure secure, integrated, and efficient IT environments for your business.",
    list: [
      { label: "Modernize Your CRM", link: "/our-services/oracle-services/modernize-your-crm" },
      { label: "Oracle Cloud Infrastructure", link: "/our-services/oracle-services/oracle-cloud-infrastructure" },
      { label: "APEX Application Development", link: "/our-services/oracle-services/apex-application-development" },
      { label: "Oracle EBS", link: "/our-services/oracle-services/oracle-ebs" },
    ],
  },
};

type TabKey = keyof typeof tabData;

const OurServicesTabs: FC = () => {
  const [activeTabDesktop, setActiveTabDesktop] = useState<TabKey>(
    Object.keys(tabData)[0] as TabKey
  );
  const [activeTabMobile, setActiveTabMobile] = useState<TabKey | null>(
    Object.keys(tabData)[0] as TabKey
  );

  // Desktop tab click handler
  const handleDesktopTabClick = (tab: TabKey) => {
    setActiveTabDesktop(tab);
  };

  // Mobile tab click handler
  const handleMobileTabClick = (tab: TabKey) => {
    setActiveTabMobile((prev) => (prev === tab ? null : tab));
  };

  return (
    <section className="py-12">
      {/* Desktop and Tablet Layout */}
      <div className="hidden md:flex mx-auto flex-row items-start justify-between relative gap-10">
        {/* First column - Tabs (Original style) */}
        <div className="md:w-[35%] w-full h-[650px] bg-gradient-to-b from-[#1da692] to-[#4355a1] md:rounded-br-[240px] py-4 flex flex-col items-start justify-center relative">
          <div className="lg:w-[82%]">
            <h2 className="text-white font-bold uppercase text-2xl absolute top-40 transform -rotate-90 tracking-[14px] pb-44">
              OUR SERVICES              
            </h2>
            
          </div>
          <div className="absolute bottom-16 left-20 w-full flex justify-start ">
            <Link
              href="/our-services"
              className="inline-block py-2 px-6 text-sm font-semibold text-white relative group"
            >
              {/* Top Border */}
              <span className="absolute top-0 left-0 w-[100%] h-[1px] bg-white origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-300"></span>
              {/* Button Text */}
              View All
              {/* Bottom Border */}
              <span className="absolute bottom-0 right-0 w-[100%] h-[1px] bg-white origin-right scale-x-50 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </div>
          <div className="flex flex-col w-[70%] items-start text-white mt-5 absolute right-2 lg:top-20 md:top-[10%] top-[15%]">
            <div className="text-[22px] text-left">
              <ul className="space-y-[8px] lg:space-y-[14px] uppercase">
                {(Object.keys(tabData) as TabKey[]).map((tab) => (
                  <li className="flex" key={tab}>
                    <button
                      onClick={() => handleDesktopTabClick(tab)}
                      className={`${
                        activeTabDesktop === tab ? "font-bold" : ""
                      } hover:underline`}
                    >
                      {tab}
                    </button>
                    <div className="absolute -right-12 ">
                      {activeTabDesktop === tab && (
                        <span className="ml-2 text-6xl bg-gradient-to-r from-[#1da692] to-[#4355a1] inline-block text-transparent bg-clip-text">
                          {" ⯈"}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>

        {/* Second column - Active tab content */}
        <div className="w-[65%] bg-transparent pl-4 pt-10 pr-32 flex flex-col items-start">
          <h2 className="text-[#1da692] text-3xl font-bold mb-4 px-4 rounded-[80px]">
            <GrServices size={35} className="text-white font-bold" />
            <span>{activeTabDesktop}</span>
          </h2>
          <p className="text-gray-900 text-lg px-4 mb-6">
            {tabData[activeTabDesktop]?.description}
          </p>
          <div className="flex flex-wrap ">
            {tabData[activeTabDesktop]?.list.map((item, index) => (
              <button
                key={index}
                className="hover:bg-gradient-to-r hover:border-0 border-[#5d5d5d] border from-[#1da692] to-[#4355a1] py-2 px-4 m-2 rounded-[80px] text-gray-900 hover:text-white font-normal"
              >
                <Link href={item.link}>{item.label}</Link>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col items-center py-10">
        <div className="w-full bg-gradient-to-b from-[#1da692] to-[#4355a1] py-10 px-8 flex flex-col items-center text-center space-y-8 rounded-b-lg shadow-lg">
          <h2 className="text-white text-3xl uppercase tracking-widest font-semibold relative">
            OUR SERVICES
            
          </h2>
          <div className="text-white text-base w-full">
            <ul className="space-y-4 uppercase">
              {(Object.keys(tabData) as TabKey[]).map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => handleMobileTabClick(tab)}
                    className={`w-full p-4 ${
                      activeTabMobile === tab
                        ? "font-bold text-xl bg-white text-[#1da692] rounded-lg shadow-md"
                        : "text-lg text-white bg-transparent"
                    }`}
                  >
                    {tab}
                  </button>
                  {activeTabMobile === tab && (
                    <div className="text-left mt-4 space-y-4 ">
                      <p className="text-sm">{tabData[tab].description}</p>
                      <div className="w-full flex flex-col space-y-2">
                        {tabData[tab].list.map((item, index) => (
                          <button
                            key={index}
                            className="border border-white hover:bg-gradient-to-r from-[#1da692] to-[#4355a1] p-2 rounded-[80px] text-white font-bold text-sm"
                          >
                            <Link href={item.link} className="hover:underline">
                              {item.label}
                            </Link>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesTabs;
