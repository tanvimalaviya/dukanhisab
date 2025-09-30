"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is DukanHisab app?",
    answer:
      "DukanHisab is a simple digital ledger and business management app. You can manage udhar, customers, suppliers, inventory, and reports — all in one place.",
  },
  {
    question: "Is DukanHisab free to use?",
    answer: "Yes, DukanHisab is completely free with no hidden charges.",
  },
  {
    question: "Can I use the app without internet?",
    answer:
      "Absolutely! DukanHisab works offline too. Once internet is available, data syncs automatically.",
  },
  {
    question: "Which languages does DukanHisab support?",
    answer:
      "You can use DukanHisab in Hindi, Gujarati, and English. More languages coming soon.",
  },
  {
    question: "Can I download reports of my business?",
    answer:
      "Yes, you can instantly download PDF or Excel reports for your business accounts.",
  },
  {
    question: "How secure is my business data?",
    answer:
      "Your data is 100% safe and encrypted. Only you can access your business information.",
  },
];

export default function FAQSection() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      // already open → close it
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      // add index → keep others open too
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-3">
            Everything you need to know about using DukanHisab.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border rounded-lg shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full px-5 py-4 text-left"
              >
                <span className="text-graytext font-medium">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`transform transition ${
                    openIndexes.includes(index) ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndexes.includes(index) && (
                <div className="px-5 pb-4 text-gray">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>{faq.answer}</li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
