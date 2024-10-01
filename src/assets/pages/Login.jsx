import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Importing Link for navigation

const Login = () => {
  // Setting the document title when the component mounts
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className="w-full dark:bg-gray-900 dark:text-white h-screen font-[verdana] flex items-center justify-center bg-body py-3">
      {/* Main container for the login form */}
      <div
        className="relative border border-gray-300 dark:bg-gray-800 dark:text-white shadow-slate-900 bg-pry px-4 py-3 mx-4 md:mx-0 rounded-3xl sm:p-10 sm:max-w-xl"
        style={{ width: "80%", height: "70%" }}
      >
        <div className="max-w-md mx-auto h-full">
          {/* Link to go back to the home page */}
        
          <h1 className="text-2xl font-[verdana] font-bold text-black mb-6 text-center">
            Welcome back
          </h1>
          <div className="text-sm font-normal mb-4 text-center">
            Log in to your account
          </div>
          {/* Login form */}
          <form className="flex flex-col space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              {/* Email input field */}
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="font-semibold  text-sm text-black pb-1 block"
                >
                  Email
                </label>
                <input
                  className="border dark:bg-gray-900 dark:text-white dark:border-none rounded-lg px-3 py-2 mt-1 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                />
              </div>

              {/* Password input field */}
              <div className="flex-1">
                <label
                  htmlFor="password"
                  className="font-semibold  text-sm text-black pb-1 block"
                >
                  Password
                </label>
                <input
                  className="border dark:bg-gray-900 dark:text-white dark:border-none rounded-lg px-3 py-2 mt-1 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="Enter your password"
                />
              </div>
            </div>

            {/* Login button */}
            <div className="mt-5 justify-center items-center text-center ">
              <button
                className="py-2 px-4 font-[verdana] justify-center bg-gray-800 hover:text-white hover:bg-gradient-to-r from-p1 via-p3 to-pk focus:ring-blue-200 focus:ring-offset-blue-400 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                type="submit"
              >
                Login
              </button>
            </div>

            {/* Link for password recovery */}
            <div className="mt-5 text-center">
              <Link
                to="/forgotpassword"
                className="py-2 px-4 font-[verdana] justify-center bg-gray-800 hover:text-white hover:bg-gradient-to-r from-p1 via-p3 to-pk focus:ring-blue-200 focus:ring-offset-blue-400 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                >
                Forgot your password?
              </Link>
            </div>

            {/* Signup prompt */}
            <div className="flex items-center justify-between mt-4">
              <span className="w-2/5 border-b border-gray-500 md:w-1/4"></span>
              <p className="text-xs px-2  dark:text-white  text-black justify-center items-center text-center uppercase ">
                Don’t have an account yet?
                <Link
                  className="flex font-[verdana] dark:text-white text-lg  hover:underline hover:text-black justify-center text-center items-center"
                  to="/register"
                >
                  {" "}
                  SignUp
                </Link>
              </p>
              <span className="w-2/5 border-b border-gray-500 md:w-1/4"></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login; // Exporting the Login component
