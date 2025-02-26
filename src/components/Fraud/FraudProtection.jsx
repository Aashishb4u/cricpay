import { useState } from 'react'
import { Lock, UserCheck, CreditCard, Smartphone, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from "framer-motion";

const FraudProtection = () => {

    const [expandedCard, setExpandedCard] = useState(null);
    const fraudProtectionCards = [
        { id: 1, title: "User Authentication", icon: Lock, description: "Secure multi-factor authentication system", content: "Our advanced user authentication system employs multiple layers of security, including biometric verification, SMS verification, and hardware tokens. We use industry-standard encryption protocols and regular security audits to ensure maximum protection." },
        { id: 2, title: "Identity Verification", icon: UserCheck, description: "Real-time identity verification checks", content: "Comprehensive identity verification system that includes document verification, facial recognition, and cross-reference checks with global databases. Our AI-powered system can detect fraudulent documents and suspicious patterns in real-time." },
        { id: 3, title: "Transaction Monitoring", icon: CreditCard, description: "24/7 transaction surveillance system", content: "Continuous monitoring of all transactions using AI and machine learning algorithms to detect suspicious patterns. Our system analyzes hundreds of data points in real-time to prevent fraudulent transactions before they occur." },
        { id: 4, title: "Data Encryption", icon: Smartphone, description: "End-to-end data protection", content: "Military-grade encryption for all sensitive data, both at rest and in transit. We use the latest encryption standards and regularly update our security protocols to stay ahead of emerging threats." }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-wider">FRAUD PROTECTION</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Keep your gaming transactions secure with advanced fraud detection. Our cybersecurity solutions protect your digital assets.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {fraudProtectionCards.map((card) => {
                    const Icon = card.icon;
                    const isExpanded = expandedCard === card.id;

                    return (
                        <div
                            key={card.id}
                            className={`bg-white backdrop-blur-sm border border-gray-200 rounded-lg transition-all duration-300 
                            hover:border-red-500/70 shadow-lg hover:shadow-red-500/10 ${isExpanded ? 'p-6' : 'p-6'
                                }`}
                        >
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-red-50 rounded-lg">
                                    <Icon className="w-6 h-6 text-[#920323]" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {card.description}
                                    </p>
                                    <button
                                        onClick={() => setExpandedCard(isExpanded ? null : card.id)}
                                        className="flex items-center text-sm text-gray-600 hover:text-[#920323] transition-all duration-300"
                                    >
                                        {isExpanded ? 'Show less' : 'Learn more'}
                                        {isExpanded ? (
                                            <ChevronUp className="w-4 h-4 ml-1 transition-transform duration-300" />
                                        ) : (
                                            <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-300" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {isExpanded && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-4 pt-4 border-t border-gray-200 text-gray-600 text-sm"
                                >
                                    {card.content}
                                </motion.div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FraudProtection;