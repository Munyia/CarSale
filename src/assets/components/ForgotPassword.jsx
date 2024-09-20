import React, { useState } from "react";
import { Link } from "react-router-dom";

// ForgotPassword component handles the password reset request by accepting user's email and sending it to an API.
const ForgotPassword = () => {
  const [email, setEmail] = useState(""); // State to store the user's email input
  const [message, setMessage] = useState(""); // State to store success messages
  const [error, setError] = useState(""); // State to store error messages

  // Function to handle the form submission for requesting a password reset
  const handleResetRequest = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      // Sending a POST request to the password reset API endpoint
      const response = await fetch("https://your-api-url.com/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the request content type to JSON
        },
        body: JSON.stringify({ email }), // Send the user's email in the request body
      });

      const data = await response.json(); // Parsing the JSON response

      if (response.ok) {
        // If the request was successful, display the success message
        setMessage("Check your email for instructions to reset your password.");
        setError(""); // Clear any previous error messages
      } else {
        // If the request failed, display an error message from the response
        setError(
          data.message || "Failed to request password reset. Please try again."
        );
        setMessage(""); // Clear any success messages
      }
    } catch (err) {
      // Catch and display network errors
      setError("Something went wrong. Please try again later.");
      setMessage(""); // Clear any success messages
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-body py-3">
      {/* Container with shadow and styling for the form */}
      <div className="relative shadow-2xl shadow-slate-900 bg-pry px-4 py-3 bg--600 mx-8 md:mx-0 rounded-3xl sm:p-10 sm:max-w-xl">
        <div className="max-w-md mx-auto">
          {/* Page title */}
          <h1 className="text-2xl font-bold text-but mb-6 text-center">
            Forgot Password
          </h1>

          {/* Instruction text */}
          <div className="text-sm font-normal mb-4 text-center">
            Enter your email to receive a password reset link.
          </div>

          {/* Success message, if any */}
          {message && (
            <p className="text-green-500 text-center mb-4">{message}</p>
          )}

          {/* Error message, if any */}
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          {/* Form to submit email */}
          <form
            onSubmit={handleResetRequest}
            className="grid grid-cols-1 gap-2"
          >
            {/* Email input field */}
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
                value={email} // The email state is used as the value
                onChange={(e) => setEmail(e.target.value)} // Update email state on input change
              />
            </div>

            {/* Submit button to send reset link */}
            <div className="mt-5">
              <button
                className="py-2 px-4 bg-but hover:text-black hover:bg-blue-500 focus:ring-blue-200 focus:ring-offset-blue-400 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                type="submit"
              >
                Send Reset Link
              </button>
            </div>

            {/* Link to go back to the login page */}
            <div className="mt-5 text-center">
              <p className="text-sm text-but">
                Remembered your password?{" "}
                <Link className="text-but hover:underline" to="/login">
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
