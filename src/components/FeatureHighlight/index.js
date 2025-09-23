// components/FeatureHighlights.js
import { FaChartLine, FaUsers, FaFileAlt, FaGlobe, FaLock, FaBell } from "react-icons/fa";

const features = [
  {
    icon: <FaChartLine size={40} className="text-logotype" />,
    title: "Smart Expense Tracking",
    desc: "Easily record daily expenses and monitor spending patterns.",
  },
  {
    icon: <FaUsers size={40} className="text-logotype" />,
    title: "Manage Customers & Suppliers",
    desc: "Keep all your contacts organized with outstanding balances.",
  },
  {
    icon: <FaFileAlt size={40} className="text-logotype" />,
    title: "Automated Reports",
    desc: "Generate clear, detailed reports to understand your business better.",
  },
  {
    icon: <FaGlobe size={40} className="text-logotype" />,
    title: "Multi-Language Support",
    desc: "Use the app in your preferred language for easier navigation.",
  },
  {
    icon: <FaLock size={40} className="text-logotype" />,
    title: "Secure Data Storage",
    desc: "Your financial data is encrypted and stored safely.",
  },
  {
    icon: <FaBell size={40} className="text-logotype" />,
    title: "Smart Reminders",
    desc: "Get automatic reminders for dues and payments on time.",
  },
];

export default function FeatureHighlights() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
        <p className="text-gray max-w-2xl mx-auto mb-12">
          Dukanhisab is packed with features designed to make store management
          simple, reliable, and stress-free.
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





