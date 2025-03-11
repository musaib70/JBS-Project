import CounterSection from "@/components/CounterSection";
import Hero from "@/components/Hero";
import OurBlog from "@/components/OurBlog";
import IntroSection from "@/components/OurServices/common/IntroSection";
import OurServicesTabs from "@/components/OurServicesTabs";
import OurTeamSection from "@/components/OurTeamSection";

export default function Home() {
  return (
    <div>
      <Hero />

      <div className="md:ml-[-40px] md:pr-[120px]">
      <IntroSection
            text={{
              title: "About Us",
              left: 10,
              heading: "About Us",
              description:
                "JBS Consulting combines decades of expertise with cutting-edge technology to deliver innovative solutions. We specialize in AI-driven strategies, cloud solutions, and end-to-end digital transformations. Trusted by global clients, we partner with industry leaders like SAP, Oracle, and Microsoft to empower businesses with seamless technology transitions and impactful results. At JBS Consulting, we deliver technology that works better.",
            }}
            imageSrc="/assets/HomePage-Aboutus.png"
            imageAlt="Cloud Security Services Image"
          />
          </div>
          <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <CounterSection />
        <OurServicesTabs />
        </div>
        <OurBlog />


        <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <OurTeamSection />
      </div>
      

    </div>
  );
}
