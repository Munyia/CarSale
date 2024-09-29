import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link

const carsData = [
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
  ];

const carTypesData = [
  { id: 1, name: 'SUV' },
  { id: 2, name: 'Sedan' },
  { id: 3, name: 'Truck' },
  { id: 4, name: 'Coupe' },
  { id: 5, name: 'Convertible' },
  { id: 6, name: 'Hatchback' },
  { id: 7, name: 'Wagon' },
  { id: 8, name: 'Van' },
  { id: 9, name: 'Crossover' },
  { id: 10, name: 'Luxury' },
  { id: 11, name: 'Sports Car' },
  { id: 12, name: 'Diesel' },
  { id: 13, name: 'Electric' },
  { id: 14, name: 'Electric' },
  { id: 15, name: 'Electric' },
  { id: 16, name: 'Electric' },
  { id: 17, name: 'Electric' },
];

const Popular= () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [selectedType, setSelectedType] = useState(''); // State to track selected car type


  const checkScrollPosition = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  useEffect(() => {
    const refCurrent = scrollRef.current;
    refCurrent.addEventListener('scroll', checkScrollPosition);
    checkScrollPosition(); // Run on initial render

    return () => refCurrent.removeEventListener('scroll', checkScrollPosition);
  }, []);

  const filteredCars = selectedType
  ? carsData.filter((car) => car.type === selectedType)
  : carsData;

  return ( 
        <div>
   <div className="w-full dark:bg-gray-800 dark:text-white bg-white px-6 pt-6 relative">
    {/* Header */}
    <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Categories</h2>
    </div>

    {/* Navigation arrows */}
    {canScrollLeft && (
        <button
            className="absolute top-35 left-0 transform -translate-y-1/2 bg-black text-white rounded-full p-2 transition hover:bg-gray-800"
            onClick={scrollLeft}
        >
            ←
        </button>
    )}
    {canScrollRight && (
        <button
            className="absolute top-35 right-0 transform -translate-y-1/2 bg-black text-white rounded-full p-2 transition hover:bg-gray-800"
            onClick={scrollRight}
        >
            →
        </button>
    )}

    {/* Horizontal Scrollable Car Types */}
    <div
        ref={scrollRef}
        className="flex  overflow-x-auto no-scrollbar gap-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // For Firefox and IE
    >
        {carTypesData.map((carType) => (
            <div
                key={carType.id}
                onClick={() => setSelectedType(carType.name)}
                className={`flex-shrink-0 p-3 dark:bg-gray-500 dark:text-white bg-gray-200 rounded-2xl text-center flex items-center justify-center cursor-pointer transition duration-300 ease-in-out hover:bg-black hover:text-white ${
                    selectedType === carType.name ? 'bg-black text-white' : ''
                }`}
            >
                <h3 className="text-sm font-semibold">{carType.name}</h3>
            </div>
        ))}
    </div>

    {/* Car Grid */}
    <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
    {filteredCars.map((car) => (
        <div
            key={car.id}
            className={`border shadow-md rounded-2xl dark:bg-gray-800 dark:text-white dark:border-none p-4 group transition-transform duration-300 ease-in-out transform ${
                selectedType === car.condition ? 'bg-black text-white' : 'bg-white'
            } hover:scale-105`} // Add hover scale for pop-out effect
        >
            <img
                src={car.image} // Use the correct property for the image
                alt={`${car.make} ${car.model}`} // Descriptive alt text
                className="w-full h-32 object-cover mb-2"
            />
            <h3 className="text-lg font-semibold">
                {car.make} {car.model} ({car.year})
            </h3>
            <Link
                to={`/shop/${car.id}`}
                className="mt-2 text-but transition group-hover:underline group-hover:underline-offset-4 group-hover:decoration-2 group-hover:decoration-but"
            >
                View Details
            </Link>
        </div>
    ))}
</div>

    
    <div className="flex pt-5 underline text-lg items-center">
        <Link to={'/carlisting'} className="mx-2">See more Cars</Link>
    </div>
</div>

<style jsx>{`
    /* Hide scrollbar for Chrome, Safari, and Opera */
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }
`}</style>

    </div>
    

  );
};

export default Popular;
