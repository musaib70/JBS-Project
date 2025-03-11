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

const StepsComponent: React.FC<StepsProps> = ({ steps, sectionTitle, sectionDescription }) => {
  return (
    <div className="bg-gray-100 py-20">
      {/* Section Title */}
      <div className="text-center mb-10 px-4">
        <h3 className="text-teal-500 font-bold uppercase text-sm tracking-wide">
          {sectionTitle}
        </h3>
        <h2 className="text-gray-800 text-3xl font-bold">{sectionDescription}</h2>
      </div>

      {/* Steps Container */}
      <div className="relative flex flex-col md:flex-row items-center md:justify-between px-4">
        {/* Connector Line for Desktop */}
        <div
          className="absolute hidden md:block h-[2px] bg-gradient-to-r from-[#1da692] to-[#4355a1]"
          style={{
            top: "128px", // Align with the center of the circles
            left: "0%", // Adjust based on container padding
            right: "0%", // Adjust based on container padding
            zIndex: 0, // Ensure it's below the circles
          }}
        ></div>

        {steps.map((step, index) => (
          <div
            key={step.stepNumber}
            className="relative flex flex-col items-center text-center space-y-4 md:space-y-6 flex-1"
          >
            {/* Step Circle */}
            <div
              className={`w-32 h-32 md:w-64 md:h-64 flex items-center justify-center rounded-full text-white text-lg md:text-2xl font-bold shadow-lg`}
              style={{
                backgroundColor: step.color,
                border: "4px solid white",
              }}
            >
              <div>
                {step.stepNumber.toString().padStart(2, "0")}
                <br />
                {step.stepText}
              </div>
            </div>

            {/* Step Content */}
            <div className="mt-4 md:mx-8">
              <h4 className="text-teal-600 font-semibold text-lg md:text-2xl">
                {step.title}
              </h4>
              <p className="text-gray-600 text-sm md:text-lg mt-2">{step.description}</p>
            </div>

            {/* Mobile Connector Line */}
            {index < steps.length - 1 && (
              <div
                className="block md:hidden w-[2px] bg-gradient-to-r from-[#1da692] to-[#4355a1]"
                style={{
                  height: "40px",
                  margin: "0 auto",
                }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsComponent;
