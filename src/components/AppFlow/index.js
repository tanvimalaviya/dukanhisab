import React from "react";

export default function AppFlow() {
  const steps = [
    { id: 1, title: "First sign up", img: "/heroimage2.png" },
    { id: 2, title: "Create Business Profile", img: "/heroimage2.png" },
    { id: 3, title: "Add customer", img: "/heroimage2.png" },
    { id: 4, title: "Add Supplier", img: "/heroimage2.png" },
    { id: 5, title: "Add Expense", img: "/heroimage2.png" },
    { id: 6, title: "Add Item", img: "/heroimage2.png" },
    { id: 7, title: "Add Purchase", img: "/heroimage2.png" },
    { id: 8, title: "Add Sale", img: "/heroimage2.png" },
    { id: 9, title: "Add Cash-Transaction", img: "/heroimage2.png" },
    { id: 10, title: "Show Monthly or Daily report", img: "/heroimage2.png" },
    { id: 11, title: "Report the data", img: "/heroimage2.png" },
    { id: 12, title: "Show summary in dashboard", img: "/heroimage2.png" },
  ];

  return (
    <div className="bg-white py-10 px-4 sm:px-8 lg:px-20">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">
          How Dukanhisab Works
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Simple, step-by-step workflow to manage your store efficiently.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-28 relative">
        {steps.map((step, idx) => {
          const row = Math.floor(idx / 4); // current row
          const isRowEnd = (idx + 1) % 4 === 0;
          const isLast = idx === steps.length - 1;

          return (
            <div
              key={step.id}
              className="relative flex flex-col items-center text-center"
            >
              {/* Big Screenshot */}
              <img
                src={step.img}
                alt={step.title}
                className="w-72 h-64 object-contain mb-6"
              />

              {/* Title */}
              <h5 className="text-gray-700 font-semibold text-xl">
                {step.title}
              </h5>

              {/* Connector Arrows */}
              {!isLast && (
                <>
                  {/* Horizontal Arrows */}
                  {!isRowEnd && row % 2 === 0 && (
                    <img
                      src="/right.png"
                      alt="arrow"
                      className="absolute top-1/2 right-[-120px] w-28 h-auto"
                    />
                  )}
                  {!isRowEnd && row % 2 !== 0 && (
                    <img
                      src="/back.png"
                      alt="arrow"
                      className="absolute top-1/2 left-[-120px] w-28 h-auto"
                    />
                  )}

                  {/* Vertical Arrow ↓ at row end */}
                  {isRowEnd && (
                    <img
                      src="/down.png"
                      alt="arrow"
                      className="absolute bottom-[-120px] left-1/2 transform -translate-x-1/2 w-20 h-auto"
                    />
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
