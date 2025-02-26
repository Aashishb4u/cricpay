import { assets, videos } from "../../lib/assets";
import Marquee from "../../components/Marquee/Marquee";

const AboutUs = () => {
  return (
    <div className="min-h-screen  bg-white">
      {/* Heading with enhanced animation */}
      <div className="flex flex-col items-center py-16 px-4 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl uppercase font-bold bg-gradient-to-r text-[#920323] animate-pulse">
          ABOUT US
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 font-semibold mt-4 animate-fade-in">
          Make Gaming Transactions Easy
        </p>
      </div>

      {/* Principles Section with glass effect */}
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-12 gap-12">
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl font-bold uppercase bg-gradient-to-r text-black text-transparent bg-clip-text leading-tight mb-8">
            Our Principles
          </h1>

          {[
            {
              title: "Innovation",
              description:
                "Leading the Future of Digital Payments with groundbreaking technology",
            },
            {
              title: "Accessibility",
              description:
                "Empowering Merchants and Consumers Globally with seamless solutions",
            },
            {
              title: "Expertise",
              description:
                "Delivering Unmatched Payment Strategies with industry knowledge",
            },
          ].map((principle, index) => (
            <div
              key={index}
              className="mb-6 p-6 backdrop-blur-md bg-white  border border-gray-200 rounded-lg 
                            hover:border-red-500/70 shadow-lg hover:shadow-red-500/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <h2 className="text-2xl font-bold bg-gradient-to-r text-[#920323] ">
                {principle.title}
              </h2>
              <p className="text-gray-600 mt-2">{principle.description}</p>
            </div>
          ))}
        </div>

        {/* Right Image with enhanced floating animation */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4f94c4]/10 to-[#82c1f5]/10 blur-3xl"></div>
          <img
            src={assets.aboutUs}
            alt="Person Holding Phone"
            className="relative z-10 w-80 sm:w-96 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <Marquee />

      {/* Stats Section with glass cards */}
      <div className="px-6 lg:px-40 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "20+", label: "Certified Experts" },
            { value: "1K+", label: "Successful Implementations" },
            { value: "100%", label: "Satisfied Users" },
            { value: "10+", label: "Industry Recognitions" },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-white backdrop-blur-sm border border-gray-200 rounded-lg transition-all duration-300 
                            hover:border-red-500/70 shadow-lg hover:shadow-red-500/10 transform hover:-translate-y-1 text-center"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-[#920323] to-[#be0a31] bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Global Presence Section */}
      <div className="px-6 lg:px-40 py-16 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r text-[#920323]  mb-6">
            GLOBAL PRESENCE
          </h2>
          <p
            className="text-gray-600 text-lg leading-relaxed p-6 bg-white backdrop-blur-sm border border-gray-200 rounded-lg transition-all duration-300 
                            hover:border-red-500/70 shadow-lg hover:shadow-red-500/10"
          >
            CricPay connects gamers worldwide with seamless services and
            localized support, creating a unified gaming community across
            continents.
          </p>
        </div>

        <div className="md:w-1/2">
          <video
            height="500"
            width="500"
            autoPlay
            loop
            muted
            className="w-full rounded-2xl backdrop-blur-md bg-white/5 p-2 border border-white/10"
          >
            <source src={videos.globe} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
