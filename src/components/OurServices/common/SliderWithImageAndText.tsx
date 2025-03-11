"use client";
import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";

interface SlideData {
  title: string;
  description: string;
  description2: string;
  percentage: string;
  percentage2: string;
  attribution: string;
  image: string;
}

interface SliderProps {
  slides: SlideData[];
  sectionStyle: string;
  textColor: string;
}

const CustomSlider: React.FC<SliderProps> = ({
  slides,
  sectionStyle,
  textColor,
}) => {
  const splideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const splide = new Splide(splideRef.current!, {
      type: "slide",
      perMove: 1,
      perPage: 1,
      gap: "1rem",
      arrows: true,
      rewind: true,
      pagination: false,
    });

    splide.mount();

    return () => {
      splide.destroy();
    };
  }, [slides]);

  return (
    <div className={sectionStyle}>
      <div ref={splideRef} className="splide myslides">
        <div className="splide__track">
          <ul className="splide__list">
            {slides.map((slide, index) => (
              <li
                key={index}
                className="splide__slide flex items-center justify-center"
              >
                <div className="flex flex-col md:flex-row items-center md:px-4 lg:px-4 xl:px-8 2xl:px-16">
                  {/* Image */}
                  <div className="md:w-1/2 px-6 mb-4 md:mb-0">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-[497px] hidden md:block object-cover rounded-lg"
                      width={739}
                      height={497}
                    />
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-[200px] md:hidden object-cover rounded-lg"
                      width={739}
                      height={200}
                    />
                  </div>

                  {/* Text Content */}
                  <div className={`md:w-1/2 px-4 ml-5 text-left ${textColor}`}>
                    <h3 className="text-3xl 2xl:text-4xl font-semibold mb-4">
                      {slide.title}
                    </h3>
                    <p
                      className="text-[14px] 2xl:text-[17px] mb-4"
                      dangerouslySetInnerHTML={{ __html: slide.description }}
                    ></p>
                    <div className="border-gray-400 bg-gray-300 rounded-md p-4">
                      <p
                        className="text-[16px] 2xl:text-[20px] text-black"
                        dangerouslySetInnerHTML={{
                          __html: `${slide.percentage2} ${slide.description2} ${slide.percentage}`,
                        }}
                      ></p>

                      <p className="text-[16px] 2xl:text-[20px] font-light mt-2 text-black">
                         {slide.attribution}
                      </p>
                      <Image
                        src="/assets/OurServices/Data-and-AI/AI-Ecosystem/quote.png"
                        alt={slide.title}
                        className="absolute bottom-6 right-10 md:bottom-40 md:right-40 rounded-lg"
                        width={200}
                        height={158}
                      />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
