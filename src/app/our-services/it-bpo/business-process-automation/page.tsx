import CloudManagedTypes from "@/components/OurServices/common/Types";
import HeroSection from "@/components/OurServices/common/HeroSection";
import IntroSection from "@/components/OurServices/common/IntroSection";
import CloudServicesStepres from "@/components/OurServices/common/CloudServicesStepres";
import TextSectionBgGradiant from "@/components/OurServices/common/TextSectionBgGradiant";
import LastSectionItBpo from "@/components/OurServices/common/LastSectionItBpo";

const BusinessProcessAutomation = () => {
  const ManagedTypes = [
    {
      title: "Enhanced Productivity",
      description:
        "Eliminate inefficiencies and accelerate business operations with automation. BPA reduces bottlenecks, ensuring smoother workflows and enabling teams to focus on high-priority tasks",
      image:
        "/assets/OurServices/IT-BPO/BusinessProcessAutomation/enhace-productivity.jpg",
    },
    {
      title: "Cost Savings",
      description:
        "Minimize resource consumption and operational costs while reallocating staff to strategic initiatives",
      image: "/assets/OurServices/IT-BPO/BusinessProcessAutomation/Cost.jpg",
    },
    {
      title: "Streamlined Data Management",
      description:
        "Centralized storage and automation reduce errors and improve data accessibility",
      image:
        "/assets/OurServices/IT-BPO/BusinessProcessAutomation/data-management.jpg",
    },
    {
      title: "Real-Time Insights and Transparency",
      description:
        "Actionable insights through detailed dashboards that provide visibility into operations, enabling data-driven decisions",
      image:
        "/assets/OurServices/IT-BPO/BusinessProcessAutomation/realtime.jpg",
    },
    {
      title: "Compliance and Standardization",
      description:
        "Ensure adherence to regulations with built-in controls, automated audit trails, and process standardization",
      image:
        "/assets/OurServices/IT-BPO/BusinessProcessAutomation/compliance.jpg",
    },
  ];

  const SteperData = {
    StepresOne: {
      title: "Choosing the Right BPMS Solution",
      descr: "",
      box: "",
      items: [
        {
          icon: "/assets/OurServices/IT-BPO/BusinessProcessAutomation/ease.png",
          heading: "Ease of Integration",
          description:
            "Select a BPMS platform that aligns with your existing infrastructure and can integrate within your technology stack",
        },
        {
          icon: "/assets/OurServices/IT-BPO/BusinessProcessAutomation/Scailbility.png",
          heading: "Scalability",
          description:
            "Ensure the solution can adapt to your specific business needs, allowing you to add new workflows or scale existing ones",
        },
        {
          icon: "/assets/OurServices/IT-BPO/BusinessProcessAutomation/Security.png",
          heading: "Security and Compliance",
          description:
            "Select a BPMS that adheres to industry security standards and supports compliance requirements specific to your industry and geography",
        },
        {
          icon: "/assets/OurServices/IT-BPO/BusinessProcessAutomation/User-friendly.png",
          heading: "User-Friendly Interface",
          description:
            "Choose a platform with intuitive, low-code design capabilities to empower your teams to build and manage workflows without technical expertise",
        },
        {
          icon: "/assets/OurServices/IT-BPO/BusinessProcessAutomation/Robust.png",
          heading: "Robust Analytics",
          description:
            "A strong BPMS solution provides real-time reporting and analytics to monitor performance and optimize business processes",
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
        backgroundImage="/assets/OurServices/IT-BPO/BusinessProcessAutomation/banner.jpg"
        heading="Business Process Automation"
        isRounded={true}
      />

      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "Business Process Automation",
            left: 40,
            heading: "What is Business Process Automation?",
            description:
              "Business Process Automation (BPA) streamlines and optimizes repetitive tasks and manual workflows using advanced technologies. By automating processes like product development, sales, and human resources, businesses can increase productivity, reduce human dependency, and enhance operational efficiency",
          }}
          imageSrc="/assets/OurServices/IT-BPO/BusinessProcessAutomation/Business-Process-Automation.png"
          imageAlt="Business Process Automation"
        />

        <CloudManagedTypes
          types={ManagedTypes}
          sectionTitle="The Benefits of Implementing a BPA Solution"
          height={450}
          headingHegihgt={50}
        />
      </div>
      <TextSectionBgGradiant
        title="Building Automations with Business Process Management Software (BPMS)"
        description="BPMS serves as the backbone of automation, enabling businesses to design, implement, and optimize their workflows efficiently. With BPMS, businesses can integrate automation tools with existing systems, create scalable workflows, and maintain control over existing business processes"
      />
      <div className="h-10"></div>
      <CloudServicesStepres {...SteperData} />
      

      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "Why Choose Us",
            left: 30,
            heading: "Why Choose JBS Consulting?",
            description: "",
            bulletPoints: [
              "<strong>Custom Solutions:</strong> We don't believe in a one-size-fits-all approach. We design automation solutions that evolve with your business, enabling you to scale as demand increases.",
              "<strong>Expertise in AI:</strong> With a team of experts in AI, JBS Consulting delivers cutting-edge automation technologies that drive efficiency, reduce costs, and optimize workflows.",
              "<strong>Maximize ROI:</strong> Our solutions are designed with a focus on delivering rapid and measurable ROI, helping you achieve more with fewer resources.",
            ],
          }}
          imageSrc="/assets/OurServices/IT-BPO/BusinessProcessAutomation/Why-Choose-JBS-Consulting.png"
          imageAlt="Data Foundations Image"
        />
      </div>

      <LastSectionItBpo />
    </>
  );
};
export default BusinessProcessAutomation;
