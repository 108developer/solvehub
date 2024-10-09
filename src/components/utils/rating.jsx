"use client"
// src/components/StarRating.js
import { useState } from 'react';
import { FaStar } from 'react-icons/fa'; // Import star icons from react-icons

const StarRating = () => {
  const [rating, setRating] = useState(0); // Holds the rating value
  const [hover, setHover] = useState(null); // Holds the value while hovering

  const handleClick = (value) => {
    setRating(value); // Set the rating value
  };

  return (
    <div className="flex items-center">
      {/* Array with 5 elements for stars */}
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <button
            key={index}
            onClick={() => handleClick(ratingValue)}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
            className="focus:outline-none"
          >
            <FaStar
              size={25}
              className={`transition-colors duration-200 ${
                ratingValue <= (hover || rating) ? 'text-yellow-400' : 'text-gray-300'
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
