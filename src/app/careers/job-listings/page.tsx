"use client";

import JobForm from "@/components/Careers/JobForm";
import HeroSection from "@/components/OurServices/common/HeroSection";
import React, { useEffect, useState } from "react";

// Define Job Type
type Job = {
  _id: string;
  name: string;
  department: string;
  position: string;
  job_type: string;
  location: string;
  description: string;
  responsibilities: string;
  experience?: { $numberDecimal: string } | null;
};

const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // Search states
  const [searchTitle, setSearchTitle] = useState<string>("");
  const [searchCity, setSearchCity] = useState<string>("");
  const [searchType, setSearchType] = useState<string>("");
  const [searchShift, setSearchShift] = useState<string>("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("https://api.jbsconsulting.co/job/list", {
          headers: {
            "x-access-token": "Xc12IsT9hevD8Pqq4kQbFiWMcOX9QMDHdKbb6DKRzWw",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }

        const data: Job[] = await response.json();
        setJobs(data);
        setFilteredJobs(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Filtering jobs based on search criteria
  useEffect(() => {
    const filtered = jobs.filter((job) => {
      return (
        (searchTitle === "" || job.name.toLowerCase().includes(searchTitle.toLowerCase())) &&
        (searchCity === "" || job.location.toLowerCase().includes(searchCity.toLowerCase())) &&
        (searchType === "" || job.job_type.toLowerCase() === searchType) &&
        (searchShift === "" || job.department.toLowerCase() === searchShift)
      );
    });

    setFilteredJobs(filtered);
  }, [searchTitle, searchCity, searchType, searchShift, jobs]);

  // Open modal and set selected job
  const handleApplyClick = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  return (
    <>
      <HeroSection
        backgroundImage="/assets/about-us-bg.avif"
        heading="Join Our Team"
        isRounded={true}
      />

      <section className="bg-[#f3f7fd] py-10 md:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Search Bar */}
          <div className="bg-white p-4 rounded-lg shadow-md flex flex-wrap gap-4 items-center">
            <input
              type="text"
              placeholder="Job Title"
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Select City"
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm"
              value={searchCity}
              onChange={(e) => setSearchCity(e.target.value)}
            />
            <select
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="full time">Full Time</option>
              <option value="part time">Part Time</option>
              <option value="contract">Contract</option>
            </select>
            <select
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm"
              value={searchShift}
              onChange={(e) => setSearchShift(e.target.value)}
            >
              <option value="">All Shifts</option>
              <option value="morning">Morning</option>
              <option value="evening">Evening</option>
              <option value="night">Night</option>
            </select>
          </div>

          {/* Job Cards */}
          <div className="mt-10 grid grid-cols-1 px-4 md:grid-cols-2  gap-6">
            {loading ? (
              <p className="text-center text-gray-500">Loading jobs...</p>
            ) : error ? (
              <p className="text-center text-red-500">{error}</p>
            ) : filteredJobs.length === 0 ? (
              <p className="text-center text-gray-500">No jobs found</p>
            ) : (
              filteredJobs.map((job) => (
                <div
                  key={job._id}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between align-middle mb-4"><h3 className="text-lg font-semibold text-gray-800">{job.name}</h3>
                  <p className="text-sm text-gray-600"><strong>{job.department} </strong>Department</p></div>
                  
                  <p className="text-sm text-gray-600"><strong>Position: </strong>{job.position}</p>
                  <p className="text-sm text-gray-600"><strong>Experience: </strong>
                    {job.experience?.$numberDecimal && !isNaN(Number(job.experience.$numberDecimal))
                      ? `${job.experience.$numberDecimal} years`
                      : "Not specified"}
                  </p>
                  
                  
                  <div className="mt-4 flex justify-between items-center">
                  <p className="text-sm text-gray-600 flex items-center">
                    <span className="material-icons-outlined text-sm mr-1">Location:</span>
                    {job.location} ({job.job_type})
                  </p>
                    <button
                      onClick={() => handleApplyClick(job)}
                      className="text-[#0062EB] text-sm font-medium hover:underline"
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Modal Popup */}
{isModalOpen && selectedJob && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
    <div className="bg-white p-6 rounded-lg shadow-lg md:max-w-[1040px] w-full relative">
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
        onClick={() => setIsModalOpen(false)}
      >
        ✖
      </button>
      
      <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
        Apply for {selectedJob.name}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Left Column: Job Details (60%) */}
        <div className="md:col-span-3 border-r pr-4 pt-20">
          <h4 className="text-xl font-semibold">{selectedJob.name}</h4>
          <p className="text-gray-600">{selectedJob.department} - {selectedJob.position}</p>
          <p className="text-gray-500">{selectedJob.job_type} | {selectedJob.location}</p>

          <div className="mt-4">
            <h5 className="font-semibold text-lg">Description</h5>
            <p className="text-gray-600">{selectedJob.description || "No description available."}</p>
          </div>

          <div className="mt-4">
            <h5 className="font-semibold text-lg">Responsibilities</h5>
            <p className="text-gray-600">{selectedJob.responsibilities || "Not specified."}</p>
          </div>
        </div>

        {/* Right Column: Job Application Form (40%) */}
        <div className="md:col-span-2 myjobpopup">
          <JobForm
            headingTitle=""
            headingDescription=""
          />
        </div>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default Jobs;
