import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Importing Link for navigation

const Login = () => {
  // Setting the document title when the component mounts
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className="w-full dark:bg-gray-900 dark:text-white  h-screen font-[verdana] flex items-center justify-center bg-body ">
      {/* Main container for the login form */}
      <div
        className="relative dark:bg-gray-800 dark:text-white  border  px-4 mx-4 md:mx-0 rounded-3xl sm:p-10 sm:max-w-xl"
        style={{ width: "80%", height: "85%" }}
      >
        <div className="max-w-md mx-auto h-full">
          {/* Link to go back to the home page */}
        
          <h1 className="text-2xl font-[verdana] font-bold  mb-6 text-center">
            Welcome back
          </h1>
          <div className="text-sm font-normal mb-4 text-center">
            Log in to your account
          </div>
          {/* Login form */}
          <form className="flex flex-col space-y-4">
              {/* Email input field */}
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="font-semibold justify-start text-left text-sm pb-1 block"
                >
                  Email
                </label>
                <input
                  className="border dark:bg-gray-900 dark:text-white dark:border-none rounded-lg px-3 py-2 mt-1 text-sm w-full focus:border-but focus:ring-but"
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
                  className="font-semibold justify-start text-left  text-sm pb-1 block"
                  >
                  Password
                </label>
                <input
                  className="border dark:bg-gray-900 dark:text-white dark:border-none rounded-lg px-3 py-2 mt-1 text-sm w-full focus:border-but focus:ring-but"
                  type="password"
                  id="password"
                  name="password"
                  required
                  placeholder="Enter your password"
                />
              </div>
          

            {/* Login button */}
            <div className="mt-5 justify-center items-center text-center ">
              <button
                className="py-2 px-4 font-[verdana] justify-center bg-gray-800 hover:text-white hover:bg-gradient-to-r from-p1  via-p3 to-pk focus:ring-blue-200 focus:ring-offset-but text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                type="submit"
              >
                Login
              </button>
            </div>

            {/* Link for password recovery */}
            <div className="mt-5 text-center">
              <Link
                to="/forgotpassword"
                className="py-2 px-4 font-[verdana]  text-white bg-gray-800 hover:text-white hover:bg-gradient-to-r from-p1  via-p3 to-pk focus:ring-blue-200 focus:ring-offset-but transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              >
                Forgot your password?
              </Link>
            </div>

            {/* Signup prompt */}
       
            <div className="flex flex-col items-center justify-center pt-4 mt-4">
         
  <p className="text-sm uppercase dark:text-white text-center">
  Don’t have an account yet?
  </p>
  <Link
    className="mt-2 py-2 px-4 font-[verdana] bg-gray-800 hover:bg-gradient-to-r from-p1  via-p3 to-pk focus:ring-blue-200 focus:ring-offset-but text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
    to="/register"
    >
      {" "}
      SignUp
    </Link>
 
</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login; // Exporting the Login component
