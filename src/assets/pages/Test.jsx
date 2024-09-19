<form className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
  <div>
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
  <div>
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
  <div>
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
  <div>
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
  <div>
    <label htmlFor="dob" className="font-semibold text-sm text-but pb-1 block">Date of Birth</label>
    <input
      className="border rounded-lg px-3 py-2 mt-1 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
      type="date"
      id="dob"
      name="dob"
      required
    />
  </div>
  <div>
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
  <div>
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
  <div>
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
  <div className="gender-box mb-1 col-span-2">
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
  <div className="mt-2 col-span-2">
    <button
      className="py-1 px-2 hover:text-black bg-but hover:bg-blue-500 focus:ring-blue-200 focus:ring-offset-blue-400 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      type="submit"
    >
      Sign up
    </button>
  </div>
  <div className="flex items-center justify-between mt-4 col-span-2">
    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
    <p className="text-xs uppercase text-but dark:text-gray-500">
      Have an account?
      <Link className="flex hover:underline hover:text-black justify-center text-center items-center" to="/login"> Login</Link>
    </p>
    <span className="w-1/5 border-b dark:border-black md:w-1/4"></span>
  </div>
</form>
