import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Home() {
  useEffect(() => {
    // Change background color when Home is mounted
    document.body.style.backgroundColor = "#1E293B";

    // Cleanup: Reset background when Home unmounts
    return () => {
      document.body.style.backgroundColor = "#E2E8F0"; // default color
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 ">
      <h1 className="text-center text-[15vw] sm:text-[10vw] font-PlayfairDisplay font-bold text-[#E3B778] leading-tight">
        BookHub
      </h1>

      <p className="text-center text-[#F5E9DC] font-PlayfairDisplay text-lg sm:text-xl max-w-xl mt-4">
        Fill your house with stacks of books, in all the crannies and all the
        nooks.
      </p>

      <div className="mt-8">
        <NavLink
          to="/search"
          className="bg-[#E3B778] hover:bg-[#E3B763] transition-colors duration-300 text-[#4A3B2D] font-semibold px-6 py-3 rounded-lg shadow-md"
        >
          Get Started
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
