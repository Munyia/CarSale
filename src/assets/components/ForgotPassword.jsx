import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetRequest = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://your-api-url.com/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle success
        setMessage("Check your email for instructions to reset your password.");
        setError(""); // Clear error message if any
      } else {
        // Handle error
        setError(data.message || "Failed to request password reset. Please try again.");
        setMessage(""); // Clear success message if any
      }
    } catch (err) {
      // Handle network errors
      setError("Something went wrong. Please try again later.");
      setMessage(""); // Clear success message if any
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-body py-3">
      <div className="relative shadow-2xl shadow-slate-900 bg-pry px-4 py-3 bg--600 mx-8 md:mx-0 rounded-3xl sm:p-10 sm:max-w-xl">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-but mb-6 text-center">
            Forgot Password
          </h1>
          <div className="text-sm font-normal mb-4 text-center">
            Enter your email to receive a password reset link.
          </div>

          {message && <p className="text-green-500 text-center mb-4">{message}</p>}
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleResetRequest} className="grid grid-cols-1 gap-2">
            <div>
              <label
                htmlFor="email"
                className="font-semibold text-sm text-but pb-1 block"
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mt-5">
              <button
                className="py-2 px-4 bg-but hover:text-black hover:bg-blue-500 focus:ring-blue-200 focus:ring-offset-blue-400 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                type="submit"
              >
                Send Reset Link
              </button>
            </div>

            <div className="mt-5 text-center">
              <p className="text-sm text-but">
                Remembered your password?{" "}
                <Link
                  className="text-blue-500 hover:underline"
                  to="/login"
                >
                  Log In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
