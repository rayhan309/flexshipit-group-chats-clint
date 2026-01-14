import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      name: "Alice Johnson",
      role: "Product Manager",
      text:
        "ChatNest makes team communication effortless. The speed, security, and clean UI are outstanding."
    },
    {
      name: "Mark Thompson",
      role: "University Student",
      text:
        "Group chats feel smooth and reliable. Media sharing is fast and works flawlessly."
    },
    {
      name: "Sophia Lee",
      role: "Startup Founder",
      text:
        "A beautifully designed chat platform that actually feels safe and professional to use."
    }
  ];

  return (
    <section className="pb-20 pt-16">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white/80">
            <span className="text-primary">Trusted</span> by Users Worldwide
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            See what our users say about their experience with ChatNest.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="relative my-bg rounded-2xl p-8 shadow-sm hover:shadow-2xl cursor-pointer transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="absolute top-6 right-6 ml-5 text-primary text-3xl" />

              <p className="text-gray-200 leading-relaxed mb-6 pr-3">
                “{review.text}”
              </p>

              <div className="flex items-center gap-4">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-primary">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
