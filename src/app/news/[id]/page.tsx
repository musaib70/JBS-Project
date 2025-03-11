"use client";
import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { useParams } from "next/navigation";
import Link from "next/link";
import HeroSection from "@/components/OurServices/common/HeroSection";
import { AiFillTags } from "react-icons/ai";
import { FaRegClock } from "react-icons/fa6";
import BlogSidebar from "@/components/BlogSidebar";
import Image from "next/image";
import { News } from "@/components/types";


const NewsDetailsPage = () => {
  const { id } = useParams();

  const [news, setNews] = useState<News | null>(null);
  const [recentNews, setRecentNews] = useState<News[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredNews, setFilteredNews] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  //  const urlLink = "https://jbsconsultingbackend-staging.up.railway.app";
 const urlLink = "https://api.jbsconsulting.co";

  // Fetch single news and recent newss
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const categoryId = "679cbdc243d6e3c471f0865b";

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

          // Find the news matching the id
          const foundNews = data.find((news: News) => news._id === id);
          if (foundNews) setNews(foundNews);
          else setError("News not found.");

          // Get the 5 most recent newss
          setRecentNews(data.slice(0, 5));
        } else {
          setError(`Failed to fetch newss. Status code: ${response.status}`);
        }
        setLoading(false);
      } catch (err) {
        setError(`Failed to fetch news details. ${err}`);
        setLoading(false);
      }
    };

    fetchNews();
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!news) return <div>News not found</div>;

  return (
    <>
      <HeroSection
        backgroundImage="/assets/blog-bg.jpg"
        heading="News Single"
        isRounded={true}
      />
      <div className="w-full bg-stone-50 py-10 px-3 md:px-56 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* News Content */}
          <div className="md:col-span-2">
            <Image
              src={`${urlLink}/${news.image}`}
              alt={news.title}
              className="w-full h-auto mb-4"
              layout="responsive"
              width={100}
              height={100}
            />
            <div className="flex items-center gap-4">
              <div className="flex items-center text-gray-500 font-semibold text-base">
                <AiFillTags size={20} />
                <span>{news.post_categories.name}</span>
              </div>
              <div className="flex items-center text-gray-500 font-semibold gap-1 text-base">
                <FaRegClock size={15} />
                <span className="mt-1">
                  {new Date(news.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
            <h1 className="text-2xl mt-4 font-bold text-gray-800">
              {news.title}
            </h1>

            {/* Render the sanitized description */}
            <div
              className="desBody mt-4"
              dangerouslySetInnerHTML={{
                __html: sanitizedDescription(news.description ?? "Unknown Category"),
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

          <BlogSidebar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearch={handleSearch}
            recentData={recentNews}
            filteredData={filteredNews}
            category={{ tags: news.post_categories?.name ? [news.post_categories.name] : [] }}
          />
        </div>
      </div>
    </>
  );
};

export default NewsDetailsPage;
