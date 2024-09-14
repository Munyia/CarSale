import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h1>
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

        {/* <div className="mt-6 border-t border-gray-300 pt-4">
          <div className="text-lg font-semibold text-gray-800">Support Options</div>
          <div className="mt-4 space-y-4">
            <div className="flex items-center">
              <span className="text-gray-700 font-semibold mr-2">Customer Support:</span>
              <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 font-semibold mr-2">Email:</span>
              <a href="mailto:support@example.com" className="text-blue-600 hover:underline">support@example.com</a>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 font-semibold mr-2">Live Chat:</span>
              <a href="/live-chat" className="text-blue-600 hover:underline">Start Live Chat</a>
            </div>
          </div>
        </div> */}

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
