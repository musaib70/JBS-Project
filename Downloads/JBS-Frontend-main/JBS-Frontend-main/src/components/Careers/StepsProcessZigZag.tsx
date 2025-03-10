import React from "react";

type Step = {
  stepNumber: number;
  stepText: string;
  title: string;
  description: string;
  color: string; // Use color for step (e.g., "green" or "blue")
};

interface StepsProps {
  steps: Step[];
  sectionTitle?: string;
  sectionDescription?: string;
}

const StepsComponentZigZag: React.FC<StepsProps> = ({
  steps,
  sectionTitle,
  sectionDescription,
}) => {
  return (
    <div className="bg-gray-100 py-20 relative">
      {/* Section Title */}
      <div className="text-center mb-10 px-4">
        <h3 className="text-teal-500 font-bold uppercase text-sm tracking-wide">
          {sectionTitle}
        </h3>
        <h2 className="text-gray-800 text-3xl font-bold">
          {sectionDescription}
        </h2>
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
                  width: "250px",
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
                  {step.stepText}
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
                  ? "top-[-250px] border-r-2 border-b-2"
                  : "bottom-[-250px] border-l-2 border-t-2"
              } w-48 text-center border-teal-400 p-4 bg-gray-100`}
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
                {step.stepText}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsComponentZigZag;
