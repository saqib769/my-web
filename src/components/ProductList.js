import React from "react";
import { cards } from "./data";

function ProductList() {
  return (
   
   <div className="p-6 max-w-6xl mx-auto bg-white rounded-lg shadow-lg mt-8" id="productDiv">
      
      <div className="grid grid-cols-4 gap-4">
        {cards.map(( card )=> {
          return(
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img
              src={card.image}
              alt="Camera"
              className="w-full h-44 object-cover rounded-t-lg"
            />
            <div className="p-4 text-center">
              {card.features.map((feature, index)=> (
                            <p key={index} className="text-xs mb-2">{feature}</p>
            ))}
              <p className="text-xl font-bold text-gray-800">{card.price}</p>
        
            </div>

            </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default ProductList;
