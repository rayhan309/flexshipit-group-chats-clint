import React from "react";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "For individuals getting started",
      features: [
        "Basic chat functionality",
        "Limited group chats",
        "Standard support"
      ]
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "/month",
      description: "Best for active users",
      popular: true,
      features: [
        "Unlimited messaging",
        "Up to 50 members per group",
        "Media & file sharing",
        "Priority support"
      ]
    },
    {
      name: "Premium",
      price: "$19.99",
      period: "/month",
      description: "For teams & power users",
      features: [
        "Unlimited chats & groups",
        "Advanced security features",
        "24/7 priority support",
        "Exclusive themes & stickers"
      ]
    }
  ];

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
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Choose the plan that fits your communication needs. No hidden fees.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl p-8 border transition duration-300
                ${
                  plan.popular
                    ? "border-blue-600 shadow-xl scale-[1.03] bg-white"
                    : "border-gray-200 bg-white hover:shadow-lg"
                }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute top-[-12px] right-6 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {plan.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {plan.description}
              </p>

              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-500 ml-1">
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <FaCheck className="text-blue-600 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition
                  ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-gray-300 text-gray-800 hover:bg-gray-100"
                  }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
