"use client";

interface HeroSectionProps {
  backgroundImage: string; // URL of the background image
  heading: string; // Text for the heading
  isRounded?: boolean; // Optional prop for rounded corners
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  heading,
  isRounded = false,
}) => {
  return (
    <section
      className={`relative w-full h-[400px] md:h-[500px] flex items-center justify-start bg-cover bg-center ${
        isRounded && "rounded-br-[90px]"
      }`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay for better text visibility */}
      <div
        className={`absolute inset-0 bg-blue-950/70 ${
          isRounded && "rounded-br-[90px]"
        }`}
      ></div>

      {/* Content */}
      <div className="relative z-10 text-white w-full px-6 md:px-16 lg:px-20">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          {heading}
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
