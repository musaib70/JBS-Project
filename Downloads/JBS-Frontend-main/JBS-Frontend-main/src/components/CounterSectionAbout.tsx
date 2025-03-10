"use client";

import { useEffect, useRef } from "react";

interface CounterItem {
  label: string;
  target: number;
  imgSrc: string; // Change Icon to imgSrc for image source
}


const CounterSectionAbout: React.FC = () => {
  const countersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const runCounter = (element: HTMLDivElement) => {
      const target = parseInt(element.dataset.target || "0");
      const speed = 100;
      const increment = Math.ceil(target / speed);

      const updateCount = () => {
        const current = parseInt(element.innerText || "0");
        if (current < target) {
          element.innerText = `${Math.min(current + increment, target)}`;
          setTimeout(updateCount, 20);
        } else {
          element.innerText = `${target}+`; // Add "+" when target is reached
        }
      };

      updateCount();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetElement = entry.target as HTMLDivElement;
            runCounter(targetElement);
            observer.unobserve(targetElement);
          }
        });
      },
      { threshold: 0.5 }
    );

    countersRef.current.forEach((counter) => {
      if (counter) observer.observe(counter);
    });

    return () => observer.disconnect();
  }, []);

  const counterItems: CounterItem[] = [
    { label: "EXPERIENCE", target: 40, imgSrc: "/assets/Experience.svg" },
    { label: "EMPLOYEES", target: 100, imgSrc: "/assets/Employe.svg" },
    { label: "PARTNERS", target: 6, imgSrc: "/assets/Partners.svg" },
    { label: "CERTIFICATIONS", target: 500, imgSrc: "/assets/Certificate.svg" },
  ];
  

  return (
    <section
        className="w-full md:my-20 my-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/stats-bg.webp)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Ensures the image covers the entire section
        }}
      >
        <div className="max-w-6xl mx-auto py-10 px-3 md:py-32">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-0">
          {counterItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center text-center"
        >
          {/* Render image instead of icon */}
          {/* <Image src={item.imgSrc} alt={item.label} width={40} height={40} className="w-16 h-16 text-gray-800" /> */}
          
          <div
            className="text-4xl md:text-6xl font-bold text-white"
            data-target={item.target}
            ref={(el) => {
              countersRef.current[index] = el;
            }}
          >
            0
          </div>
          <p className="mt-2 text-white text-xl font-semibold capitalize">
            {item.label}
          </p>
        </div>
      ))}
          </div>
        </div>
      </section>


  );
};

export default CounterSectionAbout;
