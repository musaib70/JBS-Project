import HeroSection from "@/components/OurServices/common/HeroSection";
import CloudBenefitsChallenges from "@/components/OurServices/common/CloudBenefitsChallenges";
import CloudMigrationTypes from "@/components/OurServices/common/Types";
import CloudServicesStepres from "@/components/OurServices/common/CloudServicesStepres";
import IntroSection from "@/components/OurServices/common/IntroSection";
import LastSection from "@/components/OurServices/common/LastSection";
import ServicesSectionBox from "@/components/OurServices/common/ServicesSectionBox";
import CustomSlider from "@/components/OurServices/common/SliderWithImageAndText";

const CloudMigrationServices = () => {
  const migrationTypes = [
    {
      title: "Lift-and-Shift (Rehosting)",
      description:
        "Moving applications to the cloud with minimal changes. This is often the quickest method but doesn't take full advantage of cloud-native features.",
      image:
        "/assets/OurServices/Cloud-Services/Cloud-Migration/lift-and-shift.png",
    },
    {
      title: "Replatforming",
      description:
        "Adjusting applications to use cloud infrastructure more effectively without a complete overhaul.",
      image:
        "/assets/OurServices/Cloud-Services/Cloud-Migration/replatforming.png",
    },
    {
      title: "Refactoring",
      description:
        "Adjusting applications to use cloud infrastructure more effectively without a complete overhaul.",
      image:
        "/assets/OurServices/Cloud-Services/Cloud-Migration/refactoring.png",
    },
    {
      title: "Hybrid Migration",
      description:
        "Keeping some resources on-premises while moving others to the cloud, often used to maintain regulatory compliance.",
      image:
        "/assets/OurServices/Cloud-Services/Cloud-Migration/hybrid-migration.jpg",
    },
  ];

  const services = [
    {
      title: "Architecture Design",
      description: "Ensuring your cloud infrastructure is scalable and secure.",
      icon: "/assets/OurServices/Cloud-Migration-Service/End-to-End-Cloud-Migration-Services/Architecture-Design.png", // Pass icon name as a string
    },
    {
      title: "Security Best Practices",
      description:
        "Implementing top-tier security measures to protect your data.",
      icon: "/assets/OurServices/Cloud-Migration-Service/End-to-End-Cloud-Migration-Services/Security-Best-Practices.png",
    },
    {
      title: "Skill Transfer",
      description:
        "We equip your team by providing the necessary training to manage your cloud environment effectively.",
      icon: "/assets/OurServices/Cloud-Migration-Service/End-to-End-Cloud-Migration-Services/Skill Transfer.png",
    },
  ];
  const slides = [
    {
      title: "Why Migrate with Us?",
      description:
        "",
      description2:
        "Migrating to the cloud can be complex, but with our expertise, we can simplify the process by guiding you through the right migration strategy. Whether you need to move workloads quickly with a lift-and shift approach or take advantage of cloud-native technologies through refactoring, we help you make informed decisions.",
      percentage: "",
      percentage2: "",
      attribution: "",
      image: "/assets/OurServices/Cloud-Services/Cloud-Migration/Why-Migrate-with-Us.jpg",
    },
    {
      title: "Maximizing ROI with Cloud-Native Technologies",
      description:
        "",
      description2: "Our cloud experts focus on maximizing your return on investment (ROI) by optimizing software costs, leveraging hyperscaler incentives, and adopting cloud financial management practices. We help you rehost or replatform your applications, ensuring they perform at their best while reducing unnecessary overhead.",
      percentage: "",
      percentage2: "",
      attribution: "",
      image: "/assets/OurServices/Cloud-Services/Cloud-Migration/Maximizing-ROI.jpg",
    },
    {
      title: "Unlock Efficiency and Innovation with Expert-Led Migration",
      description:
        "",
      description2: "Cloud migration empowers businesses to optimize operations by embracing a scalable, flexible infrastructure. With our comprehensive, data-driven approach, we focus on understanding where you are in your cloud journey and developing a migration plan that fits your specific needs. Our goal is to guide you through each step, ensuring that your migration is smooth, secure, and designed to achieve measurable outcomes, while minimizing disruptions to your business.",
      percentage: "",
      percentage2: "",
      attribution: "",
      image: "/assets/OurServices/Cloud-Services/Cloud-Migration/Unlock-Efficiency.jpg",
    },
  ];

  const SteperData = {
    StepresOne: {
      title: "Managed Services Model",
      descr: "",
      box: "",
      items: [
        {
          icon: "/assets/OurServices/Cloud-Migration-Service/Managed-Services-Model/Infrastucture as services.png",
          heading: "IaaS (Infrastructure as a Service)",
          description:
            "Provides virtualized computing resources over the internet, allowing companies to scale as needed without investing in physical infrastructure.",
        },
        {
          icon: "/assets/OurServices/Cloud-Migration-Service/Managed-Services-Model/Platform as services.png",
          heading: "PaaS (Platform as a Service)",
          description:
            "Offers a platform to develop, run, and manage applications without the complexity of building and maintaining the underlying infrastructure.",
        },
        {
          icon: "/assets/OurServices/Cloud-Migration-Service/Managed-Services-Model/Software as services.png",
          heading: "SaaS (Software as a Service)",
          description:
            "Allows companies to use cloud-based software, hosted and maintained by the service provider, reducing maintenance and upfront infrastructure costs.",
        },
      ],
    },
    StepresTwo: {
      title: "Cloud Migration Stages",
      descr: "",
      box: "3",
      items: [
        {
          icon: "/assets/OurServices/Cloud-Migration-Service/Cloud-Migration-Stages/Assesment.png",
          heading: "Assessment",
          description:
            "Evaluate the current infrastructure to determine which assets to migrate.",
        },
        {
          icon: "/assets/OurServices/Cloud-Migration-Service/Cloud-Migration-Stages/Planning.png",
          heading: "Planning",
          description:
            "Define the strategy, timeline, and resources needed for migration.",
        },
        {
          icon: "/assets/OurServices/Cloud-Migration-Service/Cloud-Migration-Stages/Migration.png",
          heading: "Migration",
          description: "Move data, applications, and workloads to the cloud.",
        },
        {
          icon: "/assets/OurServices/Cloud-Migration-Service/Cloud-Migration-Stages/Optimization.png",
          heading: "Optimization",
          description:
            "Continuously monitor and improve the performance of migrated workloads.",
        },
      ],
    },
  };

  return (
    <>
      <HeroSection
        backgroundImage="/assets/OurServices/Cloud-Services/Cloud-Migration/Banner.jpg"
        heading="Cloud Migration Services"
        isRounded={true}
      />
      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "Cloud Migration",
            left: 0,
            heading: "What is Cloud Migration?",
            description:
              "Cloud migration is the process of moving a companys digital assets, applications, and data from on-premises infrastructure or one cloud environment to another. This transition can significantly improve a companys scalability, reduce its operational costs, and increase performance and security. Whether youre moving all your operations or just a subset of workloads, cloud migration opens up a plethora of possibilities for flexibility and growth.",
          }}
          imageSrc="/assets/OurServices/Cloud-Services/Cloud-Migration/JBS-what-is-What-is-Cloud-Migration.png"
          imageAlt="Cloud Migration Image"
        />

        <CloudMigrationTypes
          types={migrationTypes}
          sectionTitle="Types of Cloud Migration"
          height={420}
          headingHegihgt={40}
        />

        <CloudServicesStepres {...SteperData} />
        </div>
        <div className="mt-0">
      
      <CustomSlider
        slides={slides}
        sectionStyle="bg-gradient-to-b to-[#1da692] from-[#4355a1]  py-[80px]"
        textColor="text-white"
      />
      </div>
      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <div className="mt-20">

          <CloudBenefitsChallenges
            benefitsTitle="BENEFITS"
            benefitsList={[
              {
                title: "Cost Savings",
                description:
                  "Reduce infrastructure and maintenance costs by moving from physical data centers to scalable, pay-as-you-go cloud solutions",
              },
              {
                title: "Scalability",
                description:
                  "Automatically scale resources up or down based on demand, ensuring performance during peak times without wasting capacity during low usage periods",
              },
              {
                title: "Enhanced Security",
                description:
                  "Benefit from built-in, continuously updated security features like encryption and access controls offered by most cloud providers",
              },
              {
                title: "Performance Improvements",
                description:
                  "Cloud environments are optimized for high-speed data transfers and reduced latency, leading to faster application performance",
              },
              {
                title: "Business Continuity",
                description:
                  "Cloud platforms offer disaster recovery solutions, allowing quick data restoration and minimizing downtime in the event of disruptions",
              },
            ]}
            challengesTitle="CHALLENGES"
            challengesList={[
              {
                title: "Initial Migration Costs",
                description:
                  "Although cost-efficient long-term, upfront expenses for planning, training, and data transfer can be significant",
              },
              {
                title: "Downtime Risks",
                description:
                  "Migrating large workloads can cause temporary business interruptions, especially without a well-planned phased approach",
              },
              {
                title: "Security and Compliance",
                description:
                  "Ensuring sensitive data remains secure and compliant during migration can be complex, requiring stringent security measures",
              },
              {
                title: "Data Transfer Complexities",
                description:
                  "Transferring massive amounts of data, particularly from legacy systems, can result in data loss or corruption if not managed properly",
              },
              {
                title: "Vendor Lock-In",
                description:
                  "Switching cloud providers after migration can be difficult due to proprietary technologies and data compatibility issues",
              },
            ]}
            benefitsImage="/assets/OurServices/Cloud-Services/Cloud-Migration/benefits.jpg"
            challengesImage="/assets/OurServices/Cloud-Services/Cloud-Migration/challenges.jpg"
            rightSectionTitle="BENEFITS & CHALLENGES"
          />
        </div>
      

        <ServicesSectionBox
          sectionTitle="End-to-End Cloud Migration Services"
          sectionDescription=""
          services={services}
          headingHegihgt={20}
        />
      </div>

      <LastSection />
    </>
  );
};
export default CloudMigrationServices;
