import CloudServicesStepres from "@/components/OurServices/common/CloudServicesStepres";
import HeroSection from "@/components/OurServices/common/HeroSection";
import IntroSection from "@/components/OurServices/common/IntroSection";
import LastSection from "@/components/OurServices/common/LastSection";
import TextSectionBgGradiant from "@/components/OurServices/common/TextSectionBgGradiant";
import CloudMigrationTypes from "@/components/OurServices/common/Types";

const DataFoundations = () => {
  const TypesofData = [
    {
      title: "Advisory Services",
      description:
        "Advisory Services provide expert guidance to help an organization to define the right data strategy,  while ensuring data architecture is aligned with business goals. It includes assessment of your current  environment and recommendations to optimize the data foundation of an organization ",
      image: "/assets/OurServices/Data-and-AI/Data-Foundation/Advisory.jpg",
    },
    {
      title: "Platform Services ",
      description:
        "Platform Services focus on development of a robust data infrastructure. It involves design and  implementation of cloud data platforms, ensuring data is consolidated, accessible, and ready for  advanced analytics and Gen-AI use cases.",
      image: "/assets/OurServices/Data-and-AI/Data-Foundation/platform.jpg",
    },
    {
      title: "Solution Services",
      description:
        "Solution Services provide bespoke, end-to-end data solutions that solve specific business challenges. It  involves integrating the right tools and technologies to transform raw data into actionable insights.",
      image: "/assets/OurServices/Data-and-AI/Data-Foundation/Solution.jpg",
    },
  ];

  const SteperData = {
    StepresOne: {
      title: "",
      descr: "",
      box: "",
      items: [
        {
          icon: "/assets/OurServices/Data-Foundation/Organizational.png",
          heading: "Organizational Transformation ",
          description:
            "We enable businesses to be flexible and agile in an ever-changing world. We focused on fully leveraging enterprise-wide data, modernization of infrastructure and drive digital transformation, powered by the fusion of Data, AI and Gen AI. ",
        },
        {
          icon: "/assets/OurServices/Data-Foundation/data-and-AI-Sustainability.png",
          heading: "Data & AI for Sustainability ",
          description:
            "We help organizations align their sustainability goals. Through our Data & AI solutions, businesses can reduce their carbon footprints, optimizing their resources, and drive sustainable growth  through data and AI-driven insights ",
        },
        {
          icon: "/assets/OurServices/Data-Foundation/Data-and-AI.png",
          heading: "Data & AI Revolution",
          description:
            "JBS enables organizations to embrace the transformative power of data and AI by enhancing productivity, optimizing operations, and unlocking new opportunities. We deliver quantifiable business impact in the form of automation & operational efficiencies",
        },
        {
          icon: "/assets/OurServices/Data-Foundation/Generative-AI.png",
          heading: "Generative AI ",
          description:
            "Our Gen-AI solutions based on cutting-edge statistical models focused on innovation, automation and personalized customer interactions. We tailor our solutions to meet and solve your specific business need and advancements in Gen-AI",
        },
        {
          icon: "/assets/OurServices/Data-Foundation/Data-Powered-advantage.png",
          heading: "Data-Powered Advantage ",
          description:
            "JBS helps you unlock hidden value of your data through solutions focused on providing actionable  insights, streamlining decision-making, and creating a sustainable competitive edge.",
        },
      ],
    },
    StepresTwo: {
      title: "",
      descr: "",
      box: "",
      items: [
        {
          icon: "",
          heading: "",
          description: "",
        },
      ],
    },
  };

  return (
    <>
      <HeroSection
        backgroundImage="/assets/OurServices/Data-and-AI/Data-Foundation/Banner.jpg"
        heading="Data Foundations"
        isRounded={true}
      />
      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "Data Foundations",
            left: 30,
            heading: "Building Strong Foundations for Data-Driven Success",
            description:
              "Data Foundation services amalgamate and ensure efficient management of an organization's data to  make sure it's clean, secure, and primed for developing Gen-AI and advanced analytics solutions. It enables businesses to make well informed business decisions, streamline processes, and unlock data  insights.",
          }}
          imageSrc="/assets/OurServices/Data-and-AI/Data-Foundation/Building-Foundation.png"
          imageAlt="Data Foundations Image"
        />
        <div className="container mx-auto">
          <CloudMigrationTypes
            types={TypesofData}
            sectionTitle="Types of Data Foundation Services"
            height={500}
            headingHegihgt={35}
          />
        </div>
      </div>
      <TextSectionBgGradiant
        title="Business Transformation with Data and AI Solutions"
        description="JBS Consulting\'s Data & AI solutions provide clients with access to next-gen technologies such as AI driven analytics, machine learning and intelligent automation. Our focus remains creating value for the  client by equipping them capabilities for real-time data processing, predictive modeling, and sustainable  tech solutions – to increase their speed of innovation."
      />
      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16 py-10"><CloudServicesStepres {...SteperData} /></div>
      
      <LastSection />
    </>
  );
};
export default DataFoundations;
