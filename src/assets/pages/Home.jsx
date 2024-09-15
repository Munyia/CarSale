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

  const testimonials = [
    {
      id: 1,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIIMMldOlpbQdpdCg5w4vw51dtL-AniDd_NA&s",
      quote: `"I found the perfect car at an amazing price. The installment plans made it possible!"`,
      name: "Jane Doe",
      location: "London",
    },
    {
      id: 2,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7-HFWDRQBJD0DeUsks2YCJdpTn2sg6RTcYg&s",
      quote: `"Excellent service! I love my new car and the support team was great."`,
      name: "John Smith",
      location: "New York",
    },
    {
      id: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrCmFiqgVlrgZwsUtwtzdO3QK-aspi1psEQA&s",
      quote: `"Highly recommend this platform. The range of cars and the payment options are unmatched."`,
      name: "Sarah Lee",
      location: "China",
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
                        <button className="bg-but text-white px-6 py-3 rounded-lg hover:bg-body  hover:text-but">
                          Shop Now
                        </button>
                        <button className="bg-but text-white px-6 py-3 rounded-lg hover:bg-body  hover:text-but">
                          Explore Offers
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <section className="bg-body py-8">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-but mb-4">Find Your Perfect Car</h2>
    
    {/* Search Bar */}
    <form className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
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
      <button className="bg-but text-white px-6 py-2 rounded-lg hover:bg-white hover:text-but">Search</button>
    </form>

    {/* Car Categories */}
    <h2 className="text-3xl text-but font-bold mb-3 mt-8">Browse by Category</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="category-card bg-white p-6 rounded-lg shadow hover:shadow-lg">
        <h3 className="text-xl font-semibold text-but mb-4">Sedans</h3>
        <p className="text-gray-600 mb-4">Comfort and affordability for your daily drive.</p>
        <a href="/category/sedans" className="bg-but text-white px-4 py-2 rounded-lg hover:bg-white hover:text-but inline-block">Explore Sedans</a>
      </div>
      <div className="category-card bg-white p-6 rounded-lg shadow hover:shadow-lg">
        <h3 className="text-xl font-semibold text-but mb-4">SUVs</h3>
        <p className="text-gray-600 mb-4">Powerful and versatile for any terrain.</p>
        <a href="/category/suvs" className="bg-but text-white px-4 py-2 rounded-lg hover:bg-white hover:text-but inline-block">Explore SUVs</a>
      </div>
      <div className="category-card bg-white p-6 rounded-lg shadow hover:shadow-lg">
        <h3 className="text-xl font-semibold text-but mb-4">Electric Cars</h3>
        <p className="text-gray-600 mb-4">Eco-friendly and cost-efficient electric vehicles.</p>
        <a href="/category/electric" className="bg-but text-white px-4 py-2 rounded-lg hover:bg-white hover:text-but inline-block">Explore Electric Cars</a>
      </div>
    </div>
  </div>
</section>

<section className="bg-body py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-but mb-8">What Our Customers Say</h2>

      
        <div className="w-full">
          <Carousel autoslide={true} autoslideinterval={7000}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={`Customer ${testimonial.name}`}
                  className="w-16 rounded-full mb-4 shadow-md"
                />
                <p className="text-lg italic text-black">"{testimonial.quote}"</p>
                <p className="font-semibold  text-but">{testimonial.name}, {testimonial.location}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>


      <Footer/>
    </div>
  )
}

export default Home