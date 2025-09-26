import dynamic from "next/dynamic";
import { Playwrite_NG_Modern } from "next/font/google";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Compareplan = () => {
  return (
    <section className="py-12 ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Compare All Plans
          </h2>
          <p className="mt-2 text-gray-600">
            See what’s included in each plan and pick the one that fits your
            business best.
          </p>
        </div>

        {/* Table wrapper (responsive) */}
        <div className="overflow-x-auto rounded-xl shadow-sm bg-white">
          <table className="w-full min-w-[720px] table-fixed border-collapse">
            <thead className="bg-white sticky top-0 z-10">
              <tr className="text-left">
                <th className="py-4 px-6 text-lg font-medium text-gray-600">Features</th>
                <th className="py-4 px-6 text-lg  font-medium text-gray-600 text-center">1 Month</th>

                {/* Highlight the 6-month column */}
                <th className="py-4 px-6 text-lg  font-medium  text-center bg-blue-50 text-logotype">
                  6 Months
                  <div className="text-xs font-normal text-gray-500">Best value</div>
                </th>

                <th className="py-4 px-6 text-lg  font-medium text-gray text-center">1 Year</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {[
                ["Create Business Profile", true, true, true],
                ["Add customers and suppliers", true, true, true],
                ["Manage Inventory", false, true, true],
                ["Download Reports (Excel/PDF)", false, false, true],
                ["Priority Support", false, true, true],
                ["Dedicated Support", false, false, true],
              ].map((row, idx) => {
                const [feature, m1, m6, y1] = row;
                return (
                  <tr key={idx} className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                    <td className="py-4 px-6 text-sm font-medium text-gray-800">{feature}</td>

                    {/* 1 Month */}
                    <td className="py-4 px-6 text-center">
                      {m1 ? (
                        <FaCheck className="inline-block text-green-600 text-lg" aria-hidden />
                      ) : (
                        <ImCross className="inline-block text-red-400 text-lg" aria-hidden />
                      )}
                    </td>

                    {/* 6 Months (highlighted column) */}
                    <td className="py-4 px-6 text-center bg-blue-50">
                      {m6 ? (
                        <FaCheck className="inline-block text-green-600 text-lg" aria-hidden />
                      ) : (
                        <ImCross className="inline-block text-red-400 text-lg" aria-hidden />
                      )}
                    </td>

                    {/* 1 Year */}
                    <td className="py-4 px-6 text-center">
                      {y1 ? (
                        <FaCheck className="inline-block text-green-600 text-lg" aria-hidden />
                      ) : (
                        <ImCross className="inline-block text-red-400 text-lg" aria-hidden />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* CTA below table */}
        <div className="mt-6 text-center">
          <p className="text-base text-gray-800">
  Still unsure?{" "}
  <Link href="/contact">
    <button className="ml-1 px-3 py-1 bg-logotype text-white rounded-md text-sm font-medium hover:bg-logotype/90 transition">
      Contact us
    </button>
  </Link>{" "}
  for a custom plan.
</p>

        </div>
      </div>
    </section>
  );
};

export default Compareplan;



// full dynamic code for compare Playwrite_NG_Modern
// import React from "react";
// import { FaCheck } from "react-icons/fa";
// import { ImCross } from "react-icons/im";

// const Compareplan = () => {
//   // Plans (columns)
//   const plans = [
//     { id: "m1", name: "1 Month" },
//     { id: "m6", name: "6 Months", highlight: true, note: "Best value" },
//     { id: "y1", name: "1 Year" },
//   ];

//   // Features (rows)
//   const features = [
//     {
//       name: "Create Business Profile",
//       availability: { m1: true, m6: true, y1: true },
//     },
//     {
//       name: "Add customers and suppliers",
//       availability: { m1: true, m6: true, y1: true },
//     },
//     {
//       name: "Manage Inventory",
//       availability: { m1: false, m6: true, y1: true },
//     },
//     {
//       name: "Download Reports (Excel/PDF)",
//       availability: { m1: false, m6: false, y1: true },
//     },
//     {
//       name: "Priority Support",
//       availability: { m1: false, m6: true, y1: true },
//     },
//     {
//       name: "Dedicated Support",
//       availability: { m1: false, m6: false, y1: true },
//     },
//   ];

//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
//             Compare All Plans
//           </h2>
//           <p className="mt-2 text-gray-600">
//             See what’s included in each plan and pick the one that fits your
//             business best.
//           </p>
//         </div>

//         {/* Table */}
//         <div className="overflow-x-auto rounded-xl shadow-sm bg-white">
//           <table className="w-full min-w-[720px] border-collapse">
//             <thead>
//               <tr>
//                 <th className="py-4 px-6 text-left text-sm font-medium text-gray-600">
//                   Features
//                 </th>
//                 {plans.map((plan) => (
//                   <th
//                     key={plan.id}
//                     className={`py-4 px-6 text-sm font-medium text-center ${
//                       plan.highlight ? "bg-blue-50 text-logotype" : "text-gray-600"
//                     }`}
//                   >
//                     {plan.name}
//                     {plan.note && (
//                       <div className="text-xs font-normal text-gray-500">
//                         {plan.note}
//                       </div>
//                     )}
//                   </th>
//                 ))}
//               </tr>
//             </thead>

//             <tbody className="text-gray-700">
//               {features.map((feature, idx) => (
//                 <tr
//                   key={idx}
//                   className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
//                 >
//                   <td className="py-4 px-6 text-sm font-medium text-gray-800">
//                     {feature.name}
//                   </td>
//                   {plans.map((plan) => {
//                     const available = feature.availability[plan.id];
//                     return (
//                       <td
//                         key={plan.id}
//                         className={`py-4 px-6 text-center ${
//                           plan.highlight ? "bg-blue-50" : ""
//                         }`}
//                       >
//                         {available ? (
//                           <FaCheck className="inline-block text-green-600 text-lg" />
//                         ) : (
//                           <ImCross className="inline-block text-red-400 text-lg" />
//                         )}
//                       </td>
//                     );
//                   })}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* CTA */}
//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600">
//             Still unsure?{" "}
//             <button className="text-logotype font-medium underline">
//               Contact us
//             </button>{" "}
//             for a custom plan.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Compareplan;

