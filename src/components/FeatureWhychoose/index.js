import Image from "next/image";
import React from "react";

const featurechoose = [
  {
    icon: "/easy-to-use.png",
    title: "Simple to Use",
    desc: "No complicated setup, just install and start managing.",
  },
  {
    icon: "/computer.png",
    title: "Works Offline",
    desc: "Continue managing even without internet.",
  },
  {
    icon: "/communication.png",
    title: "Multi-Language Support",
    desc: "Use app in Hindi, Gujarati, or your language.",
  },
  {
    icon: "/report.png",
    title: "One-Click Reports",
    desc: "Download PDF/Excel instantly.",
  },
  {
    icon: "/reminder.png",
    title: "Free Reminders",
    desc: "Never miss udhar or payments.",
  },
];

const FeatureWhyChoose = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Businesses Trust <span className="text-logotype">DukanHisab</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Because we focus on making your dukaan ka hisaab simple, fast, and
            reliable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featurechoose.map((feature, id) => (
            <div
              key={id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h4 className="text-lg font-semibold text-gray-800 text-center">
                {feature.title}
              </h4>

              {/* Description */}
              <p className="mt-2 text-gray-600 text-center text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureWhyChoose;
