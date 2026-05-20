"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button, Dropdown, Label } from "@heroui/react";
import { BiMenuAltRight } from "react-icons/bi";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // const handleMouseEnter = () => {
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //   }
  //   setIsOpen(true);
  // };

  // const handleMouseLeave = () => {
  //   timeoutRef.current = setTimeout(() => {
  //     setIsOpen(false);
  //   }, 150);
  // };

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
        <BiMenuAltRight className="block md:hidden text-4xl text-blue-800 cursor-pointer" />
        <ul className="hidden md:flex items-center gap-10 cursor-pointer">
          <li className="hover:text-blue-600 hover:font-bold font-medium text-gray-600 text-[15px]">
            <a href="/">Home</a>
          </li>

          <li
            className="relative group list-none"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            {/* Navbar Item */}
            <button
              className="
      flex items-center gap-1
      text-gray-600
      font-medium
      hover:text-blue-700 hover:font-semibold transition-colors
    "
            >
              Accounts
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown */}
            <div
              className="
      absolute left-0 top-full
      hidden group-hover:block
      pt-2
      z-50
    "
            >
              <div
                className="
        w-72
        bg-white
        rounded-md
        shadow-lg
        border
        overflow-hidden
      "
              >
                <a
                  href="/individual-account"
                  className="
          block px-6 py-5
           text-gray-600
           hover:text-blue-700
           hover:bg-gray-200
           transition-colors
        "
                >
                  Individual
                </a>

                <a
                  href="/corporate-account"
                  className="
          block px-6 py-5
          text-gray-600
           hover:text-blue-700
           hover:bg-gray-200
           transition-colors
        "
                >
                  Corporate
                </a>
              </div>
            </div>
          </li>

          <li className="hover:text-blue-600 hover:font-bold font-medium text-gray-600 text-[15px]">
            <Link href="/fintech">Fintech</Link>
          </li>
          <li className="hover:text-blue-600 hover:font-bold font-medium text-gray-600 text-[15px]">
            <Link href="/contact">Contact Us</Link>
          </li>

          <li className="hover:text-blue-600 hover:font-bold font-medium text-black text-[14px]">
            <Link href="/signin">Sign In</Link>
          </li>
          <Link href="/get-started">
            <Button className="bg-[#034EA2] w-26 h-12 rounded-[7px] text-white text-[14px]  transform hover:scale-105 hover:bg-[#034EA2] cursor-pointer font-medium ml-2 ">
              Get Started
            </Button>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
