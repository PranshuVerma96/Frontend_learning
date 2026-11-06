import React from "react";

const Card = ({ mobileName,price, butn="OnlySEE" }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>

      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6 w-72">
          <h2 className="text-xl font-bold text-gray-800">iPhone 16</h2>
          <p className="text-gray-600 mt-3">Price: ₹75,000</p>
          <p className="text-gray-600">Category: Electronics</p>
          <p className="text-yellow-500 mt-2">Rating: ⭐ 4.5</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-5 w-full hover:bg-blue-700">
            {butn}
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 w-72">
          <h2 className="text-xl font-bold text-gray-800">{mobileName}</h2>
          <p className="text-gray-600 mt-3">Price: ₹{price}</p>
          <p className="text-gray-600">Category: Electronics</p>
          <p className="text-yellow-500 mt-2">Rating: ⭐ 4.7</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-5 w-full hover:bg-blue-700">
            {butn}
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 w-72">
          <h2 className="text-xl font-bold text-gray-800">OnePlus 13</h2>
          <p className="text-gray-600 mt-3">Price: ₹65,000</p>
          <p className="text-gray-600">Category: Electronics</p>
          <p className="text-yellow-500 mt-2">Rating: ⭐ 4.3</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-5 w-full hover:bg-blue-700">
            {butn || "Only SEE"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
