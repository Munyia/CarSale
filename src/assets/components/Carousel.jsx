import { useState, useEffect } from "react";

const Carousel = ({
  children,
  autoslide = false,
  autoslideinterval = 5000,
}) => {
  // State to keep track of the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === children.length - 1 ? 0 : prevSlide + 1
    ); // If on the last slide, go back to the first, otherwise move to the next slide
  };

  // useEffect hook to enable auto-sliding if autoslide is true
  useEffect(() => {
    if (autoslide) {
      const interval = setInterval(() => {
        nextSlide(); // Automatically move to the next slide at the specified interval
      }, autoslideinterval);
      return () => clearInterval(interval); // Clear the interval when component unmounts or autoslide settings change
    }
  }, [autoslide, autoslideinterval]); // Effect depends on autoslide and autoslideinterval props

  return (
    <div className="relative w-full dark:bg-gray-900 dark:text-white h-full overflow-hidden">
      {/* Container for all the slides, transforms based on the current slide */}
      <div
        className="flex  transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {/* Map over children (slides) and render each slide */}
        {children.map((slide, index) => (
          <div key={index} className="min-w-full h-full">
            {slide}
          </div>
        ))}
      </div>

      {/* Optional navigation dots for manual slide navigation */}
      <div className="absolute  bottom-5 left-0 right-0 flex justify-center">
        {children.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`} // Highlight current slide dot
            onClick={() => setCurrentSlide(index)} // Clicking a dot moves to the corresponding slide
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
