import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState();
  const location = useLocation();

  useEffect(() => {
    setMenuOpen();
  }, [location.pathname]);

  return (
    <>
      <nav className="">
        <div className="pt-8"></div>
        <div className="flex justify-between px-8 sm:px-18 md:px-32 bg-[#1E293B] rounded-3xl w-[95%] mx-auto">
          <div className="text-[48px] text-[#ffb44a] font-PlayfairDisplay select-none">
            BookHub
          </div>

          <ul className="hidden xl:flex justify-between items-center font-Inter font-semibold text-[#E3B778] gap-10 ">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `cursor-pointer hover:text-white p-2 rounded-2xl transition-all ${
                    isActive ? "text-white" : "text-[#E3B778]"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `cursor-pointer hover:text-white p-2 rounded-2xl transition-all ${
                    isActive ? "text-white" : "text-[#E3B778]"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `cursor-pointer hover:text-white p-2 rounded-2xl transition-all ${
                    isActive ? "text-white" : "text-[#E3B778]"
                  }`
                }
              >
                About
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center text-4xl text-[#E3B778] xl:hidden cursor-pointer hover:text-white p-2 rounded-2xl transition-all">
            <i
              className="bx bx-menu"
              onClick={() => setMenuOpen(!menuOpen)}
            ></i>
          </div>
          <div
            className={`absolute bg-[#E3B778] shadow-lg top-30 rounded-3xl w-[90%] left-[5%] p-5 flex flex-col items-center font-semibold text-[#1A2E3B] xl:hidden ${
              menuOpen ? !"hidden" : "hidden"
            }`}
          >
            <li className="list-none">
              <NavLink
                to="/home"
                className="px-2 list-none font-Inter hover:text-[#1A2E3B] cursor-pointer select-none"
              >
                Home
              </NavLink>
            </li>
            <NavLink
              to="/contact"
              className="px-2 list-none font-Inter hover:text-[#1A2E3B] cursor-pointer select-none"
            >
              Contact
            </NavLink>
            <NavLink
              to="/about"
              className="px-2 list-none font-Inter hover:text-[#1A2E3B] cursor-pointer select-none"
            >
              About
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;