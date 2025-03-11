"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface StepresOneItem {
  icon: string;
  heading: string;
  description: string;
}

interface StepresTwoItem {
  icon: string;
  heading: string;
  description: string;
}

interface CloudServicesStepresProps {
  // minHeight?: boolean;
  StepresOne: {
    title: string;
    descr: string;
    box: string;
    items: StepresOneItem[];
    // minHeight?: boolean;
  };
  StepresTwo: {
    title: string;
    descr: string;
    box: string;
    items: StepresTwoItem[];
  };
}

const CloudServicesStepres: React.FC<CloudServicesStepresProps> = ({
  StepresOne,
  StepresTwo,
  // minHeight,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRefOne = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRefTwo = useRef<any>(null);

  return (
    <div className="container mx-auto px-4 mb-4">
      {/* Managed Services Section */}
      {StepresOne.items[0].icon && (
        <section className="my-10">
          <h3 className="text-3xl 2xl:text-4xl font-semibold text-center max-md:text-left px-4 text-[#069986] mb-2">
            {StepresOne.title}
          </h3>
          <h4 className="text-[18px] 2xl:text-[21px] text-center max-md:text-left px-4 text-gray-800 mb-8">
            {StepresOne.descr}
          </h4>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => {
              swiperRefOne.current = swiper;
            }}
          >
            {StepresOne.items.map((item, index) => (
              <SwiperSlide
                key={index}
                onMouseEnter={() => swiperRefOne.current?.autoplay.stop()}
                onMouseLeave={() => swiperRefOne.current?.autoplay.start()}
              >
                <div
                  className={`p-7 flex flex-col max-md:items-start h-64 border-0 bg-white shadow-lg`}
                >
                  <div className="flex justify-start">
                    <Image
                      src={item.icon}
                      alt="icon"
                      width={50}
                      height={40}
                      className="bg-[#069986] rounded-br-[10px] rounded-tl-[10px] w-[60px] 2xl:mr-4 mr-3"
                    />
                    <h4 className="text-[16px] 2xl:text-[19px] font-semibold flex items-center">
                      {item.heading}
                    </h4>
                  </div>
                  <p className="mt-[12px] 2xl:mt-3 text-[14px] 2xl:text-[15.5px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      {/* Cloud Migration Stages Section */}
      {StepresTwo.items?.some((item) => item.heading) && (
        <section className="my-16 paginate">
          <h3 className="text-3xl 2xl:text-4xl font-semibold text-center max-md:text-center px-4 text-[#069986] mb-8">
            {StepresTwo.title}
          </h3>
          <h4 className="text-[18px] 2xl:text-[21px] text-center text-[#000] mb-4">
            {StepresTwo.descr}
          </h4>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: {
                slidesPerView:
                  Number(StepresTwo.box) >= 4 ? 4 : Number(StepresTwo.box),
              },
            }}
            onSwiper={(swiper) => {
              swiperRefTwo.current = swiper;
            }}
          >
            {StepresTwo.items.map((item, index) => (
              <SwiperSlide
                key={index}
                onMouseEnter={() => swiperRefTwo.current?.autoplay.stop()}
                onMouseLeave={() => swiperRefTwo.current?.autoplay.start()}
              >
                <div className="p-4 flex flex-col justify-center items-center max-md:items-start min-h-[400px] h-auto px-4 border-0 bg-white shadow-xl">
                  <div className="flex flex-col items-center"><div >{item.icon && (
                    <Image src={item.icon} alt="icon" width={80} height={80} />
                  )}</div>  
                  <div className="flex flex-col justify-start items-center min-h-48">
                  <h4 className="text-[16px] 2xl:text-[21px] font-semibold text-center 2xl:mt-6 uppercase 2xl:mb-2">
                    {item.heading}
                  </h4>
                  <p className="text-[14px] 2xl:text-[15.5px] text-center max-md:text-center mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  </div></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}
    </div>
  );
};

export default CloudServicesStepres;
