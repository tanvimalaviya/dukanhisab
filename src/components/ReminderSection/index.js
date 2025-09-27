// "use client";
// import React from "react";
// import { FaPlay } from "react-icons/fa";

// const FeaturesSections = () => {
//   return (
//     <div>
//       {/* 1. Expense & Income Tracking */}
//       <section className="bg-gray-50 py-16">
//         <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
//           {/* Image */}
//           <div className="flex-1 flex justify-center">
//             <img
//               src="/track-money.png"
//               alt="Track Money"
//               className="max-w-md w-full"
//             />
//           </div>

//           {/* Text */}
//           <div className="flex-1 text-center md:text-left">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">
//               Track all your expenses & income
//             </h2>
//             <p className="text-gray-600 mb-6">
//               Record daily sales, purchases, income, and expenses in one app.
//               Stay on top of your cash flow effortlessly.
//             </p>
//             <button className="bg-logotype text-white px-6 py-3 rounded-lg hover:bg-indigo-800 transition">
//               Learn more
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* 2. Reports & Insights */}
//       <section className="bg-white py-16">
//         <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-10">
//           {/* Image */}
//           <div className="flex-1 flex justify-center">
//             <img
//               src="/reports.png"
//               alt="Reports"
//               className="max-w-md w-full"
//             />
//           </div>

//           {/* Text */}
//           <div className="flex-1 text-center md:text-left">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">
//               Instant business reports
//             </h2>
//             <p className="text-gray-600 mb-6">
//               Generate profit & loss reports, outstanding dues, and transaction
//               summaries anytime, anywhere.
//             </p>
//             <button className="bg-logotype text-white px-6 py-3 rounded-lg hover:bg-indigo-800 transition">
//               View reports
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* 3. Smart Reminders (Forgot Often?) */}
//       <section className="bg-white py-16">
//         <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
//           {/* Image */}
//           <div className="flex-1 flex justify-center">
//             <img
//               src="/reminder-illustration.png"
//               alt="Reminder"
//               className="max-w-md w-full"
//             />
//           </div>

//           {/* Text */}
//           <div className="flex-1 text-center md:text-left">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">
//               Forgot often?
//             </h2>
//             <p className="text-gray-600 mb-6 max-w-lg">
//               With{" "}
//               <span className="font-semibold text-logotype">DukanHisab</span>,
//               you can set reminders for customers who borrow money or when you
//               have to pay back. Get alerts on the exact date and time you set
//               for each transaction — so you’ll never forget a payment again.
//             </p>

//             <button className="bg-blue-800 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto md:mx-0 hover:bg-blue-900 transition">
//               <FaPlay /> Play video
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* 4. Customer & Supplier Management */}
//       <section className="bg-gray-50 py-16">
//         <div className="container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-10">
//           {/* Image */}
//           <div className="flex-1 flex justify-center">
//             <img
//               src="/customers.png"
//               alt="Customers"
//               className="max-w-md w-full"
//             />
//           </div>

//           {/* Text */}
//           <div className="flex-1 text-center md:text-left">
//             <h2 className="text-3xl font-bold text-gray-800 mb-4">
//               Manage customers & suppliers
//             </h2>
//             <p className="text-gray-600 mb-6">
//               Keep all your customer and supplier details in one place. Track
//               outstanding balances and payments with ease.
//             </p>
//             <button className="bg-logotype text-white px-6 py-3 rounded-lg hover:bg-indigo-800 transition">
//               Get started
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default FeaturesSections;

"use client";
import React from "react";
import { FaPlay } from "react-icons/fa";
import Lottie from "lottie-react";
import reminderAnim from "@/../public/lottie1.json"; 
import Link from "next/link";

const ReminderSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        
        {/* Left Side Lottie */}
        <div className="flex-1 flex justify-center max-w-xs sm:max-w-sm md:max-w-md">
          <Lottie animationData={reminderAnim} loop={true} />
        </div>

        {/* Right Side Content */}
        <div className="flex-1 text-left md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Forgot often?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6 max-w-lg  md:mx-0">
            With <span className="font-semibold text-logotype">DukanHisab</span>,
            you can set reminders for customers who borrow money or when you
            have to pay back. Get alerts on the exact date and time you set for
            each transaction — so you’ll never forget a payment again.
          </p>

          {/* CTA Button */}
          <div className="flex  text-left ">
            <Link href={"https://www.youtube.com/"}>
            <button className="bg-logotype border hover:border-logotype px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg flex items-center gap-2 btn-logotype transition text-sm sm:text-base">
              <FaPlay /> <span>Play video</span>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReminderSection;

