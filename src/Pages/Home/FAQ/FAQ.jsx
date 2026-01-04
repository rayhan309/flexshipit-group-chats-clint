import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
    const faqs = [
        {
            question: "How do I create a ChatNest account?",
            answer: "Simply click on the 'Sign Up' button on the homepage and follow the registration steps. You can use your email or phone number."
        },
        {
            question: "Is my chat secure?",
            answer: "Yes! ChatNest uses end-to-end encryption to ensure that your conversations remain private and secure."
        },
        {
            question: "Can I use ChatNest on multiple devices?",
            answer: "Absolutely! You can log in to your account from your phone, tablet, or computer and access all your chats."
        },
        {
            question: "How can I upgrade to a premium plan?",
            answer: "Go to the 'Pricing' section, select your desired plan, and follow the checkout instructions to upgrade."
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <section className="py-20 my-bg mb-2">
            <div className="container mx-auto px-4 text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-6 text-blue-600"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Frequently Asked Questions
                </motion.h2>
                <motion.p
                    className="text-gray-600 mb-12 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Here are some of the most common questions about ChatNest.
                </motion.p>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-4 text-left">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl shadow-md p-6 cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-lg">{faq.question}</h3>
                                {openIndex === index ? (
                                    <FaChevronUp className="text-blue-500" />
                                ) : (
                                    <FaChevronDown className="text-blue-500" />
                                )}
                            </div>
                            {openIndex === index && (
                                <motion.p
                                    className="mt-4 text-gray-600"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {faq.answer}
                                </motion.p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
