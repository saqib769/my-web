import React from "react";
import { counts } from "./data";
function Countdown() {
  return (
    <div
      className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-lg mt-[-100px]"
      id="countdownDiv"
    >
      {/* Heading aur Countdown Timer */}
      <h1 className="text-3xl font-bold text-center mb-4">Hurry up!</h1>
      <p className="text-xl text-center mb-2">Offer ends in</p>

      <div className="flex justify-center items-center space-x-4 mb-8">
        {/* Direct JSX mein countdown values likhna */}
        <div className="bg-gray-800 text-white rounded-lg p-4 text-center w-24">
          <p className="text-2xl font-semibold">4</p>
          <p className="text-sm">Days</p>
        </div>
        <div className="bg-gray-800 text-white rounded-lg p-4 text-center w-24">
          <p className="text-2xl font-semibold">12</p>
          <p className="text-sm">Hours</p>
        </div>
        <div className="bg-gray-800 text-white rounded-lg p-4 text-center w-24">
          <p className="text-2xl font-semibold">30</p>
          <p className="text-sm">Minutes</p>
        </div>
        <div className="bg-gray-800 text-white rounded-lg p-4 text-center w-24">
          <p className="text-2xl font-semibold">45</p>
          <p className="text-sm">Seconds</p>
        </div>
      </div>

      {/* Images ko neche display karna aur ek row mein 4 images */}
      <div className="grid grid-cols-4 gap-4">
        { counts.map((count)=>{
          return(
            <div className="bg-gray-100 p-2 rounded-lg shadow-sm">
            <img
              src={count.image}
              alt="Image 1"
              className="w-full h-40 object-cover rounded-md"
            />
            </div>

          )
        })
      }
          
      </div>
    </div>
  );
}

export default Countdown;
