import Image from "next/image";

const timelineData = [
  {
    id: 1,
    icon: "/icons/problem.png",
    title: "Problem Identified",
    desc: "Shopkeepers struggled daily with managing expenses, dues, and accounts without a simple tool.",
  },
  {
    id: 2,
    icon: "/icons/thinking.png",
    title: "The Thought Process",
    desc: "We asked — what if account management could be as simple as sending a message?",
  },
  {
    id: 3,
    icon: "/icons/solution.png",
    title: "The Solution",
    desc: "That’s how Dukanhisab was born — an easy, reliable, and free app for every shopkeeper.",
  },
  {
    id: 4,
    icon: "/icons/mission.png",
    title: "Our Mission",
    desc: "To empower small businesses with smart tools that remove financial stress and boost growth.",
  },
];

export default function ThinkingBehind() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          The Thinking Behind Dukanhisab
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Every idea begins with a problem. Here’s the journey of how
          Dukanhisab came to life.
        </p>

        <div className="relative border-l-4 border-logotype pl-8 space-y-12">
          {timelineData.map((step) => (
            <div key={step.id} className="relative">
              <div className="absolute -left-12 flex items-center justify-center w-10 h-10 rounded-full bg-logotype text-white">
                <Image src={step.icon} alt={step.title} width={24} height={24} />
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
