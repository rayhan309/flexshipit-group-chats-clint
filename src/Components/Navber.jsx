import { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import logo from "../assets/logo.png";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOutUser } = use(AuthContext);
  console.log(user);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = (
    <>
      <li className="hover:underline cursor-pointer">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {user && (
        <li className="hover:underline cursor-pointer">
          <NavLink to={"/chats"}>Chats</NavLink>
        </li>
      )}
      <li className="hover:underline cursor-pointer">
        <NavLink to={"/features"}>Features</NavLink>
      </li>
      <li className="hover:underline cursor-pointer">
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li className="hover:underline cursor-pointer">
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-gray-900/10 p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link className="flex items-center space-x-2">
          <img className="rounded-full w-10 h-10" src={logo} alt="chats logo" />

          <span className="font-semibold text-2xl"><span className="text-primary">Chat</span>Nest</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          {links}
        </ul>

        {/* Desktop Action Buttons */}
        {user ? (
          <div
            title={user?.displayName}
            onClick={() => {
              signOutUser();
            }}
          >
            <img
              className="w-10 h-10 hidden md:block cursor-pointer rounded-full"
              src={user?.photoURL}
              alt={user?.displayName}
            />
          </div>
        ) : (
          <div className="hidden md:flex space-x-4">
            <Link
              to={"/login"}
              className="btn btn-outline btn-primary"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="btn btn-primary"
            >
              Sign Up
            </Link>
          </div>
        )}

        {/* Mobile Hamburger Menu */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={toggleMenu}
        >
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
        <div className="md:hidden my-bg mt-3 text-white px-4 pt-4 pb-6 space-y-4">
          <ul className="space-y-3">{links}</ul>
          {user ? (
            <button
              onClick={() => {
                signOutUser();
              }}
              className="bg-white text-blue-500 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              LogOut
            </button>
          ) : (
            <div className="flex flex-col space-y-3 mt-4">
              <Link
                to={"/login"}
                className="bg-white text-blue-500 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="bg-white text-blue-500 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navber;
