import Link from "next/link";

const LastSectionDataAndAi = () =>{
return(
    <section className="bg-[#d2d2d2] md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-12 p-8 md:p-16">
          <div className="max-w-4xl 2xl:max-w-5xl mx-auto">
            {/* Heading and Paragraph */}
            <div className="text-center">
              <h3 className="text-3xl 2xl:text-4xl font-semibold text-center mb-6">Ready to Take the Next Step?</h3>
              <p className="text-[14px] 2xl:text-[17px] mb-10">
              Discover the transformative power of Data and AI. Leverage advanced AI solutions and data-driven strategies to drive your business forward. Let our experts guide you to unlock unparalleled insights and growth opportunities.</p>
              <Link
              href="/contact-us"
              className="bg-gradient-to-r from-[#1da692] to-[#4355a1] text-white px-4 py-4 rounded-tl-2xl rounded-br-2xl shadow-md text-[14px] 2xl:text-[17px] font-semibold"
            >
              Get Connected
            </Link>
            </div>
          </div>
        </section>
);
}
export default LastSectionDataAndAi;