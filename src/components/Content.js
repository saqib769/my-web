import React from "react";

function Content() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg text-center" id="contentDiv">
      <div className="mb-8">
        <p className="text-2xl font-bold border-b-2 border-gray-800 inline-block pb-2">
          Learn More
        </p>
      </div>

      <div className="mt-16 mb-8">
        <h1 className="text-4xl font-bold">Layloje</h1>
      </div>

      <div className="mb-8">
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="text-lg">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="text-lg">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="flex justify-between mb-8">
        <p className="w-1/2 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> Sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
          <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco
          <br /> laboris nisi ut aliquip ex ea commodo consequat.
          <br />
        </p>
        <p className="w-1/2 text-right">
          Duis aute irure dolor in reprehenderit in voluptate velit
          <br /> esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat <br />
          cupidatat non proident, sunt in culpa qui officia deserunt
          <br /> mollit anim id est laborum. Curabitur pretium tincidunt lacus.
          <br />
        </p>
      </div>

      <div>
        <p className="text-center text-sm text-gray-600">End of Webpage</p>
      </div>
    </div>
  );
}

export default Content;
