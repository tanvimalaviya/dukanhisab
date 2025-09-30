// import React from "react";

// export default function AppFlow() {
//   const steps = [
//     { id: 1, title: "First sign up", img: "/heroimage2.png" },
//     { id: 2, title: "Create Business Profile", img: "/heroimage2.png" },
//     { id: 3, title: "Add customer", img: "/heroimage2.png" },
//     { id: 4, title: "Add Supplier", img: "/heroimage2.png" },
//     { id: 5, title: "Add Expense", img: "/heroimage2.png" },
//     { id: 6, title: "Add Item", img: "/heroimage2.png" },
//     { id: 7, title: "Add Purchase", img: "/heroimage2.png" },
//     { id: 8, title: "Add Sale", img: "/heroimage2.png" },
//     { id: 9, title: "Add Cash-Transaction", img: "/heroimage2.png" },
//     { id: 10, title: "Show Monthly or Daily report", img: "/heroimage2.png" },
//     { id: 11, title: "Report the data", img: "/heroimage2.png" },
//     { id: 12, title: "Show summary in dashboard", img: "/heroimage2.png" },
//   ];

//   return (
//     <div className="bg-white py-10 px-4 sm:px-8 lg:px-20">
//       {/* Section Header */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-gray-900">
//           How Dukanhisab Works
//         </h2>
//         <p className="mt-4 text-gray-600 text-lg">
//           Simple, step-by-step workflow to manage your store efficiently.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-28 relative">
//         {steps.map((step, idx) => {
//           const row = Math.floor(idx / 4); // row index
//           const col = idx % 4; // column inside row
//           const isLast = idx === steps.length - 1;
//           const isRowEnd = col === 3 || idx === steps.length - 1;
//           const isRowStart = col === 0;

//           return (
//             <div
//               key={step.id}
//               className="relative flex flex-col items-center text-center"
//             >
//               {/* Screenshot */}
//               <img
//                 src={step.img}
//                 alt={step.title}
//                 className="w-72 h-64 object-contain mb-6"
//               />

//               {/* Title */}
//               <h5 className="text-gray-700 font-semibold text-xl">
//                 {step.title}
//               </h5>

//               {/* Arrows */}
//               {!isLast && (
//                 <>
//                   {/* Even rows: Left → Right */}
//                   {row % 2 === 0 && col !== 3 && (
//                     <img
//                       src="/right.png"
//                       alt="arrow"
//                       className="absolute top-1/2 right-[-120px] w-28 h-auto"
//                     />
//                   )}

//                   {/* Odd rows: Right → Left */}
//                   {row % 2 !== 0 && col !== 0 && (
//                     <img
//                       src="/back.png"
//                       alt="arrow"
//                       className="absolute top-1/2 left-[-120px] w-28 h-auto"
//                     />
//                   )}

//                   {/* ↓ arrow logic */}
//                   {/* Even row → End ma ↓ */}
//                   {isRowEnd && row % 2 === 0 && idx + 1 < steps.length && (
//                     <img
//                       src="/down.png"
//                       alt="arrow"
//                       className="absolute bottom-[-120px] left-1/2 transform -translate-x-1/2 w-20 h-auto"
//                     />
//                   )}

//                   {/* Odd row → Start ma ↓ */}
//                   {isRowStart && row % 2 !== 0 && idx + 1 < steps.length && (
//                     <img
//                       src="/down.png"
//                       alt="arrow"
//                       className="absolute bottom-[-120px] left-1/2 transform -translate-x-1/2 w-20 h-auto"
//                     />
//                   )}
//                 </>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }


"use client";
import React from "react";

export default function AppFlow() {
  const steps = [
    { id: 1, title: "First sign up", img: "/signup.png" },
    { id: 2, title: "Create Business Profile", img: "/heroimage2.png" },
    { id: 3, title: "Add customer", img: "/addcustomer.png" },
    { id: 4, title: "Add Supplier", img: "/addsupplier.png" },
    { id: 5, title: "Add Expense", img: "/addexpense.png" },
    { id: 6, title: "Add Item", img: "/additem.png" },
    { id: 7, title: "Add Purchase", img: "/addpurchase.png" },
    { id: 8, title: "Add Sale", img: "/addsale.png" },
    { id: 9, title: "Add Cash-Transaction", img: "/addcash.png" },
    { id: 10, title: "Show Monthly or Daily report", img: "/monthly.png" },
    { id: 11, title: "Report the data", img: "/report1.png" },
    { id: 12, title: "Show summary in dashboard", img: "/dashboard.png" },
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
          const row = Math.floor(idx / 4);
          const col = idx % 4;
          const isLast = idx === steps.length - 1;
          const isRowEnd = col === 3 || idx === steps.length - 1;
          const isRowStart = col === 0;

          return (
            <div
              key={step.id}
              className="relative flex flex-col items-center text-center"
            >
              {/* Screenshot */}
              <img
                src={step.img}
                alt={step.title}
                className="w-100 h-74 object-contain mb-6"
              />

              {/* Title */}
              <h5 className="text-gray-700 font-semibold text-xl">
                {step.title}
              </h5>

              {/* Animated Flow Connectors */}
              {!isLast && (
                <>
                  {/* Even rows: Left → Right */}
                  {row % 2 === 0 && col !== 3 && (
                    <div className="absolute top-1/2 right-[-120px] w-28 h-1 border-t-2 border-dotted border-gray-400 overflow-hidden">
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-logotype rounded-full animate-move-right"></span>
                    </div>
                  )}

                  {/* Odd rows: Right → Left */}
                  {row % 2 !== 0 && col !== 0 && (
                    <div className="absolute top-1/2 left-[-120px] w-28 h-1 border-t-2 border-dotted border-gray-400 overflow-hidden">
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-logotype rounded-full animate-move-left"></span>
                    </div>
                  )}

                  {/* Downward connectors */}
                  {isRowEnd && row % 2 === 0 && idx + 1 < steps.length && (
                    <div className="absolute bottom-[-120px] left-1/2 transform -translate-x-1/2 h-28 border-l-2 border-dotted border-gray-400 overflow-hidden">
                      <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-logotype rounded-full animate-move-down"></span>
                    </div>
                  )}
                  {isRowStart && row % 2 !== 0 && idx + 1 < steps.length && (
                    <div className="absolute bottom-[-120px] left-1/2 transform -translate-x-1/2 h-28 border-l-2 border-dotted border-gray-400 overflow-hidden">
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-logotype rounded-full animate-move-up"></span>
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes moveRight {
          0% {
            left: 0;
          }
          100% {
            left: 100%;
          }
        }
        @keyframes moveLeft {
          0% {
            right: 0;
          }
          100% {
            right: 100%;
          }
        }
        @keyframes moveDown {
          0% {
            top: 0;
          }
          100% {
            top: 100%;
          }
        }
        @keyframes moveUp {
          0% {
            bottom: 0;
          }
          100% {
            bottom: 100%;
          }
        }
        .animate-move-right {
          animation: moveRight 2s linear infinite;
        }
        .animate-move-left {
          animation: moveLeft 2s linear infinite;
        }
        .animate-move-down {
          animation: moveDown 2s linear infinite;
        }
        .animate-move-up {
          animation: moveUp 2s linear infinite;
        }
      `}</style>
    </div>
  );
}



// import React from "react";

// export default function AppFlow() {
//   const steps = [
//     { id: 1, title: "First sign up", img: "/heroimage2.png" },
//     { id: 2, title: "Create Business Profile", img: "/heroimage2.png" },
//     { id: 3, title: "Add Customer", img: "/heroimage2.png" },
//     { id: 4, title: "Add Supplier", img: "/heroimage2.png" },
//   ];

//   return (
//     <div className="bg-white py-12 px-4 sm:px-8 lg:px-20">
//       {/* Header */}
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-gray-900">
//           How Dukanhisab Works
//         </h2>
//         <p className="mt-4 text-gray-600 text-lg">
//           Zig-Zag workflow with connecting arrows
//         </p>
//       </div>

//       <div className="flex flex-col items-center relative space-y-16">
//         {steps.map((step, idx) => {
//           const isEven = idx % 2 === 0;

//           return (
//             <div
//               key={step.id}
//               className={`flex items-center w-full max-w-3xl ${
//                 isEven ? "justify-start" : "justify-end"
//               }`}
//             >
//               {/* Card */}
//               <div className="flex items-center gap-2 relative p-3 bg-white shadow-md rounded-lg">
//                 {/* Image (left or right based on row) */}
//                 {isEven && (
//                   <img
//                     src={step.img}
//                     alt={step.title}
//                     className="w-28 h-28 object-contain"
//                   />
//                 )}
//                 <h5 className="text-gray-700 font-semibold text-lg">
//                   {step.title}
//                 </h5>
//                 {!isEven && (
//                   <img
//                     src={step.img}
//                     alt={step.title}
//                     className="w-28 h-28 object-contain"
//                   />
//                 )}

//                 {/* Arrow Connector */}
//                 {idx < steps.length - 1 && (
//                   <div
//                     className={`absolute ${
//                       isEven
//                         ? "right-[-80px] top-1/2"
//                         : "left-[-80px] top-1/2"
//                     }`}
//                   >
//                     <img
//                       src={isEven ? "/right-down.png" : "/left-down.png"}
//                       alt="arrow"
//                       className="w-16 h-16"
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
