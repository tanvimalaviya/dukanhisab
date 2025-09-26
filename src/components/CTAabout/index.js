// import Image from "next/image";
// import React from "react";
// import { FaApple, FaGooglePlay } from "react-icons/fa";

// const CTAabout = () => {
//   return (
//     <div className="relative bg-logotype max-w-6xl mx-auto text-white mt-20 mb-20  rounded-2xl">
//       <div className="relative grid md:grid-cols-2 gap-5 items-center ">
//        {/* Left image div */}
//         <div className="flex justify-center md:justify-start ml-20">
//           <Image
//             src={"/aboutcta.webp"}
//             alt="about cta"
//             height={280}
//             width={280}
//             className="rounded-xl  -mt-20" // 👈 upar overlap
//           />
//         </div>

//         {/* Right text div */}
//        <div className="flex flex-col gap-6 text-left sm:pl-10 md:text-left mt-6 md:mt-0">
//           <div>
//             <h4 className="text-sm font-semibold tracking-wide uppercase text-yellow-200">
//               Begin Right Away
//             </h4>
//             <h1 className="text-4xl font-bold mt-2">Get Started Today</h1>
//             <p className="mt-4 text-lg text-gray-100 leading-relaxed">
//               Whether you're planning a group outing, managing household
//               finances, or simply keeping track of personal expenses,
//               <span className="font-semibold"> DesiHisab</span> is here to help.
//               Download our app for free and take control of your financial
//               transactions today.
//             </p>
//           </div>

//           {/* button div */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
//             {/* Google Play */}
//             <button className="flex items-center gap-3 bg-black px-5 py-3 rounded-xl shadow-lg hover:scale-105 transition">
//               <FaGooglePlay size={28} />
//               <div className="flex flex-col items-start leading-none">
//                 <span className="text-xs">GET IT ON</span>
//                 <span className="text-lg font-semibold">Google Play</span>
//               </div>
//             </button>

//             {/* App Store
//             <button className="flex items-center gap-3 bg-black px-5 py-3 rounded-xl shadow-lg hover:scale-105 transition">
//               <FaApple size={28} />
//               <div className="flex flex-col items-start leading-none">
//                 <span className="text-xs">Download on the</span>
//                 <span className="text-lg font-semibold">App Store</span>
//               </div>
//             </button> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CTAabout;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const CTAabout = () => {
  return (
    <div className="relative bg-logotype max-w-6xl mx-auto text-white mt-20 mb-20 rounded-2xl px-4 sm:px-6">
      <div className="relative grid md:grid-cols-2 gap-8 items-center">
        {/* Left image div */}
        {/* Left image div */}
        <div className="flex justify-center md:justify-start ml-20">
          <Image
            src={"/aboutcta.webp"}
            alt="about cta"
            height={280}
            width={280}
            className="rounded-xl  -mt-20" // 👈 upar overlap
          />
        </div>

        {/* Right text div */}
        <div>
          <div className="flex flex-col gap-6 text-left md:text-left mt-6 md:mt-0">
            <div>
              <h4 className="text-sm font-semibold tracking-wide uppercase text-yellow-200">
                Begin Right Away
              </h4>
              <h1 className="text-3xl sm:text-4xl font-bold mt-2">
                Get Started Today
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-100 leading-relaxed">
                Whether you're planning a group outing, managing household
                finances, or simply keeping track of personal expenses,
                <span className="font-semibold"> DesiHisab</span> is here to
                help. Download our app for free and take control of your
                financial transactions today.
              </p>
            </div>
          </div>
          {/* Buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4"> */}
          {/* Google Play */}
          <Link href={"https:\\play.google.com\store\apps/details?id=com.si.dukan.hisab.dukan_hisab&hl=en"} className="!no-underline">
          <button className="flex items-center gap-3 bg-black text-white !rounded-lg shadow-lg px-4 py-2 w-auto ">
            <FaGooglePlay size={28} />
            <div className="flex flex-col  items-start leading-none">
              <span className="text-xs ">GET IT ON</span>
              <span className="text-lg font-semibold">Google Play</span>
            </div>
          </button>
          </Link>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};

export default CTAabout;

{
  /* App Store (optional) */
}
{
  /* <button className="flex items-center gap-3 bg-black px-5 py-3 rounded-xl shadow-lg hover:scale-105 transition transform">
              <FaApple size={28} />
              <div className="flex flex-col items-start leading-none">
                <span className="text-xs">Download on the</span>
                <span className="text-lg font-semibold">App Store</span>
              </div>
            </button> */
}
