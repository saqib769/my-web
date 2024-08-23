import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="p-16 relative mt-[-90px] space-y-4" id="droneDiv">
      <div className="flex items-center bg-orange-500 rounded-lg p-4 space-x-4">
        <div className=" font-bold flex-1">
          <p className="text-lg  mb-2">Compact drone camera</p>
          <p className="text-lg text-white mb-2">Ideal for aerial shots</p>
          <p className="text-xs pl-4 text-blue-200">Easy setup and control</p>
        </div>

        <div className="flex-shrink-0 relative">
          <img
            src="/images/my-image.jpg"
            alt="Drone Camera"
            className="w-40 rounded"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
