import { assets } from "../../lib/assets";
import Testimonials from "./components/Testinomial";

const Vision = () => {
  return (
    <div className="">
      {/* Heading */}
      <div className="flex flex-col items-center py-10 px-4 text-center animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl uppercase font-bold text-[#920323]">
          OUR VISION
        </h1>

        <p className="text-md md:text-lg text-gray-600 lg:max-w-2xl my-6 font-semibold">
          Bridging technology, intelligence, and payments for a seamless client
          journey.
        </p>
      </div>

      {/* Vision Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-20 my-10 space-y-10 lg:space-y-0">
        {/* Left Section - Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left animate-slide-in-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-[#920323] leading-tight">
            A Team of Innovators
          </h1>

          <div className="flex flex-col gap-4 my-6">
            <p className="text-gray-600 text-md md:text-lg font-semibold leading-relaxed">
              The founders realized that in order to be successful in existing
              as well as emerging e-commerce markets an excellent client journey
              was paramount. CricPay was designed from the ground up to offer
              market changing innovative features and technology. CricPay
              created a team of innovators, technologists and payments
              enthusiasts who were focused on their mission to bridge the gaps
              between technology, intelligence and payments.
            </p>
            <p className="text-gray-600 text-md md:text-lg font-semibold leading-relaxed">
              CricPay&apos;s mission is ensuring our merchants along with their
              customers receive the best seamless customer experience that
              maximizes sales, profits & client retention. Our vision is to
              become a global payment connector Brand known for its diversity of
              localized payment options within emerging markets countries.
            </p>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="relative animate-float">
            <img
              src={assets.vision}
              alt="Person Holding Phone"
              className="relative z-10 w-full  md:max-w-md lg:max-w-lg object-cover rounded"
            />
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="min-h-screen bg-gray-200 relative overflow-hidden text-center px-4">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-60">
          <img
            src={assets.map}
            alt="World Map"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto py-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl mb-10 uppercase font-bold text-[#920323]">
            OUR OVERVIEW
          </h1>

          <div className="space-y-4 text-md md:text-lg text-center md:text-left font-semibold text-gray-600">
            <p>
              CricPay was founded in 2015 by industry veterans with deep
              expertise in payments technology and cybersecurity. Born from a
              vision to revolutionize global payments, CricPay is not just about
              transactions—it&apos;s about transforming experiences.
            </p>
            <p>
              We are pioneering the future of payments with our cutting-edge
              alternative global payment connector, setting new benchmarks in
              market-leading payment technology. Harnessing the power of AI and
              leveraging the latest innovations, we ensure seamless and secure
              transactions across the globe.
            </p>
            <p>
              At CricPay, we are committed to pushing the boundaries of
              what&apos;s possible. Our solutions are designed to adapt and
              evolve, meeting the dynamic needs of the gaming industry and
              beyond. We empower businesses to thrive in an ever-changing
              digital landscape, providing them with the tools and technologies
              to stay ahead. Join us on our journey as we continue to innovate
              and redefine the world of payments, one transaction at a time
            </p>
          </div>
        </div>
      </div>

      {/* Experienced Leadership Section */}
      <div className="mt-10 px-6 text-center animate-fade-in-up">
        <h2 className="text-[#920323] text-3xl md:text-5xl font-bold mb-6">
          Experienced Leadership
        </h2>
        <p className="text-gray-600 text-md md:text-lg max-w-4xl mx-auto">
          Connect with CricPay for payment solutions, career opportunities, or
          inquiries, leveraging AI-driven innovation in fintech.
        </p>
      </div>

      {/* Testimonials */}
      <div className="py-10">
        <Testimonials />
      </div>
    </div>
  );
};

export default Vision;
