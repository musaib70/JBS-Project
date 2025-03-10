import BoxWithTextOnly from "@/components/OurServices/common/BoxWithTextOnly";
import CloudTransformationStepres from "@/components/OurServices/common/CloudServicesStepres";
import HeroSection from "@/components/OurServices/common/HeroSection";
import IntroSection from "@/components/OurServices/common/IntroSection";
import LastSection from "@/components/OurServices/common/LastSection";
import ServicesSectionBox from "@/components/OurServices/common/ServicesSectionBox";
import TextSectionBgGradiant from "@/components/OurServices/common/TextSectionBgGradiant";
import CloudTransformationTypes from "@/components/OurServices/common/Types";

const CloudTransformation = () => {
  const TransformationTypes = [
    {
      title: "Cloud Migration ",
      description:
        "Moving applications and data from on-premise systems to cloud infrastructure.",
      image:
        "/assets/OurServices/Cloud-Services/Cloud-Transformation/cloud-migration.png",
    },
    {
      title: "Cloud Modernization",
      description:
        "Refactoring legacy systems to leverage cloud-native technologies for  improved efficiency.",
      image:
        "/assets/OurServices/Cloud-Services/Cloud-Transformation/Cloud-modernization.png",
    },
    {
      title: "Cloud-Native Development ",
      description:
        "Building new applications directly in the cloud to fully exploit its  capabilities, such as scalability, speed, and flexibility.",
      image:
        "/assets/OurServices/Cloud-Services/Cloud-Transformation/Cloud-native.png",
    },
    {
      title: "Cloud Operating Model and Transformation",
      description:
        "Redesigning your organizations operating model to  fully leverage cloud scalability and flexibility, incorporating governance, processes, and tools. ",
      image:
        "/assets/OurServices/Cloud-Services/Cloud-Transformation/cloud-operating.png",
    },
    {
      title: "Cloud Services and Accelerators",
      description:
        "Utilizing specialized cloud tools and accelerators, like DevOps  platforms and container management, to speed up the cloud journey. ",
      image:
        "/assets/OurServices/Cloud-Services/Cloud-Transformation/cloud-services-acceletor.png",
    },
  ];

  const BoxWithText = [
    {
      text: "of companies will be on the cloud by 2025 according to Gartner",
      heading: "90%",
    },
    {
      text: "of enterprises cite cloud adoption as critical to their digital transformation strategy.",
      heading: "85%",
    },
    {
      text: "reduces operational costs and speeds up time-to-market with cloud.",
      heading: "40%",
    },
  ];

  const LastSteperData = {
    StepresOne: {
      title: "Transforming Your Business for a Digital Future",
      descr: "",
      box: "3",
      items: [
        {
          icon: "/assets/OurServices/Cloud-Transformation/Transforming-Your-Business/End-to-end.png",
          heading: "End-to-End Cloud Migration",
          description:
            "We assess your existing infrastructure, identify opportunities for  migration, and execute your transition to cloud platforms like AWS, Azure, or Google Cloud. Our  goal is to minimize downtime and ensure a smooth, disruption-free migration. ",
        },
        {
          icon: "/assets/OurServices/Cloud-Transformation/Transforming-Your-Business/Legacy-System.png",
          heading: "Legacy System Modernization:",
          description:
            "JBS Consulting helps refactor or re-platform your legacy systems,  transforming them into cloud-native applications. By optimizing your current architecture, we  enable faster delivery of services and improved scalability. ",
        },
        {
          icon: "/assets/OurServices/Cloud-Transformation/Transforming-Your-Business/Loud-Native.png",
          heading: "Cloud-Native Development:",
          description:
            "Our experts can design and build cloud-native applications from  scratch, allowing you to fully leverage the speed, flexibility, and innovation opportunities that  cloud platforms provide.",
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

  const services = [
    {
      title: "Tailored Solutions for Your Business Needs",
      description:
        "We dont believe in one-size-fits-all and begin with a  detailed assessment of your business goals, ensuring every transformation step is aligned with  your long term objectives.",
      icon: "/assets/OurServices/Cloud-Transformation/Why-Choos-JBS/Business-Driven-Outcomes.png", // Pass icon name as a string
    },
    {
      title: " Proven Expertise in Cloud Technologies",
      description:
        "We have years of experience across diverse industries,  enabling us to bring vertical-specific technical knowledge and a proven track record in cloud  services. ",
      icon: "/assets/OurServices/Cloud-Transformation/Why-Choos-JBS/Proven-Expertise.png",
    },
    {
      title: "Business-Driven Outcomes",
      description:
        "Business-Driven Outcomes: We focus on delivering measurable business outcomes, from cost  savings and faster time-to-market to improved security and operational efficiency. ",
      icon: "/assets/OurServices/Cloud-Transformation/Why-Choos-JBS/Tailored-Solutions.png",
    },
  ];

  return (
    <>
      <HeroSection
        backgroundImage="/assets/OurServices/Cloud-Services/Cloud-Transformation/banner.png"
        heading="Cloud Transformation"
        isRounded={true}
      />

      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: " Cloud Transformation",
            left: 45,
            heading: "What is Cloud Transformation?",
            description:
              "Cloud transformation is the process of transitioning an organizations digital operations, infrastructure,  and services to the cloud to enhance business agility, reduce costs, and drive innovation. This journey  involves rethinking traditional IT systems and adopting cloud-native approaches to optimize  performance and scalability. ",
          }}
          imageSrc="/assets/OurServices/Cloud-Services/Cloud-Transformation/Cloud-Transformation.png"
          imageAlt="Cloud Migration Image"
        />
        <div className="container mx-auto">
          <CloudTransformationTypes
            types={TransformationTypes}
            sectionTitle="Types of Cloud Transformation"
            height={420}
            headingHegihgt={45}
          />
        </div>

        <BoxWithTextOnly
          title="Importance of Cloud Transformation"
          features={BoxWithText}
          columns={3}
        />

      </div>
      <TextSectionBgGradiant
        title="Accelerate Business Growth with JBS's Strategic Cloud Transformation"
        description="At JBS Consulting, we design our cloud transformation solutions to help your business reach its full  potential in today's digital-first world. We guide you through every step of your cloud journey, from  strategy formulation to full-scale implementation "
      />
<div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
      <CloudTransformationStepres {...LastSteperData} />

      <ServicesSectionBox
        sectionTitle="Why Choose JBS Consulting for Your Cloud Transformation? "
        sectionDescription=""
        services={services}
        headingHegihgt={55}
      /></div>

      <LastSection />
    </>
  );
};
export default CloudTransformation;
