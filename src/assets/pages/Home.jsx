import React from "react";
import Footer from "../components/Footer"; // Importing Footer component
import Header from "../components/Header"; // Importing Header component
import Carousel from "../components/Carousel"; // Importing Carousel component
import { Link } from "react-router-dom"; // Importing Link for navigation
import Popular from "../components/Popular";

const Home = () => {
  // Array of slides for the carousel
  const slides = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv83i1lfuRdk0gcSyzwkniRwJWMNnLww2KUA&s",
      heading: "Your Dream Car Awaits",
      subtext: "Discover luxury vehicles at unbeatable prices.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScbzj5SBbph-vQ7tbY6TBDil9igcYgOZpV6g&s",
      heading: "Affordable & Luxury",
      subtext: "Find the perfect car within your budget.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-b-4_ARUtc0DxqzuduzJx83l4fwjnhD2Wlg&s",
      heading: "Sleek and Stylish",
      subtext: "Upgrade your ride with our latest arrivals.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHwBAyU_bjMUMVSR0h8Hp_IbnAXMqsJVDZmA&s",
      heading: "Top Performance",
      subtext: "Experience the thrill with high-performance vehicles.",
    },
  ];

  // Array of testimonials for the carousel
  const testimonials = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIIMMldOlpbQdpdCg5w4vw51dtL-AniDd_NA&s",
      quote: `"I found the perfect car at an amazing price. The installment plans made it possible!"`,
      name: "Jane Doe",
      location: "London",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7-HFWDRQBJD0DeUsks2YCJdpTn2sg6RTcYg&s",
      quote: `"Excellent service! I love my new car and the support team was great."`,
      name: "John Smith",
      location: "New York",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrCmFiqgVlrgZwsUtwtzdO3QK-aspi1psEQA&s",
      quote: `"Highly recommend this platform. The range of cars and the payment options are unmatched."`,
      name: "Sarah Lee",
      location: "China",
    },
  ];

  const categoryData = [
    {
      title: "Sedans",
      description: "Comfort and affordability for your daily drive.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLzVP0r6KyOW0dbvIQnmDU--z1JHnHz2ml4w&s", // Add your image path here
      link: "/category/sedans",
    },
    {
      title: "SUVs",
      description: "Powerful and versatile for any terrain.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkTyyAuoTUQfBQveMwScPGtgPTam-8k2BNLg&s", // Add your image path here
      link: "/category/suvs",
    },
    {
      title: "Electric Cars",
      description: "Eco-friendly and cost-efficient electric vehicles.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUSxXu8ogj81ZsYA404CxiS-ATB_2jW5UIfQ&s", // Add your image path here
      link: "/category/electric",
    },
  ];
  

  return (
    <div className="font-[dm] bg-body  dark:bg-gray-900 dark:text-white py-5">
      {/* Carousel for featured slides */}
      <div className="flex w-full  py-5  h-screen  overflow-hidden object-cover relative  sm:px-8">
        <div className="w-full m-0 p-0 flex h-auto ">
          <Carousel autoslide={true} autoslideinterval={7000}>
            {slides.map((slide, index) => (
              <div
                key={index} // Unique key for each slide
                className="relative w-full  h-screen bg-cover bg-center flex items-center justify-center text-center"
                style={{ backgroundImage: `url(${slide.image})` }} // Background image for each slide
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                  <h1 className="text-white text-5xl font-[open] font-open font-bold mb-4">
                    {slide.heading} {/* Slide heading */}
                  </h1>
                  <p className="text-white text-lg mb-6">
                    {slide.subtext} {/* Slide subtext */}
                  </p>
                  <div className="space-x-4 font-[open]">
                    <Link
                      to={"/carlisting"}
                      className="bg-but  text-white px-6 py-3 rounded-lg hover:bg-body hover:text-but"
                    >
                      Shop Now {/* Link to car listing page */}
                    </Link>
                    <Link
                      to={"/auction"}
                      className="bg-but text-white px-6 py-3 rounded-lg hover:bg-body hover:text-but"
                    >
                      Auctions {/* Link to auctions page */}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      {/* Section for searching and browsing cars */}
      <section className="bg-body dark:bg-gray-800 dark:text-white py-8  sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-[open] font-bold text-black mb-4">
            Find Your Perfect Car
          </h2>

          {/* Search Bar */}
          <form className="grid grid-cols-1  md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <input
              type="text"
              placeholder="Search by Model"
              className="px-4 py-2 dark:bg-gray-900 dark:text-white dark:border-none rounded-lg border"
            />
            <select className="px-4 dark:bg-gray-900 dark:text-white dark:border-none py-2 rounded-lg border">
              <option>All Brands</option>
              <option>Toyota</option>
              <option>Tesla</option>
              <option>BMW</option>
            </select>
            <select className="px-4 dark:bg-gray-900 dark:text-white dark:border-none py-2 rounded-lg border">
              <option>All Prices</option>
              <option>Under $20,000</option>
              <option>$20,000 - $40,000</option>
              <option>Above $40,000</option>
            </select>
            <button className="bg-but font-[open] text-white px-6 py-2 rounded-lg hover:bg-white hover:text-but">
              Search
            </button>
          </form>

          {/* Car Categories */}
          <h2 className="text-3xl font-[open] text-black font-bold mb-3 mt-8">
            Popular Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {categoryData.map((category, index) => (
        <div
          key={index}
          className="category-card bg-white dark:bg-gray-900 dark:text-white p-6 rounded-lg shadow hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
        >
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-32 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-black mb-4">{category.title}</h3>
          <p className="text-gray-600 dark:text-white mb-4">{category.description}</p>
          <Link
            to={category.link}
            className="bg-but text-white px-4 py-2 rounded-lg hover:bg-white hover:text-but inline-block transition-colors duration-300"
          >
            Explore {category.title}
          </Link>
        </div>
      ))}
    </div>
    <Popular/>
        </div>
      </section>
      {/* Testimonials section */}
      <section className="bg-body pb-12  dark:bg-gray-800 dark:text-white sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-[open] font-bold text-black mb-8">
            What Our Customers Say
          </h2>

          {/* Carousel for testimonials */}
          <div className="w-full py-5 rounded-3xl dark:bg-gray-900">
            <Carousel autoslide={true} autoslideinterval={5000}>
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex flex-col items-center"
                >
                  <img
                    src={testimonial.image}
                    alt={`Customer ${testimonial.name}`}
                    className="w-16 h-16 object-cover overflow-hidden rounded-full mb-4 shadow-md" // Customer image
                  />
                  <p className="text-lg italic dark:text-white text-black">
                    "{testimonial.quote}"
                  </p>{" "}
                  {/* Customer quote */}
                  <p className="font-semibold pb-10 text-gray-400">
                    {testimonial.name}, {testimonial.location}
                  </p>{" "}
                  {/* Customer name and location */}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; // Exporting the Home component
