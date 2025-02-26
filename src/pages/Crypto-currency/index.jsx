import { assets } from "../../lib/assets";

const CryptoCurrency = () => {
  return (
    <div className="bg-white w-full">
      {/* Heading */}
      <div className="flex flex-col items-center py-10 px-4 animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-7xl text-center uppercase font-bold text-[#920323] ">
          Cryptocurrency <br /> Payment Solutions
        </h1>

        <p className="text-base md:text-lg text-gray-600 max-w-lg md:max-w-2xl my-6 md:my-10 font-semibold text-center">
          Empowering partners with seamless Debit, e-wallets, and crypto
          transactions for gaming worldwide.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full px-4 md:px-10 lg:px-20 my-10 space-y-10 lg:space-y-0">
        {/* Left Section - Text */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-4 animate-slide-in-left">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase bg-gradient-to-r text-[#920323] leading-tight text-center lg:text-left">
              Integrating Cryptocurrency Payments
            </h1>
            <p className="text-gray-600 text-md md:text-lg font-semibold mt-4 leading-relaxed text-center lg:text-left">
              Enable secure, global crypto payments with CricPay.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-gray-600 text-md md:text-lg font-semibold leading-relaxed">
              Cryptocurrency payment integration with CricPay is becoming
              increasingly popular as businesses seek to offer diverse payment
              options and cater to tech-savvy customers. By integrating
              cryptocurrency payments, companies can facilitate transactions
              using digital currencies like Bitcoin, Ethereum, USDT, and others,
              without the need for traditional intermediaries such as banks.
            </p>
            <p className="text-gray-600 text-md md:text-lg font-semibold leading-relaxed">
              This integration offers several benefits, including faster
              transaction processing, lower fees, and enhanced security through
              blockchain technology. Additionally, it opens up global markets,
              allowing businesses to accept payments from customers worldwide
              without worrying about currency conversion or international
              transaction fees.
            </p>
            <p className="text-gray-600 text-md md:text-lg font-semibold leading-relaxed">
              To implement cryptocurrency payments, businesses typically use
              specialized payment gateways that support digital currencies.
              These gateways provide the necessary infrastructure to authorize
              and process transactions, ensuring compliance with regulatory
              requirements and offering features like fraud prevention and
              dispute resolution. Overall, integrating cryptocurrency payments
              can provide businesses with a competitive edge, attract a broader
              customer base, and streamline the payment process, making it more
              efficient and cost-effective.
            </p>
          </div>
        </div>

        {/* Right Section - Image with Decorations */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <div className="animate-float">
            <img
              src={assets.crypto}
              alt="Person Holding Phone"
              className="w-72 md:w-96 lg:w-full max-w-xl relative z-10 object-cover rounded"
            />
          </div>

          {/* Spark Elements */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full shadow-lg animate-ping" />
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full shadow-lg animate-ping delay-300" />
        </div>
      </div>
    </div>
  );
};

export default CryptoCurrency;
