import CloudManagedTypes from "@/components/OurServices/common/Types";
import HeroSection from "@/components/OurServices/common/HeroSection";
import IntroSection from "@/components/OurServices/common/IntroSection";
import CloudServicesStepres from "@/components/OurServices/common/CloudServicesStepres";
import LastSectionDigitalWorkplace from "@/components/OurServices/common/LastSectionDigitalWorkplace";
import PartnersCardSection from "@/components/OurServices/common/PartnersCard";
import MSCardCardSection from "@/components/OurServices/common/MsSpecialisationCardHover";
import Image from "next/image";

const UnifiedCommunication = () => {
  const ManagedTypes = [
    {
      title: "Cost Savings",
      description:
        "Cloud-based UCaaS minimizes upfront and ongoing expenses related to maintenance, licensing, and infrastructure",
      image:
        "/assets/OurServices/Digital-Workplace/Unified-Communication/Cost-saving.jpg",
    },
    {
      title: "Scalability",
      description:
        "UCaaS scales as your team grows, simplifying onboarding and allowing you to add users without disruptions",
      image:
        "/assets/OurServices/Digital-Workplace/Unified-Communication/Scale.jpg",
    },
    {
      title: "Increased Productivity",
      description:
        "UCaaS provides a centralized platform that reduces the need for switching between apps, enhances project management, team collaboration and making work more efficient.",
      image:
        "/assets/OurServices/Digital-Workplace/Unified-Communication/Increased.jpg",
    },
    {
      title: "Mobility",
      description:
        "UCaaS empowers associates to work from virtually any location on any device with an internet connection",
      image:
        "/assets/OurServices/Digital-Workplace/Unified-Communication/mobility.jpg",
    },
  ];

  const SteperData = {
    StepresOne: {
      title: "Choosing the Right Unified Communications Provider",
      descr: "",
      box: "",
      items: [
        {
          icon: "/assets/OurServices/Cloud-Managed-Service/What-are-the-Benefits-of-Cloud-Managed-Services/Cost-efficiency.png",
          heading: "Customer Support",
          description:
            "Look for a provider that offers 24/7 support through live chat or phone, along with assistance during setup, migration, and ongoing onboarding",
        },
        {
          icon: "/assets/OurServices/Cloud-Managed-Service/What-are-the-Benefits-of-Cloud-Managed-Services/247-monitoring.png",
          heading: "Security",
          description:
            "With a mobile workforce, security is paramount. Verify that the UCaaS provider offers data encryption, threat detection, and access control features to protect sensitive information and maintain compliance",
        },
        {
          icon: "/assets/OurServices/Cloud-Managed-Service/What-are-the-Benefits-of-Cloud-Managed-Services/Scalability.png",
          heading: "Reliability and Uptime",
          description:
            "Select a UCaaS provider with a proven track record of uptime above 99%. Checking for any history of outages can help you assess reliability before committing",
        },
        {
          icon: "/assets/OurServices/Cloud-Managed-Service/What-are-the-Benefits-of-Cloud-Managed-Services/Cost-efficiency.png",
          heading: "Consistent User Experience",
          description:
            "A unified and user-friendly interface across devices is vital for ease of use and support. Consistent UX/UI design saves time, helps associates manage tools more efficiently, and simplifies IT troubleshooting",
        },
      ],
    },
    StepresTwo: {
      title: "",
      descr: "",
      box: "3",
      items: [],
    },
  };

  return (
    <>
      <HeroSection
        backgroundImage="/assets/OurServices/Digital-Workplace/Unified-Communication/Banner.jpg"
        heading="Unified Communication"
        isRounded={true}
      />
      <div className="h-10"></div>

      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "Unified Communication",
            left: 15,
            heading:
              "Unified Communications Services for the Digital Workplace",
            description:
              "Today's hybrid and remote work environments demand agile communication systems that go beyond traditional PBXs. JBS Consulting's Unified Communications Services bring voice, messaging, and collaboration tools into the cloud, enabling associates to connect with customers, no matter their location. Transitioning to cloud-based unified communications requires specialized expertise, and our experts provide the guidance and support needed to make this transformation a success",
          }}
          imageSrc="/assets/OurServices/Digital-Workplace/Unified-Communication/Unified-Communication.png"
          imageAlt="Unified Communication"
        />
        
        
      </div>

      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
      <div className="h-10"></div>
        <CloudManagedTypes
          types={ManagedTypes}
          sectionTitle="Benefits of UCaaS"
          height={440}
          headingHegihgt={40}
        />


        <CloudServicesStepres {...SteperData} />

        <div className="h-10"></div>
        <div className="flex justify-center w-full">
                  <Image
                    src="/assets/OurServices/Digital-Workplace/Unified-Communication/Unified-Communication-Sec.jpg"
                    alt="Process"
                    className=""
                    priority
                    height={521}
                    width={1430}
                  />
                </div>
                <div className="md:hidden relative h-screen w-full">
                  <Image
                    src="/assets/OurServices/Digital-Workplace/Unified-Communication/Unified-Communication-Sec.jpg"
                    alt="Process"
                    className="w-full h-auto object-cover"
                    layout="fill"
                    priority
                    //   height={804}
                    //   width={1430}
                  />
                </div>
      </div>

      <div className="h-10"></div>

      <PartnersCardSection />
      <MSCardCardSection />

      <LastSectionDigitalWorkplace />
    </>
  );
};
export default UnifiedCommunication;
