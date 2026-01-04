import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';

const Navber = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-linear-to-r from-blue-500 to-teal-400 p-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                
                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <span className="text-blue-500 font-bold text-lg">C</span>
                    </div>
                    <span className="text-white font-bold text-xl">ChatNest</span>
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6 text-white font-medium">
                    <li className="hover:underline cursor-pointer"><NavLink to={'/'}>Home</NavLink></li>
                    <li className="hover:underline cursor-pointer">Features</li>
                    <li className="hover:underline cursor-pointer">Pricing</li>
                    <li className="hover:underline cursor-pointer">About</li>
                    <li className="hover:underline cursor-pointer"><NavLink to={'/contact'}>Contact</NavLink></li>
                </ul>

                {/* Desktop Action Buttons */}
                <div className="hidden md:flex space-x-4">
                    <Link to={'/login'} className="bg-white text-blue-500 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
                        Login
                    </Link>
                    <button className="bg-white text-blue-500 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
                        Sign Up
                    </button>
                </div>

                {/* Mobile Hamburger Menu */}
                <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-blue-400 text-white px-4 pt-4 pb-6 space-y-4">
                    <ul className="space-y-3">
                        <li className="hover:underline cursor-pointer">Home</li>
                        <li className="hover:underline cursor-pointer">Features</li>
                        <li className="hover:underline cursor-pointer">Pricing</li>
                        <li className="hover:underline cursor-pointer">About</li>
                        <li className="hover:underline cursor-pointer">Contact</li>
                    </ul>
                    <div className="flex flex-col space-y-3 mt-4">
                        <button className="bg-white text-blue-500 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
                            Login
                        </button>
                        <button className="bg-white text-blue-500 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
                            Sign Up
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navber;
