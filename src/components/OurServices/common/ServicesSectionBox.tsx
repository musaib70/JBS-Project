// import { FC } from "react";
// import { StarIcon } from "@heroicons/react/24/solid"; // Import Heroicon
// import { SVGProps } from "react"; // Import types for SVG props

import Image from "next/image";

interface ServiceBoxProps {
  title: string;
  description: string;
  icon: string; // Pass the icon name as a string
}

interface ServicesSectionBoxProps {
  sectionTitle: string;
  sectionDescription: string;
  headingHegihgt: number;
  services: ServiceBoxProps[];
}

// Map icon name to Heroicon components
// const iconMap: Record<string, FC<SVGProps<SVGSVGElement>>> = {
//   star: StarIcon,

// };

const ServicesSectionBox: React.FC<ServicesSectionBoxProps> = ({
  sectionTitle,
  sectionDescription,
  headingHegihgt,
  services,
}) => {
  {
    console.log(headingHegihgt);
  }
  return (
    <section className="my-24">
      {/* Section Heading and Description */}
      <div className="text-center  mb-6">
        <h3 className="text-3xl 2xl:text-4xl font-semibold text-center max-md:text-left px-6 text-[#069986] mb-2">
          {sectionTitle}
        </h3>
        <p className="text-[14px] 2xl:text-[18px] leading-relaxed max-md:text-left px-4 mt-2 text-gray-600">
          {sectionDescription}
        </p>
      </div>
      {/* Service Boxes */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center">
        {services.map((service, index) => {
          return (
            <div key={index} className="w-full flex justify-center">
              <div
                className={`p-8 bg-white shadow-lg rounded-2xl border-b-[6px] transition-all ${
                  index >= 0
                    ? "border-[#069986] hover:shadow-xl hover:border-transparent"
                    : "border-[#ccc] hover:shadow-lg"
                }`}
              >
                {/* Icon */}
                <div className="mb-4 flex items-start">
                  <div className="flex-shrink-0 size-16 bg-[#069986] rounded-br-xl rounded-tl-xl flex justify-center items-center">
                    <Image
                      src={service.icon}
                      alt="Icon"
                      width={75}
                      height={75}
                      className="rounded-full"
                    />
                  </div>
                </div>

                {/* Title */}
                <h4
                  className={`text-[16px] 2xl:text-[20px] flex items-center  font-semibold ${
                    index >= 0 ? "text-gray-800" : "text-[#4355a1]"
                  }`}
                  style={{ minHeight: `${headingHegihgt}px` }}
                >
                  {service.title}
                </h4>

                {/* Description */}
                <p
                  className={`2xl:mt-5 text-[14px] 2xl:text-[15px] leading-relaxed mt-2 ${
                    index >= 0 ? "text-[#333]" : "text-[#555555]"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSectionBox;
