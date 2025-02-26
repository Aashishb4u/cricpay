import InsighfulData from '../../components/InsighfulData/InsighfulData';
import SubFeature from '../../components/SubFeature/SubFeature';
import CoreFeature from '../../components/CoreFeature/CoreFeature';
import { assets } from '../../lib/assets';

const Features = () => {
    return (
        <main className='min-h-screen bg-gradient-to-br  '>
            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="text-center animate-fade-in">
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold font-poppins bg-[#920323] bg-clip-text text-transparent">
                        FEATURES
                    </h1>
                    <p className="text-primary text-base md:text-lg max-w-2xl mx-auto mt-6">
                        CricPay streamlines global payments with a single API, offering secure,
                        scalable solutions to enhance transactions and drive business growth.
                    </p>
                </div>

                {/* Hero Image */}
                <div className='mt-16 animate-slide-bottom'>
                    <img
                        src={assets.payment}
                        className='w-full max-w-5xl h-[300px] md:h-[400px] lg:h-[500px] mx-auto rounded-2xl object-cover'
                        alt="Features Hero"
                        loading="lazy"
                    />
                </div>
            </section>

            {/* Features Grid */}
            <section className="animate-fade-in">
                <InsighfulData />
                <SubFeature />
                <CoreFeature />
            </section>
        </main>
    );
}

export default Features;
