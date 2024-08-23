import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Headphone() {
  return (
    <>
      <div className="p-8" id="headphoneDiv">
        <div className="flex items-center bg-blue-400 rounded-lg p-4 space-x-4">
          <div className="text-white flex-1 px-4">
            <h2 className="text-xl font-bold mb-2">Headphone Model</h2>
            <p>
              Experience superior sound quality with this model. <br />
              Designed for comfort and long listening sessions, <br />
              it features noise cancellation and a sleek design. <br />
              Perfect for music lovers and professionals alike. <br />
              <div className="pt-4 pl-8">
                <button className=" bg-orange-500 w-36 pl-2 rounded-xl text-2xl ">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="pr-2 text-white text-lg"
                  />
                  Register
                </button>
              </div>
            </p>
          </div>

          <div className="flex-shrink-0">
            <img
              src="/images/my-image.webp"
              alt="Headphone"
              className=" pr-24 w-80 h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Headphone;
