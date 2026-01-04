import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <section className="mb-2 mt-2 bg-linear-to-r from-blue-500 to-teal-400 text-white min-h-screen flex items-center">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                
                {/* Text Content */}
                <motion.div
                    className="md:w-1/2 space-y-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Welcome to <span className="text-yellow-300">ChatNest</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/90">
                        Connect, chat, and feel at home. ChatNest makes communication safe, fast, and easy.
                    </p>
                    
                    {/* Call to Action Buttons */}
                    <div className="flex space-x-4 mt-4">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition"
                        >
                            Get Started
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold border border-white hover:bg-white/30 transition"
                        >
                            Learn More
                        </motion.button>
                    </div>
                </motion.div>

                {/* Image or Illustration */}
                <motion.div
                    className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                        alt="Chat Illustration"
                        className="w-80 md:w-[400px] animate-bounce"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Banner;
