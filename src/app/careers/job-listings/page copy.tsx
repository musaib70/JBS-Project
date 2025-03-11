import HeroSection from "@/components/OurServices/common/HeroSection";
import React from "react";

const jobs = [
  {
    title: "Sales Representative",
    type: "Accounting / Finance",
    location: "Karachi, Sindh",
    experience: "Experience 3 years",
  },
  {
    title: "Account Executive",
    type: "Accounting / Finance",
    location: "Karachi, Sindh",
    experience: "Experience 3 years",
  },
  {
    title: "Sales Manager",
    type: "Accounting / Finance",
    location: "Karachi, Sindh",
    experience: "Experience 3 years",
  },
  {
    title: "Business Development Manager",
    type: "Accounting / Finance",
    location: "Karachi, Sindh",
    experience: "Experience 3 years",
  },
  {
    title: "Sales Associate",
    type: "Accounting / Finance",
    location: "Karachi, Sindh",
    experience: "Experience 3 years",
  },
  {
    title: "Inside Sales Representative",
    type: "Accounting / Finance",
    location: "Karachi, Sindh",
    experience: "Experience 3 years",
  },
  {
    title: "Outside Sales Representative",
    type: "Accounting / Finance",
    location: "Karachi, Sindh",
    experience: "Experience 3 years",
  },
  {
    title: "Account Manager",
    type: "Accounting / Finance",
    location: "Karachi, Sindh",
    experience: "Experience 3 years",
  },
  {
    title: "Sales Consultant",
    type: "Accounting / Finance",
    location: "Karachi, Sindh",
    experience: "Experience 3 years",
  },
  {
    title: "Territory Sales Manager",
    type: "Accounting / Finance",
    location: "Karachi, Sindh",
    experience: "Experience 3 years",
  },
  {
    title: "Key Account Manager",
    type: "Accounting / Finance",
    location: "Karachi, Sindh",
    experience: "Experience 3 years",
  },
  {
    title: "Sales Coordinator",
    type: "Accounting / Finance",
    location: "Karachi, Sindh",
    experience: "Experience 3 years",
  },
  {
    title: "Sales Support Specialist",
    type: "Accounting / Finance",
    location: "Karachi, Sindh",
    experience: "Experience 3 years",
  },
  {
    title: "Sales Operations Analyst",
    type: "Accounting / Finance",
    location: "Karachi, Sindh",
    experience: "Experience 3 years",
  },
];

const Jobs = () => {
  return (
    <>
      <HeroSection
        backgroundImage="/assets/about-us-bg.avif"
        heading="Careers"
        isRounded={true}
      />

      <section className="bg-[#f3f7fd] py-10 md:py-20">
        <div className="max-w-5xl mx-auto border border-red-500">
          {/* Search Bar */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-wrap gap-4 items-center">
            <input
              type="text"
              placeholder="Job Title"
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
            <input
              type="text"
              placeholder="Select City"
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
            <select className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm">
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Contract</option>
            </select>
            <select className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm">
              <option>Shift</option>
              <option>Morning</option>
              <option>Evening</option>
              <option>Night</option>
            </select>
            <button className="bg-[#0062EB] text-white px-6 py-2 rounded-md text-sm hover:bg-[#004bb5]">
              Search
            </button>
          </div>

          {/* Job Cards */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-600">{job.type}</p>
                <p className="text-sm text-gray-600 flex items-center">
                  <span className="material-icons-outlined text-sm mr-1">
                    location_on
                  </span>
                  {job.location}
                </p>
                <p className="text-sm text-gray-600">{job.experience}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs text-gray-500">
                    Applied Before Dec 10, 2024
                  </span>
                  <a
                    href="#"
                    className="text-[#0062EB] text-sm font-medium hover:underline"
                  >
                    Apply →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Jobs;
