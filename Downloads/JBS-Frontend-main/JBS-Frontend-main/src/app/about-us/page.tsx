import CounterSectionAbout from "@/components/CounterSectionAbout";
import LogoSlider from "@/components/OurServices/common/LogoSlider";
import Image from "next/image";
import OurTeamSection from "@/components/OurTeamSection";
import MSCardCardSection from "@/components/OurServices/common/MsSpecialisationCardHover";
import HeroSectionVid from "@/components/OurServices/common/HeroSectionVid";

const cardData = [
  {
    logo: "/assets/AboutUs/tomorrow.png",
    title: "Shaping Tomorrow, Today",
    description: [
      "We believe in acting now to build a better future. Every solution we create is designed with tomorrow in mind.",
    ],
  },
  {
    logo: "/assets/AboutUs/from-me-to-we.png",
    title: "From Me to We",
    description: [
      "Success is a team effort. We collaborate with our clients and partners to build something bigger than ourselves.",
    ],
  },
  {
    logo: "/assets/AboutUs/Simplify.png",
    title: "Simplify to Amplify",
    description: [
      "We cut through the noise to deliver solutions that make a real impact. Simplicity is the key to scaling success.",
    ],
  },
  {
    logo: "/assets/AboutUs/earlier.png",
    title: "Do It A Bit Earlier",
    description: [
      "Anticipating challenges before they arise that's how we stay ahead of the curve.",
    ],
  },
  {
    logo: "/assets/AboutUs/Bedifferent.png",
    title: "Be Different",
    description: [
      "Innovation starts with thinking differently. We're not afraid to break the mold and push boundaries.",
    ],
  },
];

const services = [
  {
    title: "Our Vision",
    description:
      "Our vision is simple: to help businesses become more agile, more innovative, and more successful through the power of technology. By 2030, we aim to expand our footprint to five international locations and welcome 10 companies under the JBS Group. Our commitment to growth, collaboration, and innovation will ensure that we're not just part of the future we're shaping it.",
    icon: "/assets/AboutUs/our-vision.png", // Pass icon name as a string
  },
  {
    title: "Our Mission",
    description:
      "At JBS, we see technology as a tool for change. It's not just about the latest trends or tools; it's about using technology to make a real impact. Our mission is to create smarter solutions that solve complex problems and unlock new possibilities for businesses. We believe in simplicity. We believe in clarity. And most importantly, we believe in results. Whether it's helping a business migrate to the cloud, strengthening its security, or harnessing data for growth, we are here to ensure that technology drives meaningful progress.",
    icon: "/assets/AboutUs/our-mission.png", // Pass icon name as a string
  },
];

const partners = [
  "/assets/OurServices/vertitas.png",
  "/assets/OurServices/microsoft.png",
  "/assets/OurServices/oracle.png",
  "/assets/OurServices/sap.png",
  "/assets/OurServices/Barracuda.png",
  "/assets/OurServices/certiport.png",
];
const AboutUs = () => {
  return (
    <>
      <HeroSectionVid
        backgroundVideo="/assets/AboutUs/banner.mp4"
        heading="About Us"
        isRounded={true}
      />

      {/* About us */}
      <section className="max-w-6xl mx-auto py-10 px-3 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative w-full md:w-[90%] h-64 md:h-96 lg:h-[500px]">
            <Image
              src={"/assets/AboutUs/Your-Partner.jpg"}
              alt="Your-partner"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
            />
          </div>
          {/* Content */}
          <div className="px-6">
            {/* Line Before Overview */}
            <div className="flex items-center gap-4">
              <span className="h-0.5 w-12 bg-teal-600"></span>
              <h2 className="text-lg font-semibold text-teal-600">Our Story</h2>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold pt-5">
              Your Partner for <br /> Innovation
            </h1>
            <p className="text-gray-700 text-lg my-5 max-w-lg text-left">
              JBS Consulting is all about using technology to make work easier,
              smarter, and more impactful for everyone. Our journey began in
              1849 with a humble trading firm in Pune, India, and has since
              evolved into a legacy of innovation and excellence. In 1948,
              Jaffer Brothers (Private) Limited was founded in Karachi,
              Pakistan, and became a pioneering force in shaping industries and
              driving progress. Today, JBS Consulting continues that proud
              tradition, blending decades of expertise with forward-thinking
              solutions to help businesses thrive in a digital world.
            </p>
          </div>
        </div>
      </section>
      {/* Stats */}

      <CounterSectionAbout />

      {/* Our Mission & Vision */}
      <section className="w-full">
        <div className="container mx-auto py-2 md:px-16 px-10 grid grid-cols-1 md:grid-cols-2 pb-16 md:space-x-8 max-md:space-y-8">
          {services.map((service, index) => {
            return (
              <div key={index} className="w-full flex justify-center">
                <div
                  className={`p-8 bg-white shadow-lg rounded-2xl border-b-[6px] transition-all ${
                    index >= 0
                      ? "border-[#069986] hover:shadow-xl hover:border-transparent"
                      : "border-[#ccc] hover:shadow-lg"
                  }`}
                >
                  {/* Icon */}
                  <div className="mb-4 flex items-start">
                    <div className="flex-shrink-0 size-16 bg-[#069986] rounded-br-xl rounded-tl-xl flex justify-center items-center">
                      <Image
                        src={service.icon}
                        alt="Icon"
                        width={75}
                        height={75}
                        className="rounded-full"
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h4
                    className={`text-[16px] 2xl:text-[20px] flex items-center  font-semibold ${
                      index >= 0 ? "text-gray-800" : "text-[#4355a1]"
                    }`}
                    style={{ height: "35px" }}
                  >
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p
                    className={`2xl:mt-5 text-[14px] 2xl:text-[15px] leading-relaxed mt-2 ${
                      index >= 0 ? "text-[#333]" : "text-[#555555]"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* <ServicesSectionBox
        sectionTitle="Core Values"
        sectionDescription=""
        services={services}
        headingHegihgt={35}
      /> */}

      <MSCardCardSection data={cardData} title="Core Values" />

      <section className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
        <OurTeamSection />
      </section>

      {/* We are different */}
      <section className="max-w-6xl mx-auto py-10 px-3 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 md:order-1 px-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
              Why We&apos;re Different
            </h1>
            <p className="text-gray-700 my-6 text-lg max-w-lg text-left">
              At JBS Consulting, we don&apos;t just implement technology—we
              create meaningful solutions that change the way businesses
              operate. Our approach is simple: use technology to solve problems,
              improve processes, and make life easier for everyone involved. And
              we do it with a human touch. We&apos;re not just a vendor;
              we&apos;re a partner who&apos;s invested in your success.
              <br />
              <br />
              We believe in technology that works, not technology that
              overwhelms. We focus on what matters most: results. And when
              technology works better, everything else follows.
            </p>
          </div>
          {/* Image */}
          <div className="relative h-64 md:h-96 lg:h-[400px] w-[80%] order-1 md:order-2">
            <Image
              src={"/assets/AboutUs/Why-We-Different.jpg"}
              alt="AboutUs Image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              priority
            />
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="max-w-6xl mx-auto">
        <LogoSlider
          logos={partners}
          slideInterval={4000}
          textColor="text-gray-900"
        />
      </section>
    </>
  );
};

export default AboutUs;
