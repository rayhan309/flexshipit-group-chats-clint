import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; 
import { Link } from "react-router";

const Footer = () => {

  const links = <>
  <li className="hover:text-white transition hover:underline cursor-pointer">Home</li>
  <li className="hover:text-white transition hover:underline cursor-pointer">Features</li>
  <li className="hover:text-white transition hover:underline cursor-pointer">About</li>
  <li className="hover:text-white transition hover:underline cursor-pointer">Contact</li>
  </>

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Logo & Description */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
              C
            </div>
            <span className="text-xl font-bold">ChatNest</span>
          </div>
          <p className="text-gray-400 text-sm max-w-xs">
            Connect, chat, and feel at home. ChatNest makes communication safe, fast, and effortless.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
           {links}
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <button onClick={() => {
              window.location.origin = "https://www.facebook.com/profile.php?id=100082830604559"
            }} to="https://www.facebook.com/profile.php?id=100082830604559" className="hover:text-white transition">
              <FaFacebookF size={18} />
            </button>
            <a href="#" className="hover:text-white transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} ChatNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
