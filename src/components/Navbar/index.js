"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // ✅ get current route

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

  const navItems = ["About", "Contact", "Pricing", "Features"];

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-logotype shadow-md" : "bg-white"
      }`}
    >
      <div className=" mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left Side - Logo */}
        <div className="flex items-center justify-start flex-shrink-0">
          <Link href={"/"}>
            <Image
              src={scrolled ? "/luncherAppLogo.png" : "/logo2.jpg"}
              alt="logo"
              width={70}
              height={70}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
            />
          </Link>
          <Link
            href="/"
            className={`!no-underline font-bold ml-2 text-lg sm:text-xl md:text-2xl ${
              scrolled ? "text-white" : "text-logotype"
            }`}
          >
            DukanHisab
          </Link>
        </div>

        {/* Right Side - Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="/"
            className={`!no-underline text-[17px] font-bold transition-colors ${
              pathname === "/"
                ? "font-semibold underline decoration-2 underline-offset-4"
                : ""
            } ${scrolled ? "text-white" : "text-logotype"}`}
          >
            Home
          </Link>
          {navItems.map((item) => {
            const href = `/${item.toLowerCase()}`;
            const isActive = pathname === href;
            return (
              <Link
                key={item}
                href={href}
                className={`hover:text-gray-500 font-bold text-[17px] !no-underline transition-colors ${
                  isActive
                    ? "font-bold !underline decoration-2 underline-offset-4"
                    : ""
                } ${scrolled ? "text-white" : "text-logotype"}`}
              >
                {item}
              </Link>
            );
          })}
          <Link
            href="/login"
            className={`px-4 py-2 border rounded-lg text-center !no-underline transition-colors ${
              scrolled
                ? "btn-logotype bg-white !text-logotype hover:shadow-none"
                : "btn-logotype"
            } ${pathname === "/login" ? "!bg-logotype !text-white" : ""}`}
          >
            Login
          </Link>
          <Link
            href="/signup"
            className={`px-4 py-2 border rounded-lg text-center !no-underline transition-colors ${
              scrolled
                ? "btn-logotype bg-white !text-logotype !hover:bg-none"
                : "btn-logotype"
            } ${pathname === "/signup" ? "!bg-logotype !text-white" : ""}`}
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-4xl transition-colors duration-300 ${
            scrolled ? "text-white" : "text-logotype"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaBars className="h-10 w-10" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`block !no-underline ${
              pathname === "/" ? "font-semibold text-logotype underline" : ""
            }`}
          >
            Home
          </Link>
          {navItems.map((item) => {
            const href = `/${item.toLowerCase()}`;
            return (
              <Link
                key={item}
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block hover:text-blue-600 !no-underline ${
                  pathname === href
                    ? "font-semibold text-logotype underline"
                    : ""
                }`}
              >
                {item}
              </Link>
            );
          })}
          <div className="flex flex-col space-y-2">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className={`px-4 py-2 border rounded-lg text-center hover:bg-gray-100 !no-underline ${
                pathname === "/login" ? "bg-logotype text-white" : ""
              }`}
            >
              Login
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className={`px-4 py-2 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 !no-underline ${
                pathname === "/signup" ? "bg-logotype text-white" : ""
              }`}
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
