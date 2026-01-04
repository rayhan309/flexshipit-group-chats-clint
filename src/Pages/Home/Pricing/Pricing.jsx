import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
    const plans = [
        {
            name: "Free",
            price: "$0",
            features: [
                "Basic Chat Features",
                "Limited Group Chats",
                "Standard Support",
            ],
        },
        {
            name: "Pro",
            price: "$9.99/mo",
            features: [
                "Unlimited Chat",
                "Group Chats with up to 50 people",
                "Priority Support",
                "Media Sharing",
            ],
        },
        {
            name: "Premium",
            price: "$19.99/mo",
            features: [
                "Unlimited Chat & Groups",
                "Advanced Security Features",
                "24/7 Priority Support",
                "Exclusive Stickers & Themes",
            ],
        },
    ];

    return (
        <section className="py-20 my-bg mb-2">
            <div className="container mx-auto px-4 text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-6 text-blue-600"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Pricing Plans
                </motion.h2>
                <motion.p
                    className="text-gray-600 mb-12 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Choose a plan that fits your needs. ChatNest offers flexible pricing for everyone.
                </motion.p>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            className={`rounded-xl p-8 shadow-md hover:shadow-xl transition cursor-pointer ${
                                plan.name === "Pro" ? "bg-blue-500 text-white" : "bg-white text-gray-700"
                            }`}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                            <p className="text-3xl font-bold mb-6">{plan.price}</p>
                            <ul className="mb-6 space-y-2 text-left">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center">
                                        <span className="mr-2 text-green-500 font-bold">✔</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={`w-full px-6 py-3 rounded-lg font-semibold transition ${
                                    plan.name === "Pro"
                                        ? "bg-white text-blue-500 hover:bg-gray-100"
                                        : "bg-blue-500 text-white hover:bg-blue-600"
                                }`}
                            >
                                Choose Plan
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
