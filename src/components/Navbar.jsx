import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // state to manage dropdown visibility

  return (
    <div className="fixed w-full h-[60px] flex justify-center items-center bg-[#0f0f1e] text-white px-4 z-200">
      <div className="max-w-screen-xl w-full flex justify-between items-center">
        <h1 className="text-3xl text-yellow-500">Game 4 Free</h1>
        
        {/* Menu icon for small screens */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {/* Use a suitable icon or text for the menu button */}
            Menu
          </button>
        </div>

        {/* Navbar items for medium and larger screens */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link to="/" className="hover:text-yellow-500 hover:scale-110">Home</Link>
          </li>
          <li>
            <Link to="/games" className="hover:text-yellow-500">Games</Link>
          </li>
          <li>
            <Link to="/royale" className="hover:text-yellow-500">Placeholder</Link>
          </li>
        </ul>

        {/* Dropdown menu for small screens */}
        {isOpen && (
          <div className="md:hidden absolute top-[60px] right-4 bg-gray-700 text-white px-4 py-2 rounded shadow-lg z-200" >
            <ul>
              <li className="my-2">
                <Link to="/" className="hover:text-yellow-500" onClick={() => setIsOpen(false)}>Home</Link>
              </li>
              <li className="my-2">
                <Link to="/games" className="hover:text-yellow-500" onClick={() => setIsOpen(false)}>Games</Link>
              </li>
              <li className="my-2">
                <Link to="/royale" className="hover:text-yellow-500" onClick={() => setIsOpen(false)}>Placeholder</Link>
              </li>
              <li className="hover:text-yellow-500 text-red-900" onClick={() => setIsOpen(false)}>
                Back
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;



