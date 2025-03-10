import CloudManagedTypes from "@/components/OurServices/common/Types";
import HeroSection from "@/components/OurServices/common/HeroSection";
import IntroSection from "@/components/OurServices/common/IntroSection";
import CloudServicesStepres from "@/components/OurServices/common/CloudServicesStepres";
import LastSectionDigitalWorkplace from "@/components/OurServices/common/LastSectionDigitalWorkplace";
import Image from "next/image";
import PartnersCardSection from "@/components/OurServices/common/PartnersCard";
import MSCardCardSection from "@/components/OurServices/common/MsSpecialisationCardHover";

const DigitalWorkplaceEssentials = () => {
  const ManagedTypes = [
    {
      title: "Productivity and Efficiency",
      description:
        "Digital workplace solutions streamline workflows and automate repetitive tasks, allowing businesses to focus on high-impact initiatives, leading to improved productivity and efficiency",
      image:
        "/assets/OurServices/Digital-Workplace/Digital-Workplace-Essentials/Productivity.jpg",
    },
    {
      title: "Collaboration and Connectivity",
      description:
        "With demand for remote work increasing, a digital workplace enables collaboration through cloud-based tools. It enables teams to connect in real-time, irrespective of their location and fosters teamwork",
      image:
        "/assets/OurServices/Digital-Workplace/Digital-Workplace-Essentials/Collabration.jpg",
    },
    {
      title: "Flexibility and Work-Life Balance",
      description:
        "Digital workplaces allow associates to work from anywhere, providing flexibility to balance work and personal commitments. This flexibility boosts morale, satisfaction and employee retention",
      image:
        "/assets/OurServices/Digital-Workplace/Digital-Workplace-Essentials/flex-work-life.jpg",
    },
    {
      title: "Security and Compliance",
      description:
        "Digital workplace solutions ensure secure access and data protection helping organizations comply with regulatory requirements, reducing the risk of data breaches and safeguarding business continuity",
      image:
        "/assets/OurServices/Digital-Workplace/Digital-Workplace-Essentials/Security.jpg",
    },
  ];
  const SteperData = {
    StepresOne: {
      title: "Why Choose JBS Consulting Digital Workplace Essentials?",
      descr: "",
      box: "",
      items: [
        {
          icon: "/assets/OurServices/Digital-Workplace/Digital-Workplace-Essentials/WhyChoose/Proactive.png",
          heading: "Proactive Security Measures",
          description:
            "We implement advanced security protocols and continuous monitoring to protect your Microsoft 365 environment against cyber threats, ensuring data security and compliance to regulations",
        },
        {
          icon: "/assets/OurServices/Digital-Workplace/Digital-Workplace-Essentials/WhyChoose/Training.png",
          heading: "Tailored Training Programs",
          description:
            "Our customized training sessions equip your teams to make the most of Microsoft 365 tools, boosting productivity and fostering a culture of innovation",
        },
        {
          icon: "/assets/OurServices/Digital-Workplace/Digital-Workplace-Essentials/WhyChoose/Dedicated.png",
          heading: "Dedicated Localized Support",
          description:
            "Benefit from expert assistance tailored to your region, providing incident resolution and service support. Our team ensures seamless operations with a focus on meeting your business objectives",
        },
        {
          icon: "/assets/OurServices/Digital-Workplace/Digital-Workplace-Essentials/WhyChoose/Billing.png",
          heading: "Expert Licensing and Billing Solutions",
          description:
            "Our centralized platform offers insights into software usage and financials, supported by flexible billing options",
        },
        {
          icon: "/assets/OurServices/Digital-Workplace/Digital-Workplace-Essentials/WhyChoose/Comphrehensive.png",
          heading: "Comprehensive Microsoft Services Suite",
          description:
            "We offer a comprehensive suite of services, including cloud migration, license optimization, application modernization, AI integration, and managed cloud operations",
        },
      ],
    },
    StepresTwo: {
      title: "Simplifying Microsoft 365 Support Complexity",
      descr: "",
      box: "3",
      items: [
        {
          icon: "/assets/OurServices/Digital-Workplace/Digital-Workplace-Essentials/SimplifyingMicrosoft365SupportComplexity/channel.png",
          heading: "Direct Escalation Channels",
          description:
            "Direct access to Microsoft Premier Support channels to resolve complex issues quickly, reducing downtime and maintaining continuity.",
        },
        {
          icon: "/assets/OurServices/Digital-Workplace/Digital-Workplace-Essentials/SimplifyingMicrosoft365SupportComplexity/migration.png",
          heading: "Onboarding and Migration",
          description:
            "Easy transition to Microsoft 365 by handling onboarding and migration processes, ensuring minimal disruption and a seamless user experience",
        },
        {
          icon: "/assets/OurServices/Digital-Workplace/Digital-Workplace-Essentials/SimplifyingMicrosoft365SupportComplexity/Support.png",
          heading: "Customized Support Solutions",
          description:
            "Support services designed to adapt to your organization&apos;s specific needs, providing flexible options for optimal performance",
        },
      ],
    },
  };
  return (
    <>
      <HeroSection
        backgroundImage="/assets/OurServices/Digital-Workplace/Digital-Workplace-Essentials/Banner.jpg"
        heading="Digital Workplace Essentials"
        isRounded={true}
      />
      <div className="h-10"></div>

      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "Digital Workplace Essentials",
            left: 15,
            heading: "Digital Workplace Essentials for Microsoft 365",
            description:
              "With JBS Consulting's Digital Workplace Essentials, your organization can achieve a high-performance environment, where efficiency knows no bounds and collaboration is seamless, optimized for Microsoft 365",
          }}
          imageSrc="/assets/OurServices/Digital-Workplace/Digital-Workplace-Essentials/Digital-Workplace-Essentials.png"
          imageAlt="Digital Workplace Essentials"
        />
        <CloudManagedTypes
          types={ManagedTypes}
          sectionTitle="Unlocking the True Value of a Digital Workplace"
          height={445}
          headingHegihgt={40}
        />
        <CloudServicesStepres {...SteperData} />
        <div className="flex justify-center w-full">
          <Image
            src="/assets/OurServices/Digital-Workplace/Digital-Workplace-Essentials/processflow.png"
            alt="Process"
            className=""
            priority
            height={804}
            width={1430}
          />
        </div>
        <div className="md:hidden relative h-screen w-full">
          <Image
            src="/assets/OurServices/Digital-Workplace/Digital-Workplace-Essentials/processflow.png"
            alt="Process"
            className="w-full h-auto object-cover"
            layout="fill"
            priority
            //   height={804}
            //   width={1430}
          />
        </div>
        <div className="h-10"></div>
      </div>

      <PartnersCardSection />
      <MSCardCardSection />

      <LastSectionDigitalWorkplace />
    </>
  );
};
export default DigitalWorkplaceEssentials;
