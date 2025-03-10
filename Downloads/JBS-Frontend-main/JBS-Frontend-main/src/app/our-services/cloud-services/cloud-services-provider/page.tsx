import CloudProviderTypes from "@/components/OurServices/common/Types";
import CloudServicesStepres from "@/components/OurServices/common/CloudServicesStepres";
import HeroSection from "@/components/OurServices/common/HeroSection";
import IntroSection from "@/components/OurServices/common/IntroSection";
import ServicesSectionBox from "@/components/OurServices/common/ServicesSectionBox";
import TextSectionBgGradiant from "@/components/OurServices/common/TextSectionBgGradiant";
import LastSection from "@/components/OurServices/common/LastSection";

const CloudProviderService = () => {
  const ProvidersBenifts = [
    {
      title: "Scalability and Flexibility ",
      description:
        "Businesses can easily adjust resources based on demand without the constraints of on-premises hardware.",
      image:
        "/assets/OurServices/Cloud-Services/Cloud-Provider/scalibility.png",
    },
    {
      title: "Reliability",
      description:
        "Most providers have multiple data centers with redundancies, ensuring minimal downtime and high availability.",
      image: "/assets/OurServices/Cloud-Services/Cloud-Provider/Relibility.png",
    },
    {
      title: "Customization",
      description:
        "Organizations can tailor cloud environments to meet their specific needs.",
      image:
        "/assets/OurServices/Cloud-Services/Cloud-Provider/customization.png",
    },
    {
      title: "Security Considerations",
      description:
        "It's crucial to implement industry-standard security practices to protect data and ensure compliance with relevant regulations.",
      image: "/assets/OurServices/Cloud-Services/Cloud-Provider/security.png",
    },
  ];

  const SteperData = {
    StepresOne: {
      title: "Cloud Computing Models",
      descr: "",
      box: "",
      items: [
        {
          icon: "/assets/OurServices/Cloud-Provider-Service-Icon/Cloud-Computing/Infrastructure.png",
          heading: "Infrastructure as a Service",
          description:
            "Offers basic infrastructure, such as virtual servers, storage, and networks, allowing full control over the configuration of resources.",
        },
        {
          icon: "/assets/OurServices/Cloud-Provider-Service-Icon/Cloud-Computing/Platform.png",
          heading: "Platform as a Service ",
          description:
            "Provides a platform where businesses can build, test, and deploy applications without managing the underlying infrastructure.",
        },
        {
          icon: "/assets/OurServices/Cloud-Provider-Service-Icon/Cloud-Computing/Software.png",
          heading: "Software as a Service",
          description:
            "Delivers complete applications over the internet, allowing companies to use software without worrying about installation or maintenance.",
        },
      ],
    },
    StepresTwo: {
      title: "IT Deployment Models",
      descr: "",
      box: "3",
      items: [
        {
          icon: "/assets/OurServices/Cloud-Provider-Service-Icon/IT-develoment/Public.png",
          heading: "Public Cloud",
          description:
            "A shared cloud infrastructure available to multiple organizations, offering cost efficiency and scalability.",
        },
        {
          icon: "/assets/OurServices/Cloud-Provider-Service-Icon/IT-develoment/Private.png",
          heading: "Private Cloud",
          description:
            "A dedicated cloud environment for a single organization, offering greater control, security, and customization.",
        },
        {
          icon: "/assets/OurServices/Cloud-Provider-Service-Icon/IT-develoment/Hybrid.png",
          heading: "Hybrid",
          description:
            "Combines on-premises infrastructure with public and private cloud environments, allowing flexibility and workload optimization.",
        },
      ],
    },
  };

  const SteperDataTwo = {
    StepresOne: {
      title: "Delivering Measurable Value Across Three Pillars",
      descr: "",
      box: "",
      items: [
        {
          icon: "/assets/OurServices/Cloud-Provider-Service-Icon/Delivering-Measurable-Value-Across-Three-Pillars/Cost-Optimization.png",
          heading: "Cost Optimization",
          description:
            "We build cost-efficient cloud strategies using data-driven frameworks. This includes real-time insights, usage tracking, and leveraging cost-saving models like reserved or spot instances, ensuring maximum return on investment.",
        },
        {
          icon: "/assets/OurServices/Cloud-Provider-Service-Icon/Delivering-Measurable-Value-Across-Three-Pillars/Perfomance.png",
          heading: "Performance Excellence",
          description:
            "Our dynamic cloud infrastructure designs scale with your needs, guaranteeing optimal performance and zero downtime through technologies like auto-scaling, caching, and load balancing.",
        },
        {
          icon: "/assets/OurServices/Cloud-Provider-Service-Icon/Delivering-Measurable-Value-Across-Three-Pillars/Security.png",
          heading: "Security & Compliance",
          description:
            " Your data's security is our priority. From threat detection to GDPR, HIPAA, and ISO compliance, we embed advanced security protocols into your cloud architecture, ensuring robust protection at all levels.",
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

  const services = [
    {
      title: "Identify Drivers for Change",
      description:
        "We start by understanding the specific motivations behind your transformation—whether it's agility, cost optimization, or improved security",
      icon: "/assets/OurServices/Cloud-Provider-Service-Icon/Understanding-Your-Vision-for-Change/Identify Drivers for Change.png", // Pass icon name as a string
    },
    {
      title: "Tailored Cloud Solutions",
      description:
        "Tailored Cloud Solutions: Our cloud strategies are built around these drivers, ensuring that solutions are customized to address your unique needs",
      icon: "/assets/OurServices/Cloud-Provider-Service-Icon/Understanding-Your-Vision-for-Change/Tailored Cloud Solutions.png",
    },
    {
      title: "Lasting Impact",
      description:
        "Lasting Impact: By aligning cloud technologies with your goals, we ensure that your transformation delivers long-term, sustainable value for your business.",
      icon: "/assets/OurServices/Cloud-Provider-Service-Icon/Understanding-Your-Vision-for-Change/Lasting Impact.png",
    },
  ];

  return (
    <>
      <HeroSection
        backgroundImage="/assets/OurServices/Cloud-Services/Cloud-Provider/banner.jpg"
        heading="Cloud Service Provider"
        isRounded={true}
      />

      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "Cloud Service Provider",
            left: 45,
            heading: "What is a Cloud Service Provider?",
            description:
              "A cloud service provider is a third-party company offering cloud-based platforms, infrastructure, applications, or storage services. Like utilities such as electricity or water, businesses pay for only what they use, making it a cost-efficient solution. CSPs provide flexibility, allowing companies to scale resources as needed without the limitations of physical infrastructure.",
          }}
          imageSrc="/assets/OurServices/Cloud-Services/Cloud-Provider/what-is-cloud-provider-S.png"
          imageAlt="Cloud Providers Image"
        />

        <CloudProviderTypes
          types={ProvidersBenifts}
          sectionTitle="In addition to flexible pricing, we offer several benefits"
          height={420}
          headingHegihgt={40}
        />

        <CloudServicesStepres {...SteperData} />
      </div>
      <TextSectionBgGradiant
        title="Transforming Your Business with Purpose-Driven Cloud Solutions"
        description="Unlock the true potential of cloud technologies with strategies tailored to your business needs. At JBS Consulting, we remain vendor-neutral, partnering with leading providers like Microsoft Azure, AWS, and Google Cloud to ensure unbiased recommendations aligned with your goals."
      />
<div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
      <ServicesSectionBox
        sectionTitle="Understanding Your Vision for Change"
        sectionDescription=""
        services={services}
        headingHegihgt={35}
      />
      
        {/* <ImageTextWithOrder
          title="Tailored Cloud Strategies for Maximum Impact"
          description="There is no one-size-fits-all solution in the cloud. Our approach focuses on identifying the best cloud platform—whether Azure, AWS, or Google Cloud—based on your industry requirements, compliance needs, and long-term vision."
          imageSrc="/assets/OurServices/cloud-migration/Why Migrate with Us.png"
          imageAlt="Cloud Service Provider?"
          reverseOrder={false}
        /> */}

        <IntroSection
          text={{
            title: "Cloud Service Provider",
            left: 45,
            heading: "Tailored Cloud Strategies for Maximum Impact",
            description:
              "There is no one-size-fits-all solution in the cloud. Our approach focuses on identifying the best cloud platform—whether Azure, AWS, or Google Cloud—based on your industry requirements, compliance needs, and long-term vision.",
          }}
          imageSrc="/assets/OurServices/Cloud-Services/Cloud-Provider/Tailored-Cloud-Strategies-S.png"
          imageAlt="Cloud Providers Image"
        />
      

      {/* <div className="h-10"></div> */}

      <CloudServicesStepres {...SteperDataTwo} />
      </div>

      <LastSection />
    </>
  );
};
export default CloudProviderService;
