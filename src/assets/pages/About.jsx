import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  // State to manage visibility of title and content for animations
  const [isTitleVisible, setIsTitleVisible] = useState(false); // For title animation
  const [isContentVisible, setIsContentVisible] = useState(false); // For content slide-in animation

  useEffect(() => {
    // Set the document title to "About Us"
    document.title = "About Us";

    // Trigger animations shortly after the component mounts
    setTimeout(() => {
      setIsTitleVisible(true); // Make the title visible
      setIsContentVisible(true); // Slide in the content
    }, 100); // Delay for a smooth effect
  }, []);

  return (
    <div className="bg-body dark:bg-gray-900 dark:text-white  min-h-screen">
      <div className="max-w-4xl mx-auto dark:bg-gray-900 dark:text-white border border-gray-300 rounded-3xl   pt-4 pb-8 px-4 sm:px-6 lg:px-8">
        <h1
          className={`text-3xl sm:text-4xl font-[verdana]  font-bold text-center mb-4 transition-opacity duration-1000 ${
            isTitleVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          About Us
        </h1>

        <div
          className={`space-y-6 transform transition-transform duration-1000 ${
            isContentVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Mission Section */}
          <section className="bg-body  dark:bg-gray-800 dark:text-white  rounded-3xl p-5 transition-all duration-300">
            <h2 className="text-lg font-[verdana]  sm:text-xl font-medium  mb-4">
              Our Mission
            </h2>
            <p className="text-black justify-start text-left border-b-2  dark:text-white  font-[verdana]">
              We are dedicated to providing the best service for our customers,
              focusing on quality, innovation, and efficiency.
            </p>
          </section>

          {/* Values Section */}
          <section className="bg-body  dark:bg-gray-800 rounded-3xl p-5 transition-all duration-300">
            <h2 className="text-lg font-[verdana] sm:text-xl font-medium  mb-4">
              Our Values
            </h2>
            <p className="text-black justify-start text-left border-b-2  dark:text-white  font-[verdana]">
              Integrity, customer satisfaction, and continuous improvement are
              at the core of our business.
            </p>
          </section>

          {/* History Section */}
          <section className="bg-body dark:bg-gray-800  rounded-3xl p-5 transition-all duration-300">
            <h2 className="text-lg font-[verdana] sm:text-xl font-medium  mb-4">
              Our History
            </h2>
            <p className="text-black justify-start text-left border-b-2  dark:text-white  font-[verdana]">
              Founded in [Year], we have grown to become a leader in our
              industry, offering cutting-edge solutions to customers worldwide.
            </p>
          </section>

          {/* Team Section */}
          <section className="bg-body  dark:bg-gray-800  rounded-3xl p-5 transition-all duration-300">
            <h2 className="text-lg font-[verdana] sm:text-xl font-medium mb-4">
              Meet the Team
            </h2>
            <p className="text-black justify-start text-left border-b-2  dark:text-white  font-[verdana]">
              Our team of experienced professionals is committed to driving
              innovation and delivering results.
            </p>
          </section>

          {/* Contact Section */}
          <section className="bg-body  dark:bg-gray-800   rounded-3xl p-5 transition-all duration-300">
          <p
              className="text-lg sm:text-xl font-[verdana] p-2  rounded-xl text-black font-medium  mb-4"
            >
              Contact Us
            </p>
            <p className="text-black justify-start text-left border-b-2  dark:text-white font-[verdana]">
              Reach out to us for more information or to discuss how we can
              assist you.
              <Link to="/contact" className="underline pl-2">Contact</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
