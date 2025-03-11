import HeroSectionVid from "@/components/OurServices/common/HeroSectionVid";
import IntroSection from "@/components/OurServices/common/IntroSection";
import LogoSlider from "@/components/OurServices/common/LogoSlider";
import LastSection from "@/components/OurServices/LastSection";
import TabsWithServices from "@/components/OurServices/TabsWithServices";

const partners = [
  "/assets/OurServices/vertitas.png",
  "/assets/OurServices/microsoft.png",
  "/assets/OurServices/oracle.png",
  "/assets/OurServices/sap.png",
   "/assets/OurServices/Barracuda.png",
  "/assets/OurServices/certiport.png",
];
const OurServices = () => {
  return (
    <>
      <HeroSectionVid
        backgroundVideo="/assets/OurServices/banner.mp4"
        heading="Our Services"
        isRounded={true}
      />
      <div className="px-4 md:px-4 lg:px-4 space-y-16 xl:px-8 2xl:px-16">
      <IntroSection
            text={{
              title: "Introduction to Our Services",
              left: 10,
              heading: "Introduction to Our Services",
              description:
                "We are dedicated to providing the best service for our customers. Our mission is to deliver top-notch solutions tailored to your needs. We pride ourselves on innovation, quality, and excellence. We are dedicated to providing the best service for our customers. Our mission is to deliver top-notch solutions tailored to your needs. We pride ourselves on innovation, quality, and excellence.",
            }}
            imageSrc="/assets/OurServices/OurServiceMain.png"
            imageAlt="Cloud Security Services Image"
          />
        
        <TabsWithServices />
        
        {/* Partners */}
      <section className="max-w-6xl mb-16 mx-auto">
        <LogoSlider
          logos={partners}
          slideInterval={4000}
          textColor="text-gray-900"
        />
      </section>
        <LastSection />
      </div>
    </>
  );
};
export default OurServices;
