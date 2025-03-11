"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

// Define types for form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
  comments: string;
}

const Footer = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    comments: "",
    phone: "1234567890", // Default value
    message: "Default message", // Default value
    service: "General Inquiry", // Default value
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        "https://jbsconsultingbackend-staging.up.railway.app/lead_form/create",
        formData,
        {
          headers: {
            "x-access-token": "Xc12IsT9hevD8Pqq4kQbFiWMcOX9QMDHdKbb6DKRzWw",
          },
        }
      );
      setLoading(false);
      setToast({
        message: "Your message has been successfully submitted!",
        type: "success",
      });
      setTimeout(() => setToast({ message: "", type: "" }), 2000); // Hide toast after 2 seconds
      // Clear the form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "",
        comments: "",
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
      setToast({
        message: "Something went wrong. Please try again.",
        type: "error",
      });
      setTimeout(() => setToast({ message: "", type: "" }), 2000); // Hide toast after 2 seconds
    }
  };


  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show button when user scrolls 200px down
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white mt-10  ">
      <div className="p-6 py-20 md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <div className="w-[100%]">
          <Image
            src="/assets/jbs-footer-logo-01.png"
            alt="JBS Consulting Logo"
            width={200}
            height={80}
            className="mb-4"
          />
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-8 ">
          {/* Column 1: Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <p className="text-sm">Pakistan Office</p>
            <p className="text-sm">
              Citi Tower, 33-A, Block 6, P.E.C.H.S., Shahrah-e-Faisal, Karachi
            </p>
            <p className="text-sm mt-4">Saudi Arabia Office</p>
            <p className="text-sm">
            Al Faisaliah Tower, Level 13, King Fahad Road, Olaya, Riyadh - 12212
            </p>
            <p className="text-sm mt-4">US Office</p>
            <p className="text-sm">
              5900 Balcones Drive, STE 100, Austin, TX 78731
            </p>
            <p className="text-sm mt-4">Phone: +966 114 903 910</p>
            <p className="text-sm">Email: info@jbsconsulting.co</p>
          </div>

          {/* Column 2: About JBS and Quick Links */}
          <div className=" flex flex-row justify-between md:px-8 align-bottom">
            <div>
              <h3 className="font-bold text-lg mb-4">About JBS</h3>
              <ul className="space-y-2 text-sm mb-6">
                <li>Who Are We</li>
                <li>Services</li>
                <li>Blogs</li>
                <li>Case Studies</li>
                <li>Contact Us</li>
                
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>Careers</li>
                <li>Recent News</li>
                <li>Terms & Conditions</li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div className="md:px-8 ">
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to be in the know
            </p>
            <form className="flex items-center border-b border-white">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent text-white placeholder-white outline-none"
              />

              <button type="submit" className="text-white">
                SUBSCRIBE
              </button>
            </form>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="relative">
            {/* Toast Notification */}
            {toast.message && (
              <div
                className={`absolute bottom-4 p-4 rounded-md text-white ${
                  toast.type === "success" ? "bg-green-500" : "bg-red-500"
                }`}
              >
                {toast.message}
              </div>
            )}

            {/* Form */}
            <div className="bg-[#58585a] p-6 rounded-br-[70px]">
              <h3 className="font-bold text-lg mb-4">
                We will Love to Hear From You!
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full pb-2 text-white bg-transparent border-b border-white placeholder-white text-sm outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full pb-2 text-white bg-transparent border-b border-white placeholder-white text-sm outline-none"
                  required
                />

                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Your Comment"
                  className="w-full pb-2 text-white bg-transparent border-b border-white placeholder-white text-sm resize-none outline-none"
                  rows={2}
                  required
                />

                <button
                  type="submit"
                  className="bg-transparent text-white p-2 text-sm font-semibold border border-white hover:bg-white hover:text-black flex items-center justify-center"
                  disabled={loading}
                >
                  {loading ? (
                    <svg
                      className="w-5 h-5 text-white animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="none"
                      />
                    </svg>
                  ) : (
                    "SEND MESSAGES"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-white text-black px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
        >
          ↑ Back to Top
        </button>
      )}
      <div className=" w-full mx-auto text-center border-t border-t-white py-6">
        <p className=" text-center ">
          © 2025 JBS Consulting. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
