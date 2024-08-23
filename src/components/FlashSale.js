import React from "react";

function FlashSale() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center" id="flashsaleDiv">
      <h1 className="text-5xl font-bold mb-4">Flash Sale</h1>

      <hr className="border-t-2 border-gray-300 mb-4" />

      <p className="text-sm mb-2">Limited time offer!</p>
      <p className="text-sm mb-2">Get the best quality headphones.</p>
      <p className="text-sm mb-4">Don't miss out!</p>

      <p className="text-xl font-semibold text-green-600 mb-4">$99.99</p>

      <img
        src="/images/my-image.webp"
        alt="Headphones"
        className="w-[35%] pb-16 mx-auto"
      />
    </div>
  );
}

export default FlashSale;
