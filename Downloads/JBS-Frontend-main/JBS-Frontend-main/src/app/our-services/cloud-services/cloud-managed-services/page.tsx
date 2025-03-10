import CloudManagedTypes from "@/components/OurServices/common/Types";
import HeroSection from "@/components/OurServices/common/HeroSection";
import IntroSection from "@/components/OurServices/common/IntroSection";
import CloudServicesStepres from "@/components/OurServices/common/CloudServicesStepres";
import TextSectionBgGradiant from "@/components/OurServices/common/TextSectionBgGradiant";
import LastSection from "@/components/OurServices/common/LastSection";
import AllServicesSectionBoxSlide from "@/components/OurServices/common/ServicesSectionBoxSlide";

const CloudManagedServices = () => {
  const ManagedTypes = [
    {
      title: "Infrastructure Management",
      description:
        "Covers the basic maintenance of your cloud servers, storage, and network. This service ensures that your cloud infrastructure is optimized for performance and reliability.",
      image:
        "/assets/OurServices/Cloud-Services/Cloud-Managed/infrastructure.png",
    },
    {
      title: "Security Management",
      description:
        "Focuses on protecting your cloud environment through continuous monitoring, data encryption, identity management, and compliance with regulatory standards.",
      image:
        "/assets/OurServices/Cloud-Services/Cloud-Managed/Security-management.png",
    },
    {
      title: "Backup and Disaster Recovery",
      description:
        "Involves regularly backing up your cloud data and setting up disaster recovery plans to minimize downtime and data loss during outages.",
      image: "/assets/OurServices/Cloud-Services/Cloud-Managed/backup.png",
    },
    {
      title: "Performance Monitoring and Optimization",
      description:
        "Ensures that your applications and services in the cloud are running efficiently, with proactive management to prevent bottlenecks and optimize resources.",
      image:
        "/assets/OurServices/Cloud-Services/Cloud-Managed/perfomance-monitoring.png",
    },
    {
      title: "Cost Management",
      description:
        "Helps track and optimize cloud spending by analyzing usage patterns and adjusting resources accordingly to prevent overspending.",
      image:
        "/assets/OurServices/Cloud-Services/Cloud-Managed/cost-managment.jpg",
    },
  ];

  const SteperData = {
    StepresOne: {
      title: "What are the Benefits of Cloud Managed Services?",
      descr: "",
      box: "",
      items: [
        {
          icon: "/assets/OurServices/Cloud-Managed-Service/Cost-management.png",
          heading: "Cost Efficiency",
          description:
            "Reduces the need for in-house cloud specialists and optimizes resource usage, lowering operational expenses.",
        },
        {
          icon: "/assets/OurServices/Cloud-Managed-Service/multi.png",
          heading: "24/7 Monitoring",
          description:
            "Continuous oversight ensures that your cloud environment is secure and running optimally around the clock.",
        },
        {
          icon: "/assets/OurServices/Cloud-Managed-Service/Scalable.png",
          heading: "Scalability",
          description:
            "Managed services allow for seamless scaling of cloud infrastructure to meet growing business demands.",
        },
        {
          icon: "/assets/OurServices/Cloud-Managed-Service/security.png",
          heading: "Security and Compliance",
          description:
            "Managed service providers ensure that security updates and compliance protocols are always up to date.",
        },
        {
          icon: "/assets/OurServices/Cloud-Managed-Service/IT-operation.png",
          heading: "Expertise and Support:",
          description:
            "Access to cloud-certified professionals who can manage and troubleshoot issues proactively.",
        },
      ],
    },
    StepresTwo: {
      title: "How to Select a Cloud Managed Service for Your Business?",
      descr: "",
      box: "3",
      items: [
        {
          icon: "/assets/OurServices/Cloud-Managed-Service/How-to-Select-a-Cloud-Managed-Service-for-Your-Business/Experience.png",
          heading: "Experience",
          description:
            "Ensure the provider has expertise in managing the specific cloud platforms (AWS, Azure, Google Cloud) you use.",
        },
        {
          icon: "/assets/OurServices/Cloud-Managed-Service/How-to-Select-a-Cloud-Managed-Service-for-Your-Business/ServiceLevelAgreement.png",
          heading: "Service Level Agreements (SLAs)",
          description:
            "Evaluate the provider's response times, uptime guarantees, and support hours.",
        },
        {
          icon: "/assets/OurServices/Cloud-Managed-Service/How-to-Select-a-Cloud-Managed-Service-for-Your-Business/SecurityandCompliance.png",
          heading: "Security and Compliance",
          description:
            "Ensure they offer robust security measures and have experience in regulatory compliance relevant to your industry.",
        },
        {
          icon: "/assets/OurServices/Cloud-Services/Cloud-Managed/Scalibilty.png",
          heading: "Scalability",
          description:
            "Choose a provider that can scale services as your business grows.",
        },
        {
          icon: "/assets/OurServices/Cloud-Services/Cloud-Managed/Cost-management.png",
          heading: "Cost Management",
          description:
            "Opt for a provider that offers transparent pricing and cost optimization services",
        },
      ],
    },
  };
  const ServicesSectionBoxSlideType = [
    {
      title: "Monitoring and Threat Detection",
      description:
        "We employ 24/7 monitoring systems that  proactively identify and mitigate security threats in real-time. This continuous oversight ensures  that your cloud infrastructure is always protected against vulnerabilities, reducing the risk of  breaches before they can impact your operations.",
      image:
        "/assets/OurServices/Cloud-Managed-Service/Security-and-Governance-You-Can-Trust/Continuous Monitoring and Threat Detection.png", // Pass icon name as a string
    },
    {
      title: "Data Encryption and Privacy Controls",
      description:
        "Our services include advanced encryption protocols for  data both at rest and in transit, ensuring that sensitive information remains secure. Additionally,  we implement strict privacy controls and governance to comply with industry regulations,  safeguarding your data from unauthorized access. ",
      image:
        "/assets/OurServices/Cloud-Managed-Service/Security-and-Governance-You-Can-Trust/Data Encryption and Privacy Controls.png",
    },
    {
      title: "Compliance with Industry Standards",
      description:
        "We help your cloud environment adhere to the latest  compliance standards such as GDPR, HIPAA, and ISO 27001. By ensuring your cloud operations  meet these regulations, we reduce the risk of fines or legal issues while maintaining the trust of  your customers and partners. ",
      image:
        "/assets/OurServices/Cloud-Managed-Service/Security-and-Governance-You-Can-Trust/Compliance with Industry Standards.png",
    },
    {
      title: " Identity and Access Management (IAM)",
      description:
        "We implement robust identity and access management  solutions, including multi-factor authentication (MFA) and role-based access control (RBAC). This  ensures that only authorized personnel can access critical systems and data, minimizing the risk  of insider threats and unauthorized access ",
      image:
        "/assets/OurServices/Cloud-Managed-Service/Security-and-Governance-You-Can-Trust/Identity and Access Management.png",
    },
  ];

  const CostEfficiency = [
    {
      title: "Optimized Resource Allocation",
      description:
        "By continuously monitoring your cloud usage, we ensure that  resources are right-sized based on actual demand. This prevents over-provisioning, allowing you  to pay only for what you need without sacrificing performance. ",
      image: "/assets/OurServices/Cloud-Services/Cloud-Managed/optimized.png",
    },
    {
      title: "Anomaly Detection for Unexpected Costs",
      description:
        "Our system identifies and flags unexpected spikes in  cloud usage, giving you the opportunity to address anomalies before they lead to excessive  costs. This proactive approach helps maintain budget predictability and prevents billing  surprises. ",
      image:
        "/assets/OurServices/Cloud-Services/Cloud-Managed/unexpected-cost.png",
    },
    {
      title: "Cost-Saving Recommendations",
      description:
        "We provide ongoing recommendations for cost-saving  measures, such as leveraging reserved instances or spot instances for non-critical workloads.  These insights ensure that you're taking advantage of every opportunity to reduce expenses.",
      image: "/assets/OurServices/Cloud-Services/Cloud-Managed/saving.png",
    },
    {
      title: "Automated Scaling for Cost Control",
      description:
        "Our automated scaling solutions dynamically adjust your  cloud resources in real-time, scaling up during high demand and scaling down when usage  drops. This ensures you're never paying for unused capacity, keeping your cloud spend efficient  and aligned with actual business needs.",
      image:
        "/assets/OurServices/Cloud-Services/Cloud-Managed/automated-scalling-cost.png",
    },
  ];

  return (
    <>
      <HeroSection
        backgroundImage="/assets/OurServices/Cloud-Services/Cloud-Managed/Banner.png"
        heading="Cloud Managed Services"
        isRounded={true}
      />

      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "Cloud Managed Services",
            left: 40,
            heading: "What are Cloud Managed Services?",
            description:
              "Cloud Managed Services involve outsourcing the daily management and monitoring of your cloud infrastructure to a third-party provider. This includes overseeing cloud operations, security, backups, performance monitoring, and cost management. The goal is to ensure your cloud environment runs smoothly while freeing your internal teams to focus on innovation and business-critical tasks.",
          }}
          imageSrc="/assets/OurServices/Cloud-Services/Cloud-Managed/What-are-Cloud-Managed-Services.png"
          imageAlt="Cloud Managed Image"
        />

        <CloudManagedTypes
          types={ManagedTypes}
          sectionTitle="Types of Cloud Managed Services"
          height={480}
          headingHegihgt={50}
        />

        <CloudServicesStepres {...SteperData} />
      </div>
      <TextSectionBgGradiant
        title="Maximize Cloud Efficiency with JBS's Managed Services"
        description="Our Cloud Managed Services provide full oversight of your cloud environment, ensuring optimal  performance and security. From routine monitoring to proactive cost control, we work as an extension  of your team to ensure your cloud infrastructure meets your business goals. "
      />

      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "",
            left: 40,
            heading: "Expertise Across Leading Cloud Providers",
            description:
              "Our Cloud Managed Services cover all major platforms, including AWS, Microsoft Azure, and Google  Cloud. Whether you need help with a single platform or a complex multi-cloud environment, we tailor  our solutions to your unique needs, ensuring seamless management and optimization.",
          }}
          imageSrc="/assets/OurServices/Cloud-Services/Cloud-Managed/Expertise-Across-Leading-Cloud-Providers.png"
          imageAlt="Leading Cloud Providers"
        />

        <AllServicesSectionBoxSlide
          types={ServicesSectionBoxSlideType}
          sectionTitle="Security and Governance You Can Trust"
          height={460}
          headingHegihgt={50}
        />
        <div className="h-10"></div>
        <CloudManagedTypes
          types={CostEfficiency}
          sectionTitle="Maximizing Cost Efficiency with Proactive Management"
          height={500}
          headingHegihgt={55}
        />
      </div>

      {/* <div className="h-10"></div> */}

      <LastSection />
    </>
  );
};
export default CloudManagedServices;
