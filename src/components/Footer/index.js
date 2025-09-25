// components/Footer.js
"use client";

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
    <footer className="bg-gray-900 text-gray-200 pt-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Dukanhisab</h2>
          <p className="text-gray-400 mb-4">
            Simplifying your store management
          </p>
          <p className="text-gray-400 flex items-center gap-2">
            <IoMdMail /> 
            <span>support@dukanhisab.com</span>
            </p>
          
           
          <p className="text-gray-400 flex items-center gap-2">
             <FaPhoneAlt /> 
             <span>+91 99999 99999</span>
             </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/features" className="hover:text-white transition">
                Features
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-white transition">
                Pricing
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Resources / Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
          <ul className="space-y-2">
            <li>
              <a href="/faq" className="hover:text-white transition">
                FAQ
              </a>
            </li>

            <li>
              <a href="https:\\dukanhisab.sathwarainfotech.com\public\terms_and_condition.html" className="hover:text-white transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="https:\\dukanhisab.sathwarainfotech.com\public\privacy_policy.html" className="hover:text-white transition">
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
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaYoutube />
            </a>
          </div>
          <form className="flex flex-col sm:flex-row gap-2 flex-wrap">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-white focus:outline-none flex-1 bg-gray-800 placeholder-gray-400"
            />
            <button className="btn-logotype">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm pb-2">
        <p>© 2025 Dukanhisab. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
