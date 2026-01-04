import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="py-20 my-bg mb-2">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-12">
                
                {/* Image or Illustration */}
                <motion.div
                    className="md:w-1/2 mb-10 md:mb-0"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/4140/4140041.png"
                        alt="About ChatNest"
                        className="w-full md:w-[400px] mx-auto"
                    />
                </motion.div>

                {/* Text Content */}
                <motion.div
                    className="md:w-1/2 space-y-6 text-center md:text-left"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
                        About ChatNest
                    </h2>
                    <p className="text-gray-600 text-lg md:text-xl">
                        ChatNest was created with a mission to make communication effortless, secure, and fun. 
                        Our platform connects people around the world and ensures a seamless chatting experience 
                        for everyone.
                    </p>
                    <p className="text-gray-600 text-lg md:text-xl">
                        Whether you want to chat one-on-one or with a group, share media, or enjoy a safe messaging 
                        environment, ChatNest is your go-to app for staying connected.
                    </p>
                    <button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
                        Learn More
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
