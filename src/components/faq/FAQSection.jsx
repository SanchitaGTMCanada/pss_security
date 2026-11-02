
"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Container from "@/components/ui/Container";

const faqs = [
  {
    question: "Are your security guards licensed?",
    answer:
      "Yes, all our security personnel are licensed under territorial regulations and undergo regular training.",
  },
  {
    question: "Do you provide services outside Yellowknife?",
    answer:
      "Yes, we serve surrounding communities and remote areas across the Northwest Territories.",
  },
  {
    question: "What kind of clients do you work with?",
    answer:
      "We work with individuals, small businesses, government departments, corporate clients, and event organizers.",
  },
  {
    question: "Can I get a custom security package?",
    answer:
      "Absolutely. We’ll assess your needs and develop a plan tailored to your budget and risk profile.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/homepage/faq.png"
          alt="Security professional"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/90 to-white/45" />
      </div>

      <Container>
        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">

          {/* LEFT CONTENT */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#B91C1C]" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B91C1C]">
                FAQ
              </p>
            </div>

            <h2 className="max-w-lg text-3xl font-black leading-tight tracking-tight text-[#111827] sm:text-4xl lg:text-5xl">
              Frequently Asked
              <span className="block text-[#B91C1C]">
                Questions
              </span>
            </h2>

            <div className="mt-4 h-[3px] w-16 rounded-full bg-[#B91C1C]" />

            <p className="mt-4 max-w-md text-sm leading-6 text-[#4B5563] sm:text-base">
              Find answers to common questions about our security services
              and how we work with our clients.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white/90">
                <span className="h-2.5 w-2.5 rounded-full bg-[#B91C1C]" />
              </div>

              <div>
                <p className="text-sm font-bold text-[#111827]">
                  Professional security.
                </p>
                <p className="text-sm text-[#6B7280]">
                  Protection you can depend on.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ ACCORDION */}
          <div className="overflow-hidden rounded-xl border border-white/80 bg-white/95 shadow-[0_12px_40px_rgba(15,23,42,0.12)] backdrop-blur-md">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`border-b border-[#E5E7EB] last:border-b-0 transition-colors ${
                    isOpen ? "bg-[#FFF7F7]" : "bg-white/95"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors sm:px-5"
                  >
                    <span
                      className={`text-sm font-semibold leading-6 transition-colors sm:text-base ${
                        isOpen
                          ? "text-[#B91C1C]"
                          : "text-[#1F2937] group-hover:text-[#B91C1C]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${
                        isOpen
                          ? "border-[#B91C1C] bg-[#B91C1C] text-white"
                          : "border-[#D1D5DB] bg-gray-50 text-gray-600 group-hover:border-[#B91C1C] group-hover:text-[#B91C1C]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={16} />
                      ) : (
                        <Plus size={16} />
                      )}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 pb-4 sm:px-5">
                        <div className="mb-2 h-px w-8 bg-[#B91C1C]/40" />
                        <p className="max-w-2xl text-sm leading-6 text-[#5B6472]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
