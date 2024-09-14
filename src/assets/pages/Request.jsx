import React from 'react';

const Request = () => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Request Form</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="fullname" className="block text-gray-700">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Your message here..."
            className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default Request;
