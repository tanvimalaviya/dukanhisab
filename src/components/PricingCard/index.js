// "use client";
// import React from "react";
// import { FaCheck } from "react-icons/fa";

// const plans = [
//   {
//     name: "1 Month Plan",
//     price: "₹100",
//     duration: "per month",
//     desc: "Best for trying out all features for a short time.",
//     features: [
//       "Business profile setup",
//       "Add customers & suppliers",
//       "Record income & expenses",
//       "Basic reports",
//     ],
//     button: "Get Started",
//     // highlighted: false,
//   },
//   {
//     name: "6 Months Plan",
//     price: "₹400",
//     duration: "every 6 months",
//     desc: "Save more with half-yearly subscription.",
//     features: [
//       "Everything in 1 Month Plan",
//       "Inventory management",
//       "Payment reminders",
//       "Priority support",
//     ],
//     button: "Choose 6 Months",
//     // highlighted: true,
//   },
//   {
//     name: "1 Year Plan",
//     price: "₹600",
//     duration: "every year",
//     desc: "Best value for growing businesses.",
//     features: [
//       "Everything in 6 Months Plan",
//       "Downloadable reports (Excel/PDF)",
//       "Unlimited customers & suppliers",
//       "Dedicated support",
//     ],
//     button: "Choose 1 Year",
//     // highlighted: false,
//   },
//   {
//     name: "Starter Plan",
//     price: "₹50",
//     duration: "per month",
//     desc: "For individuals just getting started.",
//     features: ["Basic bookkeeping", "Customer management", "Email support"],
//     button: "Start Free Trial",
//     // highlighted: false,
//   },
//   {
//     name: "Business Plan",
//     price: "₹1200",
//     duration: "per year",
//     desc: "For small teams who need more control.",
//     features: [
//       "Team collaboration",
//       "Advanced analytics",
//       "Priority assistance",
//     ],
//     button: "Choose Business",
//     // highlighted: true,
//   },
//   {
//     name: "Enterprise Plan",
//     price: "Custom",
//     duration: "contact sales",
//     desc: "Tailored solutions for large businesses.",
//     features: [
//       "Dedicated account manager",
//       "Custom integrations",
//       "24/7 phone support",
//     ],
//     button: "Contact Sales",
//     // highlighted: false,
//   },
// ];

// export default function PricingPage() {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Pricing Grid */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {plans.map((plan, idx) => (
//             <div
//               key={idx}
//               className={`rounded-2xl shadow-md p-8 flex flex-col border transition hover:scale-105 hover:shadow-xl ${
//                 plan.highlighted
//                   ? "border-logotype bg-white shadow-2xl"
//                   : "border-gray-200 bg-white"
//               }`}
//             >
//               {plan.highlighted && (
//                 <span className="px-3 py-1 text-xs font-medium text-white bg-logotype rounded-full mb-4 self-start">
//                   Best Value
//                 </span>
//               )}
//               <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
//               <p className="text-gray-500 mt-1">{plan.desc}</p>

//               {/* Price */}
//               <div className="mt-6 text-3xl font-bold text-gray-800">
//                 {plan.price}
//               </div>
//               <p className="text-gray-500 text-sm">{plan.duration}</p>

//               {/* Features */}
//               <ul className="mt-6 space-y-2 text-gray-600 text-left">
//                 {plan.features.map((feature, i) => (
//                   <li key={i} className="flex items-center gap-2">
//                     <FaCheck /> <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>

//               {/* Button */}
//               <button
//                 className={`mt-8 px-6 py-3 rounded-lg font-semibold w-full transition ${
//                   plan.highlighted
//                     ? "bg-logotype text-white hover:bg-logotype/90"
//                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                 }`}
//               >
//                 {plan.button}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const monthlyPlans = [
   {
    name: "Free Plan",
    price: "₹0",
    duration: "per month",
    desc: "For individuals just getting started.",
    features: ["Basic bookkeeping", "Customer management", "Email support"],
    button: "Start Free Trial",
  },
  {
    name: "1 Month Plan",
    price: "₹100",
    duration: "per month",
    desc: "Best for trying out all features for a short time.",
    features: [
      "Business profile setup",
      "Add customers & suppliers",
      "Record income & expenses",
      "Basic reports",
    ],
    button: "Get Started",
  },
 
  {
    name: "Team Plan",
    price: "₹200",
    duration: "per month",
    desc: "For small teams with collaboration needs.",
    features: [
      "Everything in Starter",
      "Team collaboration",
      "Shared dashboards",
    ],
    button: "Choose Team",
  },
  {
    name: "Growth Plan",
    price: "₹300",
    duration: "per month",
    desc: "Best for scaling businesses.",
    features: [
      "Advanced analytics",
      "Payment reminders",
      "Inventory management",
    ],
    button: "Choose Growth",
  },
  {
    name: "Pro Plan",
    price: "₹500",
    duration: "per month",
    desc: "For advanced business features.",
    features: [
      "Downloadable reports (Excel/PDF)",
      "Unlimited customers & suppliers",
      "Priority support",
    ],
    button: "Choose Pro",
  },
  {
    name: "Enterprise Plan",
    price: "Custom",
    duration: "per month",
    desc: "Tailored solutions for large businesses.",
    features: [
      "Dedicated account manager",
      "Custom integrations",
      "24/7 phone support",
    ],
    button: "Contact Sales",
  },
];

const yearlyPlans = [
  {
    name: "1 Year Plan",
    price: "₹600",
    duration: "per year",
    desc: "Best value for growing businesses.",
    features: [
      "Everything in Monthly Plans",
      "Dedicated support",
      "Downloadable yearly reports",
    ],
    button: "Choose 1 Year",
  },
  {
    name: "Business Plan",
    price: "₹1200",
    duration: "per year",
    desc: "For small teams who need more control.",
    features: [
      "Team collaboration",
      "Advanced analytics",
      "Priority assistance",
    ],
    button: "Choose Business",
  },
  {
    name: "Growth Annual",
    price: "₹2400",
    duration: "per year",
    desc: "Save more with yearly subscription.",
    features: [
      "Everything in Business",
      "Custom branding",
      "Extended support hours",
    ],
    button: "Choose Growth Annual",
  },
  {
    name: "Professional Annual",
    price: "₹4000",
    duration: "per year",
    desc: "For businesses with advanced needs.",
    features: [
      "Unlimited team members",
      "Early feature access",
      "Exclusive webinars",
    ],
    button: "Choose Professional",
  },
  {
    name: "Ultimate Annual",
    price: "₹6000",
    duration: "per year",
    desc: "All features unlocked.",
    features: [
      "Everything in Professional",
      "Dedicated success manager",
      "Custom integrations",
    ],
    button: "Choose Ultimate",
  },
  {
    name: "Enterprise Annual",
    price: "Custom",
    duration: "per year",
    desc: "For enterprise clients with custom needs.",
    features: [
      "24/7 phone support",
      "Dedicated account manager",
      "Custom workflows",
    ],
    button: "Contact Sales",
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = billingCycle === "monthly" ? monthlyPlans : yearlyPlans;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          

          {/* Toggle */}
          <div className="mt-6 flex justify-center">
            <div className="flex items-center bg-gray-200 rounded-full p-1">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-full text-sm font-medium  transition ${
                  billingCycle === "monthly"
                    ? "bg-logotype text-white shadow !rounded-full"
                    : "text-gray-700"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                  billingCycle === "yearly"
                    ? "bg-logotype text-white shadow !rounded-full"
                    : "text-gray-700"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl shadow-md p-8 flex flex-col border transition hover:scale-105 hover:shadow-xl ${
                plan.highlighted
                  ? "border-logotype bg-white shadow-2xl"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.highlighted && (
                <span className="px-3 py-1 text-xs font-medium text-white bg-logotype rounded-full mb-4 self-start">
                  Best Value
                </span>
              )}
              <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
              <p className="text-gray-500 mt-1">{plan.desc}</p>

              {/* Price */}
              <div className="mt-6 text-3xl font-bold text-gray-800">
                {plan.price}
              </div>
              <p className="text-gray-500 text-sm">{plan.duration}</p>

              {/* Features */}
              <ul className="mt-6 space-y-2 text-gray-600 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheck /> <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="mt-8 px-6 py-3 rounded-lg font-semibold w-full transition bg-logotype text-white hover:bg-logotype/90">
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
