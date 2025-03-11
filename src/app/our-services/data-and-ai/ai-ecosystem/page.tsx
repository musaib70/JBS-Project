import CloudServicesStepres from "@/components/OurServices/common/CloudServicesStepres";
import HeroSection from "@/components/OurServices/common/HeroSection";
import IntroSection from "@/components/OurServices/common/IntroSection";
import LastSection from "@/components/OurServices/common/LastSection";
import AllServicesSectionBoxSlide from "@/components/OurServices/common/ServicesSectionBoxSlide";
import CustomSlider from "@/components/OurServices/common/SliderWithImageAndText";

const IntelligenceFabric = () => {
  const SteperData = {
    StepresOne: {
      title: "Align Business and IT with AI-Driven Transformation",
      descr: "",
      box: "",
      items: [
        {
          icon: "/assets/OurServices/AI-Ecosystem/Align-Business-and-IT-with-AI-Driven-Transformation/optimize.png",
          heading: "Optimize Business and IT Synergy",
          description:
            "Streamline or map business and IT processes regarding data  application and management by analyzing best practices. Our approach allows for increased  organizational performance and observable output ",
        },
        {
          icon: "/assets/OurServices/AI-Ecosystem/Align-Business-and-IT-with-AI-Driven-Transformation/unified.png",
          heading: " Unified Enterprise IT Operations",
          description:
            "Implement a coherent system that promotes consistency in  the use of tools and operations throughout different platforms. Our solutions make  administration economical for it to deliver standard results whether applied on applications, in  digital platforms or in hybrid systems.",
        },
        {
          icon: "/assets/OurServices/AI-Ecosystem/Align-Business-and-IT-with-AI-Driven-Transformation/enhanced.png",
          heading: " Enhanced Visibility & Proactive Insights",
          description:
            "See your entire business and IT landscape clearly with  our detailed monitoring and AI-powered insights. Our data approach helps spot potential issues  early and ensures there are no outages.",
        },
        {
          icon: "/assets/OurServices/AI-Ecosystem/Align-Business-and-IT-with-AI-Driven-Transformation/Delight-Customer.png",
          heading: "Delight Customers",
          description:
            "Boost user experience with AI-powered virtual assistants and automation  that make IT support faster and personalized.",
        },
        {
          icon: "/assets/OurServices/AI-Ecosystem/Align-Business-and-IT-with-AI-Driven-Transformation/Smart-Automation.png",
          heading: " Smart Automation",
          description:
            "Stay ahead with smart automation by focusing on continuous improvement  and delivering real value, that can be measured and quantified.",
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

  const slides = [
    {
      title: "AI Strategy",
      description:
        "Outline the roadmap for aligning AI capabilities with business goals, ensuring data-driven and impactful outcomes.",
      description2:
        "Businesses with a comprehensive AI strategy can increase their likelihood  of success by",
      percentage: "30%",
      percentage2: "",
      attribution: "- McKinsey",
      image: "/assets/OurServices/Data-and-AI/AI-Ecosystem/AI-Strategy.jpg",
    },
    {
      title: "Data Management ",
      description:
        "Consolidate data from diverse sources into a centralized data lake, structuring it for analysis and insights",
      description2: "of global data is expected to be unstructured by 2025",
      percentage: "",
      percentage2: "80%",
      attribution: "- IDC",
      image: "/assets/OurServices/Data-and-AI/AI-Ecosystem/Data-Management.jpg",
    },

    {
      title: "Data Synthesis",
      description:
        "Augment datasets by combining existing data with new and relevant data points that add context and  meaning, enabling more accurate and adaptable AI model training ",
      description2:
        "Data synthesis - Organizations that invest in advanced data analytics boost their operational efficiency by",
      percentage: "20%",
      percentage2: "",
      attribution: "- Forrester",
      image: "/assets/OurServices/Data-and-AI/AI-Ecosystem/Data-Synthesis.jpg",
    },

    {
      title: "AI Design ",
      description:
        " Select optimal algorithms and infrastructure to align with specific business needs to come up with  customized AI models and workflows ",
      description2:
        "Companies that tailor their AI solutions to their industry faster return on investment  ",
      percentage: "25%",
      percentage2: "",
      attribution: "- Gartner",
      image: "/assets/OurServices/Data-and-AI/AI-Ecosystem/AI-Design.jpg",
    },
  ];
  const ServicesSectionBoxSlideType = [
    {
      title: "Business Alignment",
      description:
        "Our solutions ensure alignment of IT and AI strategies with your business  goals, bringing faster and more measurable outcomes within your business.",
      image: "/assets/OurServices/AI-Ecosystem/Why-CXOs/Business-Alignment.png", // Pass icon name as a string
    },
    {
      title: "Proven experience in AI implementation",
      description:
        "Experts in integrating AI into various IT-based complex  structures, we ensure smooth, low-risk transitions for your organization ",
      image:
        "/assets/OurServices/AI-Ecosystem/Why-CXOs/Proven-experience-in-AI-implementation.png",
    },
    {
      title: "Data Driven Decisions",
      description:
        "Using our advanced data insights and analytics puts you ahead of the  pack and empowers every level of your business with informed decision-making∙",
      image:
        "/assets/OurServices/AI-Ecosystem/Why-CXOs/Data-Driven-Decisions.png",
    },
    {
      title: "Scalable and Flexible Solutions",
      description:
        "JBS Consulting delivers scalable solutions that grow as your  business demands change, allowing you to stay one step ahead in a constantly shifting  landscape.",
      image:
        "/assets/OurServices/AI-Ecosystem/Why-CXOs/Scalable-and-Flexible-Solutions.png",
    },
    {
      title: "Measurable ROI on your AI investments",
      description:
        "What we do is deliver tangible value-true cost savings,  efficiency gains, and growth on your investments in AI.",
      image:
        "/assets/OurServices/AI-Ecosystem/Why-CXOs/Measurable-ROI-on-your-AI-investments.png",
    },
  ];
  return (
    <>
      <HeroSection
        backgroundImage="/assets/OurServices/Data-and-AI/AI-Ecosystem/Banner.jpg"
        heading="AI Ecosystem"
        isRounded={true}
      />

      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "AI Ecosystem",
            left: 10,
            heading: "Build a Resilient AI Ecosystem for Business Growth ",
            description:
              "An AI Ecosystem can be described as the blueprint of using AI technologies applied to business  processes aimed at enhancing sales and increasing operational efficiency. It provides the key structural  elements for any business that wants to utilize the power of AI to manage data, design statistical  models, and implement Generative-AI solutions. An effective AI ecosystem enables companies to  transition from data insights to actionable business-based outcomes.",
          }}
          imageSrc="/assets/OurServices/Data-and-AI/AI-Ecosystem/Build-a-Resilient-AI-Ecosystem.png"
          imageAlt="AI Ecosystem Image"
        />

        <div className="h-3"></div>
        <CloudServicesStepres {...SteperData} />
      </div>

      <CustomSlider
        slides={slides}
        sectionStyle="bg-gradient-to-b from-[#1da692] to-[#4355a1]  py-[80px]"
        textColor="text-white"
      />
      <div className="h-10"></div>

      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <AllServicesSectionBoxSlide
          types={ServicesSectionBoxSlideType}
          sectionTitle="Why CXOs Choose JBS for AI-Driven Synergy"
          height={300}
          headingHegihgt={50}
        />
      </div>
      <LastSection />
    </>
  );
};
export default IntelligenceFabric;
