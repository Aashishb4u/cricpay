import { useState, useEffect } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      title: "Visionary Leadership",
      description:
        "The leadership team at CricPay has a clear vision for the future of gaming. Their strategic decisions and commitment to innovation have significantly enhanced the gaming experience.",
    },
    {
      title: "Proven Industry Expertise",
      description:
        "With years of experience in the gaming industry, the leadership team understands market trends and user needs, ensuring top-tier services and engagement.",
    },
    {
      title: "Commitment to Excellence",
      description:
        "Their dedication to excellence reflects in every aspect of the platform, from seamless gameplay to community-driven initiatives that bring gamers together worldwide.",
    },
    {
      title: "Empowering the Gaming Community",
      description:
        "CricPay's leadership prioritizes the gaming community, fostering inclusivity, fair competition, and continuous enhancements to ensure players have the best experience.",
    },
    {
      title: "Strategic Growth & Expansion",
      description:
        "Under strong leadership, CricPay has expanded its reach globally, bringing cutting-edge technology and optimized gaming services to users across different regions.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative min-h-[400px] py-16 px-4 overflow-hidden">
      {/* Decorative Background */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative max-w-6xl mx-auto"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 shadow-2xl"
          >
            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2 text-6xl text-[#920323] opacity-30">
                &quot;
              </div>

              {/* Testimonial Content */}
              <div className="text-center space-y-6">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold text-[#920323]"
                >
                  {testimonials[activeIndex].title}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto"
                >
                  {testimonials[activeIndex].description}
                </motion.p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-8">
                <button
                  onClick={handlePrev}
                  className="group transform transition-all hover:scale-110"
                >
                  <div className="bg-[#920323]/20 hover:bg-[#e9345b] p-4 rounded-full transition-all">
                    <BiSolidLeftArrow className="text-white text-xl" />
                  </div>
                </button>

                {/* Indicators */}
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === activeIndex
                          ? "w-8 bg-[#920323]"
                          : "w-2 bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  className="group transform transition-all hover:scale-110"
                >
                  <div className="bg-[#920323]/20 hover:bg-[#e9345b] p-4 rounded-full transition-all">
                    <BiSolidRightArrow className="text-white text-xl" />
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Testimonials;
