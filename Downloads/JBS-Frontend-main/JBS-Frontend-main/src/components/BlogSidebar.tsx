import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

interface Blog {
  _id: string;
  title: string;
  image?: string;
  createdAt: string;
  post_categories: {
    _id: string;
    name: string;
  };
  tags?: string[]; // <-- Make optional
}

interface TagCategory {
  tags?: string[];
}

interface Category {
  _id: string;
  name: string;
  count: number;
}

interface BlogSidebarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: () => void;
  recentData: Blog[];
  filteredData: Blog[];
  category?: TagCategory; // category expects a 'tags' array
  
}



const BlogSidebar: React.FC<BlogSidebarProps> = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
  recentData,
  filteredData,
  
}) => {
  const [categoryCounts, setCategoryCounts] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategoryCounts = async () => {
      try {
        const response = await fetch(
          "https://api.jbsconsulting.co/post/list?reference=post_categories&reference_id=category_id",
          {
            headers: {
              "x-access-token": "Xc12IsT9hevD8Pqq4kQbFiWMcOX9QMDHdKbb6DKRzWw",
            },
          }
        );
        const posts: Blog[] = await response.json();

        // Count categories
        const categoryMap: Record<string, Category> = {};
        posts.forEach((post) => {
          const { _id, name } = post.post_categories;
          if (!categoryMap[_id]) {
            categoryMap[_id] = { _id, name, count: 0 };
          }
          categoryMap[_id].count += 1;
        });

        setCategoryCounts(Object.values(categoryMap));
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategoryCounts();
  }, []);

  

  return (
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white p-6 md:col-span-1">
      {/* Search Input */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3">Search Now</h3>
        <div className="flex">
          <input
            type="text"
            placeholder="Search by Name"
            className="w-full px-4 border rounded-tl-md rounded-bl-md bg-gray-50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={handleSearch}
            className="bg-gradient-to-b from-[#1da692] to-[#4355a1] text-white rounded-tr-md rounded-br-md p-[14px]"
          >
            <FaSearch size={25} className="text-white" />
          </button>
        </div>

        {/* Show filtered results */}
        {searchQuery && (
          <ul className="mt-3">
            {filteredData.length > 0 ? (
              filteredData.map((blog) => (
                <li key={blog._id}>
                  <Link href={`/blogs/${blog._id}`} className="text-blue-500 hover:underline">
                    {blog.title}
                  </Link>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No results found</p>
            )}
          </ul>
        )}
      </div>

      {/* Recent Posts */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Recent Posts</h3>
        <ul className="space-y-4 mt-4">
          {recentData.map((recentBlog) => (
            <li key={recentBlog._id}>
              <Link href={`/blogs/${recentBlog._id}`} className="flex items-center gap-2">
                <div>
                  <span className="recentDates text-gray-500 font-medium">
                    {new Date(recentBlog.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <br />
                  <span className="font-medium">
                    {`${recentBlog.title.substring(0, 75)}...`}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
<div className="mb-10">
  <h3 className="text-xl font-semibold mb-4">Categories</h3>
  {categoryCounts.map((el) => {
    // Define correct links based on category name
    const categoryLinks: Record<string, string> = {
      Blogs: "/blogs",
      News: "/news",
      "Case Studies": "/case-studies",
    };

    return (
      <Link key={el._id} href={categoryLinks[el.name] || "#"}>
        <div className="flex items-center justify-between space-y-3 cursor-pointer hover:text-[#1da692] transition">
          <span className="font-medium">{el.name}</span>
          <span className="bg-gray-200 rounded-full p-2 text-slate-800 text-[12px]">
            {el.count > 10 ? el.count : `0${el.count}`}
          </span>
        </div>
      </Link>
    );
  })}
</div>

      {/* Tags Section */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {recentData.flatMap((post) => post.tags).length > 0 ? (
            Array.from(new Set(recentData.flatMap((post) => post.tags))).map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-300 transition"
              >
                {tag}
              </span>
            ))
          ) : (
            <p className="text-gray-500">No tags available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
