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
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">

      {/* =========================================
          BACKGROUND PHOTO
      ========================================== */}
      <div className="absolute inset-0">

        <img
          src="/homepage/faq.png"
          alt="Security professional"
          className="h-full w-full object-cover"
        />

        {/* Light Overall Overlay */}
        <div className="absolute inset-0 bg-white/25" />

        {/* Stronger Light Overlay on Left */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/55 via-white/85 to-white/25" />

        {/* Soft White Fade from Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/20" />

      </div>

      {/* =========================================
          DECORATIVE RED GLOW
      ========================================== */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-[#B91C1C]/8 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#B91C1C]/6 blur-[140px]" />

      <Container>
        <div className="relative z-10 grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* =========================================
              LEFT SIDE
          ========================================== */}
          <div className="flex flex-col justify-center">

            {/* Small Label */}
            <div className="mb-6 flex items-center gap-4">

              <span className="h-[2px] w-14 bg-[#B91C1C]" />

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B91C1C] sm:text-base">
                FAQ
              </p>

            </div>

            {/* Heading */}
            <h2 className="max-w-2xl text-5xl font-black leading-[1.02] tracking-tight text-[#111827] sm:text-6xl lg:text-7xl">
              Frequently Asked

              <span className="block text-[#B91C1C]">
                Questions
              </span>
            </h2>

            {/* Red Underline */}
            <div className="mt-7 h-[3px] w-24 rounded-full bg-[#B91C1C]" />

            {/* Description */}
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#4B5563] sm:text-xl sm:leading-9">
              Find answers to some of the most common questions about our
              security services and how we work with our clients.
            </p>

            {/* Bottom Statement */}
            <div className="mt-10 flex items-center gap-4">

              {/* Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] bg-white/90 shadow-sm backdrop-blur-sm">

                <span className="h-3 w-3 rounded-full bg-[#B91C1C]" />

              </div>

              <div>

                <p className="text-lg font-bold text-[#111827]">
                  Professional security.
                </p>

                <p className="mt-1 text-base text-[#6B7280]">
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
            <div className="overflow-hidden rounded-[28px] border border-white/80 bg-white/95 shadow-[0_25px_70px_rgba(15,23,42,0.15)] backdrop-blur-md">

              {faqs.map((faq, index) => {

                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className={`border-b border-[#E5E7EB] last:border-b-0 transition-colors duration-300 ${
                      isOpen
                        ? "bg-[#FFF7F7]"
                        : "bg-white/95"
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
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                            isOpen
                              ? "border-[#B91C1C] bg-[#B91C1C] text-white shadow-[0_6px_18px_rgba(185,28,28,0.25)]"
                              : "border-[#D1D5DB] bg-[#F9FAFB] text-[#374151] group-hover:border-[#B91C1C] group-hover:bg-[#FFF5F5] group-hover:text-[#B91C1C]"
                          }`}
                        >

                          {isOpen ? (
                            <Minus
                              size={19}
                              strokeWidth={2.2}
                            />
                          ) : (
                            <Plus
                              size={19}
                              strokeWidth={2.2}
                            />
                          )}

                        </div>

                        {/* Question Text */}
                        <span
                          className={`text-lg font-semibold leading-7 transition-colors duration-300 sm:text-xl ${
                            isOpen
                              ? "text-[#B91C1C]"
                              : "text-[#1F2937] group-hover:text-[#B91C1C]"
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

                          <div className="mb-4 h-px w-12 bg-[#B91C1C]/30" />

                          <p className="max-w-2xl text-base leading-7 text-[#5B6472] sm:text-lg sm:leading-8">
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

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6B7280] sm:text-sm">
                  Preventative Security Services
                </span>

              </div>

              <span className="text-sm font-black tracking-widest text-[#9CA3AF]">
                PSS
              </span>

            </div>

          </div>
        </div>

        {/* =========================================
            BOTTOM STATEMENT
        ========================================== */}
        <div className="relative z-10 mt-16 border-t border-[#D1D5DB]/70 pt-8">

          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

            <p className="text-base leading-7 text-[#6B7280] sm:text-lg">
              Professional people. Dependable service. Safer environments.
            </p>

            <div className="flex items-center gap-4">

              <span className="h-3 w-3 rounded-full bg-[#B91C1C]" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#6B7280]">
                PSS
              </span>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}