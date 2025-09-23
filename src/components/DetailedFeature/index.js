// // components/DetailedFeatures.js
// import Image from "next/image";
// import { FaUsers } from "react-icons/fa";

// const features = [
//   {
//     id: 1,
//     title: "Customer & Supplier Management",
//     desc: "Keep all your customers and suppliers organized with outstanding balances, payment history, and contact details stored safely.",
//     image: "/feature1.png", // replace with your actual image
//   },
//   {
//     id: 2,
//     title: "Inventory Management",
//     desc: "Easily track stock in and out, get notified of low stock, and maintain an accurate record of your products.",
//     image: "/feature2.jpg",
//   },
//   {
//     id: 3,
//     title: "Sales & Expense Reports",
//     desc: "View clear insights with professional reports and charts. Understand your profits and expenses at a glance.",
//     image: "/feature3.jpg",
//   },
//   {
//     id: 4,
//     title: "Reminder Notifications",
//     desc: "Never miss payments with smart reminders for udhar, EMI, and pending dues. Stay stress-free with timely alerts.",
//     image: "/feature4.jpg",
//   },
// ];

// export default function DetailedFeatures() {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-graytext">
//             Detailed Features
//           </h2>
//           <p className="mt-4 text-lg text-graytext max-w-2xl mx-auto">
//             Explore how <span className="font-semibold">DukanHisab</span> makes
//             managing your business effortless with powerful tools.
//           </p>
//         </div>

//         {/* Feature List */}
//         <div className="space-y-24">
//           {features.map((feature, index) => (
//             <div
//               key={feature.id}
//               className={`grid md:grid-cols-2 gap-12 items-center ${
//                 index % 2 === 1 ? "md:flex-row-reverse" : ""
//               }`}
//             >
//               {/* Text */}
//               <div className="flex items-center gap-3">
//                 <div className="p-3 bg-purple-100 text-purple-600 rounded-full">
//                   <FaUsers size={20} />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-800">
//                   {feature.title}
//                 </h3>
//               </div>

//               {/* Image */}
//               <div className="flex justify-center">
//                 <Image
//                   src={feature.image}
//                   alt={feature.title}
//                   width={400}
//                   height={300}
//                   className="rounded-xl shadow-lg"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




// components/DetailedFeatures.js
import { FaUsers, FaBoxes, FaChartLine, FaBell, FaCheck } from "react-icons/fa";
import Image from "next/image";

const features = [
  {
    title: "Customer & Supplier Management",
    description: [
      "Keep customers & suppliers organized",
      "Track outstanding balances & payments",
      "Store contact details securely",
    ],
    icon: <FaUsers size={28} className="text-logotype" />,
    image: "/feature1.png", // 👉 replace with your image
  },
  {
    title: "Inventory Management",
    description: [
      "Track stock in & out easily",
      "Low stock notifications",
      "Maintain accurate records",
    ],
    icon: <FaBoxes size={28} className="text-logotype" />,
    image: "/feature2.jpg",
  },
  {
    title: "Sales & Expense Reports",
    description: [
      "Clear visual charts & insights",
      "Automated daily/monthly reports",
      "Export to PDF or Excel",
    ],
    icon: <FaChartLine size={28} className="text-logotype" />,
    image: "/feature3.jpg",
  },
  {
    title: "Reminder Notifications",
    description: [
      "Payment reminders for customers",
      "Due date notifications",
      "Never miss an EMI or Udhar",
    ],
    icon: <FaBell size={28} className="text-logotype" />,
    image: "/feature4.jpg",
  },
];

export default function DetailedFeatures() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-graytext">
            Powerful Features to Simplify Your Business
          </h2>
          <p className="mt-4 text-gray">
            Explore how DukanHisab makes managing your business effortless with
            professional tools.
          </p>
        </div>

        {/* Features List */}
        <div className="flex flex-col gap-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="flex-1 flex justify-center">
                <div className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={450}
                    height={300}
                    className="rounded-xl"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-purple-100 rounded-full ">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-graytext">
                    {feature.title}
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  {feature.description.map((point, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="text-logotype"><FaCheck /></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
