"use client";

import Image from "next/image";

interface ImageTextWithOrderProps {
  title: string;
  description: string;
  bulletPoints?: string[]; // New bulletPoints prop
  imageSrc: string;
  imageAlt: string;
  reverseOrder?: boolean;
}

const ImageTextWithOrder: React.FC<ImageTextWithOrderProps> = ({
  title,
  description,
  bulletPoints = [], // Default to an empty array
  imageSrc,
  imageAlt,
  reverseOrder = false,
}) => {
  return (
    <section className="w-full flex flex-wrap lg:flex-nowrap items-center mt-16 gap-16">
      {/* Conditional ordering based on reverseOrder prop */}
      {reverseOrder ? (
        <>
          {/* Right Section */}
          <div className="w-full lg:w-1/2">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={900}
              className="w-full h-[320px] 2xl:h-[390px] rounded-br-[60px] object-fill"
            />
          </div>

          {/* Left Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center md:p-0 p-4">
            <h3 className="text-3xl 2xl:text-4xl font-semibold text-[#069986] mb-6">
              {title}
            </h3>
            <p className="text-[14px] 2xl:text-[15px] leading-relaxed text-justify">
              {description}
            </p>
            {bulletPoints.length > 0 && (
              <ul className="list-disc list-inside mt-4 text-[14px] 2xl:text-[17px] space-y-2">
                {bulletPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        </>
      ) : (
        <>
          {/* Left Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center md:p-0 p-4">
            <h3 className="text-3xl 2xl:text-4xl max-w-lg font-semibold text-[#069986] mb-6">
              {title}
            </h3>
            <p className="text-[14px] 2xl:text-[15px] leading-relaxed text-justify">
              {description}
            </p>
            {bulletPoints.length > 0 && (
              <ul className="list-disc list-inside mt-4 text-[14px] 2xl:text-[17px] space-y-2">
                {bulletPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={900}
              className="w-full h-[320px] 2xl:h-[390px] rounded-br-[60px] object-fill rotate-180"
            />
          </div>
        </>
      )}
    </section>
  );
};

export default ImageTextWithOrder;
