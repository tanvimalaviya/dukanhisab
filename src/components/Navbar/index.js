"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50  transition-colors duration-500 ${
        scrolled ? "bg-logotype shadow-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto  px-6 py-3 flex items-center justify-between">
        {/* Left Side - Logo */}
        <div className="text-3xl font-bold flex items-center justify-center">
          <Link href={"/"}>
            <Image
              // src={"/luncherAppLogo.png"}
              src={scrolled ? "/luncherAppLogo.png" : "/logo2.jpg"}
              alt="logo"
              height={70}
              width={70}
            />
          </Link>
          <Link
            href="/"
            className={`!no-underline  font-bold ml-2 ${
              scrolled ? "text-white" : "text-logotype"
            }`}
          >
            DukanHisab
          </Link>
        </div>

        {/* Right Side - Menu */}
        <div className="hidden md:flex  space-x-6 items-center">
          <Link href={"/"} className={`!no-underline ${scrolled ? "text-white " : "text-logotype " }`}>
            Home
          </Link>
          {["About", "Contact", "Pricing", "Features"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className={`hover:text-gray-500 !no-underline transition-colors ${
                scrolled ? "text-white" : "text-logotype"
              }`}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/login"
            className={`px-4 py-2 border rounded-lg text-center !no-underline transition-colors ${
              scrolled
                // ? "bg-logotype text-white hover:bg-white hover:text-blue-400"
                ? "btn-logotype bg-white !text-logotype hover:shadow-none"
                // : "bg-white text-logotype hover:bg-logotype hover:text-white"
                : "btn-logotype "
            }`}
          >
            Login
          </Link>

          <Link
            href="/signup"
            className={`px-4 py-2 border !no-underline rounded-lg text-center transition-colors ${
              scrolled
                ? "bg-logotype text-white hover:bg-blue-700"
                : "bg-white text-logotype hover:bg-gray-100"
            }`}
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-2xl transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {["Home", "About", "Contact", "Pricing", "Features"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="block hover:text-blue-600 no-underline"
            >
              {item}
            </Link>
          ))}
          <div className="flex flex-col space-y-2">
            <Link
              href="/login"
              className="px-4 py-2 border rounded-lg text-center hover:bg-gray-100 no-underline"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 no-underline"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
