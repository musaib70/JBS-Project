"use client";

interface HeroSectionProps {
  backgroundImage?: string; // URL of the background image (optional if using video)
  backgroundVideo?: string; // URL of the background video (optional if using image)
  heading: string; // Text for the heading
  isRounded?: boolean; // Optional prop for rounded corners
}

const HeroSectionVid: React.FC<HeroSectionProps> = ({
  backgroundImage,
  backgroundVideo,
  heading,
  isRounded = false,
}) => {
  return (
    <section
      className={`relative w-full h-[400px] md:h-[500px] flex items-center justify-start bg-cover bg-center overflow-hidden ${
        isRounded && "rounded-br-[90px]"
      }`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {/* Background Video */}
      {backgroundVideo && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      )}

      {/* Overlay for better text visibility */}
      <div
        className={`absolute inset-0 bg-blue-950/70 ${isRounded && "rounded-br-[90px]"}`}
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

export default HeroSectionVid;
