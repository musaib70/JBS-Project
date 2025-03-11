"use client";
import {
  FaUser,
  FaEnvelope,
  FaGlobe,
  FaBuilding,
  FaBriefcase,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import HeroSection from "@/components/OurServices/common/HeroSection";
import { useParams } from "next/navigation";
import Image from "next/image";

const CaseStudy = () => {
  const params = useParams();
  console.log(params.id);

  return (
    <>
      <HeroSection
        backgroundImage="/assets/case-studies-bg.avif"
        heading="Case Study"
        isRounded={true}
      />

      <section className="py-20 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column - Case Study Content */}
          <div className="w-full md:w-full flex flex-col gap-4">
            <Image
              src="https://via.placeholder.com/800x400"
              width={800}
              height={400}
              alt="Case Study"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div>
              {/* Line Before Overview */}
              <div className="flex items-center gap-4 my-8">
                <span className="h-0.5 w-12 bg-teal-600"></span>
                <h2 className="text-lg font-semibold text-teal-600">
                  Overview
                </h2>
              </div>
              <p className="max-w-3xl font-semibold text-xl md:text-2xl">
                Inventions, literary works, music & design are all intangible
                assets. The legal right to these &quot;creations of the
                mind&quot; is JBS&quot;s most prime Property (IP).
              </p>
            </div>
            <div className="max-w-3xl text-sm text-gray-600 mt-4 md:text-base">
              <p>
                The JBS was keen to create an identity that would not interfere
                with any of the existing brands, setting on a JBS system that
                can be easily adapted to &quot;work with any colour
                system&quot;. The JBS consulted with the various brands
                throughout the process. (Source: jbs.co.uk)
              </p>
            </div>
            {/* Share Links */}
            <div className="flex items-center gap-4 mt-4">
              <span className="text-gray-700">
                <b>Share:</b>
              </span>
              <span className="text-gray-400 underline font-normal">
                Facebook
              </span>
              <span className="text-gray-400 underline font-normal">
                Linkedin
              </span>
              <span className="text-gray-400 underline font-normal">
                Twitter
              </span>
              <span className="text-gray-400 underline font-normal">
                Pinterest
              </span>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg shadow-lg"
            style={{ height: "500px" }}
          >
            <h3 className="text-lg font-semibold mb-4">Get Case Study</h3>
            <form className="flex flex-col gap-4">
              <div className="relative flex items-center">
                <FaUser className="absolute left-3 top-[14px] text-teal-700" />
                <input
                  type="text"
                  placeholder="Name"
                  className="p-3 pl-10 border border-gray-300 rounded-lg focus:outline-teal-500 w-full"
                />
              </div>
              <div className="relative flex items-center">
                <FaEnvelope className="absolute left-3 top-[14px] text-teal-700" />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 pl-10 border border-gray-300 rounded-lg focus:outline-teal-500 w-full"
                />
              </div>
              <div className="relative flex items-center">
                <FaGlobe className="absolute left-3 top-[14px] text-teal-700" />
                <input
                  type="text"
                  placeholder="Country Name"
                  className="p-3 pl-10 border border-gray-300 rounded-lg focus:outline-teal-500 w-full"
                />
              </div>
              <div className="relative flex items-center">
                <FaBuilding className="absolute left-3 top-[14px] text-teal-700" />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="p-3 pl-10 border border-gray-300 rounded-lg focus:outline-teal-500 w-full"
                />
              </div>
              <div className="relative flex items-center">
                <FaBriefcase className="absolute left-3 top-[14px] text-teal-700" />
                <input
                  type="text"
                  placeholder="Designation"
                  className="p-3 pl-10 border border-gray-300 rounded-lg focus:outline-teal-500 w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-b from-[#1da692] to-[#4355a1] text-white p-3 rounded-lg hover:bg-teal-700"
              >
                Sign up to get access to full case study
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-16 mb-20 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-[#F3F7FDff]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Requirements Column */}
            <div>
              <h2 className="text-xl md:text-3xl font-bold mb-6">
                Requirements
              </h2>
              <ul className="space-y-6">
                {Array(3)
                  .fill(
                    "The communication between machines of different kinds sometimes causes troubles and inaccurate signal decoding results."
                  )
                  .map((requirement, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <FaArrowRight className="text-teal-600 size-7" />
                      <p className="text-gray-700">{requirement}</p>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Our Solution Column */}
            <div>
              <h2 className="text-xl md:text-3xl font-bold mb-6">
                Our solution
              </h2>
              <ul className="space-y-6">
                {Array(3)
                  .fill(
                    "The communication between machines of different kinds sometimes causes troubles and inaccurate signal decoding results."
                  )
                  .map((solution, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <FaCheckCircle className="text-teal-600 size-7" />
                      <p className="text-gray-700">{solution}</p>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="md:px-8 lg:px-16 xl:px-32 2xl:px-64 w-full">
        <ul className="max-w-2xl divide-y border rounded-xl">
          <li>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>What am I getting as a Premium Member?</span>
              </summary>

              <article className="px-4 pb-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et ipsum sapien. Vestibulum molestie porttitor augue vitae
                  vulputate. Aliquam nec ex maximus, suscipit diam vel,
                  tristique tellus.
                </p>
              </article>
            </details>
          </li>
          <li>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>What am I getting as a Premium Member?</span>
              </summary>

              <article className="px-4 pb-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et ipsum sapien. Vestibulum molestie porttitor augue vitae
                  vulputate. Aliquam nec ex maximus, suscipit diam vel,
                  tristique tellus.{" "}
                </p>
              </article>
            </details>
          </li>
          <li>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>What am I getting as a Premium Member?</span>
              </summary>

              <article className="px-4 pb-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et ipsum sapien. Vestibulum molestie porttitor augue vitae
                  vulputate. Aliquam nec ex maximus, suscipit diam vel,
                  tristique tellus.{" "}
                </p>
              </article>
            </details>
          </li>
          <li>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>What am I getting as a Premium Member?</span>
              </summary>

              <article className="px-4 pb-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et ipsum sapien. Vestibulum molestie porttitor augue vitae
                  vulputate. Aliquam nec ex maximus, suscipit diam vel,
                  tristique tellus.{" "}
                </p>
              </article>
            </details>
          </li>
        </ul>
      </section>
    </>
  );
};

export default CaseStudy;
