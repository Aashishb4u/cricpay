import { assets } from "../../lib/assets";

const ApiIntegration = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-16">
      {/* Heading */}
      <div className="flex flex-col items-center text-center animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-bold text-[#920323]  ">
          Secure Payment <br /> Solutions
        </h1>

        <p className="text-sm sm:text-lg text-gray-600 max-w-md sm:max-w-xl md:max-w-2xl my-8 md:my-12 font-semibold">
          Empowering partners with seamless Debit, e-wallets, and crypto
          transactions for gaming worldwide.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 mt-8">
        {/* Left Section - Image with Decorations */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          {/* Glowing Background Effect */}
          <div className="absolute md:block hidden w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-blue-500/20 blur-[100px] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

          {/* Main Image */}
          <div className="relative z-20 animate-float">
            <img
              src={assets.api}
              alt="Person Holding Phone"
              className="md:w-[600px] w-[350px] object-cover drop-shadow-2xl rounded"
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full shadow-lg animate-ping" />
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-white rounded-full shadow-lg animate-ping delay-300" />
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-400 rounded-full shadow-lg animate-ping delay-700" />
        </div>

        {/* Right Section - Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left animate-slide-in-right">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase bg-gradient-to-r text-black   text-transparent bg-clip-text leading-tight">
              Just One API Integration
            </h2>
            <p className="text-gray-700 text-lg md:text-xl font-semibold leading-relaxed">
              Streamline Your Payment Integration with an API
            </p>
          </div>

          <div className="space-y-6 mt-8">
            <p className="text-gray-700 text-md sm:text-lg leading-relaxed">
              In today&apos;s interconnected economy, businesses must often
              cater to various local payment methods to meet diverse customer
              needs. Our single API integration simplifies this process
              dramatically.
            </p>
            <p className="text-gray-700 text-md sm:text-lg leading-relaxed">
              Connect with multiple local payment providers across emerging
              markets effortlessly. This cohesive approach eliminates the hassle
              of managing several integrations while reducing technical
              overhead.
            </p>
            <p className="text-gray-700 text-md sm:text-lg leading-relaxed">
              Our easy-to-integrate REST API provides access to popular local
              payment options, ensuring alignment with regional preferences and
              boosting customer satisfaction.
            </p>
            <p className="text-gray-700 text-md sm:text-lg leading-relaxed">
              Scale your business globally with a solution that evolves with
              you, adding new payment methods without extensive reengineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiIntegration;
