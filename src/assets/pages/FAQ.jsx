import React, { useState, useEffect } from "react";
import Header from "../components/Header"; // Importing Header component
import Footer from "../components/Footer"; // Importing Footer component

const FAQ = () => {
  // State to keep track of which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  // Effect to set the document title when the component mounts
  useEffect(() => {
    document.title = "FAQ - Your Company Name"; // Update the page title
  }, []);

  // Array of FAQ items
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy. If you are not satisfied with your purchase, you can return it within 30 days for a full refund.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order is shipped, we will send you a tracking number via email. You can use this number to track your order on our website.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit cards, PayPal, bank transfers, and cryptocurrency as valid payment methods.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to many countries worldwide. Shipping costs and times may vary depending on the destination.",
    },
    {
      question: "How do I contact customer support?",
      answer:
        "You can contact our customer support team via email at support@company.com or by phone at (123) 456-7890.",
    },
  ];

  // Function to toggle the visibility of the answer
  const toggleAnswer = (index) => {
    setOpenIndex(index === openIndex ? null : index); // Close if already open, otherwise open the selected one
  };

  return (
    <div className="bg-body py-5  dark:bg-gray-900 dark:text-white dark:border-none  font-[verdana] min-h-screen">
      {" "}
      {/* Main container with a background and full height */}
      <div className="max-w-4xl dark:bg-gray-800 rounded-3xl dark:text-white mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {" "}
        {/* Container for FAQs */}
        <h3 className="text-3xl sm:text-4xl  dark:border-none  font-bold text-center mb-5 text-black">
          Frequently Asked Questions
        </h3>{" "}
        {/* FAQ title */}
        <div className="space-y-6">
          {" "}
          {/* Space between each FAQ item */}
          {faqs.map((faq, index) => (
            <div
              key={index} // Unique key for each FAQ item
              className="bg-body dark:bg-gray-900 dark:text-white border border-gray-200 rounded-3xl p-5 transition-all duration-300" // Container for individual FAQ
            >
              <div
                className="flex justify-between dark:text-white  cursor-pointer" // Flexbox for question and toggle icon
                onClick={() => toggleAnswer(index)} // Click event to toggle answer
              >
                <h2 className="text-lg sm:text-xl  dark:text-white font-medium text-black">
                  {faq.question}
                </h2>{" "}
                {/* FAQ question */}
                <span className="text-xl dark:text-white  sm:text-2xl text-black">
                  {openIndex === index ? "-" : "+"}{" "}
                  {/* Toggle icon for open/close state */}
                </span>
              </div>
              <div
                className={`overflow-hidden dark:text-white  transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`} // Transition for the answer visibility
              >
                <div className="mt-3 text-left dark:text-gray-400  text-gray-700">
                  {" "}
                  {/* Answer container */}
                  <p>{faq.answer}</p> {/* FAQ answer */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ; // Exporting the FAQ component
