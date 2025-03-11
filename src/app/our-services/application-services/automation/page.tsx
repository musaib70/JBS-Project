import CloudManagedTypes from "@/components/OurServices/common/Types";
import HeroSection from "@/components/OurServices/common/HeroSection";
import IntroSection from "@/components/OurServices/common/IntroSection";
import CloudServicesStepres from "@/components/OurServices/common/CloudServicesStepres";
import TextSectionBgGradiant from "@/components/OurServices/common/TextSectionBgGradiant";
import Link from "next/link";

const AutomationPage = () => {
  const ManagedTypes = [
    {
      title: "Robotic Process Automation",
      description:
        "Automates repetitive, rule-based tasks like data entry, invoice processing, and reporting, reducing human errors.",
      image: "/assets/OurServices/Application-Services/Automation/robotic.png",
    },
    {
      title: "Intelligent Process Automation",
      description:
        "Utilizes AI and machine learning to handle more complex tasks, such as data analysis and decision-making, improving accuracy and speed.",
      image:
        "/assets/OurServices/Application-Services/Automation/intelligent-process.png",
    },
    {
      title: "Cognitive Automation",
      description:
        "Leverages AI to interpret unstructured data, such as emails or documents, enhancing customer support and back-office functions.",
      image:
        "/assets/OurServices/Application-Services/Automation/cognitive.png",
    },
    {
      title: "Workflow Automation",
      description:
        "Automates multi-step processes across departments, ensuring smoother operations and faster approvals",
      image: "/assets/OurServices/Application-Services/Automation/workflow.png",
    },
  ];

  const SteperData = {
    StepresOne: {
      title: "Transform Your Operations with Tailored Automation Solutions",
      descr: "",
      box: "",
      items: [
        {
          icon: "/assets/OurServices/Application-Services/Automation/end-to-end.png",
          heading: "End-to-End Process Automation",
          description:
            "We assess your workflows, identify automation opportunities, and implement solutions that streamline your operations ",
        },
        {
          icon: "/assets/OurServices/Application-Services/Automation/AI.png",
          heading: "AI-Powered Automation",
          description:
            " Our AI-driven automation solutions not only execute repetitive tasks but also enhance decision-making by learning from data patterns and optimizing processes in real time.",
        },
        {
          icon: "/assets/OurServices/Application-Services/Automation/Custom.png",
          heading: "Custom Automation Strategy",
          description:
            "We create tailored automation roadmaps that align with your business objectives, ensuring a smooth transition and measurable outcomes.",
        },
      ],
    },
    StepresTwo: {
      title: "",
      descr: "",
      box: "",
      items: [
        {
          icon: "",
          heading: "",
          description: "",
        },
      ],
    },
  };

  return (
    <>
      <HeroSection
        backgroundImage="/assets/OurServices/Application-Services/Automation/banner.png"
        heading="Automation"
        isRounded={true}
      />

      <section>
        <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
          <IntroSection
            text={{
              title: "Application Automation",
              left: 40,
              heading: "What is Application Automation?",
              description:
                "Application automation involves leveraging technologies like Process Automation and Artificial Intelligence to automate repetitive business tasks, reducing errors, enhancing efficiency, and allowing employees to focus on higher-value activities. Here are some importance of Application Automation:",
              bulletPoints: [
                "<strong>75%</strong> of organizations that implement automation report faster task execution and decision making.",
                "<strong>80%</strong> reduction in processing times for routine tasks can be achieved through automation.",
                "<strong>60%</strong> fewer manual errors can be achieved by automating workflows, leading to greater reliability across business operations.",
              ],
            }}
            imageSrc="/assets/OurServices/Application-Services/Automation/What-is-Application-Automation.png"
            imageAlt="Application Development"
          />

          <CloudManagedTypes
            types={ManagedTypes}
            sectionTitle="What Are The Types Of Application Automation?"
            height={420}
            headingHegihgt={50}
          />
        </div>

        <TextSectionBgGradiant
          title="Revolutionize Your Business with Intelligent Application Automation"
          description="We specialize in transforming how businesses operate through intelligent application automation. Our solutions go beyond simply automating tasks; we help organizations achieve long-term efficiency, scalability, and strategic impact."
        />
        <div className="md:px-4 lg:px-4 xl:px-8 2xl:px-16">
          <CloudServicesStepres {...SteperData} />

          <IntroSection
            text={{
              title: "Why Choose Us",
              left: 30,
              heading: "Why Choose JBS Consulting?",
              description: "",
              bulletPoints: [
                "<strong>Custom Solutions:</strong> We don't believe in a one-size-fits-all approach. We design automation solutions that evolve with your business, enabling you to scale as demand increases.",
                "<strong>Expertise in AI:</strong> With a team of experts in AI, JBS Consulting delivers cutting-edge automation technologies that drive efficiency, reduce costs, and optimize workflows.",
                "<strong>Maximize ROI:</strong> Our solutions are designed with a focus on delivering rapid and measurable ROI, helping you achieve more with fewer resources.",
              ],
            }}
            imageSrc="/assets/OurServices/Application-Services/Automation/Why-Choose-JBS-Consulting.png"
            imageAlt="Data Foundations Image"
          />
        </div>

        <section className="bg-[#d2d2d2] md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-12 p-8 md:p-16">
          <div className="max-w-4xl 2xl:max-w-5xl mx-auto">
            {/* Heading and Paragraph */}
            <div className="text-center">
              <h3 className="text-3xl 2xl:text-4xl font-semibold text-center mb-6">
                Unlock the Full Potential of Automation
              </h3>
              <p className="text-[14px] 2xl:text-[17px] mb-10">
                Partner with JBS Consulting to leverage the full potential of
                application automation, driving your business towards enhanced
                efficiency, reduced costs, and sustainable growth.
              </p>
              <Link
                href="/contact-us"
                aria-label="Connect with us for application automation"
                className="bg-gradient-to-r from-[#1da692] to-[#4355a1] text-white px-4 py-4 rounded-tl-2xl rounded-br-2xl shadow-md text-[14px] 2xl:text-[17px] font-semibold transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                Get Connected
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
export default AutomationPage;
