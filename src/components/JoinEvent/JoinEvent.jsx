import { useState } from 'react';
import { assets } from '../../lib/assets';

function JoinEvent() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        description: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="bg-white flex flex-col items-center px-4 py-12">
            {/* Logo Section */}
            <div className="mb-8">
                <img
                    src={assets.logo}
                    alt="CricPay Logo"
                    className="h-40 w-auto"
                />
            </div>

            {/* Main Content Container */}
            <div className="w-full max-w-4xl bg-white backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-red-500/10">
                <h2 className="text-6xl font-bold mb-10 text-center bg-[#920323] bg-clip-text text-transparent">
                    Join Our Event
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Form Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-[#920323] text-sm font-medium">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Enter your first name"
                                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-red-500/10 text-primary placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[#920323] text-sm font-medium">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Enter your last name"
                                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-red-500/10 text-primary placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[#920323] text-sm font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-red-500/10 text-primary placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[#920323] text-sm font-medium">Company</label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Enter your company name"
                                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-red-500/10 text-primary placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[#920323] text-sm font-medium">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-red-500/10 text-primary placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300"
                            />
                        </div>

                        <div className="space-y-2 md:col-span-2">
                            <label className="text-[#920323] text-sm font-medium">Description</label>
                            <input
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Brief description"
                                className="w-full px-4 py-3 rounded-lg bg-white/50 border border-red-500/10 text-primary placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-2 focus:ring-red-400/20 transition-all duration-300"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center mt-8">
                        <button
                            type="submit"
                            className="px-12 py-4 bg-[#920323] text-white font-bold rounded-lg 
                                     transform hover:scale-105 hover:shadow-lg hover:shadow-[#4CAF50]/20 
                                     active:scale-95 transition-all duration-300 uppercase tracking-wider"
                        >
                            Join Event
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default JoinEvent;
