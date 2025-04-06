import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-[#1E293B] text-[#E3B778] font-Inter rounded-t-2xl mt-10 shadow-inner">
      <div className="max-w-[90%] mx-auto py-4 flex flex-col sm:flex-row items-center justify-between text-[12px] sm:text-[14px]">
        <p className="mb-2 sm:mb-0">
          &copy; 2025{" "}
          <Link to="/terms" className="underline hover:text-white">
            BookHub
          </Link>
          . All rights reserved.
        </p>
        <div className="space-x-4">
          <Link to="/about" className="hover:underline hover:text-white">
            About
          </Link>
          <Link to="/contact" className="hover:underline hover:text-white">
            Contact
          </Link>
          <Link to="/terms" className="hover:underline hover:text-white">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
