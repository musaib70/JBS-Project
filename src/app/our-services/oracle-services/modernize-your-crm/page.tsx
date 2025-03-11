"use client";
import HeroSection from "@/components/OurServices/common/HeroSection";
import IntroSection from "@/components/OurServices/common/IntroSection";
import CloudMigrationTypes from "@/components/OurServices/common/Types";
import Link from "next/link";
import CloudServicesStepres from "@/components/OurServices/common/CloudServicesStepres";
import { useState, useEffect } from "react";
import CustomSlider from "@/components/OurServices/common/SliderWithImageAndText";

const ModernizeYourCrm = () => {
  const [, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100); // Delay for smooth transition on load
    return () => clearTimeout(timer);
  }, []);
  const TypesofData = [
    {
      title: "Enhanced Omni-Channel Customer Experiences",
      description:
        "Deliver personalized interactions across digital and traditional channels, supported by Oracle's robust API-first integration approach.",
      image: "/assets/OurServices/Oracle-Services/modernize-your-crm/Enhanced-Omni-Channel-Customer-Experiences.jpg",
    },
    {
      title: "AI and GenAI Capabilities",
      description:
        "Leverage Oracle's AI and GenAI solutions to automate workflows, predict customer behavior, and provide actionable insights driving smarter decision-making.",
      image: "/assets/OurServices/Oracle-Services/modernize-your-crm/AI-and-GenAI-Capabilities.jpg",
    },
    {
      title: "Improved Usability and Productivity",
      description:
        "Modernize UX with Oracle's Redwood design principles, offering intuitive interfaces and streamlined workflows that enhance employee efficiency.",
      image: "/assets/OurServices/Oracle-Services/modernize-your-crm/Improved-Usability-and-Productivity.jpg",
    },
    {
      title: "Cost-Effective Optimization",
      description:
        "Avoid the high costs of SaaS migrations by upgrading your existing Oracle Siebel CRM with containerized deployments and Kubernetes architecture for superior performance and reduced costs.",
      image: "/assets/OurServices/Oracle-Services/modernize-your-crm/Cost-Effective-Optimization.jpg",
    },
    {
      title: "Data-Driven Insights",
      description:
        "Utilize Oracle's AI/ML-powered analytics to activate first-party data, uncover trends, and optimize customer engagement strategies.",
      image: "/assets/OurServices/Oracle-Services/modernize-your-crm/Data-Driven-Insights.jpg",
    },
  ];

  const SteperData = {
    StepresOne: {
      title: "Why Choose JBS Consulting for Oracle CRM Modernization?",
      descr: "",
      box: "",
      items: [
        {
          icon: "/assets/OurServices/Oracle-Services/modernize-your-crm/Unmatched-Oracle-Expertise.png",
          heading: "Unmatched Oracle Expertise",
          description:
            "With deep expertise in Oracle's full-stack solutions, we bring decades of CRM modernization experience to drive measurable business outcomes.",
        },
        {
          icon: "/assets/OurServices/Oracle-Services/modernize-your-crm/Proven-ROI-and-Fast-Time-to-Value.png",
          heading: "Proven ROI and Fast Time-to-Value",
          description:
            "Our efficient processes deliver significant ROI through cost savings, faster workflows, and enhanced customer satisfaction.",
        },
        {
          icon: "/assets/OurServices/Oracle-Services/modernize-your-crm/Customizable-and-Scalable-Solutions.png",
          heading: "Customizable and Scalable Solutions",
          description:
            "Whether you're optimizing a single process or overhauling your entire CRM system, we provide tailored solutions designed to scale with your business.",
        },
        {
          icon: "/assets/OurServices/Oracle-Services/modernize-your-crm/Secure-and-Compliant.png",
          heading: "Secure and Compliant",
          description:
            "Oracle solutions ensure compliance with regional data privacy regulations while maintaining enterprise-grade security standards.",
        },
      ],
    },
    StepresTwo: {
      title: "",
      descr: "",
      box: "",
      items: [
        {
          icon: "",
          heading: "",
          description: "",
        },
      ],
    },
  };

  const slides = [
    {
      title: "CRM Experience Enhancement",
      description:
        "",
      description2:
        "<ul><li>- Upgrade your CRM's UX using Oracle's Redwood framework.</li><li>- Enable mobile-first, responsive designs for a consistent experience across devices.</li></ul>",
      percentage: "",
      percentage2: "",
      attribution: "",
      image: "/assets/OurServices/Oracle-Services/modernize-your-crm/CRM-Experience-Enhancement.jpg",
    },
    {
      title: "AI-Driven Automation",
      description:
        "",
      description2: "<ul><li>- Integrate Oracle's AI/ML capabilities to automate repetitive tasks and enhance productivity.</li><li>- Incorporate GenAI into employee task flows, reducing manual effort and increasing speed.</li></ul>",
      percentage: "",
      percentage2: "",
      attribution: "",
      image: "/assets/OurServices/Oracle-Services/modernize-your-crm/AI-Driven-Automation.jpg",
    },
    {
      title: "Seamless Integration with Oracle Cloud",
      description:
        "",
      description2: "<ul><li>- Transition to Oracle Cloud Infrastructure with minimal disruption using lift-and-shift strategies.</li><li>- Enable API-first integrations for custom or SaaS applications with Oracle Siebel CRM.</li></ul>",
      percentage: "",
      percentage2: "",
      attribution: "",
      image: "/assets/OurServices/Oracle-Services/modernize-your-crm/Seamless-Integration-with-Oracle-Cloud.jpg",
    },{
      title: "Continuous Innovation and Updates",
      description:
        "",
      description2: "<ul><li>- Adopt Oracle's continuous release model for regular updates and new features.</li><li>- Stay ahead with lightweight monthly updates that minimize disruption.</li></ul>",
      percentage: "",
      percentage2: "",
      attribution: "",
      image: "/assets/OurServices/Oracle-Services/modernize-your-crm/Continuous-Innovation-and-Updates.jpg",
    },
  ];

  return (
    <>
      <HeroSection
        backgroundImage="/assets/OurServices/Oracle-Services/modernize-your-crm/banner.jpg"
        heading="Modernize Your CRM"
        isRounded={true}
      />
      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "Modernize Your CRM",
            left: 35,
            heading: "Revolutionizing CRM for a Digital-First World",
            description:
              "Customer expectations are evolving rapidly, demanding personalized interactions across every touchpoint. With Oracle-powered CRM modernization, JBS Consulting enables businesses to transform their mission-critical CRM systems without the need for costly, high-risk migrations. By integrating AI, Generative AI (GenAI), and advanced UX capabilities, we help organizations create exceptional customer experiences while maximizing the value of their existing CRM investments",
          }}
          imageSrc="/assets/OurServices/Oracle-Services/modernize-your-crm/Revolutionizing-CRM-for-a-Digital-First-World.png"
          imageAlt="Modernize Your CRM"
        />

        <CloudMigrationTypes
          types={TypesofData}
          sectionTitle="Key Benefits of Modernizing Your CRM with Oracle"
          height={430}
          headingHegihgt={35}
        />
</div>

<CustomSlider
        slides={slides}
        sectionStyle="bg-gradient-to-b from-[#1da692] to-[#4355a1]  py-[80px]"
        textColor="text-white"
      />
  <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        
  <div className="h-10"></div>
        <CloudServicesStepres {...SteperData} />
        <div className="h-10"></div>
      </div>
      <section className="bg-[#d2d2d2] md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-12 p-8 md:p-16">
        <div className="max-w-4xl 2xl:max-w-5xl mx-auto">
          {/* Heading and Paragraph */}
          <div className="text-center">
            <h3 className="text-3xl 2xl:text-4xl font-semibold text-center mb-6">
              Modernize Your CRM Today
            </h3>
            <p className="text-[14px] 2xl:text-[17px] mb-10">
              Contact JBS Consulting to begin your CRM transformation journey
              and unlock unparalleled customer and employee experiences
            </p>
            <Link
              href="/contact-us"
              aria-label="Connect with us for application automation"
              className="bg-gradient-to-r from-[#1da692] to-[#4355a1] text-white px-4 py-4 rounded-tl-2xl rounded-br-2xl shadow-md text-[14px] 2xl:text-[17px] font-semibold transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              Get Connected
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default ModernizeYourCrm;
