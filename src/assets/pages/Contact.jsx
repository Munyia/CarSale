import React from "react";
import { Link } from "react-router-dom"; // Importing Link for navigation
import Header from "../components/Header"; // Importing Header component
import Footer from "../components/Footer"; // Importing Footer component

const Contact = () => {
  return (
    <div className="dark:bg-gray-900 py-5 pb-5  dark:text-white">
      <div className="max-w-7xl dark:bg-gray-800 py-5 rounded-3xl dark:text-white bg-body font-[dm] shadow-2xl shadow-slate-900  mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <h1 className="text-3xl  font-[roboto] font-bold text-but  text-center">Contact Us</h1>

        {/* Contact Information Section */}
        <div className="grid bg-body p-5 rounded-lg dark:bg-gray-900 dark:text-white shadow-slate-900 shadow-2xl  grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-body dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-[open] font-semibold text-but mb-4">Get in Touch</h2>
            <p className="text-gray-600 dark:text-white mb-2">
              <strong>Phone:</strong> +1 234 567 890
            </p>
            <p className="text-gray-600 dark:text-white mb-2">
              <strong>Email:</strong> info@carsale.com
            </p>
            <p className="text-gray-600 dark:text-white mb-2">
              <strong>Address:</strong> 123 Car Sale St, New York, NY 10001
            </p>
            <p className="text-gray-600 dark:text-white">
              Our team is here to assist you with any inquiries you may have.
            </p>
          </div>

          <div className="bg-body dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-[open] font-semibold text-but mb-4">Follow Us</h2>
            <p className="text-gray-600 dark:text-white mb-2">Stay connected with us on social media:</p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-900 dark:text-white dark:hover:text-but hover:text-but transition duration-300">
                Facebook
              </Link>
              <Link to="#" className="text-gray-900 dark:text-white dark:hover:text-but hover:text-but transition duration-300">
                Twitter
              </Link>
              <Link to="#" className="text-gray-900 dark:text-white dark:hover:text-but hover:text-but transition duration-300">
                Instagram
              </Link>
              <Link to="#" className="text-gray-900 dark:text-white dark:hover:text-but hover:text-but transition duration-300">
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-body dark:bg-gray-900 dark:text-white shadow-slate-900 shadow-2xl  p-6 rounded-lg mb-12">
          <h2 className="text-xl font-[open] font-semibold text-but mb-4">Send Us a Message</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-none rounded-lg border shadow-slate-900 shadow-2xl focus:outline-none focus:ring-2 focus:ring-but"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded-lg border dark:bg-gray-800 dark:text-white dark:border-none  shadow-slate-900 shadow-2xl focus:outline-none focus:ring-2 focus:ring-but"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-none  shadow-slate-900 shadow-2xl rounded-lg border focus:outline-none focus:ring-2 focus:ring-but mt-4"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-none  shadow-slate-900 shadow-2xl rounded-lg border focus:outline-none focus:ring-2 focus:ring-but mt-4"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-but  text-white font-[open] shadow-slate-900 shadow-2xlpx-6 p-2 rounded-lg hover:bg-body hover:text-but transition duration-300 mt-4"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="bg-body dark:bg-gray-900 dark:text-white dark:border-none  p-6 rounded-3xl shadow-slate-900 shadow-2xl">
          <h2 className="text-xl font-[open] font-semibold text-but mb-4">Our Location</h2>
          <div className="h-64 ">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.123456789012!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1a2b3c4d5f%3A0x1234567890abcdef!2sCar%20Sale%20Location!5e0!3m2!1sen!2sus!4v1611234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; // Exporting the Contact component