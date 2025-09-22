// components/HeroSection.js
"use client";

import React from "react";
import Image from "next/image";

const HeroSection = ({ title, subtitle, imageSrc }) => {
  return (
    <section className="relative w-full h-[70vh] flex items-center justify-center text-center">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt="Hero Background"
        fill
        className="object-cover -z-10"
        priority
      />

      {/* Overlay (dark effect for readability) */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      {/* Text Content */}
      <div className="max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-200">{subtitle}</p>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
