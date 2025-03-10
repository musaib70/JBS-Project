import Link from "next/link";

const LastSectionApplicationServices = () =>{
return(
    <section className="bg-[#d2d2d2] md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-12 p-8 md:p-16">
          <div className="max-w-4xl 2xl:max-w-5xl mx-auto">
            {/* Heading and Paragraph */}
            <div className="text-center">
              <h3 className="text-3xl 2xl:text-4xl font-semibold text-center mb-6">Ready to Innovate?</h3>
              <p className="text-[14px] 2xl:text-[17px] mb-10">
              Our application development experts are ready to turn your vision into reality. Reach out to our team of specialists today and let’s create cutting-edge applications that drive growth.</p>
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
export default LastSectionApplicationServices;