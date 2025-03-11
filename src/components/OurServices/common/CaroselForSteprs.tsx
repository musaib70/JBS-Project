"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

interface Feature {
  icon: string; // Icon URL or name
  title: string;
  description: string;
  stat: string;
}

interface CaroselForSteprsProps {
  features: Feature[];
  title: string; // Title for the section
  height: number; // Dynamic height for the feature boxes
}

const CaroselForSteprs: React.FC<CaroselForSteprsProps> = ({ features, title, height }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 mt-4">
      {/* Section Title */}
      <h2 className="text-3xl 2xl:text-4xl font-bold text-center text-[#069986] mb-6">
        {title}
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={16}
        breakpoints={{
          640: { slidesPerView: 1 }, // 1 slide for small screens
          768: { slidesPerView: 2 }, // 2 slides for medium screens
          1024: { slidesPerView: 3 }, // 3 slides for tablets
          1280: { slidesPerView: 4 }, // 4 slides for large screens
        }}
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-white rounded-lg p-6 text-center my-1 "
              style={{ height: `${height}px` }} // Dynamic height applied here
            >
              {/* Icon */}
              <div className="text-[#069986] mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  className="mx-auto w-12 h-12"
                />
              </div>
              {/* Title */}
              <h3 className="text-3xl 2xl:text-4xl  font-semibold text-gray-800">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 text-[14px] 2xl:text-[17px]  mt-2">{feature.description}</p>
              {/* Stat */}
              <p className="mt-4 text-[12px] 2xl:text-[15px] italic text-[#069986]">{feature.stat}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CaroselForSteprs;
