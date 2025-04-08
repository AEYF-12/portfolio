"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-purple-900 text-white rounded-full px-6 py-3 m-4 shadow-md">
      <div className="flex justify-between items-center flex-wrap max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          Rahul Son Boro
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden block">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <span className="text-white text-3xl">
              {menuOpen ? "✖" : "☰"}
            </span>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex-col md:flex-row md:flex gap-10 items-center text-lg font-medium w-full md:w-auto ${
            menuOpen ? "flex mt-4" : "hidden"
          } md:mt-0`}
        >
          <li>
            <Link href="/" className="hover:text-purple-400">Home</Link>
          </li>
          <li>
            <Link href="/Project" className="hover:text-purple-400">Projects</Link>
          </li>
          <li>
            <Link href="/Blog" className="hover:text-purple-400">Blog</Link>
          </li>
        </ul>

        {/* Contact Button */}
        <div className={`w-full md:w-auto mt-4 md:mt-0 ${menuOpen ? "block" : "hidden"} md:block`}>
          <Link href="/">
            <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold py-2 px-4 rounded-full w-full md:w-auto">
              Contact me
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
