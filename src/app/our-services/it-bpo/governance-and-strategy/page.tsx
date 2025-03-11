import HeroSection from "@/components/OurServices/common/HeroSection";
import IntroSection from "@/components/OurServices/common/IntroSection";
import LastSectionItBpo from "@/components/OurServices/common/LastSectionItBpo";

const steps = [
  {
    stepNumber: 1,
    stepText: "Step",
    title: "Access",
    description:
      "Governance solutions ensure that only authorized individuals can access critical systems and data, reducing the risk of unauthorized activity.",
    color: "#069986", // Green
  },
  {
    stepNumber: 2,
    stepText: "Step",
    title: "Compliance",
    description:
      "Maintaining compliance with industry regulations and standards is simplified with a robust governance framework.",
    color: "#1E3A8A", // Blue
  },
  {
    stepNumber: 3,
    stepText: "Step",
    title: "Data Management",
    description:
      "Governance frameworks enable structured data handling, ensuring data is accurate, accessible, and actionable.",
    color: "#069986", // Green
  },
  {
    stepNumber: 4,
    stepText: "Step",
    title: "Data Protection",
    description:
      "Effective governance frameworks ensure robust protection of sensitive and business-critical information.",
    color: "#1E3A8A", // Blue
  },
  {
    stepNumber: 5,
    stepText: "Step",
    title: "Inventory Management",
    description:
      "Accurate and up-to-date inventory management enables better resource allocation and operational efficiency.",
    color: "#069986", // Green
  },
];

const GovernanceAndStrategy = () => {

  return (
    <>
      <HeroSection
        backgroundImage="/assets/OurServices/IT-BPO/Governance-and-Strategy/Banner.jpg"
        heading="Governance and Strategy"
        isRounded={true}
      />

      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "Governance and Strategy",
            left: 40,
            heading: "Enabling Secure, Compliant, and Efficient Operations",
            description:
              "Strong governance frameworks enable businesses to manage resources effectively, ensure compliance, and protect valuable data. By implementing proper governance strategies, businesses can improve decision-making, reduce risks, and build trust with stakeholders",
          }}
          imageSrc="/assets/OurServices/IT-BPO/Governance-and-Strategy/Governance-and-Strategy.png"
          imageAlt="Governance and Strategy"
        />
      </div>

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
                  ? "top-[-250px] border-2 p-4 border-r-[#069986] border-b-[#069986] border-t-[#1e3a8a] border-l-[#1e3a8a]"
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

      <LastSectionItBpo />
    </>
  );
};
export default GovernanceAndStrategy;
