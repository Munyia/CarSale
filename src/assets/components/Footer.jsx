import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-900 text-white py-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    <div>
      <h4 className="font-bold mb-4">Quick Links</h4>
      <ul>
        <li><a href="/faq" className="hover:underline">FAQ</a></li>
        <li><a href="/contact" className="hover:underline">Contact Us</a></li>
        <li><a href="/categories" className="hover:underline">Car Categories</a></li>
      </ul>
    </div>
    <div>
      <h4 className="font-bold mb-4">Subscribe to Our Newsletter</h4>
      <form>
        <input type="email" placeholder="Your Email" className="px-4 py-2 rounded-lg mb-2 w-full" />
        <button className="bg-blue-600 px-4 py-2 rounded-lg text-white">Subscribe</button>
      </form>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer