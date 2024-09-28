import React from "react";


const Request = () => {
  return (
    <div className="">
      <div className="w-full dark:bg-gray-900 dark:text-white min-h-screen font-[dm] flex items-center justify-center bg-body py-3">
        <div className="relative w-1/3 shadow-2xl dark:bg-gray-800 dark:text-white shadow-slate-900 bg-pry px-4 py-3 mx-8 md:mx-0 rounded-3xl sm:p-10 sm:max-w-1/2">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold font-[roboto] text-black mb-6 text-center">
              Request Form
            </h2>
            <form className="space-y-6">
              {/* Full Name Field */}
              <div>
                <label htmlFor="fullname" className="block text-black">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="Full Name"
                  className="w-full dark:bg-gray-900 dark:text-white dark:border-none border border-gray-300 rounded-md px-3 py-2 mt-1 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-black">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full dark:bg-gray-900 dark:text-white dark:border-none border border-gray-300 rounded-md px-3 py-2 mt-1 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label htmlFor="phone" className="block text-black">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full dark:bg-gray-900 dark:text-white dark:border-none border border-gray-300 rounded-md px-3 py-2 mt-1 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-black">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your message here..."
                  className="w-full dark:bg-gray-900 dark:text-white dark:border-none border border-gray-300 rounded-md px-3 py-2 mt-1 text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="mt-6 justify-center items-center text-center">
                <button
                  type="submit"
                  className="py-2 px-4 justify-center items-center bg-but font-[open] hover:text-black hover:bg-blue-500 focus:ring-blue-200 focus:ring-offset-blue-400 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request; // Exporting the Request component
