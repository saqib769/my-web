import React, { useState } from "react";
import Container from "./Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faCalendarDays,
  faBell,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";


function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center p-3" id="homediv">
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faBars} className="text-xl cursor-pointer" onClick={toggleMenu} />
          <h1 className="text-3xl font-bold">Layloje</h1>
        </div>

        <div className="flex items-center space-x-6">
          <FontAwesomeIcon icon={faBell} className="text-xl" />
          <FontAwesomeIcon icon={faCalendarDays} className="text-xl" />
          <img
            className="w-12 h-12 rounded-full"
            src="/images/my-image.jpeg"
            alt="img-description"
          />
        </div>
      </div>

      <div>

        <div className="flex justify-between items-center">
          <p className="pl-16">Some Text Here</p>
          <FontAwesomeIcon icon={faSearch} className="text-xl mr-8 pt-4" />
        </div>

        {isMenuOpen && (
          <ul className="list-disc pl-16 pt-4">
            <li><a href="#droneDiv">Drone</a></li>
            <li><a href="#flashsaleDiv">Flash Sale</a></li>
            <li><a href="#headphoneDiv">Head phone</a></li>
            <li><a href="#productDiv">Product List</a></li>
            <li><a href="#countdownDiv">Countdown</a></li>
            <li><a href="#summaryDiv">Summary</a></li>
            <li><a href="#contentDiv">Content</a></li>
          </ul>
        )}


      </div>
      <div>

       <Container />
      </div>
    </>
  );
}

export default Home;
