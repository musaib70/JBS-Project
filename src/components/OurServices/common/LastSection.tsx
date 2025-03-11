import Link from "next/link";

const LastSection = () => {
  return (
    <section className="bg-[#d2d2d2] md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-12 p-8 md:p-16">
      <div className="mx-auto">
        {/* Heading and Paragraph */}
        <div className="text-center">
          <h3 className="text-3xl text-[#1da692] 2xl:text-4xl font-semibold text-center">
            Ready to Take the Next Step?
          </h3>
          <p className="text-[14px] 2xl:text-[15px] my-8">
            Join our exclusive Cloud Migration Workshop to explore tailored
            strategies and solutions that fit your business. Our experts will
            guide you through the migration process, ensuring you unlock the
            full potential of the cloud. Sign up today to start your journey
            with confidence and precision.
          </p>
          <Link
            href="/contact-us"
            className="bg-gradient-to-r from-[#1da692] to-[#4355a1] text-white px-6 py-4 rounded-tl-2xl rounded-br-2xl shadow-md text-[14px] 2xl:text-[17px]"
          >
            Get Connected
          </Link>
        </div>
      </div>
    </section>
  );
};
export default LastSection;
