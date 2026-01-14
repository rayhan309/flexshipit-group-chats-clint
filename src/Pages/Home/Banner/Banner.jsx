import { motion } from "framer-motion";
import logo from "../../../../public/logo.png";
import { use } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { Link } from "react-router";

const Banner = () => {
  const {user} = use(AuthContext);
  // console.log(user);
  return (
    <div>
      <section className="relative my-2 min-h-screen bg-linear-to-br from-blue-600/10 via-indigo-600/10 to-teal-500/5 text-white flex items-center overflow-hidden">
        {/* Background Blur Shapes */}
        <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="space-y-6"
          >
            <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-medium">
              🚀 Next-Gen Chat Platform
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Welcome to <span className="text-primary">ChatNest</span>
            </h1>

            <p className="text-lg text-white/90 max-w-xl">
              A modern and secure real-time messaging platform where
              conversations feel natural, fast, and reliable.
            </p>

            {/* Feature Points */}
            <div className="flex gap-6 text-sm text-white/90">
              <span>🔒 Secure</span>
              <span>⚡ Fast</span>
              <span>💬 Real-time</span>
            </div>

            {/* CTA */}
            <div className="flex gap-4 pt-4">
              <Link to={user ? '/chats' : '/login'} className="btn btn-primary">
                Get Started
              </Link>
              <button className="btn btn-outline btn-primary">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Right Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="flex justify-center"
          >
            <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-6 w-80 md:w-96 shadow-2xl">
              <div className="space-y-3">
                <div className="h-4 w-1/2 bg-white/40 rounded"></div>
                <div className="h-4 w-3/4 bg-white/30 rounded"></div>
                <div className="h-4 w-2/3 bg-white/20 rounded"></div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="">
                  <img src={logo} alt="logo" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
