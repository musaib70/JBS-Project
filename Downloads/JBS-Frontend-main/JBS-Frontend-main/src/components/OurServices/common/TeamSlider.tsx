"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const TeamSlider = () => {
  const teamMembers = [
    {
      name: "Robert Abraham",
      title: "Full Stack Developer",
      description:
        "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/assets/team_2.png",
    },
    {
      name: "John Doe",
      title: "Backend Developer",
      description:
        "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/assets/team_2.png",
    },
    {
      name: "Jane Smith",
      title: "UI/UX Designer",
      description:
        "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/assets/team_2.png",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#1da692] to-[#4355a1] py-16 my-0 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="text-center text-white">
        {/* <h4 className="uppercase text-sm mb-2">Team Members</h4> */}
        <h3 className="text-4xl font-semibold text-center px-4 mb-6">
          Meet With Our Team
        </h3>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="p-6 paginate-team"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white mt-12 relative shadow-lg ">
              {/* content wrapper */}
              <div className="p-7">
                <div className="w-24 border-[6px] border-white absolute -top-12 bg-white  h-24 mx-auto mb-4 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover "
                    width={80}
                    height={80}
                  />
                </div>
                <h4 className="text-lg 2xl:text-xl font-semibold mt-[10%]">
                  {member.name}
                </h4>
                <p className="text-[14px] 2xl:text-[17px] leading-relaxed font-semibold text-gray-500">
                  {member.title}
                </p>
                <p className="text-gray-800 text-[14px] 2xl:text-[15px] leading-relaxed mt-3 text-left">
                  {member.description}
                </p>
              </div>

              <hr />

              {/* icons wrapper */}
              {/* <div className="flex space-x-4 pl-7 py-4">
                <div className="size-8 cursor-pointer flex justify-center text-white items-center rounded-full bg-gradient-to-b from-[#1da692] to-[#4355a1]">
                  <FaFacebookF />
                </div>
                <div className="size-8 cursor-pointer flex justify-center text-white items-center rounded-full bg-gradient-to-b from-[#1da692] to-[#4355a1]">
                  <FaTwitter />
                </div>
                <div className="size-8 cursor-pointer flex justify-center text-white items-center rounded-full bg-gradient-to-b from-[#1da692] to-[#4355a1]">
                  <FaInstagram />
                </div>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamSlider;
