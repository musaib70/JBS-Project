import CloudManagedTypes from "@/components/OurServices/common/Types";
import HeroSection from "@/components/OurServices/common/HeroSection";
import IntroSection from "@/components/OurServices/common/IntroSection";
import CloudServicesStepres from "@/components/OurServices/common/CloudServicesStepres";
import LastSectionItBpo from "@/components/OurServices/common/LastSectionItBpo";

const ManagedServices = () => {
  const ManagedTypes = [
    {
      title: "Consultation",
      description:
        "Our experts identify areas for optimization, align technology initiatives with business goals, and create a roadmap for achieving operational excellence",
      image: "/assets/OurServices/IT-BPO/Managed-Services/Consult.jpg",
    },
    {
      title: "Implementation",
      description:
        "From cloud migrations to infrastructure upgrades, we ensure minimal disruption and maximum efficiency during every step of the process",
      image: "/assets/OurServices/IT-BPO/Managed-Services/Implementation.jpg",
    },
    {
      title: "Service Level Agreements (SLAs)",
      description:
        "Our customizable SLAs provide peace of mind, ensuring that your IT operations meet agreed performance standards. We offer flexible options tailored to your needs",
      image:
        "/assets/OurServices/IT-BPO/Managed-Services/Service-level-agreement.jpg",
    },
    {
      title: "Professional and Managed Services",
      description:
        "We provide dedicated teams for proactive monitoring, issue resolution, and strategic guidance to maintain optimal IT performance",
      image: "/assets/OurServices/IT-BPO/Managed-Services/Professional.jpg",
    },
    {
      title: "IT Staffing",
      description:
        "Close skill gaps with our IT staffing solutions. We provide highly skilled professionals to supplement your in-house team, ensuring you have the expertise needed for your business tasks",
      image: "/assets/OurServices/IT-BPO/Managed-Services/IT.jpg",
    },
    {
      title: "Training",
      description:
        "Our workshops and learning modules ensure your team can leverage new technologies effectively, driving productivity and innovation",
      image: "/assets/OurServices/IT-BPO/Managed-Services/Training.jpg",
    },
  ];

  const SteperData = {
    StepresOne: {
      title: "Why Choose JBS Consulting Managed Services?",
      descr: "",
      box: "",
      items: [
        {
          icon: "/assets/OurServices/Cloud-Managed-Service/What-are-the-Benefits-of-Cloud-Managed-Services/Cost-efficiency.png",
          heading: "Optimized IT Operations",
          description:
            "Maximize efficiency and reduce downtime with expert guidance and proactive monitoring",
        },
        {
          icon: "/assets/OurServices/Cloud-Managed-Service/What-are-the-Benefits-of-Cloud-Managed-Services/247-monitoring.png",
          heading: "Cost Management",
          description:
            "Avoid unexpected expenses with transparent pricing and cost-optimization strategies",
        },
        {
          icon: "/assets/OurServices/Cloud-Managed-Service/What-are-the-Benefits-of-Cloud-Managed-Services/Scalability.png",
          heading: "Enhanced Security and Compliance",
          description:
            "Safeguard your IT environment with advanced security protocols and compliance-focused solutions",
        },
        {
          icon: "/assets/OurServices/Cloud-Managed-Service/What-are-the-Benefits-of-Cloud-Managed-Services/Scalability.png",
          heading: "Scalable Support",
          description:
            "Whether you need support for a single project or your entire portfolio, our technical and customer support solutions provide the flexibility your business needs",
        },
        {
          icon: "/assets/OurServices/Cloud-Managed-Service/What-are-the-Benefits-of-Cloud-Managed-Services/Scalability.png",
          heading: "Multicloud Expertise",
          description:
            "Manage your cloud environment across Microsoft, AWS, and Google Cloud with our expertise in multicloud solutions",
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
        backgroundImage="/assets/OurServices/IT-BPO/Managed-Services/Banner.jpg"
        heading="Managed Services"
        isRounded={true}
      />

      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "Managed Services",
            left: 40,
            heading: "Bridge the Gap, Optimize Performance",
            description:
              "JBS Consulting's Managed Services provide you with the expertise, tools, and automation needed to ensure your IT environment operates seamlessly. From consultation to implementation and beyond, our team is dedicated to delivering solutions tailored to your needs",
          }}
          imageSrc="/assets/OurServices/IT-BPO/Managed-Services/Bridge-the-Gap.png"
          imageAlt="Managed Services"
        />

        <CloudManagedTypes
          types={ManagedTypes}
          sectionTitle="Our Managed Services Offerings"
          height={450}
          headingHegihgt={50}
        />
        <CloudServicesStepres {...SteperData} />
      </div>
      <LastSectionItBpo />
    </>
  );
};
export default ManagedServices;
