"use client";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div>
          <div className="flex flex-row  items-center"> 
            <h2 className="text-3xl md:text-4xl font-bold text-graytext ">
              Don&apos;t wait, take the first step!
            </h2>
            <Image src={"/sun.gif"} alt="sun" height={70} width={70}></Image>
          </div>
          <p className="text-gray text-lg mb-6">
            Over 20,00,000+ businesses simplified their invoicing with
            DukanHisab.
          </p>

          {/* Trusted Customers */}
          <div className="flex items-center gap-4">
            {/* Avatars */}
            <div className="flex -space-x-4">
              <Image
                src="/team1.jpg"
                alt="user1"
                width={50}
                height={50}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/team1.jpg"
                alt="user2"
                width={50}
                height={50}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/team1.jpg"
                alt="user3"
                width={50}
                height={50}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/team1.jpg"
                alt="user4"
                width={50}
                height={50}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="/team1.jpg"
                alt="user5"
                width={50}
                height={50}
                className="rounded-full border-2 border-white"
              />
            </div>

            {/* Stars */}
            <div className="flex items-center ml-4 text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>

          <p className="text-gray text-sm mt-2">
            Trusted by 20,00,000+ businesses
          </p>
        </div>

        {/* Right Button */}
        <div className="w-full text-left md:text-right mt-8 md:mt-0">

          <a
            href="/contact"
            className="bg-logotype  font-medium px-6 py-3 rounded-lg shadow-md btn-logotype transition inline-flex items-center  gap-2 !no-underline"
          >
            Contact us →
          </a>
        </div>
      </div>
    </section>
  );
}
