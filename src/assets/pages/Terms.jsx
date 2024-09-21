import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Terms = () => {
  const [isTitleVisible, setIsTitleVisible] = useState(false); // State for title animation
  const [isContentVisible, setIsContentVisible] = useState(false); // State for content slide-in animation

  useEffect(() => {
    document.title = "Terms of Service"; // Set the document title

    // Trigger animations after a slight delay
    setTimeout(() => {
      setIsTitleVisible(true); // Show title
      setIsContentVisible(true); // Show content
    }, 100); // Delay to start animations
  }, []);

  return (
    <div className="bg-body py-5 dark:bg-gray-900 dark:text-white min-h-screen font-[dm]">

      <div className="max-w-4xl dark:bg-gray-800 rounded-3xl dark:text-white mx-auto pt-4 pb-8 px-4 sm:px-6 lg:px-8">
        {/* Title with animation */}
        <h1
          className={`text-3xl sm:text-4xl font-[roboto] font-bold text-center mb-8 text-but transition-opacity duration-1000 ${
            isTitleVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Terms of Service
        </h1>

        {/* Content with slide-in animation */}
        <div
          className={`space-y-6 transform transition-transform duration-1000 ${
            isContentVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Section: Introduction */}
          <section className="bg-body dark:bg-gray-900 dark:text-white shadow-2xl shadow-slate-900 rounded-3xl p-5 transition-all duration-300">
            <h2 className="text-lg sm:text-xl font-[open] font-medium text-but mb-4">
              1. Introduction
            </h2>
            <p className="text-black dark:text-white">
       *********************************************************************************
            </p>
          </section>

          {/* Section: Intellectual Property Rights */}
          <section className="bg-body dark:bg-gray-900 dark:text-white shadow-2xl shadow-slate-900 rounded-3xl p-5 transition-all duration-300">
            <h2 className="text-lg sm:text-xl font-[open] font-medium text-but mb-4">
              2. Intellectual Property Rights
            </h2>
            <p className="text-black dark:text-white">
            *******************************************************************************
            </p>
          </section>

          {/* Section: Restrictions */}
          <section className="bg-body dark:bg-gray-900 dark:text-white shadow-2xl shadow-slate-900 rounded-3xl p-5 transition-all duration-300">
            <h2 className="text-lg sm:text-xl font-[open] font-medium text-but mb-4">
              3. Restrictions
            </h2>
            <p className="text-black dark:text-white">
           ************************************************************************************
            </p>
          </section>

          {/* Section: Limitation of Liability */}
          <section className="bg-body dark:bg-gray-900 dark:text-white shadow-2xl shadow-slate-900 rounded-3xl p-5 transition-all duration-300">
            <h2 className="text-lg sm:text-xl font-[open] font-medium text-but mb-4">
              4. Limitation of Liability
            </h2>
            <p className="text-black dark:text-white">
       **********************************************************************************
            </p>
          </section>

          {/* Section: Governing Law */}
          <section className="bg-body dark:bg-gray-900 dark:text-white shadow-2xl shadow-slate-900 rounded-3xl p-5 transition-all duration-300">
            <h2 className="text-lg sm:text-xl font-[open] font-medium text-but mb-4">
              5. Governing Law
            </h2>
            <p className="text-black dark:text-white">
              **********************************************************************
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms; // Exporting the Terms component
