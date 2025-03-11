import HeroSection from "@/components/OurServices/common/HeroSection";
import Link from "next/link";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoMdHeadset } from "react-icons/io";

const locations = [
  {
    imgSrc: "/assets/location-1.webp",
    country: "KSA",
    location:
      "Al Faisaliah Tower, Level 13, King Fahad Road, Olaya, Riyadh 12212, Saudia Arabia, Riyadh, SA",
  },
  {
    imgSrc: "/assets/location-2.webp",
    country: "Pakistan",
    location:
      "Citi Tower, 33-A, BLock-6, P.E.C.H.S., Shahrah-e-Faisal, Karachi 75400, Pakistan",
  },
  {
    imgSrc: "/assets/location-3.avif",
    country: "United States",
    location: "5900 Balcones Drive, STE 100 Austin , TX78731",
  },
];

const ContactUs = () => {
  return (
    <>
      <HeroSection
        backgroundImage="/assets/contact-bg.webp"
        heading="Contact"
        isRounded={true}
      />
      <section className="bg-[#f3f7fd]">
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
        {/* form container */}
        <div className="relative">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl font-bold">Have Any Questions?</h2>
            <p className="text-gray-500 mt-2 mb-6 font-medium">
              Feel free to reach out to us using the form below.
            </p>
          </div>

          {/* Form */}
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-10 z-50">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <select className="w-full border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option value="">Select Service</option>
                    <option value="service1">Service 1</option>
                    <option value="service2">Service 2</option>
                  </select>
                </div>
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 text-white font-bold rounded-lg bg-gradient-to-b from-[#1da692] to-[#4355a1] hover:from-[#4355a1] hover:to-[#1da692] transition"
                >
                  Get in Touch
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>
    </>
  );
};

export default ContactUs;
