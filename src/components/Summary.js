import React from "react";
import { Items } from "./data";

function Summary() {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white rounded-lg shadow-lg mt-8" id="summaryDiv">
      <h1 className="text-3xl font-bold mb-6">Summary</h1>

     
      <div className="grid grid-cols-4 gap-6 mb-12">
  {Items.map((item) => (
    <div key={item.id} className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
      <img
        src={item.image}
        alt={`Item ${item.id}`}
        className="w-full h-44 object-cover"
      />
      <div className="p-4 text-center">
        {item.description.map((desc, index) => (
          <p key={index} className="text-xs mb-2">{desc}</p>
        ))}
        <p className="text-xl font-bold text-gray-800">{item.price}</p>
      </div>
    </div>
  ))}
</div>
</div>

  );
}

export default Summary;
