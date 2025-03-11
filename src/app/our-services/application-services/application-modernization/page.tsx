import CloudServicesStepres from "@/components/OurServices/common/CloudServicesStepres";
import HeroSection from "@/components/OurServices/common/HeroSection";
import IntroSection from "@/components/OurServices/common/IntroSection";
import CloudSecurityKeyThreats from "@/components/OurServices/common/Types";
import TextSectionBgGradiant from "@/components/OurServices/common/TextSectionBgGradiant";
import ServicesSectionBox from "@/components/OurServices/common/ServicesSectionBox";
import LastSectionApplicationServices from "@/components/OurServices/common/LastSectionApplicationServices";
import ImageTextSectionAllPages from "@/components/OurServices/common/ImageTextSectionAllPages";
import SectionBoxZigZagSlide from "@/components/OurServices/common/ServicesGridBoxZigZag";

const ApplicationModernization = () => {
  const KeyThreats = [
    {
      title: "Refactoring",
      description:
        "Changing the application&apos;s code without altering its functionality",
      image:
        "/assets/OurServices/Application-Services/Application-Modernization/Refactoring.jpg",
    },
    {
      title: "Re-architecting",
      description:
        "Redesigning the application&apos;s architecture (e.g., from monolithic to microservices) to improve performance and scalability",
      image:
        "/assets/OurServices/Application-Services/Application-Modernization/Rearchitecting.jpg",
    },
    {
      title: "Containerization",
      description:
        "Refining the application in lightweight, standalone containers that can run in any environment",
      image:
        "/assets/OurServices/Application-Services/Application-Modernization/Containerization.jpg",
    },
    {
      title: "Adopting DevOps Practices",
      description:
        "Involves utilization of integration/continuous deployment (CI/CD) pipelines and automated testing for faster execution",
      image:
        "/assets/OurServices/Application-Services/Application-Modernization/Advopting.jpg",
    },
  ];
  const SectionBoxZigZagSlideType = [
    {
      title: "Application Modernization Services",
      description:
        "Our team provides end-to-end application modernization services, starting from assessment and planning through to execution and management. We help businesses transition from legacy systems to modern, cloud-based architectures, ensuring minimal disruption and maximum business value",
      image:
        "/assets/OurServices/Application-Services/Application-Modernization/ApplicationModernization-Innovatewithcloud/application.png",
    },
    {
      title: "Digital Transformation",
      description:
        "Modernization is a key part of digital transformation. We help businesses pivot from traditional to digital-first approaches by aligning their IT infrastructure and applications with modern business strategies. This allows companies to be more agile, innovative, and responsive to change",
      image:
        "/assets/OurServices/Application-Services/Application-Modernization/ApplicationModernization-Innovatewithcloud/digital-transformation.png",
    },
    {
      title: "Advisory and Talent Services",
      description:
        "We offer expert advisory services to guide you through the modernization journey, ensuring the right strategy and execution plan. Additionally, our talent services provide skilled professionals to augment your team and ensure a smooth modernization process",
      image:
        "/assets/OurServices/Application-Services/Application-Modernization/ApplicationModernization-Innovatewithcloud/advisory.png",
    },
  ];
  const services = [
    {
      title: "Microservices and API Management",
      description:
        "Break down monolithic applications into smaller, self-contained microservices that communicate through APIs. This approach enables easier integration with other systems and modernization of specific components",
      icon: "/assets/OurServices/Application-Services/Application-Modernization/UnderstandingAppModernization/Microservices-and-API-Management.png",
    },
    {
      title: "Containers and Orchestration",
      description:
        "Containers encapsulate applications, which allows for more consistent execution across different environments. Kubernetes, a container orchestration tool, allows users to manage the deployment and scaling of cloud applications",
      icon: "/assets/OurServices/Application-Services/Application-Modernization/UnderstandingAppModernization/Containers-and-Orchestration.png",
    },
    {
      title: "Serverless Computing",
      description:
        "This enables developers to build and run applications without having the need to manage the underlying infrastructure. Serverless architectures automatically scales based on business demand",
      icon: "/assets/OurServices/Application-Services/Application-Modernization/UnderstandingAppModernization/serverless.png",
    },
  ];

  const SteperData = {
    StepresOne: {
      title: "What are the Benefits of App Modernization?",
      descr: "",
      box: "3",
      items: [
        {
          icon: "/assets/OurServices/Application-Services/Application-Modernization/BenefitsofAppModernization/Agilty.png",
          heading: "Agility and Speed",
          description:
            "Modern architectures like microservices enable faster deployment lifecycles, enabling development teams to deliver functionality more frequently",
        },
        {
          icon: "/assets/OurServices/Application-Services/Application-Modernization/BenefitsofAppModernization/cost.png",
          heading: "Cost Effective",
          description:
            "Legacy systems are costly to maintain due to their outdated infrastructure and specialized skills required for maintenance. Modernization reduces these costs by leveraging cloud-native technologies that offer on-demand resource allocation",
        },
        {
          icon: "/assets/OurServices/Application-Services/Application-Modernization/BenefitsofAppModernization/Security.png",
          heading: "Security",
          description:
            "Modern applications benefit from robust security measures, including automated updates, encrypted communication, and identity management services",
        },
        {
          icon: "/assets/OurServices/Application-Services/Application-Modernization/BenefitsofAppModernization/Scalibility.png",
          heading: "Scalability",
          description:
            "With cloud-native architectures, applications can automatically scale up or down based on traffic, ensuring optimal performance during peak times without over-provisioning resources",
        },
        {
          icon: "/assets/OurServices/Application-Services/Application-Modernization/BenefitsofAppModernization/third-pary.png",
          heading: "3rd Party Integration",
          description:
            "Modernized applications often use APIs, which makes it easier to integrate with 3rd party services, partners and suppliers",
        },
      ],
    },
    StepresTwo: {
      title: "",
      descr: "",
      box: "5",
      items: [],
    },
  };
  const LastSteperData = {
    StepresOne: {
      title: "Why JBS Consulting?",
      descr: "",
      box: "3",
      items: [
        {
          icon: "/assets/OurServices/Application-Services/Application-Modernization/WhyJBSConsulting/experince.png",
          heading: "Experience",
          description:
            "We have years of experience in modernizing applications across industries",
        },
        {
          icon: "/assets/OurServices/Application-Services/Application-Modernization/WhyJBSConsulting/Expertise.png",
          heading: "Expertise",
          description:
            "Profit from the experience of a group that is dedicated to your success and is aware of the unique problems you face",
        },
        {
          icon: "/assets/OurServices/Application-Services/Application-Modernization/WhyJBSConsulting/end-to-end.png",
          heading: "End-to-End Solutions",
          description:
            "We provide comprehensive services from assessment to ongoing support",
        },
        {
          icon: "/assets/OurServices/Application-Services/Application-Modernization/WhyJBSConsulting/user-centric.png",
          heading: "Customer-Centric Approach",
          description:
            "Our focus is on delivering value by aligning our solutions with your business objectives",
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
  const steps = [
    {
      stepNumber: 1,
      stepText: "Step",
      title: "Assessment",
      description:
        "Evaluate technical and functional health of legacy apps to identify modernization needs and opportunities.",
      color: "#069986", // Green
    },
    {
      stepNumber: 2,
      stepText: "Step",
      title: "Migration",
      description:
        "Move apps to cloud/hybrid environments using Lift-and-Shift or Replatforming for minimal changes or cloud optimization.",
      color: "#1E3A8A", // Blue
    },
    {
      stepNumber: 3,
      stepText: "Step",
      title: "Refactoring or Redesigning",
      description:
        "Refactor apps with modern frameworks like Spring Boot or .NET Core, breaking them into microservices.",
      color: "#069986", // Green
    },
    {
      stepNumber: 4,
      stepText: "Step",
      title: "Rehosting",
      description:
        "Rehost apps on cloud-native platforms like AKS or EKS for scalability and resilience.",
      color: "#1E3A8A", // Blue
    },
    {
      stepNumber: 5,
      stepText: "Step",
      title: "Monitoring and Management",
      description:
        "Use tools like New Relic or Azure Monitor to track performance and optimize modernized apps.",
      color: "#069986", // Green
    },
  ];

  return (
    <>
      {/* <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16"></div> */}

      <HeroSection
        backgroundImage="/assets/OurServices/Application-Services/Application-Modernization/Banner.jpg"
        heading="Application Modernization"
        isRounded={true}
      />
      <div>
        <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
          <IntroSection
            text={{
              title: "Application Modernization",
              left: 45,
              heading: "What is Application Modernization?",
              description:
                "Application modernization refers to transforming outdated legacy systems into modern, cloud-ready, and scalable applications. The aim is to improve an application&apos;s performance, security, and maintenance by adopting new technologies such as cloud computing, microservices and DevOps practices. Modernization also helps businesses optimize their IT infrastructure by reducing the technical debt associated with legacy applications, leading to quicker development cycles and enhanced user experience",
            }}
            imageSrc="/assets/OurServices/Application-Services/Application-Modernization/What-is-Application-Modernization.png"
            imageAlt="Cloud Security Services Image"
          />
          <CloudSecurityKeyThreats
            types={KeyThreats}
            sectionTitle="What does Modernization Mean?"
            sectionDescription=""
            height={420}
            headingHegihgt={55}
          />
          <ServicesSectionBox
          sectionTitle="Understanding App Modernization"
          sectionDescription=""
          services={services}
          headingHegihgt={35}
        />
        <CloudServicesStepres {...SteperData} />
        </div>

        

        

        <div className="my-16 md:my-24">
          <TextSectionBgGradiant
            title="Building an Application Modernization Strategy"
            description="Creating a well-planned application modernization strategy ensures that the journey is smooth, reduces risks, and brings long-term value to your business. Modernizing enterprise applications requires a clear, structured approach, often guided by frameworks like the SAP Lens from the AWS Well-Architected Framework. This framework outlines key pillars to help design systems that are scalable, secure, and high-performing."
          />
        </div>
<div className="text-center px-4"><h2 className="text-[#069986] text-3xl font-bold max-md:pb-10">App Modernization Steps</h2></div>
              {/* Steps Container */}
      <div className="relative flex flex-wrap md:flex-nowrap md:py-[340px] justify-between px-4">
        {steps.map((step, index) => (
          <div
            key={step.stepNumber}
            className="relative flex flex-col items-center text-center w-full md:w-1/6 mb-10 md:mb-0"
          >
            {/* Diagonal Line to Content */}
            <div
              className="absolute hidden md:block h-[2px] bg-teal-400 z-0"
              style={{
                width: "200px",
                top: index % 2 === 0 ? "calc(50% - 50px)" : "calc(50% + 50px)",
                left: "20%",
                transform: index % 2 === 0 ? "rotate(-90deg)" : "rotate(90deg)",
              }}
            ></div>

            {/* Horizontal Line to Connect Steps */}
            {index < steps.length - 1 && (
              <div
                className="absolute hidden md:block h-[2px] bg-teal-400 z-0"
                style={{
                  width: "310px",
                  top: "50%",
                  left: "100%",
                  transform: "translateX(-50%)",
                }}
              ></div>
            )}

            {/* Last Step Line */}
            {index === steps.length - 1 && (
              <div
                className="absolute hidden md:block h-[2px] bg-teal-400 z-0"
                style={{
                  width: "100px",
                  top: "50%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              ></div>
            )}

            {/* Mobile Content Layout */}
            <div className="flex flex-col items-center md:hidden">
              {/* Step Circle */}
              <div
                className="w-32 h-32 flex items-center justify-center rounded-full text-white text-lg font-bold shadow-lg z-10 mb-4"
                style={{
                  backgroundColor: step.color,
                }}
              >
                <div>
                  {step.stepNumber.toString().padStart(2, "0")}
                  <br />
                  {/* {step.stepText} */}
                </div>
              </div>

              {/* Connecting Line for Mobile */}
              <div
                className="h-16 w-[2px] bg-teal-400 mb-4"
                style={{
                  visibility: index === steps.length - 0 ? "hidden" : "visible",
                }}
              ></div>

              {/* Content */}
              <div className="w-full text-center p-4 bg-gray-100">
                <h4 className="text-teal-600 font-semibold text-lg">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm mt-2">{step.description}</p>
              </div>
            </div>

            {/* Desktop Content Above or Below */}
            <div
              className={`absolute hidden md:block ${
                index % 2 === 0
                  ? "top-[-240px] border-2 p-4 border-r-[#069986] border-b-[#069986] border-t-[#1e3a8a] border-l-[#1e3a8a]"
                  : "bottom-[-250px] p-5 border-r-[#1e3a8a] border-b-[#1e3a8a] border-2 border-t-[#069986] border-l-[#069986]"
              } w-48 text-center rounded  bg-gray-100`}
            >
              <h4 className="text-teal-600 font-semibold text-lg">
                {step.title}
              </h4>
              <p className="text-gray-600 text-sm mt-2">{step.description}</p>
            </div>

            {/* Step Circle (Desktop) */}
            <div
              className="hidden md:flex w-40 h-40 items-center justify-center rounded-full border-white border-[4px] text-white text-2xl font-bold shadow-lg z-10"
              style={{
                backgroundColor: step.color,
              }}
            >
              <div>
                {step.stepNumber.toString().padStart(2, "0")}
                <br />
                {/* {step.stepText} */}
              </div>
            </div>
          </div>
        ))}
      </div>

        <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">

          <ImageTextSectionAllPages
            text={{
              title: "",
              left: 40,
              heading: "",
              description: (
                <div className="2xl:max-w-[100%] md:w-[100%] max-md:px-5 max-md:py-6">
                  <h3 className="text-2xl font-semibold 2xl:text-3xl text-[#069986] mb-2">
                  App Modernization Strategies
                  </h3>
                  <p className="pb-4">Depending on your business need, there are multiple strategies that a client can utilize for application modernization:</p>
                  <ul className="space-y-2 ">
                    <li>
                      <strong className="text-lg font-medium">
                      Lift-and-Shift
                      </strong>
                      <p className="text-[14px] 2xl:text-[16px]">
                      This involves moving applications to the cloud. This is often the fastest and most cost-effective approach but offers limited flexibility for long-term optimization.
                      </p>
                    </li>
                    <li>
                      <strong className="text-lg font-medium">Re-platforming</strong>
                      <p className="text-[14px] 2xl:text-[16px]">
                      This entails modifying applications to take advantage of cloud infrastructure such as using cloud-native databases or managed services for backups.
                      </p>
                    </li>
                    <li>
                      <strong className="text-lg font-medium">
                      Refactoring
                      </strong>
                      <p className="text-[14px] 2xl:text-[16px]">
                      This requires modifying the codebase to adapt to new architectural patterns like microservices or cloud-native design.
                      </p>
                    </li>
                    <li>
                      <strong className="text-lg font-medium">Re-Architecting</strong>
                      <p className="text-[14px] 2xl:text-[16px]">
                      This refers to redesigning the entire application&apos;s architecture to fully embrace cloud-native technologies or event-driven architectures.
                      </p>
                    </li>
                    
                  </ul>
                </div>
              ),
            }}
            imageSrc="/assets/OurServices/Application-Services/Application-Modernization/App-Modernization-Steps.png"
            imageAlt="About Us"
            // reverse={true}
          />

          
        </div>
        <SectionBoxZigZagSlide
          types={SectionBoxZigZagSlideType}
          sectionTitle="Innovate with Cloud-Native Technologies"
          height={460}
          headingHegihgt={50}
        />

        <div className="py-10">
          <CloudServicesStepres {...LastSteperData} />
        </div>
      </div>
      <LastSectionApplicationServices />
    </>
  );
};
export default ApplicationModernization;
