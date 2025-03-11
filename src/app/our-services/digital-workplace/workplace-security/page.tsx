import CloudManagedTypes from "@/components/OurServices/common/Types";
import HeroSection from "@/components/OurServices/common/HeroSection";
import IntroSection from "@/components/OurServices/common/IntroSection";
import CloudServicesStepres from "@/components/OurServices/common/CloudServicesStepres";
import LastSectionDigitalWorkplace from "@/components/OurServices/common/LastSectionDigitalWorkplace";
import SectionBoxZigZagSlide from "@/components/OurServices/common/ServicesGridBoxZigZag";
import PartnersCardSection from "@/components/OurServices/common/PartnersCard";
import MSCardCardSection from "@/components/OurServices/common/MsSpecialisationCardHover";

const WorkplaceSecurity = () => {
  const ManagedTypes = [
    {
      title: "Proactive Threat Detection and Response",
      description:
        "Our Managed Detection and Response (MDR) services leverage AI and advanced analytics to monitor, identify, and neutralize threats across your IT environment",
      image:
        "/assets/OurServices/Digital-Workplace/Workplace-Security/Proactive-threat.jpg",
    },
    {
      title: "Customized Security Solutions",
      description:
        "From strategic planning to implementation, we tailor workplace security solutions to fit your requirements. Whether you operate on Microsoft 365, Google Workspace, or hybrid environments, we have you covered",
      image:
        "/assets/OurServices/Digital-Workplace/Workplace-Security/Customized.jpg",
    },
    {
      title: "Compliance-Driven Monitoring",
      description:
        "Our SOC services focus on monitoring and incident management, helping your business meet key compliance standards like GDPR, HIPAA, and ISO 27001",
      image:
        "/assets/OurServices/Digital-Workplace/Workplace-Security/compliance.jpg",
    },
    {
      title: "Employee Awareness Training",
      description:
        "Our user awareness programs include phishing simulations, training campaigns, and tools to improve your organization's security",
      image:
        "/assets/OurServices/Digital-Workplace/Workplace-Security/Employee.jpg",
    },
    {
      title: "Integrated Backup and Recovery",
      description:
        "Protect your data from ransomware and disasters with our backup and recovery services",
      image:
        "/assets/OurServices/Digital-Workplace/Workplace-Security/Integrated.jpg",
    },
  ];

  const SectionBoxZigZagSlideType = [
    {
      title: "Unparalleled Expertise",
      description:
        "Our team of experienced cybersecurity professionals are committed to delivering cutting-edge customized solutions designed for you",
      image:
        "/assets/OurServices/Cloud-Managed-Service/Security-and-Governance-You-Can-Trust/Continuous Monitoring and Threat Detection.png", // Pass icon name as a string
    },
    {
      title: "Comprehensive Coverage",
      description:
        "We secure your workplace from endpoints to cloud environments, ensuring full 360 protection",
      image:
        "/assets/OurServices/Cloud-Managed-Service/Security-and-Governance-You-Can-Trust/Data Encryption and Privacy Controls.png",
    },
    {
      title: "Scalable Solutions",
      description:
        "Whether you're a small business or a global enterprise, our scalable services adapt to your specific needs",
      image:
        "/assets/OurServices/Cloud-Managed-Service/Security-and-Governance-You-Can-Trust/Compliance with Industry Standards.png",
    },
    {
      title: "Trust and Compliance",
      description:
        "We ensure your business meets global regulatory standards like GDPR, HIPAA, and ISO 27001. Our solutions protect sensitive data and also enhance customer and partner confidence",
      image:
        "/assets/OurServices/Cloud-Managed-Service/Security-and-Governance-You-Can-Trust/Compliance with Industry Standards.png",
    },
  ];

  const SteperData = {
    StepresOne: {
      title: "The Importance of Data Backup and Recovery",
      descr: "",
      box: "",
      items: [
        {
          icon: "/assets/OurServices/Cloud-Managed-Service/What-are-the-Benefits-of-Cloud-Managed-Services/Cost-efficiency.png",
          heading: "Downtime Costs",
          description:
            "On average, businesses experience downtime costs of $5,600 per minute, highlighting the need for fast data recovery solutions",
        },
        {
          icon: "/assets/OurServices/Cloud-Managed-Service/What-are-the-Benefits-of-Cloud-Managed-Services/247-monitoring.png",
          heading: "Increasing Data Volume",
          description:
            "By 2025, global data creation is expected to reach 180 zettabytes, underscoring the importance of scalable backup solutions that can keep pace with data growth",
        },
        {
          icon: "/assets/OurServices/Cloud-Managed-Service/What-are-the-Benefits-of-Cloud-Managed-Services/Scalability.png",
          heading: "Human Error Factor",
          description:
            "A significant portion of data breaches are attributed to human error, with reports indicating that 95% of cybersecurity incidents result from such mistakes",
        },
      ],
    },
    StepresTwo: {
      title: "",
      descr: "",
      box: "3",
      items: [],
    },
  };

  return (
    <>
      <HeroSection
        backgroundImage="/assets/OurServices/Digital-Workplace/Workplace-Security/Banner.jpg"
        heading="Workplace Security"
        isRounded={true}
      />
      <div className="h-10"></div>

      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "Workplace Security",
            left: 25,
            heading: "Why Workplace Security Matters?",
            description:
              "The popularity of Hybrid work environments is making cybersecurity more than just a necessity, it is a critical requirement for all businesses today. Remote work, cloud applications, and advanced cyber threats demand a comprehensive workplace security solution. JBS Consulting offers businesses comprehensive security strategies to protect data and maintain compliance",
          }}
          imageSrc="/assets/OurServices/Digital-Workplace/Workplace-Security/workplace.png"
          imageAlt="Workplace Security"
        />

        <CloudManagedTypes
          types={ManagedTypes}
          sectionTitle="JBS Consulting Workplace Security Services"
          height={460}
          headingHegihgt={40}
        />
      </div>

      <SectionBoxZigZagSlide
        types={SectionBoxZigZagSlideType}
        sectionTitle="Why Choose JBS Consulting for Workplace Security?"
        height={350}
        headingHegihgt={50}
      />
      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <div className="h-10"></div>
        <CloudServicesStepres {...SteperData} />
        <div className="h-10"></div>
      </div>

      <PartnersCardSection />
      <MSCardCardSection />

      <LastSectionDigitalWorkplace />
    </>
  );
};
export default WorkplaceSecurity;
