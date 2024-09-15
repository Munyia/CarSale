import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Carousel from '../components/Carousel';


const Home = () => {

  const slides = [
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv83i1lfuRdk0gcSyzwkniRwJWMNnLww2KUA&s",
      heading: "Your Dream Car Awaits",
      subtext: "Discover luxury vehicles at unbeatable prices.",
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScbzj5SBbph-vQ7tbY6TBDil9igcYgOZpV6g&s",
        heading: "Affordable & Luxury",
      subtext: "Find the perfect car within your budget.",
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-b-4_ARUtc0DxqzuduzJx83l4fwjnhD2Wlg&s",
        heading: "Sleek and Stylish",
      subtext: "Upgrade your ride with our latest arrivals.",
    },
    {
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwBAyU_bjMUMVSR0h8Hp_IbnAXMqsJVDZmA&s",
       heading: "Top Performance",
      subtext: "Experience the thrill with high-performance vehicles.",
    },
  ];

  return (
    <div>
      <Header />
      <div className="flex w-full h-screen overflow-hidden object-cover relative">
            <div className="w-full m-0 p-0 flex h-auto ">
              <Carousel autoslide={true} autoslideinterval={7000}>
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                      <h1 className="text-white text-5xl font-bold mb-4">
                        {slide.heading}
                      </h1>
                      <p className="text-white text-lg mb-6">{slide.subtext}</p>
                      <div className="space-x-4">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                          Shop Now
                        </button>
                        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600">
                          Explore Offers
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

<section className="bg-gray-100 py-8">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">Find Your Perfect Car</h2>
    <form className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      <input type="text" placeholder="Search by Model" className="px-4 py-2 rounded-lg border" />
      <select className="px-4 py-2 rounded-lg border">
        <option>All Brands</option>
        <option>Toyota</option>
        <option>Tesla</option>
        <option>BMW</option>
      </select>
      <select className="px-4 py-2 rounded-lg border">
        <option>All Prices</option>
        <option>Under $20,000</option>
        <option>$20,000 - $40,000</option>
        <option>Above $40,000</option>
      </select>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Search</button>
    </form>
  </div>
</section>


<section className="py-12 bg-white">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="category-card bg-gray-100 p-6 rounded-xl">
        <img src="sedan-category.jpg" alt="Sedans" className="w-full rounded-lg mb-4" />
        <h3 className="text-xl font-semibold">Sedans</h3>
        <p className="text-gray-600">Comfort and affordability for your daily drive.</p>
        <a href="/category/sedans" className="text-blue-600 hover:underline mt-4 block">Explore Sedans</a>
      </div>
    
    </div>
  </div>
</section>


<section className="bg-blue-50 py-12">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8">What Our Customers Say</h2>
    <div className="testimonial-slider">
      <div className="testimonial-item text-center">
        <img src="customer1.jpg" alt="Customer" className="w-16 h-16 rounded-full mx-auto mb-4" />
        <p className="text-lg italic">"I found the perfect car at an amazing price. The installment plans made it possible!"</p>
        <p className="font-semibold mt-2">- Jane Doe, New York</p>
      </div>
      
    </div>
  </div>
</section>


      <Footer/>
    </div>
  )
}

export default Home