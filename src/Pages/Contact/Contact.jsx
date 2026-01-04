import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className="py-20 my-bg my-2">
            <div className="container mx-auto px-4">
                
                {/* Section Heading */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Have questions or feedback? We'd love to hear from you. Fill out the form or reach us directly via contact info.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12">
                    
                    {/* Contact Form */}
                    <motion.div
                        className="md:w-2/3 bg-white p-8 rounded-xl shadow-md"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <form className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Your Message"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="md:w-1/3 flex flex-col space-y-6 text-gray-700"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="flex items-start space-x-4">
                            <FaMapMarkerAlt className="text-blue-500 w-6 h-6 mt-1" />
                            <div>
                                <h4 className="font-semibold">Address</h4>
                                <p>123 ChatNest Street, Communication City, USA</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <FaPhone className="text-blue-500 w-6 h-6 mt-1" />
                            <div>
                                <h4 className="font-semibold">Phone</h4>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <FaEnvelope className="text-blue-500 w-6 h-6 mt-1" />
                            <div>
                                <h4 className="font-semibold">Email</h4>
                                <p>support@chatnest.com</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Optional Map Section */}
                <motion.div
                    className="mt-12 w-full h-64 rounded-xl overflow-hidden shadow-md"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019089991855!2d-122.41941508468178!3d37.77492977975939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0f1dfb7%3A0xf0e7aaf5a2f2bb0b!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        allowFullScreen=""
                        loading="lazy"
                        className="border-0"
                        title="ChatNest Location"
                    ></iframe>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
