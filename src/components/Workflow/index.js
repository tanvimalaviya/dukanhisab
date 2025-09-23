// import { FaUserTie, FaUsers, FaMoneyBillWave, FaBoxes, FaBell, FaChartLine } from "react-icons/fa";

// const steps = [
//   { icon: <FaUserTie size={28} />, title: "Create Business Profile", desc: "Set up your shop in just a few steps." },
//   { icon: <FaUsers size={28} />, title: "Add Customers & Suppliers", desc: "Keep all your contacts organized." },
//   { icon: <FaMoneyBillWave size={28} />, title: "Record Income & Expenses", desc: "Track transactions with ease." },
//   { icon: <FaBoxes size={28} />, title: "Manage Inventory", desc: "Monitor stock levels in real-time." },
//   { icon: <FaBell size={28} />, title: "Track Udhar & Payments", desc: "Get timely reminders for dues." },
//   { icon: <FaChartLine size={28} />, title: "View Reports", desc: "Download PDF/Excel reports instantly." },
// ];

// export default function AppFlow() {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Header */}
//         <h2 className="text-4xl font-bold text-gray-800">How DukanHisab Works</h2>
//         <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//           Manage your business in just a few simple steps with DukanHisab.
//         </p>

//         {/* Steps */}
//         <div className="mt-12 grid md:grid-cols-3 gap-10">
//           {steps.map((step, i) => (
//             <div key={i} className="relative bg-white p-6 rounded-2xl shadow hover:shadow-lg transition group">
//               {/* Step number */}
//               <div className="absolute -top-4 -left-4 w-10 h-10 flex items-center justify-center bg-purple-600 text-white rounded-full font-bold shadow">
//                 {i + 1}
//               </div>
//               {/* Icon */}
//               <div className="text-purple-600 mb-4 group-hover:scale-110 transition">{step.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
//               <p className="mt-2 text-gray-600 text-sm">{step.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import {
  FaUserTie,
  FaUsers,
  FaMoneyBillWave,
  FaBoxes,
  FaBell,
  FaChartLine,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserTie size={22} />,
    title: "Create Business Profile",
    desc: "Quickly set up your store profile and get started.",
  },
  {
    icon: <FaUsers size={22} />,
    title: "Add Customers & Suppliers",
    desc: "Store all customer and supplier details securely.",
  },
  {
    icon: <FaMoneyBillWave size={22} />,
    title: "Record Income & Expenses",
    desc: "Track every earning and expense with ease.",
  },
  {
    icon: <FaBoxes size={22} />,
    title: "Manage Inventory",
    desc: "Keep an eye on stock in and out effortlessly.",
  },
  {
    icon: <FaBell size={22} />,
    title: "Track Udhar & Payments",
    desc: "Receive smart reminders for dues and payments.",
  },
  {
    icon: <FaChartLine size={22} />,
    title: "View Reports",
    desc: "Generate instant PDF & Excel reports for insights.",
  },
];

export default function AppFlowTimeline() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            How DukanHisab Works
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A simple step-by-step workflow to make your business management easy
            and effective.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-purple-600 pl-8 space-y-10">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {/* Circle Icon */}
              <div className="absolute -left-12 top-0 w-10 h-10 flex items-center justify-center bg-purple-600 text-white rounded-full shadow-lg group-hover:scale-110 transition">
                {step.icon}
              </div>

              {/* Step Content */}
              <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-800">
                  {i + 1}. {step.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
