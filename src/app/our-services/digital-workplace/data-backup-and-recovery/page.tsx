import CloudManagedTypes from "@/components/OurServices/common/Types";
import HeroSection from "@/components/OurServices/common/HeroSection";
import IntroSection from "@/components/OurServices/common/IntroSection";
import CloudServicesStepres from "@/components/OurServices/common/CloudServicesStepres";
import LastSectionDigitalWorkplace from "@/components/OurServices/common/LastSectionDigitalWorkplace";
import SectionBoxZigZagSlide from "@/components/OurServices/common/ServicesGridBoxZigZag";
import PartnersCardSection from "@/components/OurServices/common/PartnersCard";
import MSCardCardSection from "@/components/OurServices/common/MsSpecialisationCardHover";

const DataBackupAndRecovery = () => {
  const ManagedTypes = [
    {
      title: "End-to-End Protection Across Platforms",
      description:
        "Our backup services cover essential platforms like Microsoft 365, virtual machines, and all major cloud applications. We protect your critical workloads across hybrid environments, including Azure and cloud-based applications such as SAP and Salesforce, through a single interface",
      image:
        "/assets/OurServices/Digital-Workplace/Data-Backup-and-recovery/End-to-end.jpg",
    },
    {
      title: "Seamless Onboarding and Management",
      description:
        "Our team takes on the heavy lifting of onboarding, monitoring, and managing your data backup needs. From initial setup to maintenance, we ensure your data is always protected without the need of increasing manpower",
      image:
        "/assets/OurServices/Digital-Workplace/Data-Backup-and-recovery/Seemless.jpg",
    },
    {
      title: "Rapid Data Recovery for Crisis Situations",
      description:
        "In the event of data loss or security breach, JBS Consulting's recovery services ensure that your data is restored in the shortest possible time and your business operations continue smoothly",
      image:
        "/assets/OurServices/Digital-Workplace/Data-Backup-and-recovery/Rapid.jpg",
    },
    {
      title: "Security and Compliance",
      description:
        "Digital workplace solutions ensure secure access and data protection helping organizations comply with regulatory requirements, reducing the risk of data breaches and safeguarding business continuity",
      image:
        "/assets/OurServices/Digital-Workplace/Data-Backup-and-recovery/Security.jpg",
    },
  ];
  const SectionBoxZigZagSlideType = [
    {
      title: "Industry-Leading Recovery Times",
      description:
        "JBS Consulting goes beyond standard backup services by offering lightning-fast recovery times. Our advanced technologies ensure minimal downtime, ensuring your business is up and running in no time",
      image:
        "/assets/OurServices/Cloud-Managed-Service/Security-and-Governance-You-Can-Trust/Continuous Monitoring and Threat Detection.png", // Pass icon name as a string
    },
    {
      title: "Proactive Risk Management",
      description:
        "We don't just react to issues—we anticipate them. Using AI-driven analytics, our solutions identify potential risks and anomalies before they can become critical problems",
      image:
        "/assets/OurServices/Cloud-Managed-Service/Security-and-Governance-You-Can-Trust/Data Encryption and Privacy Controls.png",
    },
    {
      title: "Expertise Across Hybrid Environments",
      description:
        "JBS Consulting has the expertise to design and manage solutions running on-premise, cloud platforms and hybrid solutions",
      image:
        "/assets/OurServices/Cloud-Managed-Service/Security-and-Governance-You-Can-Trust/Compliance with Industry Standards.png",
    },
    {
      title: "Comprehensive Data Security",
      description:
        "Our data protection services offer end-to-end encryption, advanced threat detection, and compliance with global standards, ensuring your data is secure at all times",
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
          icon: "/assets/OurServices/Digital-Workplace/Data-Backup-and-recovery/downtime.png",
          heading: "Downtime Costs",
          description:
            "On average, businesses experience downtime costs of $5,600 per minute, highlighting the need for fast data recovery solutions",
        },
        {
          icon: "/assets/OurServices/Digital-Workplace/Data-Backup-and-recovery/data-volume.png",
          heading: "Increasing Data Volume",
          description:
            "By 2025, global data creation is expected to reach 180 zettabytes, underscoring the importance of scalable backup solutions that can keep pace with data growth",
        },
        {
          icon: "/assets/OurServices/Digital-Workplace/Data-Backup-and-recovery/Human-error.png",
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
        backgroundImage="/assets/OurServices/Digital-Workplace/Data-Backup-and-recovery/Banner.jpg"
        heading="Data Backup & Recovery"
        isRounded={true}
      />
      <div className="h-10"></div>

      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "Data Backup & Recovery",
            left: 15,
            heading: "Why Data Backup and Recovery Matter?",
            description:
              "Data is one of your most valuable assets, but it's constantly at risk from cyberattacks, accidental deletions, and compliance pressures. Therefore, having a comprehensive backup and recovery strategy is essential. JBS Consulting’s Backup and Recovery solutions give your organization the resilience to recover quickly, keeping your data safe and operations uninterrupted",
          }}
          imageSrc="/assets/OurServices/Digital-Workplace/Data-Backup-and-recovery/Why-Data-Backup-and-Recovery-Matter.png"
          imageAlt="Data Backup & Recovery"
        />

        <CloudManagedTypes
          types={ManagedTypes}
          sectionTitle="Our Data Backup and Recovery Services"
          height={480}
          headingHegihgt={40}
        />
      </div>
      <SectionBoxZigZagSlide
        types={SectionBoxZigZagSlideType}
        sectionTitle="What Sets JBS Consulting Apart for Backup and Recovery?"
        height={400}
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
export default DataBackupAndRecovery;
