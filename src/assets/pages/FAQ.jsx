import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    document.title = "FAQ - Your Company Name";
  }, []);

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy. If you are not satisfied with your purchase, you can return it within 30 days for a full refund.",
    },
    {
      question: "How do I track my order?",
      answer: "Once your order is shipped, we will send you a tracking number via email. You can use this number to track your order on our website.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, PayPal, bank transfers, and cryptocurrency as valid payment methods.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to many countries worldwide. Shipping costs and times may vary depending on the destination.",
    },
    {
      question: "How do I contact customer support?",
      answer: "You can contact our customer support team via email at support@company.com or by phone at (123) 456-7890.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-body min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-5 text-but">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-body shadow-2xl shadow-slate-900 rounded-3xl p-5 transition-all duration-300"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h2 className="text-lg sm:text-xl font-medium text-black">{faq.question}</h2>
                <span className="text-xl sm:text-2xl text-but">
                  {openIndex === index ? '-' : '+'}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="mt-3 text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
