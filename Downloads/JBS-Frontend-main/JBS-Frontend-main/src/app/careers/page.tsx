import Image from "next/image";
import StepsComponentZigZag from "@/components/Careers/StepsProcessZigZag";
import JobForm from "@/components/Careers/JobForm";
import HeroSectionVid from "@/components/OurServices/common/HeroSectionVid";



const Careers = () => {
  const stepsData = [
    {
      stepNumber: 1,
      stepText: "Step",
      title: "Application Screening",
      description:
        "Our team reviews your application to ensure your skills align with the role.",
      color: "#069986", // Green
    },
    {
      stepNumber: 2,
      stepText: "Step",
      title: "Online Assessments",
      description:
        "Showcase your expertise through assessments tailored to the position you're applying for.",
      color: "#1E3A8A", // Blue
    },
    {
      stepNumber: 3,
      stepText: "Step",
      title: "First Online Interview",
      description:
        "Participate in a virtual interview focused on your experience, skills, and potential fit within our culture.",
      color: "#069986", // Green
    },
    {
      stepNumber: 4,
      stepText: "Step",
      title: "First Onsite Interview",
      description:
        "Meet our team in person, dive deeper into your qualifications, and discuss role-specific expectations.",
      color: "#1E3A8A", // Blue
    },
    {
      stepNumber: 5,
      stepText: "Step",
      title: "Offer & Package Discussion",
      description:
        "Receive a competitive offer tailored to your experience and potential.",
      color: "#069986", // Green
    },
    {
      stepNumber: 6,
      stepText: "Step",
      title: "Onboarding",
      description:
        "Welcome aboard! Experience a smooth onboarding process to help you settle into your new role with ease.",
      color: "#1E3A8A", // Blue
    },
    
  ];
  return (
    <>
      <HeroSectionVid
        backgroundVideo="/assets/AboutUs/CareersBanner.mp4"
        heading="Careers"
        isRounded={true}
      />

      <section className="max-w-5xl mx-auto py-10 md:py-20">
        {/* Why JBS Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          {/* Image */}
          <div className="relative w-full h-[500px]">
            <Image
              src="/assets/CareersM.jpg"
              alt="Person Img"
              objectFit="contain"
              layout="fill"
              priority
            />
          </div>

          {/* Contents */}
          <div>
            {/* Line Before Overview */}
            <div className="flex items-center gap-4 mb-6">
              <span className="h-0.5 w-12 bg-teal-600"></span>
              <h2 className="text-2xl font-semibold text-teal-600">
                Why JBS Consulting?
              </h2>
            </div>

            <div className="space-y-2 mb-4">
              <h2 className="font-semibold text-xl md:text-2xl">
                Empowering Careers, Enabling Innovation
              </h2>
              <p className="text-gray-800">
                At JBS Consulting, we nurture talent by offering opportunities
                to work on cutting-edge technologies, innovative solutions, and
                global projects that make a real impact.
              </p>
            </div>

            <div className="space-y-2 mb-4">
              <h2 className="font-semibold text-xl md:text-2xl">
                A Culture of Collaboration and Excellence
              </h2>
              <p className="text-gray-800">
                Join a team of passionate professionals in an environment that
                values teamwork, mutual respect, and continuous learning to
                achieve extraordinary outcomes together.
              </p>
            </div>

            <div className="space-y-2 mb-4">
              <h2 className="font-semibold text-xl md:text-2xl">
                Global Exposure and Opportunities
              </h2>
              <p className="text-gray-800">
                With a strong international presence, JBS Consulting offers
                associates the chance to work on diverse projects and
                collaborate with industry leaders worldwide.
              </p>
            </div>

            <div className="space-y-2 mb-4">
              <h2 className="font-semibold text-xl md:text-2xl">
                Shape the Future of Technology
              </h2>
              <p className="text-gray-800">
                Be part of a visionary organization that drives transformation
                across industries, enabling you to contribute meaningfully to a
                smarter, more connected world.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Leadership */}
      <section className="bg-gradient-to-b from-[#1da692] to-[#4355a1]">
        <div className="max-w-5xl mx-auto py-20 flex items-center gap-20 md:justify-between">
          {/* Left Text Section */}
          <h3 className="text-white text-xl md:text-3xl font-bold flex-1">
            A Legacy of Leadership <br />
            Become part of a company with over 25 years of excellence, know
          </h3>
          {/* Right buttons section */}
          <button className="px-6 py-2 bg-white text-[#1da692] rounded-md text-sm md:text-base font-medium">
           <a href="/careers/job-listings">View Jobs</a>
          </button>
        </div>
      </section>
      <StepsComponentZigZag steps={stepsData}
      sectionTitle="Our Streamlined Application Process"
      sectionDescription="Join JBS Consulting is a seamless and transparent journey. Here is what to expect:"
       />

      <JobForm
        headingTitle="Join Our Team!"
        headingDescription="We are always looking for talented individuals to join us. Fill out the form below to apply."
      />


    </>
  );
};
export default Careers;
