"use client";
import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { useParams } from "next/navigation";
import Link from "next/link";
import HeroSection from "@/components/OurServices/common/HeroSection";
import BlogSidebar from "@/components/BlogSidebar";
import { AiFillTags } from "react-icons/ai";
import { FaRegClock } from "react-icons/fa6";
import Image from "next/image";
import { Blog } from "@/components/types";

// Define the Blog type

const BlogDetailsPage = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState<Blog | null>(null);
  const [recentBlogs, setRecentBlogs] = useState<Blog[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

//  const urlLink = "https://jbsconsultingbackend-staging.up.railway.app";
 const urlLink = "https://api.jbsconsulting.co";


  // Fetch single blog and recent blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const categoryId = "679cbdc243d6e3c471f0865a";
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

          // Find the blog matching the id
          const foundBlog = data.find((blog: Blog) => blog._id === id);
          if (foundBlog) setBlog(foundBlog);
          else setError("Blog not found.");

          // Get the 5 most recent blogs
          setRecentBlogs(data.slice(0, 3));
        } else {
          setError(`Failed to fetch blogs. Status code: ${response.status}`);
        }
        setLoading(false);
      } catch (err) {
        setError(`Failed to fetch blog details. ${err}`);
        setLoading(false);
      }
    };

    fetchBlogs();
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
        setFilteredBlogs(data);
      } else {
        setFilteredBlogs([]);
      }
    } catch (err) {
      console.error(`Error fetching search results: ${err}`);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!blog) return <div>Blog not found</div>;

  return (
    <>
      <HeroSection
        backgroundImage="/assets/blog-bg.jpg"
        heading="Blog"
        isRounded={true}
      />
      <div className="w-full bg-stone-50 py-10 px-3 md:px-56 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {/* Blog Content */}
          <div className="md:col-span-2">
            <Image
              src={`${urlLink}/${blog.image}`}
              alt={blog.title}
              className="w-full h-auto mb-4"
              layout="responsive"
              width={100}
              height={100}
            />
            <div className="flex items-center gap-4">
              <div className="flex items-center text-gray-500 font-semibold text-base">
                <AiFillTags size={20} />
                <span>{blog.post_categories.name}</span>
              </div>
              <div className="flex items-center text-gray-500 font-semibold gap-1 text-base">
                <FaRegClock size={15} />
                <span className="mt-1">
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
            <h1 className="text-2xl mt-4 font-bold text-gray-800">
              {blog.title}
            </h1>

            {/* Render the sanitized description */}
            <div
              className="desBody mt-4"
              dangerouslySetInnerHTML={{
                __html: sanitizedDescription(blog.description ?? "Unknown Category"),
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
            recentData={recentBlogs}
            filteredData={filteredBlogs}
            category={{ tags: blog.post_categories?.name ? [blog.post_categories.name] : [] }}
          />

        </div>
      </div>
    </>
  );
};

export default BlogDetailsPage;
