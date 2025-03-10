
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";

// Define TypeScript interfaces for props
interface Blog {
  _id: string;
  title: string;
  image?: string;
  createdAt: string;
}

interface Category {
  _id: number;
  name: string;
  count: number;
}

interface TagCategory {
  tags: string[];
}

interface BlogSidebarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: () => void;
  recentData: Blog[];
  filteredData: Blog[];
  category?: TagCategory; // category expects a 'tags' array
}


// Category list constant
const categoryList: Category[] = [
  {
    _id: 1,
    name: "Blogs",
    count: 2,
  },
  {
    _id: 2,
    name: "News",
    count: 1,
  },
  {
    _id: 3,
    name: "Case Studies",
    count: 2,
  },
];

const BlogSidebar: React.FC<BlogSidebarProps> = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
  recentData,
  filteredData,
  category,
}) => {
  return (
    <>
      {/* Sidebar */}
      <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow bg-white p-6 md:col-span-1">
        {/* Search Input Box */}
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
        </div>

        {/* Search Results */}
        {filteredData.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Search Results</h3>
            <ul className="space-y-2">
              {filteredData.map((blog) => (
                <li key={blog._id}>
                  <Link
                    href={`/blog/${blog._id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {blog.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Recent Posts */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold mb-2">Recent Posts</h3>
          <ul className="space-y-4 mt-4">
            {recentData.map((recentBlog) => (
              <li className="" key={recentBlog._id}>
                <Link
                  href={`/blog/${recentBlog._id}`}
                  className="flex items-center gap-2"
                >
                  <div>
                    {/* <div className="relative h-20 w-20 border rounded-full">
                      <Image
                        src={recentBlog.image || ""}
                        alt={recentBlog.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full w-full h-full"
                        priority
                      />
                    </div> */}
                  </div>

                  <div>
                    <span className="recentDates text-gray-500 font-medium">
                      {new Date(recentBlog.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
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
          {/* Category List */}
          {categoryList.map((el) => (
            <div
              key={el._id}
              className="flex items-center justify-between space-y-3"
            >
              <span className="font-medium">{el.name}</span>
              <span className="bg-gray-200 rounded-full p-2 text-slate-800 text-[12px]">{`${
                el.count > 10 ? el.count : "0" + el.count
              }`}</span>
            </div>
          ))}
        </div>
        {/* Tags */}
        {category && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-3">
              {category.tags.map((el, i) => (
                <div
                  key={i}
                  className="bg-stone-50 rounded-md px-4 py-2 text-gray-900 text-sm"
                >
                  {el}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogSidebar;
