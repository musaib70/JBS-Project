import CloudManagedTypes from "@/components/OurServices/common/Types";
import HeroSection from "@/components/OurServices/common/HeroSection";
import IntroSection from "@/components/OurServices/common/IntroSection";
import CloudServicesStepres from "@/components/OurServices/common/CloudServicesStepres";
import TextSectionBgGradiant from "@/components/OurServices/common/TextSectionBgGradiant";
import LastSectionDataAndAi from "@/components/OurServices/common/LastSectionDataAndAi";

const WorkplaceAi = () => {
  const ManagedTypes = [
    {
      title: "Increased Efficiency",
      description:
        "Automate routine tasks and enable teams to focus on client fulfilment",
      image: "/assets/OurServices/Data-and-AI/Workplace/Increased.jpg",
    },
    {
      title: "Collaboration",
      description:
        "Enhance your team's productivity by instant data sharing, insights, and smart suggestions during meetings",
      image: "/assets/OurServices/Data-and-AI/Workplace/Collabration.jpg",
    },
    {
      title: "Improved Decision-Making",
      description:
        "Provide actionable insights and recommendations based on realtime data",
      image: "/assets/OurServices/Data-and-AI/Workplace/Improved.jpg",
    },
    {
      title: "Optimized Workflows",
      description:
        "Streamline communication and task management, reducing bottlenecks",
      image: "/assets/OurServices/Data-and-AI/Workplace/Optimized.jpg",
    },
    {
      title: "Scalability",
      description:
        "As your business grows, AI tools easily adapt to increasing workloads and operational needs",
      image: "/assets/OurServices/Data-and-AI/Workplace/Scalibity.jpg",
    },
  ];

  const SteperData = {
    StepresOne: {
      title: "Workplace AI Advisory Services",
      descr: "",
      box: "",
      items: [
        {
          icon: "/assets/OurServices/Data-and-AI/Workplace/WorkplaceAIAdvisoryServices/Assesment.png",
          heading: "Assessment",
          description:
            "We conduct evaluation of the current workplace infrastructure, tools, and workflows to understand existing inefficiencies and opportunities for AI integration",
        },
        {
          icon: "/assets/OurServices/Data-and-AI/Workplace/WorkplaceAIAdvisoryServices/Custom AI-01.png",
          heading: "Custom AI Strategy Development",
          description:
            "We create a workplace AI roadmap that is aligned youre your business goals and is easily integratable within your tech stack",
        },
        {
          icon: "/assets/OurServices/Data-and-AI/Workplace/WorkplaceAIAdvisoryServices/Technology.png",
          heading: "Technology Selection",
          description:
            "We recommend the most suitable AI tools (e.g., Google Smart Assistants, Microsoft CoPilot, etc.) based on the organization’s needs, industry, and workflows",
        },
        {
          icon: "/assets/OurServices/Data-and-AI/Workplace/WorkplaceAIAdvisoryServices/Implementation.png",
          heading: "Implementation Support",
          description:
            "We partner with you through the technical and operational steps of implementing AI, ensuring maximum adoption",
        },
      ],
    },
    StepresTwo: {
      title: "",
      descr: "",
      box: "",
      items: [],
    },
  };




  return (
    <>
      <HeroSection
        backgroundImage="/assets/OurServices/Data-and-AI/Workplace/Banner.jpg"
        heading="Workplace AI"
        isRounded={true}
      />

      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "Workplace AI",
            left: 15,
            heading: "AI-Enhanced Workspaces: Revolutionizing Productivity",
            description:
              "As businesses evolve, workplace requirements also change. The advent of AI has become a gamechanger in bridging this gap and through solutions that drive productivity and collaboration. According to a McKinsey report, businesses implementing AI see up to a 40% increase in productivity. Solutions like Google’s Smart Assistants for Workspace effortlessly integrate with daily operations, automating repetitive tasks and offering targeted insights. It makes for more intelligent and faster decision making and ensures your business remains agile and ready to respond to changing needs",
          }}
          imageSrc="/assets/OurServices/Data-and-AI/Workplace/AI-Enhanced-Worksplace.png"
          imageAlt="Workplace AI"
        />

        <CloudManagedTypes
          types={ManagedTypes}
          sectionTitle="The Power of AI: 5 Key Benefits for Your Workspace"
          height={400}
          headingHegihgt={40}
        />
      </div>
      <TextSectionBgGradiant
        title="Business Transformation with Data and AI Solutions"
        description="JBS Consulting's Data & AI solutions provide clients with access to next-gen technologies such as AI driven analytics, machine learning and intelligent automation. Our focus remains creating value for the client by equipping them capabilities for real-time data processing, predictive modeling, and sustainable tech solutions – to increase their speed of innovation."
      />

      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <CloudServicesStepres {...SteperData} />
      </div>

      <div className="h-10"></div>

      <LastSectionDataAndAi />
    </>
  );
};
export default WorkplaceAi;
