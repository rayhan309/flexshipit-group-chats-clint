import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I create a ChatNest account?",
      answer:
        "Click the Sign Up button on the homepage and complete the registration using your email or phone number."
    },
    {
      question: "Is my chat data secure?",
      answer:
        "Yes. ChatNest uses advanced end-to-end encryption to keep your conversations private and protected."
    },
    {
      question: "Can I use ChatNest on multiple devices?",
      answer:
        "Absolutely. You can access your account from multiple devices and sync chats seamlessly."
    },
    {
      question: "How do I upgrade my plan?",
      answer:
        "Visit the Pricing section, choose your preferred plan, and follow the secure checkout process."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white/70">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Quick answers to the most common questions about ChatNest.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl bg-white"
              >
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-blue-600"
                  >
                    <FaChevronDown />
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
