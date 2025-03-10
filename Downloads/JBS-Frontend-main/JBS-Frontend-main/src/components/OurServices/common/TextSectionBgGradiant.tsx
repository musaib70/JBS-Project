"use client";

interface TextSectionBgGradiantProps {
  title: string;
  description: string;
}

const TextSectionBgGradiant: React.FC<TextSectionBgGradiantProps> = ({
  title,
  description,
}) => {
  return (
    <section className="bg-gradient-to-b from-[#1da692] to-[#4355a1] py-14 md:py-24 text-white">
      {/* Heading and Paragraph */}
      <div className="px-6 md:px-0 md:max-w-7xl mx-auto">
        <h3 className="text-3xl 2xl:text-4xl font-semibold text-center mb-6">
          {title}
        </h3>
        <p className="text-[14px] 2xl:text-[15px] leading-relaxed text-gray-100 text-center md:text-center">
          {description}
        </p>
      </div>
    </section>
  );
};

export default TextSectionBgGradiant;
