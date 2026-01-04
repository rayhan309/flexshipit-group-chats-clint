import React from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaUsers, FaShareAlt, FaRocket } from 'react-icons/fa';

const Features = () => {
    const features = [
        {
            icon: <FaLock className="text-blue-500 w-8 h-8" />,
            title: "Secure Chat",
            description: "End-to-end encryption ensures your conversations stay private."
        },
        {
            icon: <FaUsers className="text-blue-500 w-8 h-8" />,
            title: "Group Chat",
            description: "Connect with friends, family, or colleagues easily."
        },
        {
            icon: <FaShareAlt className="text-blue-500 w-8 h-8" />,
            title: "Media Sharing",
            description: "Send photos, videos, and files instantly within chats."
        },
        {
            icon: <FaRocket className="text-blue-500 w-8 h-8" />,
            title: "Fast & Reliable",
            description: "Enjoy a smooth chatting experience with minimal delays."
        },
    ];

    return (
        <section className="py-20 mb-2 my-bg">
            <div className="container mx-auto px-4 text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-6 text-blue-600"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Key Features
                </motion.h2>
                <motion.p
                    className="text-gray-600 mb-12 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    ChatNest offers all the essential features to make your communication seamless, secure, and fun.
                </motion.p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="mb-4 flex justify-center">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-500 text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
