import CloudServicesStepres from "@/components/OurServices/common/CloudServicesStepres";
import HeroSection from "@/components/OurServices/common/HeroSection";
import IntroSection from "@/components/OurServices/common/IntroSection";
import CloudSecurityKeyThreats from "@/components/OurServices/common/Types";
import BoxWithTextOnly from "@/components/OurServices/common/BoxWithTextOnly";
import TextSectionBgGradiant from "@/components/OurServices/common/TextSectionBgGradiant";
import ServicesSectionBox from "@/components/OurServices/common/ServicesSectionBox";
import LastSection from "@/components/OurServices/common/LastSection";

const CloudSecurityServices = () => {
  const KeyThreats = [
    {
      title: "Data Breaches",
      description:
        "The decentralized nature of cloud environments increases exposure points,  making sensitive data more vulnerable. Without proper controls, unauthorized parties can  access confidential information, leading to financial losses and reputational damage. ",
      image:
        "/assets/OurServices/Cloud-Services/Cloud-Security/Data-breach.png",
    },
    {
      title: "Identity Theft & Access Exploitation",
      description:
        "Compromised credentials can lead to unauthorized access.  Malicious actors can infiltrate cloud systems, manipulate data, and disrupt operations,  compromising overall security. ",
      image:
        "/assets/OurServices/Cloud-Services/Cloud-Security/identify-theft.png",
    },
    {
      title: "Phishing & Social Engineering Attacks",
      description:
        "Employees are often targeted to gain access to corporate  networks through deceptive tactics like phishing, tricking them into revealing access credentials,  which often leads to larger-scale breaches. ",
      image:
        "/assets/OurServices/Cloud-Services/Cloud-Security/phising-and-social.png",
    },
  ];
  const CyberSecuritySteperData = {
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
  const SteperData = {
    StepresOne: {
      title: "",
      descr: "",
      box: "",
      items: [
        {
          icon: "",
          heading: "",
          description:
            "",
        }
      ],
    },
    StepresTwo: {
      title: "Why Cloud Security Solutions Matter",
      descr: "",
      box: "3",
      items: [
        {
          icon: "/assets/OurServices/Cloud-Security/Why-Cloud-Security/Comprehensive Protection.png",
          heading: "Comprehensive Protection",
          description:
            "Cloud security solutions provide end-to-end protection,  safeguarding not just data, but also applications and entire cloud infrastructures from evolving  threats. This multi-layered security ensures the integrity and availability of critical assets. ",
        },
        {
          icon: "/assets/OurServices/Cloud-Security/Why-Cloud-Security/Minimize Business.png",
          heading: "Minimize Business Disruptions",
          description:
            "Effective cloud security helps prevent costly disruptions by  identifying and neutralizing threats before they impact operations. By ensuring continuous  availability and performance, businesses can focus on growth without security concerns.",
        },
        {
          icon: "/assets/OurServices/Cloud-Security/Why-Cloud-Security/Regulatory Complicance.png",
          heading: "Regulatory Compliance and Financial Protection",
          description:
            "Ensuring compliance with industry standards  (such as GDPR, HIPAA, and PCI-DSS) reduces the risk of legal penalties and brand damage.  Furthermore, effective security measures help to minimize financial losses resulting from data  breaches or cyberattacks.",
        },
        {
          icon: "/assets/OurServices/Cloud-Security/Why-Cloud-Security/Proactive Threat.png",
          heading: "Proactive Threat Detection with AI",
          description:
            "AI-driven security tools, combined with 24/7 monitoring,  allow businesses to stay ahead of potential threats. These tools proactively scan for  vulnerabilities, analyze patterns, and offer real-time alerts, stopping attacks before they escalate  into significant issues ",
        },
      ],
    },
  };

  const BoxWithText = [
    {
      heading: "79%",
      text: "of enterprises experienced at least one cloud security incident in the past year, highlighting  the growing vulnerability of cloud environments.",
    },
    {
      heading: "43%",
      text: "of data breaches are now linked to cloud-based services, underscoring the need for  stronger security measures in multi-cloud and hybrid setups. ",
    },
    {
      heading: "$5.2",
      text: "million is the average cost of a cloud data breach, making it essential for businesses to invest in comprehensive cloud security solutions.",
    },
  ];

  const services = [
    {
      title: "End-to-End Cloud Protection",
      description:
        "Our services provide continuous protection across Azure,  Microsoft 365, AWS, hybrid, and multi-cloud environments. From proactive threat detection to  security hardening, we ensure your data, systems, and applications are secure ",
      icon: "/assets/OurServices/Cloud-Security/Maximize-Security/End to End Cloud.png", // Pass icon name as a string
    },
    {
      title: "24/7 Security Monitoring",
      description:
        "Our dedicated Security Operations Center monitors your cloud  environments around the clock, identifying and neutralizing threats in real-time. With a focus on  cost reduction and performance, our experts handle the risks so your team can focus on growth. ",
      icon: "/assets/OurServices/Cloud-Security/Maximize-Security/24_7 Security Monitoring.png",
    },
    {
      title: "Custom Security Strategies",
      description:
        "We design cloud security solutions tailored to your organization's  needs and local regulatory requirements. Whether it's policy-based configuration scans,  penetration testing, or ongoing security audits, we build a secure, compliant cloud infrastructure",
      icon: "/assets/OurServices/Cloud-Security/Maximize-Security/Custom Security.png",
    },
  ];

  const LastSteperData = {
    StepresOne: {
      title: "Why JBS Consulting",
      descr: "",
      box: "3",
      items: [
        {
          icon: "/assets/OurServices/Cloud-Security/Why-JBS/Alleviating IT Burdens.png",
          heading: "Alleviating IT Burdens",
          description:
            "Managing security takes time and resources that most businesses can't  spare. Our solutions reduce the strain on your IT team, allowing them to focus on core business  activities while we manage security responsibilities.",
        },
        {
          icon: "/assets/OurServices/Cloud-Security/Why-JBS/Proven Expertise.png",
          heading: " Rapid Recovery and Forensic Expertise",
          description:
            "In case of a breach, we swiftly neutralize threats,  execute a recovery plan, and apply forensic techniques to identify attackers and prevent future  breaches",
        },
        {
          icon: "/assets/OurServices/Cloud-Security/Why-JBS/Rapid Recovery.png",
          heading: "Proven Expertise Across Industries",
          description:
            "With decades of experience in physical and software security  projects, we have helped companies, nonprofits, and governments worldwide protect business critical data",
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

  return (
    <>
      <HeroSection
        backgroundImage="/assets/OurServices/Cloud-Services/Cloud-Security/banner.png"
        heading="Cloud Security Services"
        isRounded={true}
      />
      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "Cloud Security Services",
            left: 45,
            heading: "What is Cloud Security?",
            description:
              "As businesses increasingly adopt cloud platforms, safeguarding digital assets has never been more  critical. Cloud environments are vulnerable to a range of cyber threats, from data breaches to identity  theft, due to the complexity of managing diverse cloud ecosystems. A robust cloud security strategy  ensures your organization's sensitive data is protected, compliance requirements are met, and potential  security risks are mitigated.",
          }}
          imageSrc="/assets/OurServices/Cloud-Services/Cloud-Security/What-is-Cloud-Security.png"
          imageAlt="Cloud Security Services Image"
        />
        <div className="container mx-auto">
          <CloudSecurityKeyThreats
            types={KeyThreats}
            sectionTitle="Key Threats Facing Cloud Environments"
            height={500}
            headingHegihgt={55}
          />
        </div>

        <CloudServicesStepres {...SteperData} />

        <BoxWithTextOnly
          title="Why Investing in Cloud Security Is Non-Negotiable"
          features={BoxWithText}
          columns={3}
        />
        <div className="mt-10"></div>
      </div>
      <TextSectionBgGradiant
        title="Cloud Security: Safeguarding Digital Transformation "
        description="As cloud adoption accelerates, so do the risks associated with managing complex, distributed  environments. At JBS Consulting, we offer comprehensive cloud security solutions to protect your  business, ensuring that your digital assets remain secure and compliant while driving operational  efficiency "
      />
      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">

      <ServicesSectionBox
        sectionTitle="Maximize Security, Minimize Risk with Tailored Cloud Solutions "
        sectionDescription=""
        services={services}
        headingHegihgt={35}
      />

      <CloudServicesStepres {...LastSteperData} />
      </div>

      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "Cybersecurity Services",
            left: 0,
            heading: "Cyber Security - Proactive Protection for a Multi-Cloud World",
            description:
              "JBS Consulting's Cybersecurity Services, powered by Microsoft Sentinel, offer cloud-native security to protect your business across multi-cloud and hybrid environments. By leveraging Microsoft Sentinel's AIdriven threat detection, automated response capabilities, and advanced analytics, we deliver advanced protection and operational efficiency.",
          }}
          imageSrc="/assets/OurServices/Oracle-Services/cloud-infrastructure/Accelerate-Your-Cloud-Journey-with-Oracle.png"
          imageAlt="Cybersecurity Services"
        />


<CloudServicesStepres {...CyberSecuritySteperData} />
        </div>

      <LastSection />
    </>
  );
};
export default CloudSecurityServices;
