"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link component from next/link

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 bg-[#ffffff] md:bg-opacity-50 md:backdrop-blur-2xl transition-all duration-300`}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 text-black">
          <Image
            className="h-12 w-auto"
            src="/logo.svg"
            alt="Oplyx Logo"
            width={48}
            height={48}
          />
        </Link>

        {/* Hamburger Icon */}
        <button
          type="button"
          className="inline-block p-2 w-10 h-10 rounded-lg z-40 md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          {/* Hamburger Lines */}
          <div
            className={`w-6 h-0.5 bg-black mb-1 transition-all duration-300 transform ${
              isMenuOpen ? "rotate-45 translate-y-0.5" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-black mb-1 transition-all duration-300 transform ${
              isMenuOpen ? "-rotate-45 -translate-y-0.5" : ""
            }`}
          ></div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 gap-4 text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block text-black md:p-0 hover:text-[#0000b7] transition-all duration-100"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 gap-2 text-center">
            <Link
              href="/auth"
              className="cursor-pointer border-2 border-gray-300 hover:bg-gray-300 p-2 px-4 rounded-full transition-all duratio-100"
            >
              Login
            </Link>
            <Link
              href="/auth"
              className="cursor-pointer border-2 p-2 px-4 rounded-full border-primary hover:bg-[rgb(0,12,135)] hover:border-[#rgb(0,12,135)] bg-primary text-white transition-all duration-200"
            >
              SignUp
            </Link>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-white z-30 md:hidden transform transition-transform shadow-md duration-300 ${
          isMenuOpen
            ? "translate-x-0 shadow-gray-400 backdrop-blur-md bg-opacity-10"
            : "translate-x-full shadow-none backdrop-blur-none bg-opacity-100"
        }`}
      >
        <ul className="flex flex-col items-center justify-center space-y-6 py-20">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="block text-black text-xl font-medium hover:text-[#0000b7] transition-all duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 gap-2 text-center">
            <Link
              href="/auth"
              className="cursor-pointer border-2 border-gray-300 hover:bg-gray-300 p-2 px-4 rounded-full transition-all duratio-100"
            >
              Login
            </Link>
            <Link
              href="/auth"
              className="cursor-pointer border-2 p-2 px-4 rounded-full border-primary hover:bg-[rgb(0,12,135)] hover:border-[#rgb(0,12,135)] bg-primary text-white transition-all duration-200"
            >
              SignUp
            </Link>
          </ul>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
