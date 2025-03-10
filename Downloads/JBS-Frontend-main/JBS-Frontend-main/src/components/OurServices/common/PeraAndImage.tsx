"use client";

import Image from "next/image";

interface PeraAndImageProps {
  heading: string; // Heading text
  text: string; // Paragraph text
  image: string; // URL of the image
  altText?: string; // Alt text for the image
}

const PeraAndImage: React.FC<PeraAndImageProps> = ({
  heading,
  text,
  image,
  altText = "Image",
}) => {
  return (
    <section className="w-full flex flex-wrap lg:flex-nowrap items-center mt-16 gap-10">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center md:p-0 p-4">
        <h3 className="text-3xl 2xl:text-4xl font-semibold text-[#069986] mb-6">
          {heading}
        </h3>
        <p className="text-[14px] 2xl:text-[16px] leading-relaxed text-gray-600 text-justify max-w-[90%]">
          {text}
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2">
        <Image
          src={image}
          alt={altText}
          width={600} // Adjust the width
          height={900} // Adjust the height
          className="w-full h-[300px] 2xl:h-[350px] rounded-br-[60px] object-cover"
        />
      </div>
    </section>
  );
};

export default PeraAndImage;
