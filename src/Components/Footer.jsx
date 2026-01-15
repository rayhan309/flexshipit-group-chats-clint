import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router";
import logo from '../assets/logo.png'

const Footer = () => {
  // const navItems = [
  //   { name: "Home", id: "home" },
  //   { name: "About", id: "about" },
  //   { name: "Projects", id: "projects" },
  //   { name: "Skills", id: "skills" },
  //   { name: "Contact", id: "contact" },
  // ];

  const links = (
    <>
      <li className="hover:text-white transition hover:underline cursor-pointer">
        <Link to={'/'}>Home</Link>
      </li>
      <li className="hover:text-white transition hover:underline cursor-pointer">
        <Link to={'/features'}>Features</Link>
      </li>
      <li className="hover:text-white transition hover:underline cursor-pointer">
       <Link to={'/about'}>About</Link>
      </li>
      <li className="hover:text-white transition hover:underline cursor-pointer">
        <Link to={'/contact'}>Contact</Link>
      </li>
    </>
  );

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Logo & Description */}
        <div className="space-y-4">
           {/* Logo Section */}
        <Link className="flex items-center space-x-2">
          <img className="rounded-full w-10 h-10" src={logo} alt="chats logo" />

          <span className="font-semibold text-2xl"><span className="text-primary">Chat</span>Nest</span>
        </Link>
          <p className="text-gray-400 text-sm max-w-xs">
            Connect, chat, and feel at home. ChatNest makes communication safe,
            fast, and effortless.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">{links}</ul>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <Link to={'https://www.facebook.com/profile.php?id=100082830604559'} className="hover:text-white transition">
              <FaFacebookF size={18} />
            </Link>
            <Link to={'https://www.instagram.com/'} className="hover:text-white transition">
              <FaInstagram size={18} />
            </Link>
            <Link to={'https://www.linkedin.com/in/abu-rayhan-undefined-2514b5390'} className="hover:text-white transition">
              <FaLinkedinIn size={18} />
            </Link>
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
