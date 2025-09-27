"use client";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: "/visual-data.png",
    title: "Smart Dashboard",
    desc: "View all your business insights in one place with real-time updates.",
  },
  {
    icon: "/folder.png",
    title: "Inventory Management",
    desc: "Track products, stock levels, and automate alerts effortlessly.",
  },
  {
    icon: "/sheet.png",
    title: "Reports & Analytics",
    desc: "Generate detailed reports for sales, expenses, and profits in seconds.",
  },
];

export default function FeatureHighlight() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-[40px] md:text-5xl font-bold text-black">
          Powerful Features for Dukanhisab
        </h2>
        <p className="mt-2 text-lg text-gray max-w-2xl mx-auto">
          Everything you need to manage your business efficiently and
          effortlessly.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-xl p-8 flex-1 hover:scale-105 transform transition duration-300"
          >
           {/* Swinging Icon */}
            <div className="mb-6 inline-block animate-swing">
              <Image src={feature.icon} alt={feature.title} width={60} height={60} />
            </div>

            <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Optional CTA */}
      <div className="text-center mt-12">
        <Link href={"/features"}>
          <button
            className="btn-logotype  
          transition-colors duration-300 
                   transform hover:scale-105 
                   shadow-md hover:shadow-lg
                   "
          >
            View All
          </button>
        </Link>
      </div>
    </section>
  );
}
