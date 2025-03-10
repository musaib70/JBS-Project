import CloudManagedTypes from "@/components/OurServices/common/Types";
import HeroSection from "@/components/OurServices/common/HeroSection";
import IntroSection from "@/components/OurServices/common/IntroSection";
import CloudServicesStepres from "@/components/OurServices/common/CloudServicesStepres";
import TextSectionBgGradiant from "@/components/OurServices/common/TextSectionBgGradiant";
// import TeamSlider from "@/components/OurServices/common/TeamSlider";
import LastSectionApplicationServices from "@/components/OurServices/common/LastSectionApplicationServices";

const ApplicationDevelopment = () => {
  const ManagedTypes = [
    {
      title: "Cloud-Native Architecture",
      description:
        "Build applications using containers and microservices, ensuring portability and scalability across environments.",
      image:
        "/assets/OurServices/Application-Services/Application-Development/Cloud.jpg",
    },
    {
      title: "AI-Powered Features",
      description:
        "Infuse AI into user interfaces and business logic for personalized customer experiences and deeper insights.",
      image:
        "/assets/OurServices/Application-Services/Application-Development/AI-powered.jpg",
    },
    {
      title: "DevOps and Automation",
      description:
        "Implement DevOps tools for continuous integration, delivery, and deployment, enabling companies to reduce time-to-market for products.",
      image:
        "/assets/OurServices/Application-Services/Application-Development/Devops-automation.jpg",
    },
    {
      title: "API-Driven Integration",
      description:
        "Connect disparate systems using APIs and prebuilt connectors, eliminating the need to reinvent the wheel.",
      image:
        "/assets/OurServices/Application-Services/Application-Development/API.jpg",
    },
    {
      title: "Managed Databases",
      description:
        "Use fully managed cloud databases that ensure high availability, low latency, and advanced data protection",
      image:
        "/assets/OurServices/Application-Services/Application-Development/Managed-database.jpg",
    },
  ];

  const SteperData = {
    StepresOne: {
      title: "Most Common Modern Application Development Scenarios",
      descr: "",
      box: "",
      items: [
        {
          icon: "/assets/OurServices/Application-Services/Application-Development/Smart-environment.png",
          heading: "IoT-Enabled Smart Environments",
          description:
            "Develop applications that process real-time data from thousands of IoT devices, enabling automation in smart cities, smart factories, and smart homes.",
        },
        {
          icon: "/assets/OurServices/Application-Services/Application-Development/predictive-analytics.png",
          heading: "AI-Driven Predictive Analytics",
          description:
            "Build systems that leverage machine learning models to predict market trends, optimize supply chains, or enhance user behavior insights, driving smarter business decisions with minimal human intervention.",
        },
        {
          icon: "/assets/OurServices/Application-Services/Application-Development/AR-VR.png",
          heading: "AR and VR Applications",
          description:
            "Create immersive experiences that blend digital content with the physical world, transforming industries like retail, real estate, and education by improving user engagement.",
        },
        {
          icon: "/assets/OurServices/Application-Services/Application-Development/serverless.png",
          heading: "Serverless Architectures",
          description:
            "Design scalable applications without managing underlying infrastructure, capable of handling millions of transactions per second, making it ideal for ecommerce and high-traffic platforms.",
        },
        {
          icon: "/assets/OurServices/Application-Services/Application-Development/Blockchain.png",
          heading: "Blockchain-Integrated Systems",
          description:
            "Incorporate decentralized ledgers for secure, transparent transactions across supply chains and digital assets.",
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

  const CostEfficiency = [
    {
      title: "Advanced Application Diagnostics",
      description:
        "We employ cutting-edge analytics and AI-driven tools to evaluate your application ecosystem, identifying areas for modernization and transformation.",
      image:
        "/assets/OurServices/Application-Services/Application-Development/application.jpg",
    },
    {
      title: "Intelligent Portfolio Streamlining",
      description:
        "Using automation and machine learning, we optimize your application portfolio, removing inefficiencies, reducing technical debt, and ensuring seamless performance across platforms.",
      image:
        "/assets/OurServices/Application-Services/Application-Development/portfolio.jpg",
    },
    {
      title: "Data-Driven Transformation Roadmap",
      description:
        "We build an actionable, AI-assisted roadmap that aligns with your business vision, providing a clear path to digital adoption with quantifiable KPIs.",
      image:
        "/assets/OurServices/Application-Services/Application-Development/data-transform.jpg",
    },
    {
      title: "Cloud-Native Acceleration",
      description:
        "Our cloud experts deploy latest solutions using microservices and containerization, enabling rapid scalability and continuous innovation.",
      image:
        "/assets/OurServices/Application-Services/Application-Development/cloud-native.jpg",
    },
  ];

  return (
    <>
      <HeroSection
        backgroundImage="/assets/OurServices/Application-Services/Application-Development/Banner.jpg"
        heading="Application Development"
        isRounded={true}
      />

      <section className="">
        <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
          <IntroSection
            text={{
              title: "Application Development",
              left: 40,
              heading: "What is Modern Application Development?",
              description:
                "Modern application development leverages cloud-native architectures that allow businesses to innovate rapidly and meet evolving market demands. It involves using microservices, managed databases, DevOps practices, and AI to create scalable, secure, and responsive applications. It allows organizations to deliver personalized, real-time experiences to their users.",
            }}
            imageSrc="/assets/OurServices/Application-Services/Application-Development/What-is-Modern-Application-Development.png"
            imageAlt="Application Development"
          />

          <CloudManagedTypes
            types={ManagedTypes}
            sectionTitle="Building Blocks of Modern Application Development"
            height={420}
            headingHegihgt={50}
          />

          <CloudServicesStepres {...SteperData} />
        </div>

        <TextSectionBgGradiant
          title="Transformation with Agile, Cloud-Native Application Development"
          description="At JBS Consulting, we integrate cutting-edge technologies such as cloud, AI, and DevOps, we ensure your applications are not just innovative but scalable, secure, and optimized for exponential growth. Whether you're modernizing legacy systems or building from the ground up, our solutions drive business agility and long-term success"
        />

        <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <div className="h-10"></div>
          <CloudManagedTypes
            types={CostEfficiency}
            sectionTitle="Solutions for Accelerated Business Transformation"
            height={420}
            headingHegihgt={55}
          />
            <IntroSection
            text={{
              title: "Why Choose Us",
              left: 40,
              heading: "Why Choose JBS as your Strategic Partner?",
              description: "",
              bulletPoints: [
                "<strong>Innovation: </strong> We merge industry expertise with advanced cloud and AI technologies to redefine how applications are developed.",
                "<strong>Digital Transformation: </strong> As your partner, we drive transformation that delivers measurable results enhancing agility and operational efficiency.",
                "<strong>Bespoke Solutions: </strong> Every solution is custom-built to align with your goals, ensuring competitive advantage.",
              ],
            }}
            imageSrc="/assets/OurServices/Application-Services/Application-Development/why-jbs-consulting.png"
            imageAlt="Application Development"
          />
        </div>

        <LastSectionApplicationServices />
      </section>
    </>
  );
};
export default ApplicationDevelopment;
