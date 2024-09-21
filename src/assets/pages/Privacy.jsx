import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Privacy = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false); // State for title visibility
  const [isContentVisible, setIsContentVisible] = useState(false); // State for content visibility

  useEffect(() => {
    document.title = "Privacy Policy"; // Setting the document title

    // Delay to start animations after component mounts
    setTimeout(() => {
      setIsTitleVisible(true); // Trigger title fade-in animation
      setIsContentVisible(true); // Trigger content slide-in animation
    }, 100);
  }, []);

  return (
    <div className="bg-body min-h-screen font-[dm]">
      <Header />

      <div className="max-w-4xl mx-auto pt-4 pb-8 px-4 sm:px-6 lg:px-8">
        {/* Title with animation */}
        <h1
          className={`text-3xl sm:text-4xl font-[roboto] font-bold text-center mb-4 text-but transition-opacity duration-1000 ${
            isTitleVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Privacy Policy
        </h1>

        {/* Content with slide-in animation */}
        <div
          className={`space-y-6 transform transition-transform duration-1000 ${
            isContentVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Privacy Policy Sections */}
          <section className="bg-body shadow-2xl shadow-slate-900 rounded-3xl p-5 transition-all duration-300">
            <h2 className="text-lg sm:text-xl font-[open] font-medium text-but mb-4">
              Information We Collect
            </h2>
            <p className="text-black">
              We collect various types of information, including personal data
              provided by users during registration, purchase processes, or
              interactions with our services.
            </p>
          </section>

          <section className="bg-body shadow-2xl shadow-slate-900 rounded-3xl p-5 transition-all duration-300">
            <h2 className="text-lg sm:text-xl font-[open] font-medium text-but mb-4">
              How We Use Information
            </h2>
            <p className="text-black">
              The information we collect is used to provide, maintain, and
              improve our services, to communicate with users, and for security
              and legal compliance purposes.
            </p>
          </section>

          <section className="bg-body shadow-2xl shadow-slate-900 rounded-3xl p-5 transition-all duration-300">
            <h2 className="text-lg sm:text-xl font-[open] font-medium text-but mb-4">
              Sharing Your Information
            </h2>
            <p className="text-black">
              We do not share your personal information with third parties
              except as necessary to provide our services, comply with legal
              obligations, or with your explicit consent.
            </p>
          </section>

          <section className="bg-body shadow-2xl shadow-slate-900 rounded-3xl p-5 transition-all duration-300">
            <h2 className="text-lg sm:text-xl font-[open] font-medium text-but mb-4">
              Your Privacy Rights
            </h2>
            <p className="text-black">
              You have the right to access, correct, or delete your personal
              data. You may also object to certain data processing or request
              data portability.
            </p>
          </section>

          <section className="bg-body shadow-2xl shadow-slate-900 rounded-3xl p-5 transition-all duration-300">
            {/* Link to contact page */}
            <Link
              to={"/contact"}
              className="text-lg sm:text-xl font-[open] p-2 bg-but rounded-xl text-white hover:bg-body hover hover:text-black font-medium  mb-4"
            >
              Contact Us
            </Link>
            <p className="text-black">
              If you have any questions about this Privacy Policy or our data
              practices, please contact us via the contact information provided
              on our site.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy; // Exporting the Privacy component
