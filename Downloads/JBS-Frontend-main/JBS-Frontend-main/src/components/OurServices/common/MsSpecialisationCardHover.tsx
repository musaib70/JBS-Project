"use client";
import React, { useState } from "react";
import Image from "next/image";

// Component for individual partner cards
interface PartnerCardProps {
  logo: string;
  title: string;
  description: string[];
}

const PartnerCard: React.FC<PartnerCardProps> = ({
  logo,
  title,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="hover:bg-gradient-to-b from-[#1da692] to-[#4355a1] min-h-[245px] flex flex-col items-start rounded-2xl border border-gray-300 bg-white py-6 shadow-md transition hover:shadow-lg relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered ? (
        <div className="flex flex-col space-y-8 w-full justify-center items-center h-full">
          <center className=" w-full">
            <Image src={logo} alt="Partner Logo" width={88} height={88} />
          </center>
          <h3 className="text-[16px] font-semibold text-gray-700 text-center">
            {title}
          </h3>
        </div>
      ) : (
        <div className="mt-2 px-6 text-[16px] text-white">
          {description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>
      )}
    </div>
  );
};

// Component for the partner section
interface PartnerSectionProps {
  title?: string;
  partners: {
    logo: string;
    title: string;
    description: string[];
  }[];
}
interface MsDataProps {
  title?: string;
  data?: {
    logo: string;
    title: string;
    description: string[];
  }[];
}

const PartnerSection: React.FC<PartnerSectionProps> = ({ partners, title }) => {
  return (
    <section className="pb-20 px-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-4xl font-semibold py-10">
          {title ?? "Microsoft Specialisations"}
        </h3>
        <div className="grid grid-cols-1 min-h-44 sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
const MSCardCardSection: React.FC<MsDataProps> = ({ data, title }) => {
  const partnersData = [
    {
      logo: "/assets/OurServices/icons/icon-10.png",
      title: "Analytics",
      description: [
        "Ability to plan and deliver tailored Microsoft analytics solutions using Azure Synapse Analytics, Azure Data Lake, Azure Data Factory, and Azure Databricks",
      ],
    },
    {
      logo: "/assets/OurServices/icons/icon-07.png",
      title: "Infra & Database Migration",
      description: [
        "Capabilities and expertise in migrating infrastructure & database workloads (including Linux VM's and open-source databases) to Azure",
      ],
    },
    {
      logo: "/assets/OurServices/icons/icon-06.png",
      title: "Azure Virtual Desktop",
      description: [
        "Ability to plan and deliver tailored Microsoft analytics solutions using Azure Synapse Analytics, Azure Data Lake, Azure Data Factory, and Azure Databricks",
      ],
    },
    {
      logo: "/assets/OurServices/icons/icon-08.png",
      title: "Threat Protection",
      description: [
        "Validated technical capabilities in deploying Microsoft Threat Protection, Microsoft Cloud App Security, or Azure Sentinel workloads",
      ],
    },
    {
      logo: "/assets/OurServices/icons/icon-09.png",
      title: "Identity and access management",
      description: [
        "Technical capabilities and proven experience in deploying Microsoft Identity workloads with Azure AD",
      ],
    },
  ];

  return (
    <div>
      <PartnerSection partners={data ? data : partnersData} title={title} />
    </div>
  );
};

export default MSCardCardSection;
