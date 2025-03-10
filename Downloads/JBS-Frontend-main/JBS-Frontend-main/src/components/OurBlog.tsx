"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";


// Define the Blog type
interface Blog {
  _id: string;
  title: string;
  image: string;
  createdAt: string;
  category_id: string;
  meta_description: string;
  description: string;
  post_categories: {
    name: string;
  };
}

const categoryId = "679cbdc243d6e3c471f0865a";
// const urlLink = "https://jbsconsultingbackend-staging.up.railway.app";
const urlLink = "https://api.jbsconsulting.co";

const OurBlog: React.FC = () => {
  const [recentBlogs, setRecentBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch Blogs List from API
    const fetchBlogs = async () => {
      try {
        setLoading(true);
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

        // Get the 5 most recent blogs (last 5 from reversed list)
        setRecentBlogs(reversedBlogs.slice(0, 2));

        setLoading(false);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

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

  // console.log(recentBlogs);

  return (
    <section className="py-0 md:py-16 blog-section flex flex-wrap h-auto">
      {/* Desktop Layout */}
      <div className="hidden md:flex w-full">
        {/* Left Section */}
        <div className="left-section w-[66%] flex flex-col gap-10 px-20">
          {recentBlogs.map((blog, index) => (
            <div
              key={blog._id}
              className={`md:flex md:gap-20 flex flex-col items-start ${
                index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* First Column (Image) */}
              <div className="md:w-[44%] mx-8 w-[40%] h-[320px] relative flex">
                <Image
                  src={`${urlLink}/${blog.image}`}
                  alt={blog.title}
                  className="rounded-br-[70px]"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {/* Second Column (Content) */}
              <div className="md:w-[47%] w-[60%] flex flex-col mr-auto self-center">
                <h2 className="font-semibold text-xl mypost">{blog.title}</h2>
                <p className="text-gray-400 mt-4 font-medium text-[14px] uppercase mypost">
                  {/* by JBS - {blog.post_categories.name} */}
                  by JBS | {new Date(blog.createdAt).toLocaleDateString(
                                                "en-US",
                                                {
                                                  month: "short",
                                                  day: "numeric",
                                                  year: "numeric",
                                                }
                                              )}
                </p>
                <p className="text-base text-gray-500 py-3 mypost">
                  {blog.meta_description}
                </p>

                <a
                  href={`/blogs/${blog._id}`}
                 
                  className="text-gray-700 italic pt-6 text-base font-normal hover:text-[#1da692] hover:underline mypost"
                >
                  CONTINUE →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="right-section w-1/3 flex flex-col justify-center align-middle relative bg-gradient-to-b from-[#1da692] to-[#4355a1] md:rounded-bl-[240px] text-white">
          <h2
            className={`text-white font-bold uppercase text-3xl absolute md:left-[0%] top-24 left-[-10%] mx-2 transform -rotate-90 tracking-[14px] w-full`}
          >
            Our Blogs
          </h2>
          <div className="absolute bottom-16 w-full flex justify-end pr-[20%]">
            <Link
              href="/blogs"
              className="inline-block py-2 px-6 text-sm font-semibold text-white relative group"
            >
              {/* Top Border */}
              <span className="absolute top-0 left-0 w-[100%] h-[1px] bg-white origin-left scale-x-50 group-hover:scale-x-100 transition-transform duration-300"></span>
              {/* Button Text */}
              View All
              {/* Bottom Border */}
              <span className="absolute bottom-0 right-0 w-[100%] h-[1px] bg-white origin-right scale-x-50 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden w-full">
        {/* Mobile Heading */}
        <div className="flex items-center justify-center text-gray-900 py-4">
          <h2 className="text-center text-3xl font-semibold uppercase tracking-[2px] mb-4 ">
            Our Blogs
          </h2>
        </div>

        {/* Mobile Blog 1 */}
        {recentBlogs.map((blog) => (
          <div className="flex flex-col gap-2 mb-6 px-4" key={blog._id}>
            <Image
              src={`${urlLink}/${blog.image}`}
              alt={blog.title}
              width={250}
              height={150}
              className="rounded-lg object-cover w-full max-h-[250px]"
            />
            <div className="py-4">
              <h2 className="font-semibold text-xl">{blog.title}</h2>
              <p className="text-base text-gray-500 py-3 ">
                {blog.meta_description}
              </p>
              <p className="text-gray-400 tracking-[3px] mb-4 font-medium text-[14px] uppercase">
                by JBS - {new Date(blog.createdAt).toLocaleDateString(
                                                "en-US",
                                                {
                                                  month: "short",
                                                  day: "numeric",
                                                  year: "numeric",
                                                }
                                              )}
              </p>
              <a
               href={`/blogs/${blog._id}`}
                className="text-gray-800 text-base font-medium"
              >
                CONTINUE →
              </a>
            </div>
          </div>
        ))}

        {/* Mobile Blog 2
        <div className="flex flex-col gap-2 mb-6">
          <Image
            src="/assets/blogImage2.JPG"
            alt="Code visuals"
            width={250}
            height={150}
            className="rounded-lg object-cover w-full max-h-[250px]"
          />
          <div className="px-6 py-4">
            <h2 className="font-semibold text-xl">
              We're thrilled to announce the opening of our new office in
              Riyadh, a significant milestone in our mission to 'Works Better.'
            </h2>
            <p className="text-base text-gray-500 py-3">
              Our physical presence here brings us closer to our clients and
              partners, enabling us to deliver innovative solutions tailored to
              the region.
            </p>
            <a href="#" className="text-gray-800 text-base font-medium">
              CONTINUE →
            </a>
          </div>
        </div> */}

        {/* Mobile View All Button */}
        <div className="flex justify-center mb-4">
          <Link
            href="/blogs"
            className="inline-block py-2 px-20 rounded text-sm font-semibold text-white bg-gradient-to-b from-[#1da692] to-[#4355a1] shadow-md"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurBlog;
