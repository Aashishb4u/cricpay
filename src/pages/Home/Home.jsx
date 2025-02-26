import { useEffect, useState } from 'react';
import FraudProtection from '../../components/Fraud/FraudProtection';
import Marquee from '../../components/Marquee/Marquee';
import PaymentGateway from '../../components/PaymentGateway/PaymentGateway';
import InsighfulData from '../../components/InsighfulData/InsighfulData';
import SubFeature from '../../components/SubFeature/SubFeature';
import { assets } from '../../lib/assets';


function Home() {
    const [rotatedCards, setRotatedCards] = useState(new Set());

    useEffect(() => {
        const handleScroll = () => {
            document.querySelectorAll('.fraud-card').forEach((card) => {
                const rect = card.getBoundingClientRect();
                const cardId = card.getAttribute('data-id');

                if (rect.top < window.innerHeight * 0.75 && !rotatedCards.has(cardId)) {
                    setRotatedCards((prev) => new Set([...prev, cardId])); // Ensure state updates correctly
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [rotatedCards]);


    return (
        <div className="relative w-full overflow-hidden">
            {/* Updated Hero Section for Light Theme */}
            <div className="relative min-h-screen flex items-center bg-white">
                <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between">
                    <div className="max-w-3xl text-center md:text-left">
                        <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-gray-800">
                            Global<br />Payment Gateway<br />for Developing Markets
                        </h1>
                        <p className="text-2xl font-semibold text-gray-600">
                            Unlocking New Horizons For International<br />Growth
                        </p>
                        <button className="mt-8 border-2 border-[#e9345b] bg-transparent text-[#e9345b] px-10 py-3 rounded-full text-lg hover:bg-[#e9345b] hover:text-white transition-all duration-300">
                            Get Started
                        </button>
                    </div>
                    <div className="mt-8 md:mt-0 md:ml-10">
                        {/* Right side content (e.g., image or illustration) */}
                        <img src={assets.hero} alt="Hero illustration" className="w-full max-w-2xl" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-10 ">

                {/* Stats and About Cards */}
                <div className="grid lg:grid-cols-2 gap-8 mt-20 ">
                    {/* About Card */}
                    <div className="bg-white/90 backdrop-blur-lg p-8 md:p-10 rounded-2xl border border-red-200 transition-all duration-300 hover:shadow-lg">
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">About</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            CricPay, founded in 2011, specializes in state-of-the-art payment processing and gateway technology. With expertise in payment solutions, risk management, and AI-driven innovations, we empower merchants to streamline operations and safeguard revenue. Our mission is to revolutionize payment experiences and enable global reach for businesses.
                        </p>
                        <button className="border-2 border-[#e9345b] bg-transparent text-[#920323] px-10 py-3 rounded-full text-lg hover:bg-[#e9345b] hover:text-white transition-all duration-300">
                            Learn More
                        </button>
                    </div>

                    <div className="bg-white/90 backdrop-blur-lg p-8 md:p-10 rounded-2xl border border-red-200 transition-all duration-300 hover:shadow-lg">
                        <div className="grid grid-cols-2 gap-8 mb-10">
                            <div>
                                <div className="text-5xl font-bold text-[#920323] mb-4">50M+</div>
                                <p className="text-gray-600 text-lg">Over 50 million transactions processed with the highest success rate.</p>
                            </div>
                            <div className="border-l border-gray-200 pl-8">
                                <div className="text-5xl font-bold text-[#920323] mb-4">30+</div>
                                <p className="text-gray-600 text-lg">Available in over 30 languages to cater to a global audience.</p>
                            </div>
                        </div>
                        <div className="text-2xl text-[#920323] mb-2">⭐⭐⭐⭐⭐</div>
                        <p className="text-gray-600 text-lg">We are supported with over 30+ languages</p>
                    </div>
                </div>
            </div>

            {/* Feature Sections */}
            <FraudProtection />
            <Marquee />
            <PaymentGateway />
            <InsighfulData />
            <SubFeature />
        </div>

    )
}
export default Home;
