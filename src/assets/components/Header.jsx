import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className="bg-white shadow-md sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
    <div className="flex-shrink-0">
      <img src="logo.png" alt="CarSale" className="h-10" />
    </div>
    <div className="hidden md:flex space-x-6">
      <a href="/" className="text-gray-800 hover:text-blue-600">Home</a>
      <a href="/categories" className="text-gray-800 hover:text-blue-600">Car Categories</a>
      <a href="/faq" className="text-gray-800 hover:text-blue-600">FAQ</a>
      <a href="/contact" className="text-gray-800 hover:text-blue-600">Contact</a>
    </div>
    <div className="flex space-x-4">
      <input type="text" placeholder="Search by model, brand..." className="px-4 py-2 rounded-lg border" />
      <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Login</a>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header