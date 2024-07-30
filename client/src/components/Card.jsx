
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  // Use images directly as it's always an array
  const images = item.images;

  // Fallback image in case the first image is missing
  const fallbackImage = "/default-image.png"; // Provide a default image path

  return (
    <div className="flex gap-5 border p-4 rounded-lg last:mb-2 transition-transform duration-200 ease-in-out transform hover:scale-105">
      <Link
        to={`/${item.id}`}
        className="flex-shrink-0 w-64 h-52 relative overflow-hidden"
      >
        <img
          className="w-full h-full object-cover rounded-lg"
          src={images[0] || fallbackImage} // Use the first image URL or fallback image
          alt={item.title}
        />
      </Link>
      <div className="flex flex-col justify-between w-full max-h-52 overflow-y-auto">
        <div className="flex flex-col mb-2">
          <Link to={`/${item.id}`} className="text-lg font-bold block">
            {item.title}
          </Link>
          <div className="flex items-center text-sm text-gray-500 mt-2">
            <img className="w-4 h-4 mr-1" src="/pin.png" alt="Location" />
            <span>{item.address}</span>
          </div>
        </div>
        <div className="flex items-center mb-2">
          <p className="bg-yellow-300 text-lg font-semibold px-2 py-1 rounded-lg text-black">
            ${item.price}
          </p>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            <img className="w-4 h-4" src="/bed.png" alt="Bedroom" />
            <span className="text-sm text-gray-600">
              {item.bedroom} bedroom
            </span>
          </div>
          <div className="flex items-center gap-1">
            <img className="w-4 h-4" src="/bath.png" alt="Bathroom" />
            <span className="text-sm text-gray-600">
              {item.bathroom} bathroom
            </span>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center justify-center p-2 rounded-md border border-gray-300 hover:bg-gray-100">
              <img className="w-3 h-3" src="/save.png" alt="Save" />
            </button>
            <button className="flex items-center justify-center p-2 rounded-md border border-gray-300 hover:bg-gray-100">
              <img className="w-3 h-3" src="/chat.png" alt="Chat" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
