import HeroSection from "@/components/OurServices/common/HeroSection";
import CloudServicesStepres from "@/components/OurServices/common/CloudServicesStepres";
import CloudSecurityKeyThreats from "@/components/OurServices/common/Types";
import IntroSection from "@/components/OurServices/common/IntroSection";
import LastSectionItBpo from "@/components/OurServices/common/LastSectionItBpo";
import SectionBoxZigZagSlide from "@/components/OurServices/common/ServicesGridBoxZigZag";

const OptimizingITOperations = () => {
  const SteperData = {
    StepresOne: {
      title: "Core Challenges of Process Optimization",
      descr: "",
      box: "",
      items: [
        {
          icon: "/assets/OurServices/IT-BPO/OptimizingITOperations/silos.png",
          heading: "Process Silos",
          description:
            "Fragmented processes across departments create bottlenecks, delaying workflows and reducing productivity",
        },
        {
          icon: "/assets/OurServices/IT-BPO/OptimizingITOperations/realtime.png",
          heading: "Lack of Real-Time Visibility",
          description:
            "Limited transparency into operations prevents organizations from identifying inefficiencies and optimizing performance",
        },
        {
          icon: "/assets/OurServices/IT-BPO/OptimizingITOperations/overlap.png",
          heading: "Technology Overlap",
          description:
            "Redundant systems increase operational costs and add operational complexity to IT environments",
        },
        {
          icon: "/assets/OurServices/IT-BPO/OptimizingITOperations/Resistance.png",
          heading: "Resistance to Change",
          description:
            "Without proper change management, associates often resist introduction of new technologies",
        },
        {
          icon: "/assets/OurServices/IT-BPO/OptimizingITOperations/sustainabilit.png",
          heading: "Sustainability",
          description:
            "Maintaining improvements over time can be challenging without continuous monitoring",
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

  const KeyThreats = [
    {
      title: "Process Mining",
      description:
        "Gain actionable insights into your workflows by uncovering inefficiencies and areas for improvement",
      image:
        "/assets/OurServices/IT-BPO/OptimizingITOperations/Process-Mining.jpg",
    },
    {
      title: "Advanced Analytics and Machine Learning",
      description:
        "Predict outcomes and enhance decision-making with data-driven insights powered by AI and ML",
      image:
        "/assets/OurServices/IT-BPO/OptimizingITOperations/advanced-analytics.jpg",
    },
    {
      title: "Process Automation",
      description:
        "Automate repetitive tasks to reduce manual errors and improve productivity",
      image:
        "/assets/OurServices/IT-BPO/OptimizingITOperations/Process-automation.jpg",
    },
    {
      title: "Business Process Reengineering",
      description:
        "Redesign existing workflows to get improvements in performance and efficiency",
      image:
        "/assets/OurServices/IT-BPO/OptimizingITOperations/business-process.jpg",
    },
    {
      title: "Change Enablement and Training",
      description:
        "Allow teams to embrace and adopt new workflows with structured training programs and change management strategies ",
      image: "/assets/OurServices/IT-BPO/OptimizingITOperations/change.jpg",
    },
  ];
  const SectionBoxZigZagSlideType = [
    {
      title: "Discover Opportunities",
      description:
        "Discover opportunities by conducting thorough process analyses aligned with your business strategy. Identify key performance metrics and inefficiencies that impact productivity while leveraging industry benchmarks and process mining techniques to uncover untapped potential.",
      image:
        "/assets/OurServices/Cloud-Managed-Service/Security-and-Governance-You-Can-Trust/Continuous Monitoring and Threat Detection.png", // Pass icon name as a string
    },
    {
      title: "Strategize Solutions",
      description:
        "Strategize solutions by prioritizing value opportunities based on their business impact and feasibility. Develop targeted action plans to address gaps and drive meaningful outcomes, while establishing mechanisms for tracking and evaluating progress effectively.",
      image:
        "/assets/OurServices/Cloud-Managed-Service/Security-and-Governance-You-Can-Trust/Data Encryption and Privacy Controls.png",
    },
    {
      title: "Implement Enhancements",
      description:
        "Implement enhancements by deploying optimized workflows using automation, AI, and advanced analytics. Train and enable teams to adapt to improved processes, and monitor operations closely to refine and ensure sustained performance gains.",
      image:
        "/assets/OurServices/Cloud-Managed-Service/Security-and-Governance-You-Can-Trust/Compliance with Industry Standards.png",
    },
    {
      title: "Sustain Growth",
      description:
        "Sustain growth by continuously evaluating process performance to identify new areas for improvement. Ensure long-term value realization through iterative refinement and strong governance practices.",
      image:
        "/assets/OurServices/Cloud-Managed-Service/Security-and-Governance-You-Can-Trust/Compliance with Industry Standards.png",
    },
  ];

  return (
    <>
      <HeroSection
        backgroundImage="/assets/OurServices/IT-BPO/OptimizingITOperations/Banner.jpg"
        heading="Optimizing IT Operations"
        isRounded={true}
      />

      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "Optimizing IT Operations",
            left: 40,
            heading: "Transforming Processes for Sustainable Growth",
            description:
              "JBS Consulting's IT Operations Optimization services are designed to align your operations with business objectives, and drive measurable results. We utilize advanced technologies like process mining, AI, and automation, we help organizations eliminate inefficiencies",
          }}
          imageSrc="/assets/OurServices/IT-BPO/OptimizingITOperations/Optimizing-IT-Operations.png"
          imageAlt="Optimizing IT Operations"
        />

        <CloudServicesStepres {...SteperData} />
        <div className="h-2"></div>
      </div>

      <SectionBoxZigZagSlide
        types={SectionBoxZigZagSlideType}
        sectionTitle="Why Choose JBS Consulting for Workplace Security?"
        height={350}
        headingHegihgt={50}
      />
      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <div className="h-10"></div>
        <CloudSecurityKeyThreats
          types={KeyThreats}
          sectionTitle="Key Solutions Driving IT Operations Optimization"
          sectionDescription=""
          height={420}
          headingHegihgt={55}
        />
      </div>
      <LastSectionItBpo />
    </>
  );
};

export default OptimizingITOperations;
