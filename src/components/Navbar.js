import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">
          <Link to="/" className="hover:text-gray-300 transition duration-300">
            FullStack Courses
          </Link>
        </div>
        <div className="space-x-6">
          <Link
            to="/"
            className="text-white text-lg hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-lg hover:text-gray-300 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/courses"
            className="text-white text-lg hover:text-gray-300 transition duration-300"
          >
            Courses
          </Link>
          <Link
            to="/internships"
            className="text-white text-lg hover:text-gray-300 transition duration-300"
          >
            Internships
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg hover:text-gray-300 transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
