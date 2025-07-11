import React from "react";
import { FaClinicMedical, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="bg-white shadow-lg sticky p-4 top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaClinicMedical className="text-blue-600 text-2xl" />
            <h1 className="font-bold text-xl text-blue-800">MediCare+</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="hover:text-blue-600 text-blue-800 transition"
            >
              Home
            </a>
            <a
              href="#services"
              className="hover:text-blue-600 text-blue-800 transition"
            >
              Services
            </a>
            <a
              href="#doctors"
              className="hover:text-blue-600 text-blue-800 transition"
            >
              Doctors
            </a>
            <a
              href="#eservices"
              className="hover:text-blue-600 text-blue-800 transition"
            >
              Emergency
            </a>
            <a
              href="#pharmacy"
              className="hover:text-blue-600 text-blue-800 transition"
            >
              Pharmacy
            </a>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-xl focus:outline-none"
          >
            {isMenuOpen ? <FaTimes className="text-blue-800" /> : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center space-y-8 text-blue-800 text-2xl">
          <a
            href="#home"
            className="hover:text-blue-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#services"
            className="hover:text-blue-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#services"
            className="hover:text-blue-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Doctors
          </a>
          <a
            href="#eservices"
            className="hover:text-blue-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Emergency
          </a>
          <a
            href="#pharmacy"
            className="hover:text-blue-200 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Pharmacy
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
