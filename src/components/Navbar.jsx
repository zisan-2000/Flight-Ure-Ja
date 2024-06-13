import { NavLink } from "react-router-dom";

const Navbar = ({ toggleLanguage }) => {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700">
      <div className="container mx-auto flex items-center justify-between px-4 py-6">
        <div className="flex items-center">
          <h1 className="text-white text-3xl font-extrabold tracking-wider">
            উড়ে যা ডট কম
          </h1>
        </div>
        <div className="flex space-x-8">
          <NavLink
            exact
            to="/"
            className="relative text-white hover:text-yellow-500 transition duration-300 font-semibold text-lg"
            activeClassName="text-yellow-500"
          >
            <span className="block h-0.5 bg-yellow-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            <span className="block px-2 py-1 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300 rounded-md">
              Home
            </span>
          </NavLink>
          <NavLink
            to="/about"
            className="relative text-white hover:text-yellow-500 transition duration-300 font-semibold text-lg"
            activeClassName="text-yellow-500"
          >
            <span className="block h-0.5 bg-yellow-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            <span className="block px-2 py-1 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300 rounded-md">
              About
            </span>
          </NavLink>
          <NavLink
            to="/flights"
            className="relative text-white hover:text-yellow-500 transition duration-300 font-semibold text-lg"
            activeClassName="text-yellow-500"
          >
            <span className="block h-0.5 bg-yellow-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            <span className="block px-2 py-1 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300 rounded-md">
              Flights
            </span>
          </NavLink>
          <NavLink
            to="/hotels"
            className="relative text-white hover:text-yellow-500 transition duration-300 font-semibold text-lg"
            activeClassName="text-yellow-500"
          >
            <span className="block h-0.5 bg-yellow-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            <span className="block px-2 py-1 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300 rounded-md">
              Hotels
            </span>
          </NavLink>
          <NavLink
            to="/reviews"
            className="relative text-white hover:text-yellow-500 transition duration-300 font-semibold text-lg"
            activeClassName="text-yellow-500"
          >
            <span className="block h-0.5 bg-yellow-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            <span className="block px-2 py-1 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300 rounded-md">
              Reviews
            </span>
          </NavLink>
          <NavLink
            to="/contact"
            className="relative text-white hover:text-yellow-500 transition duration-300 font-semibold text-lg"
            activeClassName="text-yellow-500"
          >
            <span className="block h-0.5 bg-yellow-500 absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            <span className="block px-2 py-1 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300 rounded-md">
              Contact
            </span>
          </NavLink>
        </div>
        <button
          className="bg-yellow-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          onClick={toggleLanguage}
        >
          BN/EN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
