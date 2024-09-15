import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-body py-3">
      <div className="relative shadow-2xl shadow-slate-900 bg-pry px-4 py-3 bg--600 mx-8 md:mx-0  rounded-3xl sm:p-10 sm:max-w-xl">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-but mb-6 text-center">
            Welcome back
          </h1>
          <div className="text-sm font-normal   mb-4 text-center">
            Log in to your account
          </div>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <label
                htmlFor="email"
                className="font-semibold text-sm text-but  pb-1 block"
              >
                Email
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-3 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="font-semibold text-sm text-but  pb-1 block"
              >
                Password
              </label>
              <input
                className="border rounded-lg px-3 py-2 mt-1 mb-3 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                type="password"
                id="password"
                name="password"
                required
                placeholder="Enter your password"
              />
            </div>

            <div className="col-span-2 mt-5">
              <button
                className="py-2 px-4 text-but hover:bg-but hover:text-white  focus:ring-blue-200 focus:ring-offset-blue-400  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                type="submit"
              >
                Forgot your password?
              </button>
            </div>
            <div className="col-span-2 mt-5">
              <button
                className="py-2 px-4 bg-but hover:text-black hover:bg-blue-500 focus:ring-blue-200 focus:ring-offset-blue-400 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                type="submit"
              >
                Login
              </button>
            </div>

            <div className="col-span-2 flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              <p className="text-xs text-but uppercase dark:text-gray-500 ">
                Don’t have an account yet?
                <Link
                  className=" flex hover:underline hover:text-black justify-center text-center items-center"
                  to="/register"
                >
                  {" "}
                  SignUp
                </Link>
              </p>
              <span className="w-1/5 border-b dark:border-black md:w-1/4"></span>
            </div>
          </form>
          

          
        </div>
      </div>
    </div>
  );
};

export default Login;
