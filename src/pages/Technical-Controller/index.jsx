/* eslint-disable react/jsx-key */
import TcCard from "./Components/TC-Card";
import { TCCardData } from "../../data";
import { assets } from "../../lib/assets";

const TechnicalController = () => {
  const logos = [assets.Tc1, assets.Tc2, assets.Tc3, assets.Tc4, assets.Tc5];
  return (
    <div className="min-h-screen bg-gradient-to-b bg-white px-6">
      {/* Heading */}
      <div className="flex flex-col items-center py-10 text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl uppercase font-bold text-[#920323] ">
          Technical Connector
        </h1>
        <p className="text-base md:text-lg text-gray-700 font-semibold mt-3">
          Empowering seamless, global payment solutions with AI-driven
          innovation.
        </p>
      </div>

      {/* Connector Technology Services */}
      <div
        className="flex flex-col container mx-auto lg:flex-row items-center justify-center bg-white backdrop-blur-sm border border-gray-200  transition-all duration-300 
                            hover:border-red-500/70 shadow-lg hover:shadow-red-500/10 p-6 md:p-12 lg:p-24 space-y-10 md:space-y-0 md:space-x-10 rounded-xl animate-slide-in-left"
      >
        {/* Left Section - Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r text-[#920323] leading-tight">
            CONNECTOR <br /> TECHNOLOGY <br /> SERVICES
          </h1>
          <p className="text-gray-600 text-base lg:text-lg mt-4 leading-relaxed">
            Welcome to Connector Technology Services, your trusted partner in
            payment solutions. We provide seamless and secure transaction
            processing to enhance business operations. Experience reliable
            service tailored to meet your specific needs.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="relative flex justify-center w-full lg:w-1/2 animate-float">
          {/* Background Shape */}
          <div className="absolute bottom-0 right-10  md:right-24 w-60 h-80 bg-gradient-to-b from-[#4f94c4] to-[#082436] rounded-[48px]"></div>

          {/* Image */}
          <img
            src={assets.personPhone}
            alt="Person Holding Phone"
            className="relative z-10 w-[100%] left-10 h-[400px] lg:h-auto lg:top-0 top-20 sm:left-32 md:left-44   object-cover"
          />

          <svg
            width="100%"
            height="500"
            viewBox="0 0 500 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 15 1 Q 10 200,300 60 T 350 350"
              stroke="url(#grad1)"
              strokeWidth="4"
              fill="transparent"
            />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "yellow", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "blue", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Marquee of Logos */}
      <div className="mt-10">
        <div className="w-full border-t-2 border-[#4f94c4]/70 opacity-70"></div>
        <div className="overflow-hidden whitespace-nowrap py-6">
          <div className="flex animate-marquee items-center justify-between space-x-6">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center">
                <img
                  src={logo}
                  className="w-16 md:w-20"
                  alt={`logo-${index}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full border-t-2 border-[#4f94c4]/70 opacity-70"></div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col  items-center justify-around p-4">
        {TCCardData.map((item, index) => (
          <TcCard
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default TechnicalController;
