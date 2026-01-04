import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const reviews = [
        {
            name: "Alice Johnson",
            text: "ChatNest makes staying connected effortless! The app is secure and super fast.",
            role: "Professional User",
        },
        {
            name: "Mark Thompson",
            text: "Best chat app I’ve ever used! Group chats are smooth and media sharing is easy.",
            role: "Student",
        },
        {
            name: "Sophia Lee",
            text: "I love ChatNest! The interface is clean, and I feel safe chatting with my friends.",
            role: "Entrepreneur",
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
                    What Our Users Say
                </motion.h2>
                <motion.p
                    className="text-gray-600 mb-12 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Real users, real experiences. See why people love ChatNest.
                </motion.p>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            className="bg-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="text-4xl text-blue-400 mb-4">
                                <FaQuoteLeft />
                            </div>
                            <p className="text-gray-700 mb-4">"{review.text}"</p>
                            <h3 className="font-semibold text-blue-600">{review.name}</h3>
                            <p className="text-gray-500 text-sm">{review.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
