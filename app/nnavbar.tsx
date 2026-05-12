"use client";

import { useEffect, useState } from "react";

export default function Nnavbar() {
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
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <h1
          className={`font-bold transition-all duration-300 ${
            scrolled ? "text-xl" : "text-2xl"
          }`}
        >
          Safe Haven
        </h1>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700">
          <li className="cursor-pointer hover:text-black transition">Home</li>
          <li className="cursor-pointer hover:text-black transition">About</li>
          <li className="cursor-pointer hover:text-black transition">
            Services
          </li>
          <li className="cursor-pointer hover:text-black transition">
            Contact
          </li>
        </ul>

        {/* Button */}
        <button
          className={`rounded-full font-medium transition-all duration-300 ${
            scrolled
              ? "bg-black text-white px-5 py-2"
              : "bg-white text-black px-6 py-3"
          }`}
        >
          Get Started
        </button>
      </nav>
    </header>
  );
}
