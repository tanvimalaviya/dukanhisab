// components/AppFlowDiagram.js
"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Create Business Profile",
    desc: [
      "Quickly set up your store profile and get started.",
      "Add your business details in minutes.",
      "Personalize with your store name & logo."
    ],
    screenshot: "/heroimage2.png",
  },
  {
    id: 2,
    title: "Add Customers & Suppliers",
    desc: [
      "Save all customer & supplier details securely.",
      "Easily search and update records.",
      "Build trust with organized data."
    ],
    screenshot: "/addcustomer.jpg",
    screenshot2:"/addsupplier.jpg"
  },
  {
    id: 3,
    title: "Record Income & Expenses",
    desc: [
      "Track sales, purchases, and daily expenses.",
      "Get clear insights into cash flow.",
      "Reduce manual errors with automation."
    ],
    screenshot: "/addexpense.jpg",

  },
];

const AppFlowDiagram = () => {
  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            How Dukanhisab Works
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Simple, step-by-step workflow to manage your store efficiently.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-20 relative ">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col md:flex-row items-center border gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Screenshot */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-[300px] h-[220px] relative  overflow-hidden   ">
                  <Image
                    src={step.screenshot}
                    alt={step.title}
                    fill
                    className="object-contain p-2"
                  />
                
                </div>
                <div className="w-[300px] h-[220px] relative  overflow-hidden   ">
                  <Image
                    src={step.screenshot2}
                    alt={step.title}
                    fill
                    className="object-contain p-4"
                  />
                  </div>
              </div>

              {/* Text + Number */}
              <div className="w-full md:w-1/2 relative">
                <div className="flex items-center gap-4">
                  <div className="bg-logotype text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                    {step.id}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>

                <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                  {step.desc.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Connecting Arrows */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-[100px] w-[2px] h-[80%] border-dashed border-2 border-green-400 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default AppFlowDiagram;
