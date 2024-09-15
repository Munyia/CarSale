import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="max-w-lg my-3 mx-auto p-6 shadow-2xl bg-white shadow-slate-900 rounded-3xl">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Contact Form</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
          <input
            type="text"
            id="subject"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <div className="mt-6 border-t border-gray-300 pt-4">
          <div className="text-lg font-semibold text-gray-800">Contact our support team</div>
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <span className="text-gray-700 font-semibold mr-2">Customer Support:</span>
              <Link to={""} className="text-blue-600 hover:underline">+1 **********</Link>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 font-semibold mr-2">Email:</span>
              <Link to={""} className="text-blue-600 hover:underline">support@example.com</Link>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 font-semibold mr-2">Live Chat:</span>
              <Link to ={""} className="text-blue-600 hover:underline">Start Live Chat</Link>

            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Inquiry
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
