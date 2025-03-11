"use client";
import { useEffect } from "react";
import Splide from "@splidejs/splide";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  useEffect(() => {
    new Splide(".splide", {
      type: "loop",
      autoplay: true,
      interval: 5000,
      pagination: true,
      arrows: false,
      perPage: 1,
    }).mount();
  }, []);

  const banners = [
    {
      heading: "Empowering Your Digital Transformation",
      subheading: "Cloud First. AI First. Digital First.",
      cta: "Explore Our Services",
      image: "/assets/JBS_0J.png",
    },
    {
      heading: "Proud Winner of the Microsoft Partner of the Year Award",
      subheading: "Recognized for Secure Productivity Excellence 2024",
      cta: "Discover Our Microsoft Expertise",
      image: "/assets/Ban4.gif",
    },
    {
      heading: "Expanding Horizons",
      subheading:
        "Now in Riyadh – Your Partner for Innovation in the GCC Region",
      cta: "Learn More",
      image: "/assets/Ban3.gif",
    },
  ];

  return (
    <section
      className="splide relative w-full md:h-[88vh] h-[400px]"
      style={{  }}
      role="region"
      aria-label="Hero Banners"
    >
      <div className="splide__track h-full">
        <ul className="splide__list h-full">
          {banners.map((banner, idx) => (
            <li
            key={idx}
            className="splide__slide relative h-full rounded-br-[100px]"
            style={{
              backgroundImage: `url(${banner.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >

            {/* Overlay Image */}
            <Image
              src={`/assets/overlay${(idx % 3) + 1}.png`} // Dynamically select overlay images
              alt={`Overlay for ${banner.heading}`}
              width="1920"
              height="850"
              className="absolute hidden md:block inset-0 w-full md:h-full max-md:left-44 max-md:top-[30%] object-cover max-md:scale-[200%]  pointer-events-none z-10"
            />
            <Image
              src={`/assets/overlayM${(idx % 3) + 1}.png`} // Dynamically select overlay images
              alt={`Overlay for ${banner.heading}`}
              width="768"
              height="800"
              className="absolute block md:hidden inset-0 pointer-events-none z-10"
            />
          
            {/* Slide Content */}
            <div className="flex items-center h-full w-full px-6 max-md:pt-20 md:px-12 lg:px-16 relative z-20">
              <div className="text-left text-white max-w-xl md:max-w-2xl">
                <h1 className="text-2xl [text-shadow:_0_0px_10px_rgb(0_0_0_/_20%)] max-md:text-[20px] lg:text-5xl font-bold leading-tight">
                  {banner.heading}
                </h1>
                <p className="text-sm [text-shadow:_0_0px_10px_rgb(0_0_0_/_20%)] sm:text-lg lg:text-xl font-medium mt-4">
                  {banner.subheading}
                </p>
                <a
                  href="/our-services"
                  className="mt-6 inline-block bg-gradient-to-r from-[#1da692] to-[#4355a1] text-white px-5 py-3 rounded-tl-2xl rounded-br-2xl shadow-lg text-sm max-md:text-[14px] max-md:font-normal font-semibold hover:opacity-90 transition-all duration-300"
                >
                  {banner.cta}
                </a>
              </div>
            </div>
          </li>



          ))}
        </ul>

      </div>

      {/* Social Media Icons */}
      <div className="hidden sm:flex flex-col space-y-4 absolute bottom-6 left-6 z-10">
        {[FaLinkedin].map((Icon, idx) => (
          <a
            key={idx}
            href="https://www.linkedin.com/company/jbsconsultingco"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex justify-center items-center text-white rounded-full border-2 border-[#1da692] bg-[#1da692] hover:bg-white hover:text-[#1da692] text-xl transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Icon />
          </a>
        ))}
      </div>
    </section>






  );
}
