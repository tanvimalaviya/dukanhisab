"use client";
import React from "react";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen">
      {/* h-[700px] */}
      {/* Background Layer */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src="/herobg.png"
          alt="Background"
          fill
          className="object-cover filter blur-lg scale-105" // blur + slight scale for better look
          priority
        />
      </div>

      {/* Optional overlay */}
      {/* <div className="absolute inset-0 bg-black/30 -z-10"></div> */}

      {/* Foreground content */}
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center lg:justify-between py-12 md:py-20 relative z-10">
        {/* Left Side - Mobile Image */}
        <div className="w-full lg:w-1/2 flex justify-center  mb-10 lg:mb-0 pt-6 md:pt-10">
          <Image
            src="/heroimage2.png"
            alt="Mobile Screenshot"
            width={400}
            height={500}
            className="rounded-xl "
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left pt-16 sm:pt-20 lg:pt-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Simple and Powerful
          </h1>
          <p className="text-gray-100 text-base md:text-xl mb-6 md:mb-8">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center  gap-4">
            <Link href={"https://play.google.com/store/apps/details?id=com.si.dukan.hisab.dukan_hisab"}>
            <button
              className="px-6 py-3 bg-logotype text-white font-semibold rounded-lg 
        hover:text-white transition-colors duration-300 
        transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Download Now
            </button></Link>


            <Link href={"https://www.youtube.com/"} className="text-black !no-underline">
            <button
              className="px-6 py-3 border border-gray-300 rounded-lg flex items-center gap-2 
        hover:bg-gray-100 transition bg-white/90 duration-300 
        transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <span className="text-black text-lg font-semibold">
                <FaYoutube />
              </span>{" "}
              Watch Video
            </button>
            </Link>           
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
