"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { AiFillTags } from "react-icons/ai";
import { FaRegClock } from "react-icons/fa6";
import HeroSection from "@/components/OurServices/common/HeroSection";
import BlogSidebar from "@/components/BlogSidebar";
import { News } from "@/components/types";


const NewsLists = () => {
  const [news, setNews] = useState<News[]>([]);
  const [recentNews, setRecentNews] = useState<News[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredNews, setFilteredNews] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1); // Track current page
  const [hasMoreNews, setHasMoreNews] = useState<boolean>(true); // Track if there are more news to fetch

  const router = useRouter();
//  const urlLink = "https://jbsconsultingbackend-staging.up.railway.app";
 const urlLink = "https://api.jbsconsulting.co";


  // Fetch News List from API
  const fetchNews = async (page: number) => {
    try {
      const categoryId = "679cbdc243d6e3c471f0865b";
      const response = await axios.get(
        `${urlLink}/post/list?perpage=20&page=1&filters=category_id:${categoryId}&reference=post_categories&reference_id=category_id`,
        {
          headers: {
            "x-access-token": "Xc12IsT9hevD8Pqq4kQbFiWMcOX9QMDHdKbb6DKRzWw",
          },
        }
      );

      const fetchedNews = response.data;

      // Reverse the news to get the most recent at the top
      const reversedNews = [...fetchedNews].reverse();

      // Set the news for the current page
      const paginatedNews = reversedNews.slice((page - 1) * 4, page * 4);
      setNews(paginatedNews);

      // Get the 5 most recent news (last 5 from reversed list)
      setRecentNews(reversedNews.slice(0, 5));

      // Check if there are more news to fetch
      setHasMoreNews(paginatedNews.length === 4);

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
    fetchNews(currentPage);
  }, [currentPage]); // Re-fetch news whenever the current page changes

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
        setFilteredNews(data);
      } else {
        setFilteredNews([]);
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
        heading="Latest News"
        isRounded={true}
      />
      <div className="w-full bg-stone-50 md:px-4 pt-10 lg:px-4 xl:px-8 2xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* News Content  */}
          <div className="md:col-span-2">
            {/* <h1 className="text-3xl font-bold mb-6">News in Category</h1> */}

            {news.length === 0 ? (
              <div className="text-gray-600 text-center">
                No news available in this category.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {news.map((news) => (
                  <div
                    key={news._id}
                    className="p-4 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white"
                    onClick={() => router.push(`/news/${news._id}`)}
                  >
                    <div className="relative w-full h-60">
                      <Image
                        src={`${urlLink}/${news.image}`}
                        alt={news.title}
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
                          <span>{news.post_categories.name}</span>
                        </div>
                        <div className="flex items-center text-gray-500 font-semibold gap-1 text-base">
                          <FaRegClock size={15} />
                          <span className="mt-1">
                            {new Date(news.createdAt).toLocaleDateString(
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
                        {news.title}
                      </h2>

                      <p className="text-gray-400 text-sm mb-4">
                        {news.meta_description}
                      </p>
                      </div>
                      <div><button className="bg-gradient-to-b from-[#1da692] to-[#4355a1] font-medium text-white rounded-lg px-6 py-2">
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
                disabled={!hasMoreNews}
                className={`px-4 py-2 rounded-lg ${
                  !hasMoreNews
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
            recentData={recentNews}
            filteredData={filteredNews}
          />
        </div>
      </div>
    </>
  );
};

export default NewsLists;
