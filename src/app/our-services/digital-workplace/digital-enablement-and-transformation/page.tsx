import CloudManagedTypes from "@/components/OurServices/common/Types";
import HeroSection from "@/components/OurServices/common/HeroSection";
import IntroSection from "@/components/OurServices/common/IntroSection";
import CloudServicesStepres from "@/components/OurServices/common/CloudServicesStepres";
import LastSectionDigitalWorkplace from "@/components/OurServices/common/LastSectionDigitalWorkplace";
import ImageTextSectionAllPages from "@/components/OurServices/common/ImageTextSectionAllPages";
import PartnersCardSection from "@/components/OurServices/common/PartnersCard";
import MSCardCardSection from "@/components/OurServices/common/MsSpecialisationCardHover";

const DigitalEnablementAndTransformation = () => {
  const ManagedTypes = [
    {
      title: "Digital Adoption Assessment",
      description:
        "We start with understanding your current digital adoption landscape through interviews, surveys, and workshops. We assess your organization across three key dimensions: workforce capabilities, existing technologies, and adoption readiness. This process provides key insights and a practical roadmap to accelerate adoption",
      image:
        "/assets/OurServices/Digital-Workplace/DigitalEnablementAndTransformation/Digital-assesment.jpg",
    },
    {
      title: "User Experience (UX) Optimization",
      description:
        "Our UX specialists evaluate the usability and accessibility of your digital solutions and identify areas to enhance user satisfaction and productivity",
      image:
        "/assets/OurServices/Digital-Workplace/DigitalEnablementAndTransformation/user-experieince.jpg",
    },
    {
      title: "Digital Dexterity Enhancement",
      description:
        "Our Digital Dexterity Scan measures associate's readiness and ability to adopt new technologies. This analysis identifies barriers and provides strategies to improve digital skills and drive better business results",
      image:
        "/assets/OurServices/Digital-Workplace/DigitalEnablementAndTransformation/digital-dex.jpg",
    },
  ];

  const SteperData = {
    StepresOne: {
      title: "Benefits of Digital Workplace Adoption Workshops",
      descr: "",
      box: "",
      items: [
        {
          icon: "/assets/OurServices/Digital-Workplace/DigitalEnablementAndTransformation/faster-techno.png",
          heading: "Faster Technology Adoption",
          description:
            "Accelerate the use of new tools and solutions, ensuring quicker ROI on your technology investments",
        },
        {
          icon: "/assets/OurServices/Digital-Workplace/DigitalEnablementAndTransformation/improved-employe.png",
          heading: "Improved Employee Engagement",
          description:
            "Foster a positive culture around change, boosting employee satisfaction and efficiency",
        },
        {
          icon: "/assets/OurServices/Digital-Workplace/DigitalEnablementAndTransformation/enhance-business.png",
          heading: "Enhanced Business Continuity",
          description:
            "Minimize disruptions during transitions with well-executed adoption plans",
        },
        {
          icon: "/assets/OurServices/Digital-Workplace/DigitalEnablementAndTransformation/Insight.png",
          heading: "Data-Driven Insights",
          description:
            "Leverage analytics to measure adoption success and refine strategies for continuous improvement",
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
        backgroundImage="/assets/OurServices/Digital-Workplace/DigitalEnablementAndTransformation/Banner.jpg"
        heading="Digital Enablement and Transformation"
        isRounded={true}
      />
      
      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "Digital Enablement and Transformation",
            left: 45,
            heading: "Empowering People, Driving Transformation",
            description:
              "JBS Consulting's Digital Workplace Adoption Workshops are designed to ensure your associates embrace change with confidence. We focus on accelerating the functional use of technology, improving workflows, and fostering a culture of innovation. Our tailored workshops equip associates to adopt new tools effectively without compromising on productivity",
          }}
          imageSrc="/assets/OurServices/Digital-Workplace/DigitalEnablementAndTransformation/Digital-Enablement-and-Transformation.png"
          imageAlt="Digital Enablement and Transformation"
        />
        <div className="container mx-auto">
          <CloudManagedTypes
            types={ManagedTypes}
            sectionTitle="Our Digital Workplace Adoption Services"
            height={520}
            headingHegihgt={40}
          />
        </div>


        <ImageTextSectionAllPages
          text={{
            title: "",
            left: 40,
            heading: "",
            description: (
              <div className="2xl:max-w-[100%] md:w-[100%] text-left">
                <h3 className="text-2xl font-semibold 2xl:text-3xl  text-[#069986] mb-4">
                  Why Choose JBS Consulting for Digital Workplace Adoption?
                </h3>
                <ul className="space-y-2">
                  <li>
                    <strong className="text-lg font-medium">
                      User-Centric Approach
                    </strong>
                    <p className="text-[14px] 2xl:text-[16px] pt-2">
                      We focus on the employee experience, ensuring that
                      adoption strategies align with user needs and preferences
                    </p>
                  </li>
                  <li>
                    <strong className="text-lg font-medium">
                      Proven Methodologies
                    </strong>
                    <p className="text-[14px] 2xl:text-[16px] pt-2">
                      Our structured process combines workshops, surveys, and
                      data-driven tactics to deliver measurable outcomes
                    </p>
                  </li>
                  <li>
                    <strong className="text-lg font-medium">
                      Customized Solutions
                    </strong>
                    <p className="text-[14px] 2xl:text-[16px] pt-2">
                      We tailor our services to meet your specific challenges
                      and objectives.
                    </p>
                  </li>
                  <li>
                    <strong className="text-lg font-medium">
                      Seamless Integration
                    </strong>
                    <p className="text-[14px] 2xl:text-[16px] pt-2">
                      Our team ensures that adoption programs integrate smoothly
                      into your business processes without disrupting business
                      operations
                    </p>
                  </li>
                </ul>
              </div>
            ),
          }}
          imageSrc="/assets/OurServices/Digital-Workplace/DigitalEnablementAndTransformation/Why-Choose-JBS-Consulting-for-Digital-Workplace-Adoption.png"
          imageAlt="About Us"
          // reverse={true}
        />

        

        <CloudServicesStepres {...SteperData} />

        <div className="h-10"></div>
      </div>

      <PartnersCardSection />
      <MSCardCardSection />

      <LastSectionDigitalWorkplace />
    </>
  );
};
export default DigitalEnablementAndTransformation;
