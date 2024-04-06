import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll for smooth scrolling
import logo from "../assets/logo.jpg"

const Header = () => {
  return (
    <div className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-8 mr-4" />
  
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          About
        </Link>

        
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          Contact
        </Link>
        <Link
          to="founder"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          Founder
        </Link>
        <Link
          to="gallery"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          Gallery
        </Link>
        <Link
          to="work"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer"
        >
          Our Work
        </Link>
      </div>
    </div>
  );
};

export default Header;
