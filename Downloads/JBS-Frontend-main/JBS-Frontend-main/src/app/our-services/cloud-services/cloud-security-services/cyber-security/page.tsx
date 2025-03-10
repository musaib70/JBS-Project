import HeroSection from "@/components/OurServices/common/HeroSection";
import CloudServicesStepres from "@/components/OurServices/common/CloudServicesStepres";
import IntroSection from "@/components/OurServices/common/IntroSection";
import LastSection from "@/components/OurServices/common/LastSection";
import TeamSlider from "@/components/OurServices/common/TeamSlider";

const CyberSecurity = () => {

  const SteperData = {
    StepresOne: {
      title: "Key Features of Our Microsoft Sentinel-Powered Cybersecurity Services",
      descr: "",
      box: "",
      items: [
        {
          icon: "/assets/OurServices/Cloud-Transformation/Transforming-Your-Business/Legacy-System.png",
          heading: "Intelligent Threat Detection and Response",
          description:
            "AI-powered threat detection identifies real-time anomalies, proactively monitors IT landscapes, and enables faster decision-making with integrated alerts and prioritized responses.",
        },
        {
          icon: "/assets/OurServices/Cloud-Migration-Service/Managed-Services-Model/Platform as services.png",
          heading: "Multi-Cloud & Hybrid Security",
          description:
            "Native integration with Azure, AWS, Google Cloud, and on-premise solutions ensures centralized threat monitoring and comprehensive visibility via 350+ connectors.",
        },
        {
          icon: "/assets/OurServices/Cloud-Managed-Service/multi.png",
          heading: "Automated Incident Response",
          description:
            "Built-in security orchestration, pre-configured playbooks, and automated workflows streamline incident handling to minimize downtime and rapidly mitigate threats.",
        },{
          icon: "/assets/OurServices/Cloud-Transformation/Transforming-Your-Business/End-to-end.png",
          heading: "Advanced Threat Hunting and Analysis",
          description:
            "KQL-based search, visual investigation tools, and real-time dashboard insights provide detailed threat tracking aligned with MITRE ATT&CK coverage.",
        },
      ],
    },
    StepresTwo: {
      title: "Why Choose JBS Consulting for Cybersecurity?",
      descr: "",
      box: "3",
      items: [
        {
          icon: "/assets/OurServices/Cloud-Migration-Service/Cloud-Migration-Stages/Assesment.png",
          heading: "Expertise in Microsoft Sentinel",
          description:
            "Our expertise in deploying and managing Microsoft Sentinel ensures your security operations are tailored to your business needs.",
        },
        {
          icon: "/assets/OurServices/Cloud-Migration-Service/Cloud-Migration-Stages/Planning.png",
          heading: "Proactive Protection",
          description:
            "With AI and automation at the core, we deliver proactive threat detection and response to keep yourbusiness secure.",
        },
        {
          icon: "/assets/OurServices/Cloud-Migration-Service/Cloud-Migration-Stages/Migration.png",
          heading: "Unified Security Operations",
          description: "We provide centralized security management for your entire IT environment, eliminating silos and simplifying operations.",
        },
        {
          icon: "/assets/OurServices/Cloud-Migration-Service/Cloud-Migration-Stages/Optimization.png",
          heading: "Scalable, Future-Ready Solutions",
          description:
            "Whether you’re securing a single environment or a global multi-cloud ecosystem, our services scale seamlessly to meet your needs.",
        },
      ],
    },
  };

  return (
    <>
      <HeroSection
        backgroundImage="/assets/OurServices/Cloud-Services/Cloud-Migration/Banner.jpg"
        heading="Cybersecurity Services"
        isRounded={true}
      />
      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "Cybersecurity Services",
            left: 0,
            heading: "Proactive Protection for a Multi-Cloud World",
            description:
              "JBS Consulting's Cybersecurity Services, powered by Microsoft Sentinel, offer cloud-native security to protect your business across multi-cloud and hybrid environments. By leveraging Microsoft Sentinel's AIdriven threat detection, automated response capabilities, and advanced analytics, we deliver advanced protection and operational efficiency.",
          }}
          imageSrc="/assets/OurServices/Oracle-Services/cloud-infrastructure/Accelerate-Your-Cloud-Journey-with-Oracle.png"
          imageAlt="Cybersecurity Services"
        />


        <CloudServicesStepres {...SteperData} />
        </div>

        <TeamSlider />
      <LastSection />
    </>
  );
};
export default CyberSecurity;
