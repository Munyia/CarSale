import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone,} from 'react-icons/fa';
import axios from 'axios';

const mockContactInfo = {
  phone: '+1 *****',
  email: 'info@carsale.com',
  address: 'New York, USA'
};

const Footer = () => {
  const [contactInfo, setContactInfo] = useState(null); // Initialize with null

  useEffect(() => {
    // Simulate data fetching with mock data
    setTimeout(() => {
      setContactInfo(mockContactInfo);
    }, 1000); // Simulate network delay
  }, []);

  // Handle case where contactInfo is not yet available
  if (!contactInfo) {
    return <div>Loading...</div>;
  }

  return (
    <footer className="bg-but text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h4 className="text-lg text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/terms"
                  className="text-white hover:text-black transition duration-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-white hover:text-black transition duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-black transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/carlisting"
                  className="text-white hover:text-black transition duration-300"
                >
                  Car Listing
                </Link>
                
              </li>
              <li>
              <Link
                  to="/checkout"
                  className="text-white hover:text-black transition duration-300"
                >
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 hover:text-black">
                <FaPhone className="text-xl" />
                <span>{contactInfo.phone}</span>
              </li>
              <li className="flex items-center space-x-2 hover:text-black">
                <FaEnvelope className="text-xl" />
                <span>{contactInfo.email}</span>
              </li>
              <li className="text-white">{contactInfo.address}</li>
            </ul>
          </div>

             <div className="text-center mb-6">
          <h4 className="text-lg text-white font-bold mb-4">Follow Us</h4>
          <div className="flex justify-center space-x-4">
            <Link
              to="#"
              className="text-black hover:text-white transition duration-300"
            >
              <FaFacebookF className="text-2xl hover:scale-150 hover:text-white transition-transform duration-300" />
            </Link>
            <Link
              to="#"
              className="text-black hover:text-white transition duration-300"
            >
              <FaTwitter className="text-2xl hover:scale-150 hover:text-white transition-transform duration-300" />
            </Link>
            <Link
              to="#"
              className="text-black hover:text-white transition duration-300"
            >
              <FaInstagram className="text-2xl hover:scale-150 hover:text-white transition-transform duration-300" />
            </Link>
            <Link
              to="#"
              className="text-black hover:text-white transition duration-300"
            >
              <FaLinkedin className="text-2xl hover:scale-150 hover:text-white transition-transform duration-300" />
            </Link>
          </div>
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