import { motion } from "framer-motion";
import { Link } from "react-router";

const About = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Visual / Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative bg-linear-to-br px-2 md:px-0 from-blue-100 to-indigo-100 rounded-3xl p-10 shadow-lg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4140/4140041.png"
              alt="About ChatNest"
              className="w-72 mx-auto"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="space-y-6 px-4 md:px-0"
        >
          <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-100 px-4 py-1 rounded-full">
            About Us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white/80 leading-tight">
            <span className="text-primary">Built for Meaningful & Secure</span> Conversations
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            ChatNest is a modern communication platform designed to bring people closer through fast, secure, and intuitive messaging.
            We focus on privacy, performance, and simplicity—so you can communicate without distractions.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed">
            From private one-on-one conversations to dynamic group chats and media sharing, ChatNest delivers
            a reliable experience that feels natural, safe, and effortless.
          </p>

          <Link to={'/about'} className="btn btn-primary">
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
