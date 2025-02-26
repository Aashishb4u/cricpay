/* eslint-disable react/prop-types */
import { FaCreditCard } from "react-icons/fa";

const TcCard = ({ title, description, rating }) => {
  return (
    <div className="backdrop-blur-sm border border-gray-200 shadow-xl p-6 my-4 max-w-4xl mx-auto rounded hover:scale-105 transition-transform duration-300 hover:border-red-500/70  hover:shadow-red-500/10">
      <div className="flex md:flex-row flex-col items-center gap-6">
        <div className="flex-shrink-0 bg-white/5 p-3 rounded-lg backdrop-blur-sm">
          <FaCreditCard className="text-[#920323] w-12 h-12" />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-xl font-bold text-white/90 ">{title}</h2>
            <div className="flex">
              {[...Array(rating)].map((_, i) => (
                <span key={i} className="text-yellow-400/90">
                  ★
                </span>
              ))}
            </div>
          </div>
          <p className="text-gray-600 text-sm md:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TcCard;
