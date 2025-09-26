import Image from 'next/image';
import React from 'react'

const missiondata = [
  {
    id: 1,
    icon: "/log.png",
    title: "Track Dues and Debts",
    desc: "Easily keep track of who owes you and who you owe.",
  },
  {
    id: 2,
    icon: "/allocation.png",
    title: "Manage Expenses",
    desc: "Simplify splitting bills and managing shared expenses for trips, events, and everyday activities.",
  },
  {
    id: 3,
    icon: "/monitor.png",
    title: "Monitor Incomes",
    desc: "Track your incomes and ensure you stay on top of your financial goals.",
  },
];

const Mission = () => {
  return (
   <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto pl-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* Left Content */}
    <div className='text-logotype'>
      {/* Small heading */}
      <h3 className="text-sm font-semibold uppercase text-logotype tracking-wider mb-3">
        Our Mission
      </h3>

      {/* Big bold heading */}
      <p className="text-3xl md:text-4xl font-extrabold text-black leading-snug mb-5">
        Effortless Expense Management for a Better Future
      </p>

      {/* Mission Points */}
      <div className="space-y-8">
        {missiondata.map((item) => (
          <div key={item.id} className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-18 h-18 flex items-center justify-center bg-logotype rounded-full">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={38}
                  height={38}
                  className=''
                />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Right Image */}
    <div className="flex justify-center relative">
      <Image
        src="/mission.png"
        alt="Mission"
        width={520}
        height={520}
        className="object-contain"
      />
    </div>
  </div>
</section>

  )
}

export default Mission
