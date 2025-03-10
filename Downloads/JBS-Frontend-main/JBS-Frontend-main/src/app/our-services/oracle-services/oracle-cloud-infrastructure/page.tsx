"use client";
import HeroSection from "@/components/OurServices/common/HeroSection";
import IntroSection from "@/components/OurServices/common/IntroSection";
import Link from "next/link";
import CloudServicesStepres from "@/components/OurServices/common/CloudServicesStepres";
import { useState, useEffect } from "react";
import CustomSlider from "@/components/OurServices/common/SliderWithImageAndText";

const OracleCloudInfrastructure  = () => {
  const [, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100); // Delay for smooth transition on load
    return () => clearTimeout(timer);
  }, []);
  

  const SteperData = {
    StepresOne: {
      title: "Why Choose JBS Consulting for OCI Services?",
      descr: "",
      box: "",
      items: [
        {
          icon: "/assets/OurServices/Oracle-Services/cloud-infrastructure/Proven-Oracle-Expertise.png",
          heading: "Proven Oracle Expertise",
          description:
            "With deep experience in Oracle Cloud technologies, we bring unmatched expertise to deliver seamless cloud transformation projects.",
        },
        {
          icon: "/assets/OurServices/Oracle-Services/cloud-infrastructure/Industry-Specific-Solutions.png",
          heading: "Industry-Specific Solutions",
          description:
            "We understand the unique needs of industries such as finance, healthcare, and retail, tailoring OCI solutions for maximum impact.",
        },
        {
          icon: "/assets/OurServices/Oracle-Services/cloud-infrastructure/Secure-and-Compliant.png",
          heading: "Secure and Compliant",
          description:
            "Our solutions leverage OCI's enterprise-grade security features and ensure adherence to global compliance standards, such as GDPR and HIPAA.",
        },
        {
          icon: "/assets/OurServices/Oracle-Services/cloud-infrastructure/Scalable-and-Future-Ready.png",
          heading: "Scalable and Future-Ready",
          description:
            "Whether you're starting your cloud journey or scaling existing operations, we ensure your OCI setup is ready to support growth and innovation.",
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
      title: "Cloud Strategy and Roadmap",
      description:
        "",
      description2:
        "<ul><li>- Assess current infrastructure and cloud readiness.</li><li>- Design a migration roadmap leveraging Oracle Cloud.</li><li>- Define KPIs to measure success and ROI.</li></ul>",
      percentage: "",
      percentage2: "",
      attribution: "",
      image: "/assets/OurServices/Oracle-Services/cloud-infrastructure/Cloud-Strategy-and-Roadmap.jpg",
    },
    {
      title: "OCI Migration Services",
      description:
        "",
      description2: "<ul><li>- Lift-and-shift legacy applications with minimal disruption.</li><li>- Optimize workloads for OCI's advanced architecture.</li><li>- Ensure seamless integration with existing on-premises and cloud systems.</li></ul>",
      percentage: "",
      percentage2: "",
      attribution: "",
      image: "/assets/OurServices/Oracle-Services/cloud-infrastructure/OCI-Migration-Services.jpg",
    },
    {
      title: "Cloud-Native Development",
      description:
        "",
      description2: "<ul><li>- Adopt containerization and microservices to improve efficiency.</li><li>- Accelerate development using Oracle's Kubernetes-based tools.</li><li>- Integrate AI and ML for smarter, data-driven applications.</li></ul>",
      percentage: "",
      percentage2: "",
      attribution: "",
      image: "/assets/OurServices/Oracle-Services/cloud-infrastructure/Cloud-Native-Development.jpg",
    },{
      title: "Managed Cloud Operations",
      description:
        "",
      description2: "<ul><li>- 24/7 monitoring and support tailored to your needs.</li><li>- Proactive issue resolution with Oracle's advanced tools.</li><li>- Regular updates and performance tuning to ensure optimal operation.</li></ul>",
      percentage: "",
      percentage2: "",
      attribution: "",
      image: "/assets/OurServices/Oracle-Services/cloud-infrastructure/Managed-Cloud-Operations.jpg",
    },{
      title: "Cost Optimization",
      description:
        "",
      description2: "<ul><li>- Identify underutilized resources and optimize consumption.</li><li>- Implement FinOps strategies for efficient cost management.</li><li>- Leverage Oracle's flexible pricing models to minimize expenses.</li></ul>",
      percentage: "",
      percentage2: "",
      attribution: "",
      image: "/assets/OurServices/Oracle-Services/cloud-infrastructure/Cost-Optimization.jpg",
    },
  ];

  return (
    <>
      <HeroSection
        backgroundImage="/assets/OurServices/Oracle-Services/cloud-infrastructure/Infrastructure-Banner.jpg"
        heading="Oracle Cloud Infrastructure"
        isRounded={true}
      />
      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "Oracle Cloud Infrastructure",
            left: 35,
            heading: "Accelerate Your Cloud Journey with Oracle",
            description:
              "JBS Consulting's Oracle Cloud Infrastructure (OCI) Services provide the tools, expertise, and support needed to modernize IT operations, enhance agility, and deliver value across all business processes. By leveraging Oracle's secure, and scalable cloud platform, we empower organizations to innovate faster and optimize costs.",
          }}
          imageSrc="/assets/OurServices/Oracle-Services/cloud-infrastructure/Accelerate-Your-Cloud-Journey-with-Oracle.png"
          imageAlt="Oracle Cloud Infrastructure"
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
            Modernize and Scale with Oracle Cloud
            </h3>
            <p className="text-[14px] 2xl:text-[17px] mb-10">
            Contact us today to accelerate your transformation journey with JBS Consulting&apos;s Oracle Cloud Infrastructure Services.
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
export default OracleCloudInfrastructure;
