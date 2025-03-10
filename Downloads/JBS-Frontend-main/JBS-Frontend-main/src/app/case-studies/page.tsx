"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { AiFillTags } from "react-icons/ai";
import { FaRegClock } from "react-icons/fa6";
import HeroSection from "@/components/OurServices/common/HeroSection";
import BlogSidebar from "@/components/BlogSidebar";
import { CaseStudy } from "@/components/types";

const CaseStudyListPage = () => {
  const [blogs, setBlogs] = useState<CaseStudy[]>([]);
  const [recentBlogs, setRecentBlogs] = useState<CaseStudy[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredBlogs, setFilteredBlogs] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1); // Track current page
  const [hasMoreBlogs, setHasMoreBlogs] = useState<boolean>(true); // Track if there are more blogs to fetch

  const router = useRouter();
  //const urlLink = "https://jbsconsultingbackend-staging.up.railway.app";
   const urlLink = "https://api.jbsconsulting.co";
  

  // Fetch Blogs List from API
  const fetchBlogs = async (page: number) => {
    try {
      const categoryId = "679ccf07953e85ba33101fe5";
      

      const response = await axios.get(
        `${urlLink}/post/list?perpage=20&page=1&filters=category_id:${categoryId}&reference=post_categories&reference_id=category_id`,
        {
          headers: {
            "x-access-token": "Xc12IsT9hevD8Pqq4kQbFiWMcOX9QMDHdKbb6DKRzWw",
          },
        }
      );

      const fetchedBlogs = response.data;

      // Reverse the blogs to get the most recent at the top
      const reversedBlogs = [...fetchedBlogs].reverse();

      // Set the blogs for the current page
      const paginatedBlogs = reversedBlogs.slice((page - 1) * 4, page * 4);
      setBlogs(paginatedBlogs);

      // Get the 5 most recent blogs (last 5 from reversed list)
      setRecentBlogs(reversedBlogs.slice(0, 5));

      // Check if there are more blogs to fetch
      setHasMoreBlogs(paginatedBlogs.length === 4);

      setLoading(false);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchBlogs(currentPage);
  }, [currentPage]); // Re-fetch blogs whenever the current page changes

  // Handle search
  const handleSearch = async () => {
    try {
      const response = await fetch(
        `${urlLink}/post/list?filters_like=title:${searchQuery}&perpage=5`,
        {
          headers: {
            "x-access-token": "Xc12IsT9hevD8Pqq4kQbFiWMcOX9QMDHdKbb6DKRzWw",
          },
        }
      );

      if (response.status === 200) {
        const data = await response.json();
        setFilteredBlogs(data);
      } else {
        setFilteredBlogs([]);
      }
    } catch (err) {
      console.error(`Error fetching search results: ${err}`);
    }
  };

  // Render Loading or Error
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-600 text-lg">Error: {error}</div>
      </div>
    );
  }

  return (
    <>
      <HeroSection
        backgroundImage="/assets/blog-bg.jpg"
        heading="Case Studies"
        isRounded={true}
      />
      <div className="w-full bg-stone-50 md:px-4 pt-10 lg:px-4 xl:px-8 2xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Blog Content  */}
          <div className="md:col-span-2">
            {/* <h1 className="text-3xl font-bold mb-6">Blogs in Category</h1> */}

            {blogs.length === 0 ? (
              <div className="text-gray-600 text-center">
                No Case Studies available right now, Stay Tune!
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {blogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="p-4 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white"
                    onClick={() => router.push(`/case-studies/${blog._id}`)}
                  >
                    <div className="relative w-full h-60">
                      <Image
                        src={`${urlLink}/${blog.image}`}
                        alt={blog.title}
                        objectFit="cover"
                        layout="fill"
                        className="rounded-tl-lg rounded-tr-lg"
                      />
                    </div>

                    <div className="py-4 px-2 flex flex-col">
                      <div className="md:h-[250px]">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="flex items-center text-gray-500 font-semibold text-base">
                          <AiFillTags size={20} />
                          <span>{blog.post_categories.name}</span>
                        </div>
                        <div className="flex items-center text-gray-500 font-semibold gap-1 text-base">
                          <FaRegClock size={15} />
                          <span className="mt-1">
                            {new Date(blog.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              }
                            )}
                          </span>
                        </div>
                      </div>
                      <h2 className="text-xl font-semibold mb-2">
                        {blog.title}
                      </h2>

                      <p className="text-gray-400 text-sm mb-4">
                        {blog.meta_description}
                      </p>
                      </div>
                      <div>
                      <button className="bg-gradient-to-b from-[#1da692] to-[#4355a1] font-medium text-white rounded-lg px-6 py-2">
                        Explore More
                      </button></div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination Buttons */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === 1
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-600 text-white"
                }`}
              >
                Previous
              </button>
              <span>Page {currentPage}</span>
              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={!hasMoreBlogs}
                className={`px-4 py-2 rounded-lg ${
                  !hasMoreBlogs
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-600 text-white"
                }`}
              >
                Next
              </button>
            </div>
          </div>

          <BlogSidebar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearch={handleSearch}
            recentData={recentBlogs}
            filteredData={filteredBlogs}
          />
        </div>
      </div>
    </>
  );
};

export default CaseStudyListPage;
