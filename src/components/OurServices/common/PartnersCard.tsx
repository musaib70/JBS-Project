import React from "react";
import Image from "next/image";

// Component for individual partner cards
interface PartnerCardProps {
  logo: string;
  title?: string;
  description: string[];
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  logo,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-start rounded-2xl border border-gray-300 bg-white p-6 shadow-md transition hover:shadow-lg">
      <Image src={logo} alt="Partner Logo" width={160}
          height={80} className="h-10 mb-4" />
          {title && <h3 className="text-lg font-semibold text-gray-700">{title}</h3>} {/* Conditionally render title */}
      {/* <h3 className="text-lg font-semibold text-gray-700"></h3> */}
      <div className="mt-2 text-[16] text-gray-900">
        {description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>
    </div>
  );
};

// Component for the partner section
interface PartnerSectionProps {
  partners: {
    logo: string;
    title?: string;
    description: string[];
  }[];
}

const PartnerSection: React.FC<PartnerSectionProps> = ({ partners }) => {
  return (
    <section className="py-5 px-10 bg-gray-100">
      
      <div className="container mx-auto px-4">
      <h3 className="text-center text-4xl font-semibold py-10">Microsoft Solutions Partner Designations</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <PartnerCard
              key={index}
              logo={partner.logo}
              title={partner.title}
              description={partner.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Main page component
const PartnersCardSection = () => {
  const partnersData = [
    {
      logo: "/assets/OurServices/microsoftPartners.png",
      title: "",
      description: ["Security", "Azure"],
    },
    {
      logo: "/assets/OurServices/microsoftPartners.png",
      title: "",
      description: ["Data & AI", "Azure"],
    },
    {
      logo: "/assets/OurServices/microsoftPartners.png",
      title: "",
      description: ["Digital & App Innovation", "Azure"],
    },
    {
      logo: "/assets/OurServices/microsoftPartners.png",
      title: "",
      description: ["Modern Workplace"],
    },
  ];

  return (
    <div>
      <PartnerSection partners={partnersData} />
    </div>
  );
};

export default PartnersCardSection;
