import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-linear-to-r from-blue-500 to-teal-400 text-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">

                {/* Logo & Description */}
                <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                            <span className="text-blue-500 font-bold text-lg">C</span>
                        </div>
                        <span className="font-bold text-xl">ChatNest</span>
                    </div>
                    <p className="text-sm max-w-xs">
                        Connect, chat, and feel at home. ChatNest makes communication safe, fast, and easy.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold text-lg">Quick Links</h3>
                    <ul className="space-y-1 text-sm">
                        <li className="hover:underline cursor-pointer">Home</li>
                        <li className="hover:underline cursor-pointer">Features</li>
                        <li className="hover:underline cursor-pointer">Pricing</li>
                        <li className="hover:underline cursor-pointer">About</li>
                        <li className="hover:underline cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="flex flex-col space-y-2">
                    <h3 className="font-semibold text-lg">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-200 transition">Facebook</a>
                        <a href="#" className="hover:text-gray-200 transition">Twitter</a>
                        <a href="#" className="hover:text-gray-200 transition">Instagram</a>
                        <a href="#" className="hover:text-gray-200 transition">LinkedIn</a>
                    </div>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="mt-8 text-center text-sm text-white/80">
                &copy; {new Date().getFullYear()} ChatNest. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
