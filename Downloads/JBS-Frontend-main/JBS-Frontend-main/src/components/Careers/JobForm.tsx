"use client";
import React, { useEffect, useState } from "react";

type Job = {
  _id: string;
  name: string;
};

const JobForm = ({
  headingTitle,
  headingDescription,
}: {
  headingTitle: string;
  headingDescription: string;
}) => {
  const [jobTitles, setJobTitles] = useState<Job[]>([]);
  const [loadingJobs, setLoadingJobs] = useState<boolean>(true);
  const [errorJobs, setErrorJobs] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    job_id: "",
    name: "",
    email: "",
    contact: "",
    cover_letter: "",
    resume: "", // Store Base64 string
  });

  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobTitles = async () => {
      try {
        const response = await fetch("https://api.jbsconsulting.co/job/list", {
          headers: {
            "x-access-token": "Xc12IsT9hevD8Pqq4kQbFiWMcOX9QMDHdKbb6DKRzWw",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch job titles");
        }

        const data: Job[] = await response.json();
        setJobTitles(data);
      } catch (err) {
        setErrorJobs(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoadingJobs(false);
      }
    };

    fetchJobTitles();
  }, []);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Convert file to Base64
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const convertToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = (error) => reject(error);
        });
      };

      try {
        const base64String = await convertToBase64(file);
        setFormData({ ...formData, resume: base64String });
      } catch (error) {
        console.error("Error converting file to Base64:", error);
        setSubmissionError("Failed to process resume file.");
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmissionError(null);
    setSuccessMessage(null);

    if (!formData.resume) {
      setSubmissionError("Please upload a resume.");
      setSubmitting(false);
      return;
    }

    const payload = {
      job_id: formData.job_id,
      name: formData.name,
      email: formData.email,
      contact: formData.contact,
      cover_letter: formData.cover_letter,
      resume: formData.resume, // Base64 string
    };

    console.log("Submitting Payload:", payload);

    try {
      const response = await fetch("https://api.jbsconsulting.co/job_application/create", {
        method: "POST",
        headers: {
          "x-access-token": "Xc12IsT9hevD8Pqq4kQbFiWMcOX9QMDHdKbb6DKRzWw",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log("API Response:", result);

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit application");
      }

      setSuccessMessage("Application submitted successfully!");
      setFormData({
        job_id: "",
        name: "",
        email: "",
        contact: "",
        cover_letter: "",
        resume: "",
      });
    } catch (err) {
      setSubmissionError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-12 forpopup">
      <div className="relative ">
        <div className="text-center">
          <h2 className="text-3xl font-bold">{headingTitle}</h2>
          <p className="text-gray-500 mt-2 mb-6 font-medium">
            {headingDescription}
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-10 z-50 formspopup">
          <form className="space-y-6 forpopform" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="fieldspop">
                <select
                  name="job_id"
                  value={formData.job_id}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                >
                  <option value="">Job Applied For</option>
                  {loadingJobs ? (
                    <option>Loading...</option>
                  ) : errorJobs ? (
                    <option disabled>{errorJobs}</option>
                  ) : (
                    jobTitles.map((job) => (
                      <option key={job._id} value={job._id}>
                        {job.name}
                      </option>
                    ))
                  )}
                </select>
              </div>

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="contact"
                  placeholder="Contact Number"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.docx"
                  onChange={handleFileChange}
                  className="w-full border border-gray-300 p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            </div>

            <div>
              <textarea
                name="cover_letter"
                rows={4}
                placeholder="Add More Details/Cover Letter"
                value={formData.cover_letter}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 text-white font-bold rounded-lg bg-gradient-to-b from-[#1da692] to-[#4355a1] hover:from-[#4355a1] hover:to-[#1da692] transition"
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Apply Now"}
              </button>
            </div>

            {submissionError && <p className="text-center text-red-500 mt-2">{submissionError}</p>}
            {successMessage && <p className="text-center text-green-500 mt-2">{successMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default JobForm;
