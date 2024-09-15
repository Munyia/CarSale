import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-but text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-white hover:text-black transition duration-300">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white hover:text-black transition duration-300">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-black transition duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/careers" className="text-white hover:text-black transition duration-300">Careers</Link>
              </li>
            </ul>
          </div>
                {/* Contact Us */}
                <div>
            <h4 className="text-lg text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 hover:text-black">
                <FaPhone className="text-xl" />
                <span>+1 ********</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-black">
                <FaEnvelope className="text-xl" />
                <span>info@carsale.com</span>
              </li>
              <li className="text-white">
                New York, USA
              </li>
            </ul>
          </div>
          
          {/* Subscribe */}
          <div>
            <h4 className="text-lg text-white font-bold mb-4">Subscribe to Our Newsletter</h4>
            <form className="flex flex-col md:flex-row items-center">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="px-4 py-2 rounded-lg mb-2 md:mb-0 md:mr-2 w-full border border-gray-700 bg-gray-800 text-white placeholder-gray-400" 
              />
              <button className="bg-white text-but px-4 py-2 rounded-lg font-semibold hover:bg-black hover:text-white transition duration-300">
                Subscribe
              </button>
            </form>
          </div>

    
        </div>

        {/* Social Media */}
        <div className="text-center mb-6">
          <h4 className="text-lg text-white font-bold mb-4">Follow Us</h4>
          <div className="flex justify-center space-x-4">
            <Link to="#" className="text-black hover:text-white transition duration-300">
              <FaFacebookF className="text-2xl hover:scale-150 hover:text-white transition-transform duration-300" />
            </Link>
            <Link to="#" className="text-black hover:text-white transition duration-300">
              <FaTwitter className="text-2xl hover:scale-150 hover:text-white transition-transform duration-300" />
            </Link>
            <Link to="#" className="text-black hover:text-white transition duration-300">
              <FaInstagram className="text-2xl hover:scale-150 hover:text-white transition-transform duration-300" />
            </Link>
            <Link to="#" className="text-black hover:text-white transition duration-300">
              <FaLinkedin className="text-2xl hover:scale-150 hover:text-white transition-transform duration-300" />
            </Link>
          </div>
        </div>
        
        <div className="text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} CarSale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
