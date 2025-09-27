import Image from "next/image";

const timelineData = [
  {
    id: 1,
    icon: "/Think1.png",
    title: "Problem Identified",
    desc: "Shopkeepers struggled daily with managing expenses, dues, and accounts without a simple tool.",
  },
  {
    id: 2,
    icon: "/Think2.png",
    title: "The Thought Process",
    desc: "We asked — what if account management could be as simple as sending a message?",
  },
  {
    id: 3,
    icon: "/solutions.png",
    title: "The Solution",
    desc: "That’s how Dukanhisab was born — an easy, reliable, and free app for every shopkeeper.",
  },
  {
    id: 4,
    icon: "/missionthink.png",
    title: "Our Mission",
    desc: "To empower small businesses with smart tools that remove financial stress and boost growth.",
  },
];

export default function ThinkingBehind() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-2">
          The Thinking Behind Dukanhisab
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Every idea begins with a problem. Here’s the journey of how Dukanhisab
          came to life.
        </p>

        {/* <div className="relative border-l-2 border-logotype pl-6 space-y-12">
          {timelineData.map((step) => (
            <div key={step.id} className="relative">
              <div className="absolute -left-14 flex items-center justify-center w-17 h-17 rounded-full bg-logotype  text-white">
                <Image src={step.icon} alt={step.title} width={50} height={50} />
              </div>
              <div className="pl-10">
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div> */}

        {/* Timeline */}
        <div className="relative pl-12">
          {/* Full vertical timeline line */}
          <div className="absolute left-[18px] top-10 bottom-17 w-[2px] bg-logotype z-0"></div>

          {/* Steps */}
          <div className="space-y-10 relative z-10">
            {timelineData.map((step, i) => (
              <div key={i} className="relative flex">
                {/* Icon */}
                {/* Icon */}
                <div className="absolute -left-[60px] top-5 z-20">
                  <div className="bg-logotype rounded-full w-[70px] h-[70px] flex items-center justify-center ">
                    <Image
                      src={step.icon}
                      alt="image"
                      height={40}
                      width={40}
                      className=" object-contain"
                    />
                  </div>
                </div>

                {/* Step Content */}
                <div className="ml-7 flex-1">
                  <div className="bg-white p-6 rounded-xl shadow-sm  transition">
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
