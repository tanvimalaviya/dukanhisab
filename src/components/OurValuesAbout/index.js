// components/CoreValues.js
import React from "react";
import { FaHandshake, FaLightbulb, FaShieldAlt, FaUsers } from "react-icons/fa";

const values = [
  {
    icon: <FaHandshake size={50} className="text-logotype" />,
    title: "Trust",
    desc: "We build tools that shopkeepers can rely on with confidence.",
  },
  {
    icon: <FaLightbulb size={50} className="text-logotype" />,
    title: "Simplicity",
    desc: "Easy-to-use solutions designed for everyday business needs.",
  },
  {
    icon: <FaShieldAlt size={50} className="text-logotype" />,
    title: "Security",
    desc: "Your data is protected with top-level security & privacy measures.",
  },
  {
    icon: <FaUsers size={50} className="text-logotype" />,
    title: "Community",
    desc: "We grow together with shopkeepers, listening to their needs.",
  },
];

const CoreValues = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
          {values.map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 p-10 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
