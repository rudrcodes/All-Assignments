import React from "react";

export const Navbar = () => {
  return (
    <div className="w-screen bg-red-400 flex justify-center items-center">
      <div className="flex justify-between items-center flex-row w-[90%]">
        <h1>M</h1>
        <div className="w-[400px]">
          <ul className="flex justify-evenly items-center">
            <li>Sample</li>
            <li>Features</li>
            <li>Layouts</li>
            <li>Our Shop</li>
            <li>Buy Theme</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
