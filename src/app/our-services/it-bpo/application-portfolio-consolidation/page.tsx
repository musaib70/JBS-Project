import HeroSection from "@/components/OurServices/common/HeroSection";
import CloudServicesStepres from "@/components/OurServices/common/CloudServicesStepres";
import IntroSection from "@/components/OurServices/common/IntroSection";
import LastSectionItBpo from "@/components/OurServices/common/LastSectionItBpo";
import StepsComponent from "@/components/OurServices/common/StepsProcessSection";

const ApplicationPortfolioConsolidation = () => {
  const SteperData = {
    StepresOne: {
      title: "Value We Deliver",
      descr: "",
      box: "",
      items: [
        {
          icon: "/assets/OurServices/IT-BPO/ApplicationPortfolioConsolidation/Cost.png",
          heading: "Cost Optimization",
          description:
            "Eliminate redundancies and reduce licensing and operational costs by retiring outdated applications",
        },
        {
          icon: "/assets/OurServices/IT-BPO/ApplicationPortfolioConsolidation/simplified.png",
          heading: "Simplified Operations",
          description:
            "Standardize technical architecture and consolidate processes to reduce complexity",
        },
        {
          icon: "/assets/OurServices/IT-BPO/ApplicationPortfolioConsolidation/Structure.png",
          heading: "Enhanced Application Architecture",
          description:
            "Streamline your IT environment by addressing functional redundancies",
        },
        {
          icon: "/assets/OurServices/IT-BPO/ApplicationPortfolioConsolidation/Agilty.png",
          heading: "Agility and Scalability",
          description:
            "Simplify the application landscape enabling quicker integration of new capabilities",
        },
        {
          icon: "/assets/OurServices/IT-BPO/ApplicationPortfolioConsolidation/Risk.png",
          heading: "Risk Mitigation",
          description:
            "Reduce security vulnerabilities and compliance risks through the rationalization of your application portfolio",
        },
        {
          icon: "/assets/OurServices/IT-BPO/ApplicationPortfolioConsolidation/Reusable.png",
          heading: "Reusable Design Patterns",
          description:
            "Establish repeatable frameworks that accelerate future application modernizations and integrations",
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

  const stepsData = [
    {
      stepNumber: 1,
      stepText: "Inform",
      title: "Initial Portfolio Review",
      description:
        "We begin by conducting an analysis of your application portfolio, focusing on identifying inefficiencies within your technology stack",
      color: "#069986", // Green
    },
    {
      stepNumber: 2,
      stepText: "Rationalize",
      title: "Online Assessments",
      description:
        "Showcase your expertise through assessments tailored to the position you're applying for.",
      color: "#1E3A8A", // Blue
    },
    {
      stepNumber: 3,
      stepText: "Modernize",
      title: "First Online Interview",
      description:
        "Participate in a virtual interview focused on your experience, skills, and potential fit within our culture.",
      color: "#069986", // Green
    },
  ];

  return (
    <>
      <HeroSection
        backgroundImage="/assets/OurServices/IT-BPO/ApplicationPortfolioConsolidation/Banner.jpg"
        heading="Application Portfolio Consolidation"
        isRounded={true}
      />

      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "Application Portfolio Consolidation",
            left: 40,
            heading: "Overcoming Complexity in the Digital Era",
            description:
              "As businesses embrace digital transformation, IT environments become increasingly complex, comprising a mix of commercial software, open-source tools, and custom-developed applications. This leads to wasted resources, increased costs, and heightened risks. JBS Consulting's Application Portfolio Consolidation Services are designed to address these challenges by rationalizing your application portfolio, minimizing technical debt, and ensuring a streamlined IT landscape",
          }}
          imageSrc="/assets/OurServices/IT-BPO/ApplicationPortfolioConsolidation/Overcoming-in-Digital-Era.png"
          imageAlt="Application Portfolio Consolidation"
        />
        <CloudServicesStepres {...SteperData} />
      </div>

      <StepsComponent steps={stepsData} sectionTitle="" sectionDescription="" />

      <LastSectionItBpo />
    </>
  );
};
export default ApplicationPortfolioConsolidation;
