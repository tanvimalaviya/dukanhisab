"use client";

import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-logotype text-white pt-6">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <div className="flex items-center ">
            <div className="relative w-5 h-5 sm:w-20 sm:h-20">
              <Image
                src="/luncherAppLogo.png"
                alt="footerlogo"
                fill
                className="object-contain"
              />
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">Dukanhisab</h2>
          </div>
          <p className=" mb-4">Simplifying your store management</p>
          <p className=" flex items-center gap-2 flex-wrap">
            <IoMdMail />
            <span>info@sathwarainfotech.com</span>
          </p>
          <p className=" flex items-center gap-2 flex-wrap">
            <FaPhoneAlt />
            <span>+91 91040 81291</span>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-white">
            <li>
              <a
                href="/"
                className="text-white transition-transform duration-300 hover:scale-105 hover:text-gray-300 inline-block"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/features"
                className="hover:text-white !no-underline transition-transform duration-300 text-white  footer-link"
              >
                Features
              </a>
            </li>
            <li>
              <a href="/pricing" className="text-white transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="/about" className="text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="/faq" className="text-white transition">
                FAQ
              </a>
            </li>
            <li>
              <a
                href="https://dukanhisab.sathwarainfotech.com/public/terms_and_condition.html"
                className="text-white transition"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="https://dukanhisab.sathwarainfotech.com/public/privacy_policy.html"
                className="text-white transition"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Stay Connected
          </h3>
          <div className="flex space-x-4 mb-4  md:justify-start">
            <a href="#" className="text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="text-white transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-white transition">
              <FaYoutube />
            </a>
          </div>
          <form className="flex flex-col sm:flex-row gap-2 flex-wrap">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-2 py-2 rounded-lg text-logotype focus:outline-none flex-1 bg-white "
            />
            <button
              className="btn-logotype
            bg-white !text-logotype"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white mt-12 pt-6 text-center text-white text-sm pb-2">
        <p>© 2025 Dukanhisab. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
