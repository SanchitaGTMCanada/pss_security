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
    <section className="relative overflow-hidden bg-[#05051A] py-20 sm:py-24 lg:py-32">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=2000&q=85"
          alt="Security professional"
          className="h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#05051A]/75" />

        {/* Left Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05051A]/95 via-[#05051A]/75 to-[#05051A]/45" />

        {/* Bottom Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05051A]/80 via-transparent to-[#05051A]/20" />
      </div>

      {/* Decorative Red Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#B91C1C]/10 blur-[150px]" />

      <Container>
        <div className="relative z-10 grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* =========================================
              LEFT SIDE
          ========================================== */}
          <div className="flex flex-col justify-center">

            {/* Small Label */}
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-14 bg-[#B91C1C]" />

              <p className="text-base font-bold uppercase tracking-[0.25em] text-[#FCA5A5]">
                FAQ
              </p>
            </div>

            {/* Heading */}
            <h2 className="max-w-2xl text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Frequently Asked
              <span className="block text-white">
                Questions
              </span>
            </h2>

            {/* Red Underline */}
            <div className="mt-7 h-[2px] w-72 bg-[#B91C1C]" />

            {/* Description */}
            <p className="mt-7 max-w-xl text-xl leading-9 text-slate-300">
              Find answers to some of the most common questions about our
              security services and how we work with our clients.
            </p>

            {/* Bottom Statement */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                <span className="h-3 w-3 rounded-full bg-[#B91C1C]" />
              </div>

              <div>
                <p className="text-lg font-semibold text-white">
                  Professional security.
                </p>

                <p className="mt-1 text-base text-slate-400">
                  Protection you can depend on.
                </p>
              </div>
            </div>
          </div>

          {/* =========================================
              FAQ LIST
          ========================================== */}
          <div className="relative">

            {/* FAQ Card */}
            <div className="overflow-hidden rounded-[28px] border border-white/15 bg-black/30 backdrop-blur-md">

              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className={`border-b border-white/10 last:border-b-0 ${
                      isOpen ? "bg-black/20" : ""
                    }`}
                  >

                    {/* Question */}
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      className="group flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition-all duration-300 sm:px-8 sm:py-7"
                    >
                      <div className="flex items-center gap-5">

                        {/* Plus / Minus */}
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                            isOpen
                              ? "border-[#B91C1C] bg-[#B91C1C] text-white"
                              : "border-white/30 bg-white/5 text-white group-hover:border-[#B91C1C] group-hover:text-[#FCA5A5]"
                          }`}
                        >
                          {isOpen ? (
                            <Minus size={20} strokeWidth={2} />
                          ) : (
                            <Plus size={20} strokeWidth={2} />
                          )}
                        </div>

                        {/* Question Text */}
                        <span
                          className={`text-xl font-medium leading-8 transition-colors duration-300 sm:text-2xl ${
                            isOpen
                              ? "text-white"
                              : "text-white group-hover:text-[#FCA5A5]"
                          }`}
                        >
                          {faq.question}
                        </span>

                      </div>
                    </button>

                    {/* Answer */}
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-7 pl-[4.5rem] pr-8 sm:pl-[5.5rem]">
                          <p className="max-w-2xl text-lg leading-8 text-slate-300">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}

            </div>

            {/* Bottom Accent */}
            <div className="mt-6 flex items-center justify-between">

              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#B91C1C]" />

                <span className="text-base font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Preventative Security Services
                </span>
              </div>

              <span className="text-base font-bold text-slate-500">
                PSS
              </span>

            </div>
          </div>
        </div>

        {/* =========================================
            BOTTOM STATEMENT
        ========================================== */}
        <div className="relative z-10 mt-16 border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

            <p className="text-lg leading-8 text-slate-400">
              Professional people. Dependable service. Safer environments.
            </p>

            <div className="flex items-center gap-4">
              <span className="h-3 w-3 rounded-full bg-[#B91C1C]" />

              <span className="text-base font-bold uppercase tracking-[0.2em] text-slate-400">
                PSS
              </span>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}