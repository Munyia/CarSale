import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const CarListing = () => {
  // Sample car data
  const [cars] = useState([
    {
      id: 1,
      make: 'Toyota',
      model: 'Camry',
      year: 2022,
      price: '$25,000',
      fuelType: 'Petrol',
      condition: 'New',
      installmentPlans: ['12 months - $2,083/month', '24 months - $1,042/month'],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL-eWM8Si9XLBKzZRdWDc_fxi4SXCvWu4xsg&s',
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Civic',
      year: 2023,
      price: '$22,000',
      fuelType: 'Diesel',
      condition: 'New',
      installmentPlans: ['12 months - $1,833/month', '24 months - $917/month'],
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnjmpP36L0r0Swrfcc4PCiJpzuYxEVXfktLg&s'
    },
    {
      id: 3,
      make: 'Ford',
      model: 'Mustang',
      year: 2021,
      price: '$30,000',
      fuelType: 'Petrol',
      condition: 'Used',
      installmentPlans: ['12 months - $2,500/month', '24 months - $1,250/month'],
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMTyr_4oPJUzqL-0MpDMICAY6zSw7-Fhheqw&s'
    },
    {
      id: 4,
      make: 'Lexus',
      model: 'Mustang',
      year: 2024,
      price: '$50,000',
      fuelType: 'Petrol',
      condition: 'Used',
      installmentPlans: ['12 months - $10,500/month', '8 months - $1,250/month'],
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUSxXu8ogj81ZsYA404CxiS-ATB_2jW5UIfQ&s'
    },
    {
      id: 5,
      make: 'Lexus',
      model: 'Mustang',
      year: 2020,
      price: '$30,000',
      fuelType: 'Petrol',
      condition: 'Used',
      installmentPlans: ['10 months - $3,500/month', '4 months - $1,250/month'],
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkTyyAuoTUQfBQveMwScPGtgPTam-8k2BNLg&s'
    },
    {
      id: 6,
      make: 'Ford',
      model: 'Mustang',
      year: 2022,
      price: '$35,000',
      fuelType: 'Diesel',
      condition: 'Used',
      installmentPlans: ['12 months - $2,500/month', '24 months - $1,250/month'],
       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLzVP0r6KyOW0dbvIQnmDU--z1JHnHz2ml4w&s'
    }
  ]);

  // Distinct values for filters
  const brands = [...new Set(cars.map(car => car.make.toLowerCase()))];
  const fuelTypes = [...new Set(cars.map(car => car.fuelType.toLowerCase()))];
  const conditions = [...new Set(cars.map(car => car.condition.toLowerCase()))];

  // Filter and sorting states
  const [filters, setFilters] = useState({
    brand: '',
    model: '',
    minPrice: 0,
    maxPrice: 50000,
    fuelType: '',
    condition: ''
  });
  const [sortOption, setSortOption] = useState('price');
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 3;

  // Filter and sorting logic
  const filteredCars = cars.filter(car => {
    const normalizedBrand = car.make.toLowerCase();
    const normalizedFuelType = car.fuelType.toLowerCase();
    const normalizedCondition = car.condition.toLowerCase();
    const normalizedModel = car.model.toLowerCase();
    const normalizedPrice = parseFloat(car.price.replace(/[^0-9.-]+/g, ""));

    return (
        (filters.brand === '' || normalizedBrand === filters.brand.toLowerCase()) &&
        (filters.model === '' || normalizedModel.includes(filters.model.toLowerCase())) &&
        (normalizedPrice >= filters.minPrice && normalizedPrice <= filters.maxPrice) &&
        (filters.fuelType === '' || normalizedFuelType === filters.fuelType.toLowerCase()) &&
        (filters.condition === '' || normalizedCondition === filters.condition.toLowerCase())
    );
  });

  const sortedCars = [...filteredCars].sort((a, b) => {
    if (sortOption === 'price') {
      return parseFloat(a.price.replace(/[^0-9.-]+/g, "")) - parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
    }
    // Implement sorting by popularity and newest arrival as needed
    return 0;
  });

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = sortedCars.slice(indexOfFirstCar, indexOfLastCar);
  const totalPages = Math.ceil(sortedCars.length / carsPerPage);

  return (
    <div className=" bg-body">
      <Header/>
      {/* <h1 className="text-3xl text-but bg-white font-bold text-center mb-6">Car Listings</h1> */}

      {/* Filters */}
      <div className="mb-4  shadow-2xl bg--600 shadow-slate-500  bg-white p-4 rounded-2xl ">
        <div className='flex justify-between'>     
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <h2 className="text-xl font-semibold mb-4">Car Listing</h2>
        </div>
        <div className="mb-4 justify-center text-center bg-body p-4 rounded-2xl shadow-2xl shadow-slate-900  flex gap-4 flex-wrap">
          {/* Brand Filter */}
          <div className="relative group bg-white w-48">
            <button className="w-full text-sm font-semibold hover:rounded-lg hover:bg-white hover:text-but text-white bg-but p-3 rounded-lg focus:outline-none">
              Brand
            </button>
            <div className="absolute top-full left-0 mt-2 w-full bg-white  border border-gray-300 rounded-lg shadow-lg transition-transform transform scale-0 group-hover:scale-100 group-hover:translate-y-1">
              <ul className="p-2">
                <li><button onClick={() => setFilters({ ...filters, brand: '' })} className="block  w-full text-left px-4 py-2 hover:bg-gray-200">All Brands</button></li>
                {brands.map(brand => (
                  <li key={brand}>
                    <button
                      onClick={() => setFilters({ ...filters, brand })}
                      className="block w-full text-left px-4 py-2 hover:bg-but hover:text-white"
                    >
                      {brand}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Model Filter */}
          <div className="relative group w-48">
          <button className="w-full text-sm font-semibold hover:rounded-lg hover:bg-white hover:text-but text-white bg-but p-3 rounded-lg focus:outline-none">
              Model
            </button>
            <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg transition-transform transform scale-0 group-hover:scale-100 group-hover:translate-y-1">
              <input
                type="text"
                placeholder="Enter model"
                value={filters.model}
                onChange={(e) => setFilters({ ...filters, model: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="relative group w-48">
          <button className="w-full text-sm font-semibold hover:rounded-lg hover:bg-white hover:text-but text-white bg-but p-3 rounded-lg focus:outline-none">
              Price Range
            </button>
            <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg transition-transform transform scale-0 group-hover:scale-100 group-hover:translate-y-1">
              <div className="p-2">
                <input
                  type="number"
                  placeholder="Min Price"
                  value={filters.minPrice}
                  onChange={(e) => setFilters({ ...filters, minPrice: parseFloat(e.target.value) || 0 })}
                  className="w-full border hover:bg-but hover:text-white border-gray-300 rounded-lg px-3 py-2 text-sm mb-2"
                />
                <input
                  type="number"
                  placeholder="Max Price"
                  value={filters.maxPrice}
                  onChange={(e) => setFilters({ ...filters, maxPrice: parseFloat(e.target.value) || 50000 })}
                  className="w-full border hover:bg-but hover:text-white border-gray-300 rounded-lg px-3 py-2 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Fuel Type Filter */}
          <div className="relative group w-48">
          <button className="w-full text-sm font-semibold hover:rounded-lg hover:bg-white hover:text-but text-white bg-but p-3 rounded-lg focus:outline-none">
              Fuel Type
            </button>
            <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg transition-transform transform scale-0 group-hover:scale-100 group-hover:translate-y-1">
              <ul className="p-2">
                <li><button onClick={() => setFilters({ ...filters, fuelType: '' })} className="block w-full text-left px-4 py-2 hover:bg-gray-200">All Fuel Types</button></li>
                {fuelTypes.map(fuelType => (
                  <li key={fuelType}>
                    <button
                      onClick={() => setFilters({ ...filters, fuelType })}
                      className="block w-full text-left px-4 py-2  hover:bg-but hover:text-white"
                    >
                      {fuelType}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Condition Filter */}
          <div className="relative group w-48">
          <button className="w-full text-sm font-semibold hover:rounded-lg hover:bg-white hover:text-but text-white bg-but p-3 rounded-lg focus:outline-none">
              Condition
            </button>
            <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg transition-transform transform scale-0 group-hover:scale-100 group-hover:translate-y-1">
              <ul className="p-2">
                <li><button onClick={() => setFilters({ ...filters, condition: '' })} className="block w-full text-left px-4 py-2 hover:bg-gray-200">All Conditions</button></li>
                {conditions.map(condition => (
                  <li key={condition}>
                    <button
                      onClick={() => setFilters({ ...filters, condition })}
                      className="block w-full text-left px-4 py-2 hover:bg-but hover:text-white"
                    >
                      {condition.charAt(0).toUpperCase() + condition.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Sorting Options */}
      <div className="mb-4 px-4">
        <label htmlFor="sort" className="mr-2 font-semibold">Sort By:</label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border  border-gray-300 rounded-lg"
        >
          <option value="price">Price</option>
          <option className=' hover:bg-but hover:text-white' value="popularity">Popularity</option>
          <option className=' hover:bg-but hover:text-white' value="newest">Newest Arrival</option>
        </select>
      </div>

      {/* Car Listings */}
      <div className="grid px-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
        {currentCars.map(car => (
          <div key={car.id} className="bg-white border rounded-2xl shadow-2xl shadow-slate-900 overflow-hidden">
            {/* Placeholder image source */}
            <img src={car.image} alt={`${car.make} ${car.model}`} className="w-full bg-white h-48 object-cover"/>
            <div className="p-4">
              <h2 className="text-xl text-but font-semibold">{car.make} {car.model}</h2>
              <p className="text-gray-600">Year: {car.year}</p>
              <p className="text-gray-800 font-bold mt-2">{car.price}</p>
              <div className="mt-4">
                <h3 className="font-semibold text-but">Installment Plans:</h3>
                <ul className="list-disc pl-5">
                  {car.installmentPlans.map((plan, index) => (
                    <li key={index} className="text-black">{plan}</li>
                  ))}
                </ul>
              </div>
              <Link to={`cardetail/${car.id}`} className="block text-but mt-4 hover:underline">View Details</Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="my-6 px-4 flex justify-between">
        <button
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-but text-white rounded-lg hover:text-black hover:bg-blue-700 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="self-center">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2  bg-but text-white rounded-lg hover:text-black hover:bg-blue-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>
      <Footer/>
    </div>
  );
}

export default CarListing;
