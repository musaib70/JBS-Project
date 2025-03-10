import HeroSection from "@/components/OurServices/common/HeroSection";
import IntroSection from "@/components/OurServices/common/IntroSection";
import CloudMigrationTypes from "@/components/OurServices/common/Types";
import LastSectionDataAndAi from "@/components/OurServices/common/LastSectionDataAndAi";

const AnalyticsAndAi = () => {
  const TypesofData = [
    {
      title: "Advisory Services",
      description:
        "Our experts provide guidance on how to leverage analytics and AI to meet business goals. We help design a roadmap for AI adoption and data integration, as well as use-case identification",
      image: "/assets/OurServices/Data-and-AI/Analyticals-and-AI/Advisory.jpg",
    },
    {
      title: "Platform Services ",
      description:
        "We build and deploy data platforms that support AI-driven advanced analytics, machine learning models and Gen-AI capabilities. We ensure your data is accessible and structured in a way that allows for rapid ingestion and processing, providing deeper insights",
      image: "/assets/OurServices/Data-and-AI/Analyticals-and-AI/Platform.jpg",
    },
    {
      title: "Solution Services",
      description:
        "Our solutions leverage AI to predict trends, solve complex business challenges and provide adaptable AI models that grow with real-time data and emulate human intelligence. Our services include building interactive dashboards and advanced business intelligence tools to automate processes and allow businesses to remain nimble ",
      image: "/assets/OurServices/Data-and-AI/Analyticals-and-AI/Solution.jpg",
    },
  ];

  return (
    <>
      <HeroSection
        backgroundImage="/assets/OurServices/Data-and-AI/Analyticals-and-AI/Banner.jpg"
        heading="Analytics and AI"
        isRounded={true}
      />
      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "Analytics and AI",
            left: 30,
            heading: "What is Analytics & AI, and Why it Matters?",
            description:
              "Analytics and AI services combine data analysis with AI technologies to transform large disparate datasets into targeted, actionable insights. These services allow businesses to make decisions that are grounded on AI-based recommendations and insights. Utilizing the transformative power of AI and analytics, companies can personalize customer experiences, and drive innovation",
            bulletPoints: [
              "Enhanced decision-making through data-driven insights.",
              "Improved operational efficiency using automation.",
              "Personalized customer experiences through AI.",
            ],
          }}
          imageSrc="/assets/OurServices/Data-and-AI/Analyticals-and-AI/What-is-Analytics-AI.png"
          imageAlt="Data Foundations Image"
        />

        <div className="container mx-auto">
          <CloudMigrationTypes
            types={TypesofData}
            sectionTitle="AI and Analytics Solutions for Actionable Results"
            height={510}
            headingHegihgt={35}
          />
        </div>
      </div>


      <LastSectionDataAndAi />
    </>
  );
};
export default AnalyticsAndAi;
