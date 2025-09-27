"use client";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    title: "Design Quality",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Rosalina D. Williamson",
    role: "Founder, Google",
    image: "/team1.jpg",
  },
  {
    id: 2,
    title: "Development",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Rosalina D. Williamson",
    role: "Founder, Google",
    image: "/team1.jpg",
  },
  {
    id: 3,
    title: "Design Quality",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Rosalina D. Williamson",
    role: "Founder, Google",
    image: "/team1.jpg",
  },
  {
    id: 4,
    title: "Design abc",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Rosalina D. Williamson",
    role: "Founder, Google",
    image: "/team1.jpg",
  },
  {
    id: 5,
    title: "Design xyz",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Rosalina D. Williamson",
    role: "Founder, Google",
    image: "/team1.jpg",
  },
  {
    id: 6,
    title: "Design pqr",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Rosalina D. Williamson",
    role: "Founder, Google",
    image: "/team1.jpg",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // ✅ Responsive card count
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 640) {
        setCardsToShow(1);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-logotype text-white py-16 relative">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
        <p className="mb-12 max-w-2xl mx-auto text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Cards */}
        <div className="flex justify-center gap-8 flex-wrap">
          {Array.from({ length: cardsToShow }).map((_, index) => {
            const item = testimonials[(current + index) % testimonials.length];
            return (
              <div
                key={item.id}
                className="bg-white text-gray-800 rounded-lg shadow-lg p-6 w-80 relative"
              >
                {/* Stars + Title */}
                <div className="flex items-center gap-5 mb-4">
                  <div className="text-orange-500 text-lg">★★★★★</div>
                  <h3 className="!text-lg text-blue-700">“{item.title}”</h3>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-6">{item.desc}</p>

                {/* Profile */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col leading-tight">
                    <h4 className="font-bold !text-lg m-0">{item.name}</h4>
                    <p className="text-sm text-blue-600 m-0">{item.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Arrows */}
        <div className="flex gap-4 justify-center mt-10">
         <button
  onClick={prevSlide}
  className="bg-white text-indigo-900 p-3 rounded-full shadow-lg 
             hover:bg-indigo-100 transition transform hover:-translate-y-1 hover:scale-110"
>
  <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
</button>

          <button
            onClick={nextSlide}
            className="bg-white text-indigo-900 p-3 rounded-full shadow-lg 
             hover:bg-indigo-100 transition transform hover:rotate-12"
          >
            <FaArrowRight className="transition-transform duration-300 animate-pulse" />
          </button>
        

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
