import React from "react";

const JobForm = ({ headingTitle, headingDescription }: { headingTitle: string; headingDescription: string }) => {
  return (
    <section className="py-12">
      {/* form container */}
      <div className="relative">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold">{headingTitle}</h2>
          <p className="text-gray-500 mt-2 mb-6 font-medium">
            {headingDescription}
          </p>
        </div>

        {/* Form */}
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-10 z-50">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Job Applied For (Dropdown) */}
              <div>
                <select
                  className="w-full border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="">Job Applied For</option>
                  <option value="job1">Job 1</option>
                  <option value="job2">Job 2</option>
                  <option value="job3">Job 3</option>
                  {/* Add more job options as needed */}
                </select>
              </div>

              {/* Full Name (Text Field) */}
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              {/* Email Address (Email Field) */}
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              {/* Contact Number (Number Field) */}
              <div>
                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              {/* Upload Your Resume (Upload Field) */}
              <div>
                <input
                  type="file"
                  accept=".pdf,.docx"
                  className="w-full border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>

            {/* Add More Details/Cover Later (Text Box) */}
            <div>
              <textarea
                rows={4}
                placeholder="Add More Details/Cover Letter"
                className="w-full border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 text-white font-bold rounded-lg bg-gradient-to-b from-[#1da692] to-[#4355a1] hover:from-[#4355a1] hover:to-[#1da692] transition"
              >
                Apply Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JobForm;
