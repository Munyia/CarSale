import React, {  useEffect } from 'react';
import { Link } from "react-router-dom";

const Register = () => {
  useEffect(() => {
    document.title = 'Registration';
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-body py-3">
      <div className="relative shadow-2xl bg--600 shadow-slate-900 bg-pry px-4 py-3 mx-8 md:mx-0 rounded-3xl sm:p-10 sm:max-w-xl">
        <div className="max-w-md rounded-2xl mx-auto">
          <h1 className="text-2xl font-bold text-but mb-1 text-center">Register</h1>
          <div className="w-full max-w-full justify-center items-center px-3 mx-auto mt-0 md:flex-0 shrink-0">
            <div className="relative z-0 flex flex-col min-w-0 break-words border-0 shadow-soft-xl rounded-2xl bg-clip-border">
              <div className="flex flex-wrap px-3 -mx-3 sm:px-6 xl:px-12">
                <div className="px-1 flex-0">
                  <Link className="social-icon inline-block w-full px-4 py-2 mb-1 font-bold text-center text-gray-200 uppercase align-middle transition-all transform duration-300 ease-in-out bg-transparent border border-black border-solid rounded-lg shadow-none cursor-pointer hover:scale-110 hover:z-10 hover:shadow-xl group-hover:blur-sm hover:!blur-none">
                  <svg
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 64 64"
                      height="28px"
                      width="18px"
                    >
                      <g
                        fill-rule="evenodd"
                        fill="none"
                        stroke-width="1"
                        stroke="none"
                      >
                        <g
                          fill-rule="nonzero"
                          transform="translate(3.000000, 2.000000)"
                        >
                          <path
                            fill="#4285F4"
                            d="M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267"
                          ></path>
                          <path
                            fill="#34A853"
                            d="M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667"
                          ></path>
                          <path
                            fill="#FBBC05"
                            d="M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782"
                          ></path>
                          <path
                            fill="#EB4335"
                            d="M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </Link>
                </div>
                <div className="px-1 ml-auto flex-0">
                  <Link className="social-icon inline-block w-full px-4 py-2 mb-1 font-bold text-center text-gray-200 uppercase align-middle transition-all transform duration-300 ease-in-out bg-transparent border border-black border-solid rounded-lg shadow-none cursor-pointer hover:scale-110 hover:z-10 hover:shadow-xl group-hover:blur-sm hover:!blur-none">
                  <svg
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 64 64"
                      height="28px"
                      width="18px"
                    >
                      <g
                        fill-rule="evenodd"
                        fill="none"
                        stroke-width="1"
                        stroke="none"
                      >
                        <g
                          fill-rule="nonzero"
                          fill="#000000"
                          transform="translate(7.000000, 0.564551)"
                        >
                          <path d="M40.9233048,32.8428307 C41.0078713,42.0741676 48.9124247,45.146088 49,45.1851909 C48.9331634,45.4017274 47.7369821,49.5628653 44.835501,53.8610269 C42.3271952,57.5771105 39.7241148,61.2793611 35.6233362,61.356042 C31.5939073,61.431307 30.2982233,58.9340578 25.6914424,58.9340578 C21.0860585,58.9340578 19.6464932,61.27947 15.8321878,61.4314159 C11.8738936,61.5833617 8.85958554,57.4131833 6.33064852,53.7107148 C1.16284874,46.1373849 -2.78641926,32.3103122 2.51645059,22.9768066 C5.15080028,18.3417501 9.85858819,15.4066355 14.9684701,15.3313705 C18.8554146,15.2562145 22.5241194,17.9820905 24.9003639,17.9820905 C27.275104,17.9820905 31.733383,14.7039812 36.4203248,15.1854154 C38.3824403,15.2681959 43.8902255,15.9888223 47.4267616,21.2362369 C47.1417927,21.4153043 40.8549638,25.1251794 40.9233048,32.8428307 M33.3504628,10.1750144 C35.4519466,7.59650964 36.8663676,4.00699306 36.4804992,0.435448578 C33.4513624,0.558856931 29.7884601,2.48154382 27.6157341,5.05863265 C25.6685547,7.34076135 23.9632549,10.9934525 24.4233742,14.4943068 C27.7996959,14.7590956 31.2488715,12.7551531 33.3504628,10.1750144"></path>
                        </g>
                      </g>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <form className="flex flex-col space-y-4 px-4 sm:px-6 md:px-0">
  {/* Row 1 */}
  <div className="flex flex-col md:flex-row md:space-x-4">
    <div className="flex-1">
      <label htmlFor="fullname" className="font-semibold text-sm text-but pb-1 block">Full Name</label>
      <input
        className="border rounded-lg px-3 py-2 mt-1 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        type="text"
        id="fullname"
        name="fullName"
        required
        placeholder="Enter your name"
      />
    </div>
    <div className="flex-1">
      <label htmlFor="email" className="font-semibold text-sm text-but pb-1 block">Email</label>
      <input
        className="border rounded-lg px-3 py-2 mt-1 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        type="email"
        id="email"
        name="email"
        required
        placeholder="Enter your email"
      />
    </div>
  </div>

  {/* Row 2 */}
  <div className="flex flex-col md:flex-row md:space-x-4">
    <div className="flex-1">
      <label htmlFor="password" className="font-semibold text-sm text-but pb-1 block">Password</label>
      <input
        className="border rounded-lg px-3 py-2 mt-1 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        type="password"
        id="password"
        name="password"
        required
        placeholder="Enter your password"
      />
    </div>
    <div className="flex-1">
      <label htmlFor="confirmpassword" className="font-semibold text-sm text-but pb-1 block">Confirm Password</label>
      <input
        className="border rounded-lg px-3 py-2 mt-1 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        type="password"
        id="confirmpassword"
        name="Confirmpassword"
        required
        placeholder="Confirm password"
      />
    </div>
  </div>

  {/* Row 3 */}
  <div className="flex flex-col md:flex-row md:space-x-4">
    <div className="flex-1">
      <label htmlFor="dob" className="font-semibold text-sm text-but pb-1 block">Date of Birth</label>
      <input
        className="border rounded-lg px-3 py-2 mt-1 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        type="date"
        id="dob"
        name="dob"
        required
      />
    </div>
    <div className="flex-1">
      <label htmlFor="phonenumber" className="font-semibold text-sm text-but pb-1 block">Phone Number</label>
      <input
        className="border rounded-lg px-3 py-2 mt-1 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        type="tel"
        id="phonenumber"
        name="phonenumber"
        required
        placeholder="Enter your Phone Number"
      />
    </div>
  </div>

  {/* Row 4 */}
  <div className="flex flex-col md:flex-row md:space-x-4">
    <div className="flex-1">
      <label htmlFor="address" className="font-semibold text-sm text-but pb-1 block">Address</label>
      <input
        className="border rounded-lg px-3 py-2 mt-1 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
        type="text"
        id="address"
        name="address"
        required
        placeholder="Enter your Address"
      />
    </div>
    <div className="flex-1">
      <label htmlFor="country" className="font-semibold text-sm text-but pb-1 block">Country</label>
      <select
        className="border rounded-lg px-3 py-2 mt-1 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-but"
        name="country"
        required
      >
        <option value="">Select your country</option>
        <option value="nigeria">Nigeria</option>
        <option value="usa">USA</option>
        <option value="canada">Canada</option>
      </select>
    </div>
  </div>

  {/* Gender Selection */}
  <div className="gender-box mb-1">
    <label className="block text-but justify-center text-center">Gender</label>
    <div className="flex justify-center gap-4 mt-1">
      <div>
        <input type="radio" name="gender" id="male" className="cursor-pointer" />
        <label htmlFor="male" className="ml-1">Male</label>
      </div>
      <div>
        <input type="radio" name="gender" id="female" className="cursor-pointer" />
        <label htmlFor="female" className="ml-1">Female</label>
      </div>
      <div>
        <input type="radio" name="gender" id="other" className="cursor-pointer" />
        <label htmlFor="other" className="ml-1">Other</label>
      </div>
    </div>
  </div>

  {/* Submit Button */}
  <div className="mt-2">
    <button
      className="py-1 px-2 hover:text-black bg-but hover:bg-blue-500 focus:ring-blue-200 focus:ring-offset-blue-400 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      type="submit"
    >
      Sign up
    </button>
  </div>

  {/* Login Link */}
  <div className="flex items-center justify-between mt-4">
    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
    <p className="text-xs uppercase text-but dark:text-gray-500">
      Have an account?
      <Link className="flex hover:underline hover:text-black justify-center text-center items-center" to="/login"> Login</Link>
    </p>
    <span className="w-1/5 border-b dark:border-black md:w-1/4"></span>
  </div>
</form>





        </div>
      </div>
    </div>
  );
};

export default Register;
