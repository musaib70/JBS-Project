"use client";
import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { useParams } from "next/navigation";
import Link from "next/link";
import HeroSection from "@/components/OurServices/common/HeroSection";
import { AiFillTags } from "react-icons/ai";
import { FaRegClock } from "react-icons/fa6";
import {
  FaUser,
  FaEnvelope,
  FaGlobe,
  FaBuilding,
  FaBriefcase,
} from "react-icons/fa";
import Image from "next/image";
import { CaseStudy } from "@/components/types";


const CaseStudyDetailsPage = () => {
  const { id } = useParams();

  const [casestudy, setCaseStudy] = useState<CaseStudy | null>(null);
  //const [recentCaseStudy, setRecentCaseStudy] = useState<CaseStudy[]>([]);
  //const [searchQuery, setSearchQuery] = useState<string>("");
  //const [filteredCaseStudy, setFilteredCaseStudy] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  //  const urlLink = "https://jbsconsultingbackend-staging.up.railway.app";
 const urlLink = "https://api.jbsconsulting.co";

  // Fetch single CaseStudy and recent CaseStudy
  useEffect(() => {
    const fetchCaseStudy = async () => {
      try {
        const categoryId = "679ccf07953e85ba33101fe5";

        const response = await fetch(
          `${urlLink}/post/list?perpage=20&page=1&filters=category_id:${categoryId}&reference=post_categories&reference_id=category_id`,
          {
            headers: {
              "x-access-token": "Xc12IsT9hevD8Pqq4kQbFiWMcOX9QMDHdKbb6DKRzWw",
            },
          }
        );

        if (response.status === 200) {
          const data = await response.json();

          // Find the casestudy matching the id
          const foundCaseStudy = data.find((casestudy: CaseStudy) => casestudy._id === id);
          if (foundCaseStudy) setCaseStudy(foundCaseStudy);
          else setError("CaseStudy not found.");

          // Get the 5 most recent casestudys
          //setRecentCaseStudy(data.slice(0, 5));
        } else {
          setError(`Failed to fetch casestudys. Status code: ${response.status}`);
        }
        setLoading(false);
      } catch (err) {
        setError(`Failed to fetch casestudy details. ${err}`);
        setLoading(false);
      }
    };

    fetchCaseStudy();
  }, [id]);

  // Sanitize the description
  const sanitizedDescription = (description: string) => {
    return DOMPurify.sanitize(description, {
      ALLOWED_TAGS: [
        "b",
        "i",
        "em",
        "strong",
        "a",
        "ul",
        "ol",
        "li",
        "p",
        "br",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "img",
      ],
      ALLOWED_ATTR: ["href", "target", "src", "alt", "title", "style", "class"],
    });
  };

  // Handle search
  // const handleSearch = async () => {
  //   try {
  //     const response = await fetch(
  //       `${urlLink}/post/list?filters_like=title:${searchQuery}&perpage=5`,
  //       {
  //         headers: {
  //           "x-access-token": "Xc12IsT9hevD8Pqq4kQbFiWMcOX9QMDHdKbb6DKRzWw",
  //         },
  //       }
  //     );

  //     if (response.status === 200) {
  //       const data = await response.json();
  //       setFilteredCaseStudy(data);
  //     } else {
  //       setFilteredCaseStudy([]);
  //     }
  //   } catch (err) {
  //     console.error(`Error fetching search results: ${err}`);
  //   }
  // };

   if (loading) return <div>Loading...</div>;
   if (error) return <div>{error}</div>;
   if (!casestudy) return <div>CaseStudy not found</div>;


  return (
    <>
      <HeroSection
        backgroundImage="/assets/case-studies-bg.avif"
        heading="Case Study"
        isRounded={true}
      />

      <section className="py-20 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="flex flex-col md:flex-row">
          {/* Left Column - Case Study Content */}
          <div className="w-full pb-10 px-3 md:pb-20">
        <div className="">
          {/* CaseStudy Content */}
          <div className="md:col-span-2">
            <Image
              src={`${urlLink}/${casestudy.image}`}
              alt={casestudy.title}
              className="w-full h-auto mb-4"
              layout="responsive"
              width={100}
              height={100}
            />
            <div className="flex items-center gap-4">
              <div className="flex items-center text-gray-500 font-semibold text-base">
                <AiFillTags size={20} />
                <span>{casestudy.post_categories.name}</span>
              </div>
              <div className="flex items-center text-gray-500 font-semibold gap-1 text-base">
                <FaRegClock size={15} />
                <span className="mt-1">
                  {new Date(casestudy.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
            <h1 className="text-2xl mt-4 font-bold text-gray-800">
              {casestudy.title}
            </h1>

            {/* Render the sanitized description */}
            <div
              className="desBody mt-4"
              dangerouslySetInnerHTML={{
                __html: sanitizedDescription(casestudy.description ?? "Unknown Category"),
              }}
            />

            {/* Share Options */}
            <div className="border-t pt-4 mt-4">
              <h4 className="text-lg font-medium mb-2">Share this post:</h4>
              <div className="flex space-x-4">
                {["facebook", "instagram", "twitter", "linkedin"].map(
                  (platform) => (
                    <Link
                      key={platform}
                      href={`https://${platform}.com`}
                      target="_blank"
                      className={`text-${
                        platform === "facebook"
                          ? "blue-600"
                          : platform === "instagram"
                          ? "pink-600"
                          : platform === "twitter"
                          ? "blue-400"
                          : "blue-700"
                      }`}
                      rel="noreferrer"
                    >
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
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

      
    </>
  );
};

export default CaseStudyDetailsPage;
