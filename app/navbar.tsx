"use client";

import { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="bg-white/90 backdrop-blur-md shadow-none lg:px-32  px-6 sm:px-4 py-3 flex items-center justify-between mb-1">
        <img
          src="/safelogo.png"
          alt="logo"
          className="w-38 h-10 object-contain"
        />

        {/* Menu button */}
        <ul className="hidden md:flex items-center gap-10 cursor-pointer">
          <li className="hover:text-blue-600 hover:font-bold font-medium text-gray-600 text-[15px]">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-blue-600 hover:font-bold font-medium text-gray-600 text-[15px]">
            <a href="#">Account</a>
          </li>
          <li className="hover:text-blue-600 hover:font-bold font-medium text-gray-600 text-[15px]">
            <a href="#">Fintech</a>
          </li>
          <li className="hover:text-blue-600 hover:font-bold font-medium text-gray-600 text-[15px]">
            <a href="#">Contact Us</a>
          </li>

          <li className="hover:text-blue-600 hover:font-bold font-medium text-black text-[14px]">
            <a href="#">Sign In</a>
          </li>
          <button className="bg-[#034EA2] w-26 h-12 rounded-[7px] text-white text-[14px]  transform hover:scale-105 hover:bg-[#034EA2] cursor-pointer font-medium ml-2 ">
            Get Started
          </button>
        </ul>
      </nav>
    </header>
  );
};
