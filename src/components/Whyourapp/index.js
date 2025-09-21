"use client";
import Image from "next/image";
import { SiEasyeda } from "react-icons/si";


const reasons = [
  {
    icon: "/complete.gif",
    title: "Easy to Use",
    desc: "Dukanhisab is designed with simplicity in mind. Even if you’re not tech-savvy, you can set it up and start managing your business within minutes.",
  },
  {
    icon: "/key.gif",
    title: "Secure & Reliable",
    desc: "Your data is encrypted and safely stored. We ensure top-level security standards, so you never have to worry about losing important information.",
  },
  {
    icon: "/processing-speed.gif",
    title: "Lightning Fast",
    desc: "Get things done faster with an app that’s optimized for speed. From loading dashboards to generating reports, everything happens instantly.",
  },
  {
    icon: "/connection.gif",
    title: "24/7 Support",
    desc: "Our dedicated support team is always available to help you with any issues or questions you may have — day or night.",
  },
];

export default function WhyOurApp() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Why Choose Dukanhisab?
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Our app is trusted by thousands of businesses for managing accounts, inventory, and growth. Here’s why Dukanhisab is the perfect choice for you.
        </p>
      </div>

      {/* Reason Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {reasons.map((reason, idx) => (
          <div
            key={idx}
            className="flex items-start gap-6 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <Image src={reason.icon} alt={reason.title} width={60} height={60} />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-16">
        <div>
          <h4 className="text-4xl font-bold text-logotype">10K+</h4>
          <p className="text-gray-600 mt-2">Active Businesses</p>
        </div>
        <div>
          <h4 className="text-4xl font-bold text-logotype">1M+</h4>
          <p className="text-gray-600 mt-2">Transactions Managed</p>
        </div>
        <div>
          <h4 className="text-4xl font-bold text-logotype">99.9%</h4>
          <p className="text-gray-600 mt-2">Uptime & Reliability</p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <button className="btn-logotype">
          Get Started with Dukanhisab
        </button>
      </div>
    </section>
  );
}
