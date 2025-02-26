import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from "framer-motion";
import { videos } from '../../lib/assets';

function InsighfulData() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);
    return (
        <div className=" bg-white mt-10 px-4 sm:px-6 lg:px-30 text-primary p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-25 items-center">
                    {/* Left Column */}
                    <div className="space-y-4 sm:space-y-6 pb-8 md:pb-0">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                            <span className="text-[#920323]">INSIGHTFUL</span> DATA
                            <br />
                            <span className="text-[#920323]">RICH</span> ANALYTICS
                        </h1>

                        <p className="text-primary text-base sm:text-lg leading-relaxed">
                            Leverage real-time insights to understand payment trends, optimize
                            strategies, and drive growth in emerging markets with CricPays
                            data-driven platform.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                            <FeatureCard
                                width="100%"
                                title="Real-Time Data Access"
                                description="Instantly access detailed, data-rich reports to make informed decisions and adapt to dynamic market trends."
                            />

                            <FeatureCard
                                width="100%"
                                title="Enhanced Business Growth"
                                description="Utilize comprehensive insights to plan effective marketing strategies, manage budgets efficiently, and expand seamlessly into new regions."
                            />
                        </div>
                        <button className="border-2 border-[#FF0000] bg-transparent text-[#920323] px-10 py-3 rounded-full text-lg hover:bg-[#e9345b] hover:text-white transition-all duration-300">
                            Learn More
                        </button>
                    </div>

                    {/* Right Column */}
                    <div className="relative p-4 sm:p-8 lg:p-20 w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
                        {/* Background Container */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#00A6FB] to-[#00A6FB] opacity-20 blur-3xl -z-10" />

                            {/* Circular Gradient Shape */}
                            <div className="absolute top-[11%] left-[22%] lg:w-70 lg:h-138 bg-gradient-to-b from-blue-500 to-orange-300 rounded-xl opacity-20"></div>

                            <motion.div
                                className="absolute w-full h-full flex justify-center items-center"
                                animate={{ y: [-10, 10, -10] }}  // Moves up and down
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <svg width="100%" height="150" viewBox="0 0 500 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M 15 1 Q 10 200, 300 60 T 350 350"
                                        stroke="url(#grad1)"
                                        strokeWidth="4"
                                        fill="transparent"
                                    />
                                    {/* Gradient Definition */}
                                    <defs>
                                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{ stopColor: "yellow", stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: "blue", stopOpacity: 1 }} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="absolute top-[35%] left-[2%] w-4 h-4 bg-black rounded-full opacity-80"></div>
                                <div className="absolute bottom-[35%] right-[10%] w-5 h-5 bg-black rounded-full opacity-80"></div>

                            </motion.div>


                        </div>

                        {/* Video Container */}
                        <div className="relative border-1 border-sky-200/50 rounded-2xl h-[300px] sm:h-[400px] lg:h-[550px] bg-black/50">
                            <video
                                ref={videoRef}
                                className="p-2 sm:p-5 w-full h-full object-cover rounded-xl"
                                muted
                                playsInline
                                autoPlay
                                loop
                            >
                                <source src={videos.chat} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FeatureCard({ title, description }) {
    return (
        <div className="bg-white p-4 sm:p-6 rounded-xl border border-red-500 transition-colors duration-300 h-full">
            <div>
                <h3 className="text-base sm:text-lg font-bold mb-2">{title}</h3>
                <p className="text-primary text-sm sm:text-base">{description}</p>
            </div>
        </div>
    );
}
FeatureCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default InsighfulData;
