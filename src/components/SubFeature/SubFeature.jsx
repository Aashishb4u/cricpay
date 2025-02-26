import { motion } from "framer-motion";
import { assets } from "../../lib/assets";

const SubFeature = () => {
    const images = [
        assets.PT1,
        assets.PT2,
        assets.PT3,
        assets.Ether,
        assets.Bitcoin,
      ];

    return (
        <section className="relative bg-gradient-to-b pb-4 from-white via-white to-white text-primary">
            {/* Hero Banner */}
            <div className="relative h-[500px] overflow-hidden">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    src={assets.banner}
                    className="w-full h-full object-cover opacity-40"
                    alt="Banner"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-400/50 via-gray-300/80 to-gray-300" />
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 relative -mt-96">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-white/95 to-white/95 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-red-400/50"
                >
                    <div className="grid lg:grid-cols-2 gap-16">
                        {/* Content Column */}
                        <div className="space-y-8">
                            <motion.h2
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl md:text-5xl font-bold"
                            >
                                <span className="bg-[#920323] bg-clip-text text-transparent">
                                    One API
                                </span>
                                <br />
                                <span className="text-primary">Easy Integration</span>
                            </motion.h2>
                            <div className="space-y-6 text-lg">
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-primary-200 leading-relaxed"
                                >
                                    Connect your business to multiple payment providers with a single REST API. No more complex onboarding processes or dealing with various payment standards.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="text-primary-300 leading-relaxed"
                                >
                                    Add new payment methods effortlessly with centralized updates and maintenance, ensuring a seamless global payment experience.
                                </motion.p>
                            </div>
                        </div>

                        {/* Payment Methods Display */}
                        <div className="space-y-10 overflow-hidden">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 }}
                                className="bg-gradient-to-br from-white to-white p-8 rounded-2xl shadow-lg border border-red-400/50"
                            >
                                {/* Payment Methods Slider */}
                                <div className="overflow-hidden rounded-xl bg-gray-400 p-6">
                                    <div className="flex w-max ">
                                        {[0, 1].map((i) => (
                                            <motion.div
                                                key={i}
                                                className="flex space-x-8 "
                                                initial={{ x: "0%" }}
                                                animate={{ x: "-100%" }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 20,
                                                    ease: "linear",
                                                }}
                                            >
                                                {images.map((src, index) => (
                                                    <motion.img
                                                        whileHover={{ scale: 1.15, rotate: 5 }}
                                                        transition={{ type: "spring", stiffness: 300 }}
                                                        key={index}
                                                        src={src}
                                                        alt={`Payment Method ${index + 1}`}
                                                        className="w-24 h-24 ml-5 bg-gray-700 rounded-xl shadow-lg"
                                                    />
                                                ))}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="mt-8 flex items-center justify-between border-t border-red-400/50 pt-8">
                                    <motion.h3
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.8, type: "spring" }}
                                        className="text-6xl font-bold bg-[#920323] bg-clip-text text-transparent"
                                    >
                                        100+
                                    </motion.h3>
                                    <p className="text-2xl text-primary font-medium">
                                        Global Payment Providers
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SubFeature;