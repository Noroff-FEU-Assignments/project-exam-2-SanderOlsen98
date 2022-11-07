import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../img/postenLogo.png";
import { useState } from "react";

console.log(logo);

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className=" shadow-md w-full fixed top-0 left-0 ">
      <div className="md:flex items-center justify-between bg-white py-5 md:px-10 px-7">
        <div className=" h-6 w-28 cursor-pointer">
          <img src={logo} alt="logo" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className=" text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <nav>
          <ul
            className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open
                ? "top-20 opacity-100"
                : "top-[-490px] md:opacity-100 opacity-0"
            }`}
          >
            <li className="md:ml-8 text-l md:my-0 my-6">
              <Link to="/" className=" hover:text-red-400 duration-50">
                Home
              </Link>
            </li>
            <li className="md:ml-8 text-l md:my-0 my-6">
              <Link to="/store" className=" hover:text-red-400 duration-500">
                Store
              </Link>
            </li>
            <li className="md:ml-8 text-l md:my-0 my-6">
              <Link
                to="/dashboard"
                className=" hover:text-red-400 duration-500"
              >
                Dashboard
              </Link>
            </li>
            <li className="md:ml-8 text-l md:my-0 my-6">
              <Link to="/contact" className=" hover:text-red-400 duration-500">
                Contact
              </Link>
            </li>
            <button className=" bg-red-500 text-white py-1 px-4 rounded md:ml-8 hover:bg-red-900 duration-500">
              <Link to="/login" className=" hover:text-red-400 duration-500">
                Login
              </Link>
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
