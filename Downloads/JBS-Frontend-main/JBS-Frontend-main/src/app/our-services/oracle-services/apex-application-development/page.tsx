"use client";
import HeroSection from "@/components/OurServices/common/HeroSection";
import IntroSection from "@/components/OurServices/common/IntroSection";
import CloudMigrationTypes from "@/components/OurServices/common/Types";
import Link from "next/link";
import CloudServicesStepres from "@/components/OurServices/common/CloudServicesStepres";
import { useState, useEffect } from "react";
import CustomSlider from "@/components/OurServices/common/SliderWithImageAndText";

const APEXApplicationDevelopment = () => {
  const [, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100); // Delay for smooth transition on load
    return () => clearTimeout(timer);
  }, []);
  const TypesofData = [
    {
      title: "Application Design and Development",
      description:
        "From concept to deployment, we create fully customized applications tailored to your business objectives.",
      image: "/assets/OurServices/Oracle-Services/apex-application/Future-Ready-Applications.png",
    },
    {
      title: "Data-Driven Applications",
      description:
        "Incorporate powerful data visualization tools like faceted search and dynamic charts, enabling real-time insights and enhanced decision-making.",
      image: "/assets/OurServices/Oracle-Services/apex-application/Proven-Oracle-Expertise.png",
    },
    {
      title: "Modernization and Integration",
      description:
        "Modernize legacy systems and integrate with Oracle Cloud Infrastructure or other cloud services for seamless operations.",
      image: "/assets/OurServices/Oracle-Services/apex-application/Tailored-Low-Code-Solutions.png",
    },
    {
      title: "Continuous Support and Scaling",
      description:
        "Our team provides ongoing support to enhance performance, integrate new features, and scale applications as your business grows.",
      image: "/assets/OurServices/Oracle-Services/apex-application/Continuous-Support-and-Scaling.jpg",
    },
  ];

  const SteperData = {
    StepresOne: {
      title: "Why Choose JBS Consulting for Oracle APEX Development?",
      descr: "",
      box: "",
      items: [
        {
          icon: "/assets/OurServices/Oracle-Services/apex-application/Modernization-and-Integration.png",
          heading: "Proven Oracle Expertise",
          description:
            "Our team brings extensive experience in Oracle technologies, ensuring efficient and effective implementation of APEX solutions.",
        },
        {
          icon: "/assets/OurServices/Oracle-Services/apex-application/Data-Driven-Applications.png",
          heading: "Tailored Low-Code Solutions",
          description:
            "We create applications that align with your unique business requirements, combining speed, flexibility, and robust functionality.",
        },
        {
          icon: "/assets/OurServices/Oracle-Services/apex-application/Application-Design-and-Development.png",
          heading: "Future-Ready Applications",
          description:
            "Harness the power of Oracle's cloud-native capabilities to build applications that evolve with your business needs.",
        },
        {
          icon: "/assets/OurServices/Oracle-Services/apex-application/Continuous-Support-and-Scaling.png",
          heading: "Cost-Effective Innovation",
          description:
            "Our approach focuses on maximizing ROI through low-code solutions that minimize development costs and time-to-market.",
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
      title: "Accelerated Development",
      description:
        "",
      description2:
        "<ul><li>- Develop apps 20X faster than traditional methods with Oracle's low-code, declarative framework.</li><li>- Intuitive drag-and-drop functionality and pre-built UI components simplify the app creation process.</li><li>- Agile development enables real-time changes and faster iterations for evolving business needs.</li></ul>",
      percentage: "",
      percentage2: "",
      attribution: "",
      image: "/assets/OurServices/Oracle-Services/apex-application/Accelerated-Development.jpg",
    },
    {
      title: "Enterprise-Ready Applications",
      description:
        "",
      description2: "<ul><li>- Build fully responsive applications that work seamlessly across devices and resolutions.</li><li>- Benefit from built-in security features to minimize vulnerabilities like SQL injection and cross-site scripting.</li><li>- Ensure high availability and robust performance with Oracle's Gen 2 Cloud Infrastructure.</li></ul>",
      percentage: "",
      percentage2: "",
      attribution: "",
      image: "/assets/OurServices/Oracle-Services/apex-application/Enterprise-Ready-Applications.jpg",
    },
    {
      title: "AI and Automation Integration",
      description:
        "",
      description2: "<ul><li>- Leverage AI-powered capabilities for data visualization, analysis, and process automation.</li><li>- Utilize advanced tools like Oracle's AI Vector Search and JSON Relational Duality to unlock actionable insights.</li><li>- Replace manual tasks with machine-learning driven automation for provisioning, scaling, and securing applications.</li></ul>",
      percentage: "",
      percentage2: "",
      attribution: "",
      image: "/assets/OurServices/Oracle-Services/apex-application/AI-and-Automation-Integration.jpg",
    },{
      title: "Scalable and Cost-Efficient",
      description:
        "",
      description2: "<ul><li>- Automatically scale resources to meet user demands without downtime.</li><li>- Adopt a pay-per-use model with no per-user or per-application fees, ensuring cost-effective innovation.</li><li>- Start small with Oracle's Always Free APEX version, upgrading seamlessly as your needs grow.</li></ul>",
      percentage: "",
      percentage2: "",
      attribution: "",
      image: "/assets/OurServices/Oracle-Services/apex-application/Scalable-and-Cost-Efficient.jpg",
    },
  ];

  return (
    <>
      <HeroSection
        backgroundImage="/assets/OurServices/Oracle-Services/apex-application/Banner.jpg"
        heading="APEX Application Development"
        isRounded={true}
      />
      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "APEX Application Development",
            left: 35,
            heading: "Revolutionizing App Development with Low-Code Solutions",
            description:
              "Accelerate your application development journey with Oracle APEX, a low-code platform designed to empower developers to create enterprise-grade applications with speed and efficiency. JBS Consulting's APEX Application Development services leverage Oracle's tools, enabling businesses to rapidly build scalable and high-performing applications without the complexities of traditional coding.",
          }}
          imageSrc="/assets/OurServices/Oracle-Services/apex-application/Revolutionizing-App-Development.png"
          imageAlt="APEX Application Development"
        />

        <CloudMigrationTypes
          types={TypesofData}
          sectionTitle="Our APEX Application Development Services"
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
            Transform Your Application Development with JBS Consulting
            </h3>
            <p className="text-[14px] 2xl:text-[17px] mb-10">
            Contact us today to explore how we can help you build smarter, faster, and more scalable applications.
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
export default APEXApplicationDevelopment;
