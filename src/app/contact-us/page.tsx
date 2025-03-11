"use client";
import { useState } from "react";
import Link from "next/link";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoMdHeadset } from "react-icons/io";
import HeroSectionVid from "@/components/OurServices/common/HeroSectionVid";

const ContactUs = () => {


  
const locations = [
  {
    imgSrc: "/assets/location-1.webp",
    country: "KSA",
    location:
      "Al Faisaliah Tower, Level 13, King Fahad Road, Olaya, Riyadh 12212, Saudi Arabia",
  },
  {
    imgSrc: "/assets/location-3.avif",
    country: "US",
    location: "5900 Balcones Drive, STE 100 Austin , TX78731",
  },
  {
    imgSrc: "/assets/location-2.webp",
    country: "Pakistan",
    location:
      "Citi Tower, 33-A, BLock-6, P.E.C.H.S., Shahrah-e-Faisal, Karachi 75400, Pakistan",
  },
  
];
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
      setResponseMessage("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setResponseMessage("");

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        service: formData.service,
        address: formData.address || "", // Ensure it's never undefined
        status: 1,
        comments: "NA",
      };
    
      console.log("Sending Data:", payload); // Debugging
    
      const response = await fetch("https://api.jbsconsulting.co/lead_form/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "x-access-token": "Xc12IsT9hevD8Pqq4kQbFiWMcOX9QMDHdKbb6DKRzWw",
        },
        body: JSON.stringify(payload),
      });
    
      const data = await response.json();
      console.log("API Response:", data); // Debugging
    
      if (response.ok) {
        setResponseMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "", service: "", address: "" });
      } else {
        setResponseMessage("Failed to submit. Please check your input and try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred. Please try again.");
    }
    

    setLoading(false);
  };

  return (
    <>
      
      <HeroSectionVid
        backgroundVideo="/assets/contact-us.mp4"
        heading="Contact"
        isRounded={true}
      />
      {/* Locaitons and contacts container */}
      <div className="max-w-5xl mx-auto py-10 md:py-16">
          {/* Location */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 mb-10 md:mb-14">
            {locations.map((el) => (
              <div
                key={el.country}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${el.imgSrc})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover", // Ensures the image covers the entire section
                }}
                className="rounded-lg"
              >
                <div className="text-white px-8 py-16 text-center">
                  <h3 className="font-bold text-2xl md:text-4xl mb-3">
                    {el.country}
                  </h3>

                  <Link href="#" className="font-semibold text-lg md:text-xl">
                    {el.location}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* contacts */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {/* Email */}
            <div className="bg-white flex items-center gap-4 shadow-md rounded-lg px-8 py-6">
              <div className="size-16 cursor-pointer flex justify-center text-white items-center rounded-full bg-gradient-to-b from-[#1da692] to-[#4355a1]">
                <FaRegEnvelope size={30} />
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold">Email Us</h4>
                <p className="text-base font-medium text-gray-500">
                  info@jbsconsulting.co
                </p>
              </div>
            </div>
            {/* Email */}
            <div className="bg-white flex items-center gap-4 shadow-md rounded-lg px-8 py-4">
              <div className="size-16 cursor-pointer flex justify-center text-white items-center rounded-full bg-gradient-to-b from-[#1da692] to-[#4355a1]">
                <IoMdHeadset size={30} />
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-bold">Call Now</h4>
                <p className="text-base font-medium text-gray-500">
                  +966114903910
                </p>
              </div>
            </div>
          </div>
        </div>
      <section className="bg-[#f3f7fd]">
        <div className="max-w-5xl mx-auto py-10 md:py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Have Any Questions?</h2>
            <p className="text-gray-500 mt-2 mb-6 font-medium">Feel free to reach out to us using the form below.</p>
          </div>

          {/* Contact Form */}
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-10 z-50">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone *"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select Service *</option>
                  <option value="service1">Cloud Services</option>
                  <option value="service2">Data & AI</option>
                  <option value="service1">Application Development</option>
                  <option value="service2">Microsoft Digital Workplace</option>
                  <option value="service1">IT BPO</option>
                  <option value="service2">Oracle Solutions</option>
                </select>
              </div>
              <textarea
                name="message"
                rows={4}
                placeholder="Message *"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-indigo-500"
              ></textarea>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 text-white font-bold rounded-lg bg-gradient-to-b from-[#1da692] to-[#4355a1] hover:from-[#4355a1] hover:to-[#1da692] transition"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Get in Touch"}
                </button>
              </div>
            </form>

            {/* Response Message */}
            {responseMessage && (
              <p className="text-center mt-4 text-lg font-semibold text-gray-700">{responseMessage}</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
