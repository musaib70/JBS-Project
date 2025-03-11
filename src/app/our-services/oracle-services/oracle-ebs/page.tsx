"use client";
import HeroSection from "@/components/OurServices/common/HeroSection";
import IntroSection from "@/components/OurServices/common/IntroSection";
import CloudMigrationTypes from "@/components/OurServices/common/Types";
import Link from "next/link";
import CloudServicesStepres from "@/components/OurServices/common/CloudServicesStepres";
import { useState, useEffect } from "react";
import CustomSlider from "@/components/OurServices/common/SliderWithImageAndText";

const OracleEBS = () => {
  const [, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100); // Delay for smooth transition on load
    return () => clearTimeout(timer);
  }, []);
  const TypesofData = [
    {
      title: "Tailored Solutions",
      description:
        "We customize Oracle EBS implementations to align with your business goals and operational needs.",
      image: "/assets/OurServices/Oracle-Services/oracle-ebs/Tailored-Solutions.jpg",
    },
    {
      title: "Seamless Integration",
      description:
        "Our solutions ensure Oracle EBS works seamlessly with other enterprise systems, enhancing productivity and collaboration.",
      image: "/assets/OurServices/Oracle-Services/oracle-ebs/Seamless-Integration.jpg",
    },
    {
      title: "Continuous Innovation",
      description:
        "Through proactive updates and support, we help you stay ahead in a rapidly evolving business landscape.",
      image: "/assets/OurServices/Oracle-Services/oracle-ebs/Continuous-Innovation.jpg",
    },
  ];

  const SteperData = {
    StepresOne: {
      title: "Our Oracle EBS Services",
      descr: "",
      box: "",
      items: [
        {
          icon: "/assets/OurServices/Oracle-Services/oracle-ebs/Implementation-and-Migration.png",
          heading: "Implementation and Migration",
          description:
            "Data migration from legacy systems, system testing, and go-live support ensure a smooth transition to new platforms.",
        },
        {
          icon: "/assets/OurServices/Oracle-Services/oracle-ebs/Application-Development-and-Customization.png",
          heading: "Application Development and Customization",
          description:
            "Custom workflows, interfaces, and Oracle APEX integration address unique business needs and enhance system functionality.",
        },
        {
          icon: "/assets/OurServices/Oracle-Services/oracle-ebs/Support-and-Maintenance.png",
          heading: "Support and Maintenance",
          description:
            "Proactive monitoring, updates, and patching maintain system performance and resolve issues for long-term reliability.",
        },
        {
          icon: "/assets/OurServices/Oracle-Services/oracle-ebs/Database-Optimization.png",
          heading: "Database Optimization",
          description:
            "Performance tuning, load balancing, and backup processes ensure database efficiency and operational resilience.",
        },
        {
          icon: "/assets/OurServices/Oracle-Services/oracle-ebs/Training-and-Change-Management.png",
          heading: "Training and Change Management",
          description:
            "End-user training and change management strategies drive smooth adoption and foster innovation within the organization.",
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
      title: "Enhanced Operational Efficiency",
      description:
        "",
      description2:
        "<ul><li>- Automate routine business processes to save time and reduce manual effort.</li><li>- Integrate disparate systems for a unified view of enterprise operations.</li></ul>",
      percentage: "",
      percentage2: "",
      attribution: "",
      image: "/assets/OurServices/Oracle-Services/oracle-ebs/Enhanced-Operational-Efficiency.jpg",
    },
    {
      title: "Robust Data Management",
      description:
        "",
      description2: "<ul><li>- Ensure data accuracy and consistency across departments with centralized storage.</li><li>- Leverage advanced reporting tools for actionable insights.</li></ul>",
      percentage: "",
      percentage2: "",
      attribution: "",
      image: "/assets/OurServices/Oracle-Services/oracle-ebs/Robust-Data-Management.jpg",
    },
    {
      title: "Scalable and Customizable",
      description:
        "",
      description2: "<ul><li>- Adapt Oracle EBS solutions to meet your organization's specific requirements.</li><li>- Seamlessly scale applications as your business grows.</li></ul>",
      percentage: "",
      percentage2: "",
      attribution: "",
      image: "/assets/OurServices/Oracle-Services/oracle-ebs/Scalable-and-Customizable.jpg",
    },{
      title: "High Security and Compliance",
      description:
        "",
      description2: "<ul><li>- Maintain data integrity with Oracle's advanced security protocols.</li><li>- Ensure compliance with industry regulations through built-in governance features.</li></ul>",
      percentage: "",
      percentage2: "",
      attribution: "",
      image: "/assets/OurServices/Oracle-Services/oracle-ebs/High-Security-and-Compliance.jpg",
    },
  ];

  return (
    <>
      <HeroSection
        backgroundImage="/assets/OurServices/Oracle-Services/oracle-ebs/Banner.jpg"
        heading="Oracle EBS"
        isRounded={true}
      />
      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "Oracle EBS",
            left: 35,
            heading: "Driving Business Efficiency with Oracle EBS",
            description:
              "Oracle E-Business Suite (EBS) offers a comprehensive suite of integrated business applications that automate critical business processes. JBS Consulting leverages Oracle EBS to provide solutions tailored to meet the evolving needs of businesses ranging from financial management to supply chain optimization.",
          }}
          imageSrc="/assets/OurServices/Oracle-Services/oracle-ebs/Driving-Business-Efficiency-with-Oracle-EBS.png"
          imageAlt="Oracle EBS"
        />

<CloudServicesStepres {...SteperData} />
<div className="h-10"></div>
</div>

<CustomSlider
        slides={slides}
        sectionStyle="bg-gradient-to-b from-[#1da692] to-[#4355a1]  py-[80px]"
        textColor="text-white"
      />
  <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
  <div className="h-10"></div>
  <div className="h-10"></div>
        

        <CloudMigrationTypes
          types={TypesofData}
          sectionTitle="Why Choose JBS Consulting for Oracle EBS?"
          height={480}
          headingHegihgt={35}
        />
        <div className="h-10"></div>
      </div>
      <section className="bg-[#d2d2d2] md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-12 p-8 md:p-16">
        <div className="max-w-4xl 2xl:max-w-5xl mx-auto">
          {/* Heading and Paragraph */}
          <div className="text-center">
            <h3 className="text-3xl 2xl:text-4xl font-semibold text-center mb-6">
            Transform Your Enterprise with Oracle EBS
            </h3>
            <p className="text-[14px] 2xl:text-[17px] mb-10">
            Optimize your business operations with JBS Consulting&apos;s Oracle EBS solutions. Contact us today!
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
export default OracleEBS;
