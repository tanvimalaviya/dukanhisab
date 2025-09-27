import React from "react";
import { FaHandshake, FaLightbulb, FaShieldAlt, FaUsers } from "react-icons/fa";

const values = [
  {
    icon: <FaHandshake size={28} />,
    title: "Trust",
    desc: "We build tools that shopkeepers can rely on with confidence.",
  },
  {
    icon: <FaLightbulb size={28} />,
    title: "Simplicity",
    desc: "Easy-to-use solutions designed for everyday business needs.",
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: "Security",
    desc: "Your data is protected with top-level security & privacy measures.",
  },
  {
    icon: <FaUsers size={28} />,
    title: "Community",
    desc: "We grow together with shopkeepers, listening to their needs.",
  },
];

const CoreValues = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-3 text-graytext">
          Our Core Values
        </h2>
        <p className="text-gray-500 mb-12">
          The principles that drive everything we create at Dukanhisab.
        </p>

        {/* Values Grid */}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {values.map((item, i) => (
            <div
              key={i}
              className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm 
              hover:shadow-xl hover:-translate-y-2 hover:border-logotype transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full 
                bg-logotype/10 text-logotype group-hover:bg-logotype group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Title & Desc */}
              <h4 className="text-lg font-semibold mb-2 text-gray-800">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
