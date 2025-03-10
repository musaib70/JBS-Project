"use client";
import React from "react";

interface CloudFeature {
  text: string;
  heading: string;
}

interface BoxWithTextOnlyProps {
  title: string;
  
  features: CloudFeature[];
  columns: number; // Number of columns in a row
}

const BoxWithTextOnly: React.FC<BoxWithTextOnlyProps> = ({
  title,
  features,
  columns,
}) => {
  // Dynamically set grid columns based on the `columns` prop
  const gridColsClass = `grid grid-cols-1 sm:grid-cols-${Math.min(
    columns,
    2
  )} md:grid-cols-${Math.min(columns, 3)} lg:grid-cols-${columns} gap-6`;

  return (
    <div className="container mx-auto px-4 pb-10">
      {/* Title */}
      <h2 className="text-3xl 2xl:text-4xl font-bold text-center text-[#069986] mb-6">
        {title}
      </h2>

      {/* Grid */}
      <div className={gridColsClass}>
        {features.map((feature, index) => (
          <div key={index} className="text-center border hover:border-[#069986] bg-white rounded-lg p-4 ">
            <h3></h3>
            <p className="text-gray-600 text-[14px] 2xl:text-[17px] text-justify">
             <span className="text-[32px] font-semibold text-[#069986]">{feature.heading}</span> {feature.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxWithTextOnly;
