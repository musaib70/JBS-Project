import CloudManagedTypes from "@/components/OurServices/common/Types";
import HeroSection from "@/components/OurServices/common/HeroSection";
import IntroSection from "@/components/OurServices/common/IntroSection";
import LastSectionDigitalWorkplace from "@/components/OurServices/common/LastSectionDigitalWorkplace";
import ImageTextSectionAllPages from "@/components/OurServices/common/ImageTextSectionAllPages";
import PartnersCardSection from "@/components/OurServices/common/PartnersCard";
import MSCardCardSection from "@/components/OurServices/common/MsSpecialisationCardHover";

const SoftwareAssetCostOptimization = () => {
  const ManagedTypes = [
    {
      title: "Right-Sizing Licenses",
      description:
        "Analyze and align user subscription plans with current and projected needs to eliminate over-provisioning and maximize efficiency",
      image:
        "/assets/OurServices/Digital-Workplace/SoftwareAssetCostOptimization/right-sizing.jpg",
    },
    {
      title: "Reclaim Unused Licenses",
      description:
        "Identify and remove underutilized or duplicate licenses, ensuring you only pay for what your business actually needs",
      image:
        "/assets/OurServices/Digital-Workplace/SoftwareAssetCostOptimization/reclaim.jpg",
    },
    {
      title: "Dynamic Volume Flexibility",
      description:
        "Scale subscription volumes up or down as needed, giving you the flexibility to adapt quickly to changing business demands",
      image:
        "/assets/OurServices/Digital-Workplace/SoftwareAssetCostOptimization/dynamic.jpg",
    },
    {
      title: "Rate Optimization",
      description:
        "Unlock discounts by committing to longer subscription terms or adopting monthly flexible billing options for more efficient cost management",
      image:
        "/assets/OurServices/Digital-Workplace/SoftwareAssetCostOptimization/rate.jpg",
    },
    {
      title: "Technology Adoption Insights",
      description:
        "Pinpoint underutilized technologies within your ecosystem and create strategies to increase adoption and ROI on existing investments",
      image:
        "/assets/OurServices/Digital-Workplace/SoftwareAssetCostOptimization/technology-adoption.jpg",
    },
  ];

  return (
    <>
      <HeroSection
        backgroundImage="/assets/OurServices/Digital-Workplace/SoftwareAssetCostOptimization/banner.jpg"
        heading="Software Asset Cost Optimization"
        isRounded={true}
      />

      <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <IntroSection
          text={{
            title: "Software Asset Cost Optimization",
            left: 45,
            heading: "Simplify Cloud Spending, Enhance Efficiency",
            description:
              "Unplanned cloud adoption often leads to inefficiencies and overspending. JBS Consulting's Software Asset Cost Optimization services ensure that every dollar spent on cloud subscriptions and software licensing adds quantifiable value. By leveraging FinOps principles, we empower organizations to reduce costs, optimize resource allocation, and streamline licensing management for platforms like Microsoft 365",
          }}
          imageSrc="/assets/OurServices/Digital-Workplace/SoftwareAssetCostOptimization/Why-Choose-JBS.png"
          imageAlt="Software Asset Cost Optimization"
        />

        <CloudManagedTypes
          types={ManagedTypes}
          sectionTitle="Our Optimization Services"
          height={420}
          headingHegihgt={40}
        />
        

        <ImageTextSectionAllPages
          text={{
            title: "",
            left: 40,
            heading: "",
            description: (
              <div className="2xl:max-w-[100%] md:w-[100%] text-left">
                <h3 className="text-2xl font-semibold 2xl:text-3xl  text-[#069986] mb-4">
                  Why Choose JBS Consulting for Cost Optimization?
                </h3>
                <ul className="space-y-2">
                  <li>
                    <strong className="text-lg font-medium">
                      Proven Savings
                    </strong>
                    <p className="text-[14px] 2xl:text-[16px] pt-2">
                      Unlock up to 30% in annual cost savings through our
                      data-driven optimization approach
                    </p>
                  </li>
                  <li>
                    <strong className="text-lg font-medium">
                      FinOps Expertise
                    </strong>
                    <p className="text-[14px] 2xl:text-[16px] pt-2">
                      Work with our experts who specialize in balancing cost
                      efficiency with operational performance
                    </p>
                  </li>
                  <li>
                    <strong className="text-lg font-medium">
                      Continuous Monitoring
                    </strong>
                    <p className="text-[14px] 2xl:text-[16px] pt-2">
                      Our team provides ongoing analysis and recommendations to
                      adapt to pricing changes, usage trends, and business
                      requirements
                    </p>
                  </li>
                  <li>
                    <strong className="text-lg font-medium">
                      Customized Solutions
                    </strong>
                    <p className="text-[14px] 2xl:text-[16px] pt-2">
                      We tailor our services to align with your goals, ensuring
                      maximum impact with minimal disruption
                    </p>
                  </li>
                </ul>
              </div>
            ),
          }}
          imageSrc="/assets/OurServices/Digital-Workplace/SoftwareAssetCostOptimization/Simplify-Cloud.png"
          imageAlt="About Us"
          // reverse={true}
        />

        <div className="h-10"></div>
      </div>

      <PartnersCardSection />
      <MSCardCardSection />

      <LastSectionDigitalWorkplace />
    </>
  );
};
export default SoftwareAssetCostOptimization;
