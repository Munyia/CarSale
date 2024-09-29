import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import Loader from "./Loader"; // Adjust the import path as needed

// Mock contact information for demonstration
const mockContactInfo = {
  phone: "+1 *****",
  email: "info@carsale.com",
  address: "New York, USA",
};

const Footer = () => {
  // State to hold contact information
  const [contactInfo, setContactInfo] = useState(null); // Initialize with null

  // Effect to simulate data fetching
  useEffect(() => {
    // Simulate network delay with setTimeout
    setTimeout(() => {
      setContactInfo(mockContactInfo); // Set the contact info after 1 second
    }, 1000);
  }, []);

  // Render loading state while fetching contact info
  if (!contactInfo) {
    return <Loader />; // Show Loader component until data is fetched
  }

  return (
    <footer className="bg-white dark:bg-gray-800 dark:text-white  py-4 text-black p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Links Section */}
          <div className="flex flex-col">
            <h4 className="text-lg font-[roboto] font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/terms"
                  className="text-black dark:text-white dark:hover:text-but font-[dm] hover:text-but transition duration-300 block"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-black font-[dm] dark:text-white dark:hover:text-but hover:text-but transition duration-300 block"
                  >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-black font-[dm] dark:text-white dark:hover:text-but hover:text-but transition duration-300 block"
              >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/carlisting"
                  className="text-black font-[dm] dark:text-white dark:hover:text-but hover:text-but transition duration-300 block"
                  >
                  Car Listing
                </Link>
              </li>
              <li>
                <Link
                  to="/checkout"
                  className="text-black font-[dm] dark:text-white dark:hover:text-but hover:text-but transition duration-300 block"
              >
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold font-[roboto] mb-4 text-center lg:text-left">
              Follow Us
            </h4>
            <div className="flex justify-center lg:justify-start space-x-4">
              {/* Social media icons */}
              <Link
                to="#"
                className="text-black hover:text-white transition duration-300"
              >
                <FaFacebookF className="text-2xl hover:scale-150 transition-transform duration-300" />
              </Link>
              <Link
                to="#"
                className="text-black hover:text-white transition duration-300"
              >
                <FaTwitter className="text-2xl hover:scale-150 transition-transform duration-300" />
              </Link>
              <Link
                to="#"
                className="text-black hover:text-white transition duration-300"
              >
                <FaInstagram className="text-2xl hover:scale-150 transition-transform duration-300" />
              </Link>
              <Link
                to="#"
                className="text-black hover:text-white transition duration-300"
              >
                <FaLinkedin className="text-2xl hover:scale-150 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col">
            <h4 className="text-lg font-[roboto] font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center font-[dm] space-x-2 hover:text-black">
                <FaPhone className="text-xl" />
                <span>{contactInfo.phone}</span>
              </li>
              <li className="flex items-center font-[dm] space-x-2 hover:text-black">
                <FaEnvelope className="text-xl font-[dm]" />
                <span>{contactInfo.email}</span>
              </li>
              <li>{contactInfo.address}</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-6 font-[open] dark:text-white  text-center text-gray-700">
          <p>&copy; {new Date().getFullYear()} CarSale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
