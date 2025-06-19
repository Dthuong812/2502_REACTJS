import React from "react";
import { Link, Navigate } from "react-router-dom";

const SideBarComponent = () => {
  return (
    <div className="flex-col justify-between w-64 text-white bg-gray-800 ">
      <h1 className="pt-3 mb-5 text-xl font-bold text-center">LOGO</h1>
      <ul className="space-y-2">
        <li>
          <Link to="/student" className="block px-4 py-2 hover:bg-gray-700">
            Student
          </Link>
        </li>
        <li>
          <Link to="/about" className="block px-4 py-2 hover:bg-gray-700">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="block px-4 py-2 hover:bg-gray-700">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBarComponent;
