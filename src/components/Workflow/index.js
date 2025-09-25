import {
  FaUserTie,
  FaUsers,
  FaMoneyBillWave,
  FaBoxes,
  FaBell,
  FaChartLine,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaUserTie size={22} />,
    title: "Create Business Profile",
    desc: "Quickly set up your store profile and get started.",
  },
  {
    icon: <FaUsers size={22} />,
    title: "Add Customers & Suppliers",
    desc: "Store all customer and supplier details securely.",
  },
  {
    icon: <FaMoneyBillWave size={22} />,
    title: "Record Income & Expenses",
    desc: "Track every earning and expense with ease.",
  },
  {
    icon: <FaBoxes size={22} />,
    title: "Manage Inventory",
    desc: "Keep an eye on stock in and out effortlessly.",
  },
  {
    icon: <FaBell size={22} />,
    title: "Track Udhar & Payments",
    desc: "Receive smart reminders for dues and payments.",
  },
  {
    icon: <FaChartLine size={22} />,
    title: "View Reports",
    desc: "Generate instant PDF & Excel reports for insights.",
  },
];

export default function AppFlowTimeline() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-graytext">
            How DukanHisab Works
          </h2>
          <p className="mt-4 text-gray max-w-2xl mx-auto">
            A simple step-by-step workflow to make your business management easy
            and effective.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-12">
          {/* Full vertical timeline line */}
          <div className="absolute left-[18px] top-10 bottom-17 w-[2px] bg-logotype z-0"></div>

          {/* Steps */}
          <div className="space-y-10 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="relative flex">
                {/* Icon */}
                <div className="absolute -left-12 top-5 z-20">
                  <div className="w-10 h-10 flex items-center justify-center bg-logotype text-white rounded-full shadow-lg">
                    {step.icon}
                  </div>
                </div>

                {/* Step Content */}
                <div className="ml-7 flex-1">
                  <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-graytext">
                      {i + 1}. {step.title}
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
