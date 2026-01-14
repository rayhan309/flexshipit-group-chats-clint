 import { motion } from "framer-motion";
import { FaLock, FaUsers, FaShareAlt, FaRocket } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: FaLock,
      title: "Secure Messaging",
      description:
        "Advanced end-to-end encryption keeps your conversations private and protected."
    },
    {
      icon: FaUsers,
      title: "Group Conversations",
      description:
        "Create and manage group chats effortlessly with friends or teams."
    },
    {
      icon: FaShareAlt,
      title: "Media & File Sharing",
      description:
        "Share images, videos, and documents instantly without quality loss."
    },
    {
      icon: FaRocket,
      title: "Fast & Reliable",
      description:
        "Optimized infrastructure ensures smooth, real-time communication."
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white/70">
            Powerful Features for Modern Chat
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Everything you need for secure, fast, and meaningful conversations in one platform.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
