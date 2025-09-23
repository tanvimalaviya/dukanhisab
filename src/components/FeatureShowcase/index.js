// components/FeatureShowcase.js
import {
  FaCalculator,
  FaBriefcase,
  FaUsers,
  FaFileInvoice,
  FaMoneyCheckAlt,
  FaDownload,
} from "react-icons/fa";
import Image from "next/image";

const leftFeatures = [
  {
    icon: <FaCalculator className="text-logotype" size={28} />,
    title: "Track Income & Expenses",
    desc: "Monitor all your earnings and expenses in one place with ease.",
  },
  {
    icon: <FaBriefcase className="text-logotype" size={28} />,
    title: "Set Up Multiple Businesses",
    desc: "Manage multiple shops or businesses under a single account.",
  },
  {
    icon: <FaUsers className="text-logotype" size={28} />,
    title: "Add Your Staff To Business",
    desc: "Give your staff access and collaborate securely.",
  },
];

const rightFeatures = [
  {
    icon: <FaFileInvoice className="text-logotype" size={28} />,
    title: "Manage your personal Udhar",
    desc: "Easily record and manage your personal lending and borrowing.",
  },
  {
    icon: <FaMoneyCheckAlt className="text-logotype" size={28} />,
    title: "Multiple Language Support ",
    desc: "Use the app in your preferred language for easy and comfortable business management.",
  },
  {
    icon: <FaDownload className="text-logotype" size={28} />,
    title: "Download PDF & Excel Report",
    desc: "Export your reports for sharing, printing, or analysis anytime.",
  },
];

export default function FeatureShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="!text-5xl font-bold text-graytext">
          Our Top Features
        </h2>
        <p className="mt-4 text-lg text-gray max-w-2xl mx-auto">
          Discover the powerful tools that make <span className="font-semibold">DukanHisab</span> 
          the ultimate solution for managing your business and personal finances.
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto mt-16 px-6 grid md:grid-cols-3 gap-10 items-center">
        {/* Left Features */}
        <div className="flex flex-col gap-10">
          {leftFeatures.map((feature, i) => (
            <div key={i} className="flex flex-col items-end text-right">
              <div className="flex items-center gap-3 justify-end">
                <h3 className="text-xl font-semibold text-graytext">
                  {feature.title}
                </h3>
                <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 ">
                  {feature.icon}
                </div>
              </div>
              <p className="text-gray text-sm max-w-xs">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <Image
            src="/incomeAndExpense.webp"
            alt="App Mockup"
            width={320}
            height={520}
            className="drop-shadow-2xl rounded-xl"
          />
        </div>

        {/* Right Features */}
        <div className="flex flex-col gap-10">
          {rightFeatures.map((feature, i) => (
            <div key={i} className="flex flex-col items-start text-left">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 ">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-graytext">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray text-sm max-w-xs">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
