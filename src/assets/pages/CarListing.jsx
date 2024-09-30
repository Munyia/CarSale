import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const CarListing = () => {
  // Sample car data
  const [cars] = useState([
    {
      id: 1,
      make: "Toyota",
      model: "Camry",
      year: 2022,
      price: "$25,000",
      fuelType: "Petrol",
      condition: "New",
      installmentPlans: [
        "12 months - $2,083/month",
        "24 months - $1,042/month",
      ],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-eWM8Si9XLBKzZRdWDc_fxi4SXCvWu4xsg&s",
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      year: 2023,
      price: "$22,000",
      fuelType: "Diesel",
      condition: "New",
      installmentPlans: ["12 months - $1,833/month", "24 months - $917/month"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnjmpP36L0r0Swrfcc4PCiJpzuYxEVXfktLg&s",
    },
    {
      id: 3,
      make: "Ford",
      model: "Mustang",
      year: 2021,
      price: "$30,000",
      fuelType: "Petrol",
      condition: "Used",
      installmentPlans: [
        "12 months - $2,500/month",
        "24 months - $1,250/month",
      ],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMTyr_4oPJUzqL-0MpDMICAY6zSw7-Fhheqw&s",
    },
    {
      id: 4,
      make: "Lexus",
      model: "Mustang",
      year: 2024,
      price: "$50,000",
      fuelType: "Petrol",
      condition: "Used",
      installmentPlans: [
        "12 months - $10,500/month",
        "8 months - $1,250/month",
      ],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUSxXu8ogj81ZsYA404CxiS-ATB_2jW5UIfQ&s",
    },
    {
      id: 5,
      make: "Lexus",
      model: "Mustang",
      year: 2020,
      price: "$30,000",
      fuelType: "Petrol",
      condition: "Used",
      installmentPlans: ["10 months - $3,500/month", "4 months - $1,250/month"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkTyyAuoTUQfBQveMwScPGtgPTam-8k2BNLg&s",
    },
    {
      id: 6,
      make: "Ford",
      model: "Mustang",
      year: 2022,
      price: "$35,000",
      fuelType: "Diesel",
      condition: "Used",
      installmentPlans: [
        "12 months - $2,500/month",
        "24 months - $1,250/month",
      ],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLzVP0r6KyOW0dbvIQnmDU--z1JHnHz2ml4w&s",
    },
  ]);

  // Distinct values for filters
  const brands = [...new Set(cars.map((car) => car.make.toLowerCase()))];

  // Filter and sorting states
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    minPrice: 0,
    maxPrice: 50000,
    fuelType: "",
    condition: "",
  });
  const [sortOption, setSortOption] = useState("price");
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 8;

  // Filter and sorting logic
  const filteredCars = cars.filter((car) => {
    const normalizedBrand = car.make.toLowerCase();
    const normalizedModel = car.model.toLowerCase();
    const normalizedPrice = parseFloat(car.price.replace(/[^0-9.-]+/g, ""));

    return (
      (filters.brand === "" ||
        normalizedBrand === filters.brand.toLowerCase()) &&
      (filters.model === "" ||
        normalizedModel.includes(filters.model.toLowerCase())) &&
      normalizedPrice >= filters.minPrice &&
      normalizedPrice <= filters.maxPrice
    );
  });

  const sortedCars = [...filteredCars].sort((a, b) => {
    if (sortOption === "price") {
      return (
        parseFloat(a.price.replace(/[^0-9.-]+/g, "")) -
        parseFloat(b.price.replace(/[^0-9.-]+/g, ""))
      );
    }
    // Implement sorting by popularity and newest arrival as needed
    return 0;
  });

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = sortedCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(sortedCars.length / carsPerPage);

  return (
    <div className=" bg-body dark:bg-gray-900 dark:text-white font-[verdana]">
      {/* Filters */}
      <div className="pb-4 dark:bg-gray-900 dark:text-white shadow-2xl bg--600 shadow-slate-500  bg-body p-4  ">
        <div className="flex dark:bg-gray-900 dark:text-white justify-center text-center bg-body ">
          <h2 className="text-xl font-[verdana] font-semibold mb-4">Car Listing</h2>
        </div>
        {/* <h2 className="text-xl justify-center text-center font-semibold mb-4">Filter By</h2> */}
        <div className="mb-4 justify-center text-center font-[verdana] bg-body dark:bg-gray-800 dark:text-white p-4 rounded-2xl  flex gap-4 flex-wrap">
  {/* Brand Filter */}
  <div className="relative font-[verdana] group w-48">
    <button className="w-full text-sm hover:text-black font-semibold hover:rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-300 text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-900 dark:rounded-lg dark:border-none p-3 rounded-lg focus:outline-none">
      Brand
    </button>
    <div className="absolute z-50 top-full left-0 mt-2 w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg transition-transform transform scale-0 group-hover:scale-100 group-hover:translate-y-1">
      <ul className="p-2">
        <li>
          <button
            onClick={() => setFilters({ ...filters, brand: "" })}
            className="block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black  dark:hover:text-white"
          >
            All Brands
          </button>
        </li>
        {brands.map((brand) => (
          <li key={brand}>
            <button
              onClick={() => setFilters({ ...filters, brand })}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black  dark:hover:text-white"
            >
              {brand}
            </button>
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* Model Filter */}
  <div className="relative font-[verdana] group w-48">
    <button className="w-full text-sm font-semibold hover:rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black  dark:hover:text-gray-300 text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-900 dark:rounded-lg dark:border-none p-3 rounded-lg focus:outline-none">
      Model
    </button>
    <div className="absolute z-50 top-full left-0 mt-2 w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg transition-transform transform scale-0 group-hover:scale-100 group-hover:translate-y-1">
      <input
        type="text"
        placeholder="Enter model"
        value={filters.model}
        onChange={(e) => setFilters({ ...filters, model: e.target.value })}
        className="block w-full bg-white dark:bg-gray-900 text-left dark:border-none px-4 py-2 text-black dark:text-white border border-gray-300 dark:border-gray-00 hover:bg-gray-200 dark:hover:bg-slate-700 placeholder-gray-500 dark:placeholder-gray-400"
      />
    </div>
  </div>

  {/* Price Range Filter */}
  <div className="relative font-[verdana] group w-48">
    <button className="w-full text-sm font-semibold hover:rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-black  dark:hover:text-gray-300 text-black dark:text-gray-200 bg-gray-200 dark:bg-gray-900 dark:rounded-lg dark:border-none p-3 rounded-lg focus:outline-none">
      Price Range
    </button>
    <div className="absolute z-50 top-full left-0 mt-2 w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg transition-transform transform scale-0 group-hover:scale-100 group-hover:translate-y-1">
      <div className="p-2">
        <input
          type="number"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={(e) =>
            setFilters({
              ...filters,
              minPrice: parseFloat(e.target.value) || 0,
            })
          }
          className="block w-full dark:bg-gray-900 dark:border-none dark:text-gray-200 text-left px-4 py-2  dark:hover:bg-gray-700 hover:text-black  dark:hover:text-grey-200"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={(e) =>
            setFilters({
              ...filters,
              maxPrice: parseFloat(e.target.value) || 50000,
            })
          }
          className="block dark:bg-gray-900 dark:text-gray-200 w-full text-left px-4 py-2  dark:hover:bg-gray-700 hover:text-black dark:hover:text-grey-200"
        />
      </div>
    </div>
  </div>
</div>

      </div>
      {/* Sorting Options */}
      <div className="mb-4 font-[verdana] px-4 dark:bg-gray-900 dark:text-gray-200 ">
        <label htmlFor="sort" className="mr-2 font-semibold">
          Sort By:
        </label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border dark:bg-gray-800 dark:border-none mt-2 dark:border-gray-800 dark:text-gray-200  border-gray-300 rounded-lg"
        >
          <option value="price">Price</option>
          <option className=" hover:bg-black hover:text-white" value="popularity">
            Popularity
          </option>
          <option className=" hover:bg-black hover:text-white" value="newest">
            Newest Arrival
          </option>
        </select>
      </div>

      {/* Car Listings */}
      <div className="grid px-5 dark:bg-gray-900 dark:text-gray-200 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
  {currentCars.map((car) => (
    <Link to={`cardetail/${car.id}`} key={car.id}>
      <div
        className="bg-white dark:bg-gray-800 dark:border-none pb-2 dark:text-gray-200 border rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      >
        {/* Placeholder image source */}
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="w-full bg-white h-48 object-cover transform transition-transform duration-300 hover:scale-110"
        />
        <div className="p-4">
          <h2 className="text-xl dark:bg-gray-800 dark:text-gray-200 text-black font-semibold">
            {car.make} {car.model}
          </h2>
          <p className="text-gray-600 dark:bg-gray-800 dark:text-gray-400">Year: {car.year}</p>
          <p className="text-gray-800 dark:bg-gray-800 dark:text-gray-200 font-bold mt-2">{car.price}</p>
          <div className="mt-4">
            <h3 className="font-semibold dark:bg-gray-800 dark:text-gray-200 text-black">Installment Plans:</h3>
            <ul className="list-disc pl-5 pb-4">
              {car.installmentPlans.map((plan, index) => (
                <li key={index} className="text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                  {plan}
                </li>
              ))}
            </ul>
          </div>
          <Link
            to={`cardetail/${car.id}`}
            className="p-2 bg-gray-800 font-[verdana] text-white rounded-lg hover:bg-body hover:text-black hover:underline transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </Link>
  ))}
</div>


      {/* Pagination */}
      <div className="py-6 dark:bg-gray-900  px-4 flex font-[verdana] justify-between">
        <button
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 hover:text-gray-800  disabled:opacity-50"
        >
          Previous
        </button>
        <span className="self-center">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2  bg-black text-white rounded-lg hover:bg-gray-800 hover:text-butdisabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CarListing;
