"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  ClipboardCheck,
  Clock3,
  LockKeyhole,
  MessageCircle,
  Settings2,
  Shield,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import Container from "@/components/ui/Container";

const faqs = [
  {
    icon: ShieldCheck,
    question: "What security services do you provide?",
    answer:
      "We provide professional security personnel and protection solutions for a range of business and property environments. Our services can be tailored around your specific operational and security requirements.",
  },
  {
    icon: Users,
    question: "Do you provide customer service and reception staff?",
    answer:
      "Yes. Our customer service and reception personnel help create a professional and welcoming environment while assisting visitors, handling enquiries and supporting front-of-house operations.",
  },
  {
    icon: Settings2,
    question: "Can your services be customized for my business?",
    answer:
      "Yes. Every business has different requirements. We can discuss your location, operating hours, responsibilities and staffing needs to create a service arrangement that suits your environment.",
  },
  {
    icon: ClipboardCheck,
    question: "How do I request a service?",
    answer:
      "You can submit an enquiry through our booking section by selecting the service you require and providing your contact details. Our team will review your request and contact you regarding the next steps.",
  },
  {
    icon: MessageCircle,
    question: "Can I speak with someone before booking?",
    answer:
      "Absolutely. If you would like to discuss your requirements before making a booking, you can contact our team directly and we will be happy to discuss the available options.",
  },
  {
    icon: Clock3,
    question: "How quickly will someone respond to my enquiry?",
    answer:
      "Once your enquiry has been received, our team will review the information provided and contact you with the relevant details and next steps.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeFAQ = faqs[activeIndex];
  const ActiveIcon = activeFAQ.icon;

  return (
    <section className="relative overflow-hidden bg-[#05051A] py-20 sm:py-24 lg:py-32">
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-[#B91C1C]/15 blur-[140px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#B91C1C]/10 blur-[130px]" />

      <Container>
        <div className="relative z-10">
          {/* =================================================
              HEADER
          ================================================== */}

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#B91C1C]/30 bg-[#B91C1C]/10">
                  <CircleHelp
                    size={16}
                    className="text-[#F87171]"
                  />
                </div>

                <span className="text-xs font-black text-[#F87171]">
                  06
                </span>

                <span className="h-px w-10 bg-[#B91C1C]" />

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
                  Frequently Asked Questions
                </span>
              </div>

              <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-7xl">
                Questions.
                <span className="block text-[#F87171]">
                  Answered.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-400 sm:text-base">
              Everything you need to know about our security, customer
              service and reception solutions.
            </p>
          </div>

          {/* =================================================
              SERVICE ICON STRIP
          ================================================== */}

          <div className="mt-10 flex flex-wrap gap-3">
            <IconBadge
              icon={Shield}
              label="Security"
            />

            <IconBadge
              icon={Users}
              label="Reception"
            />

            <IconBadge
              icon={Building2}
              label="Business"
            />

            <IconBadge
              icon={LockKeyhole}
              label="Protection"
            />

            <IconBadge
              icon={CheckCircle2}
              label="Reliable"
            />
          </div>

          {/* =================================================
              MAIN FAQ CONTAINER
          ================================================== */}

          <div className="mt-10 overflow-hidden border border-white/10 bg-[#080820] lg:mt-12">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              {/* =================================================
                  LEFT QUESTION NAVIGATION
              ================================================== */}

              <div className="border-b border-white/10 lg:border-b-0 lg:border-r">
                {/* Left Header */}

                <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
                      Knowledge Base
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      Common Questions
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B91C1C]/30 bg-[#B91C1C]/10">
                    <Sparkles
                      size={18}
                      className="text-[#F87171]"
                    />
                  </div>
                </div>

                {/* Questions */}

                <div className="p-3 sm:p-5">
                  {faqs.map((faq, index) => {
                    const isActive = activeIndex === index;
                    const Icon = faq.icon;

                    return (
                      <button
                        key={faq.question}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={`group relative flex w-full items-center gap-4 px-4 py-5 text-left transition-all duration-300 sm:px-5 ${
                          isActive
                            ? "bg-white/[0.06]"
                            : "hover:bg-white/[0.03]"
                        }`}
                      >
                        {/* Active indicator */}

                        <span
                          className={`absolute bottom-0 left-0 top-0 w-[3px] bg-[#B91C1C] transition-transform duration-300 ${
                            isActive
                              ? "scale-y-100"
                              : "scale-y-0"
                          }`}
                        />

                        {/* Question Icon */}

                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                            isActive
                              ? "border-[#B91C1C]/50 bg-[#B91C1C]/15 text-[#F87171] shadow-[0_0_20px_rgba(185,28,28,0.15)]"
                              : "border-white/5 bg-white/[0.03] text-slate-600 group-hover:border-white/10 group-hover:text-slate-300"
                          }`}
                        >
                          <Icon
                            size={18}
                            strokeWidth={1.6}
                          />
                        </span>

                        {/* Number */}

                        <span
                          className={`hidden w-5 shrink-0 text-[10px] font-bold sm:block ${
                            isActive
                              ? "text-[#F87171]"
                              : "text-slate-700"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Question */}

                        <span
                          className={`flex-1 text-sm font-semibold leading-5 transition-colors ${
                            isActive
                              ? "text-white"
                              : "text-slate-400 group-hover:text-white"
                          }`}
                        >
                          {faq.question}
                        </span>

                        <ChevronRight
                          size={16}
                          className={`shrink-0 transition-all duration-300 ${
                            isActive
                              ? "translate-x-1 text-[#F87171]"
                              : "text-slate-700 group-hover:text-slate-300"
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* =================================================
                  RIGHT ANSWER PANEL
              ================================================== */}

              <div className="relative min-h-[540px] overflow-hidden p-8 sm:p-10 lg:p-14">
                {/* =================================================
                    LARGE UPPER-RIGHT DECORATIVE SHIELD
                ================================================== */}

                <div className="pointer-events-none absolute right-[-45px] top-[-45px] hidden sm:block">
                  {/* Red Glow */}

                  <div className="absolute inset-10 rounded-full bg-[#B91C1C]/20 blur-[70px]" />

                  {/* Outer Circle */}

                  <div className="relative flex h-[300px] w-[300px] items-center justify-center rounded-full border border-[#B91C1C]/10">
                    {/* Inner Circle */}

                    <div className="flex h-[230px] w-[230px] items-center justify-center rounded-full border border-white/[0.04] bg-white/[0.015]">
                      <ShieldCheck
                        size={165}
                        strokeWidth={0.7}
                        className="text-[#B91C1C]/20"
                      />
                    </div>

                    {/* Orbit Dots */}

                    <span className="absolute left-[35px] top-[65px] h-2 w-2 rounded-full bg-[#B91C1C]/50" />

                    <span className="absolute right-[55px] top-[45px] h-1.5 w-1.5 rounded-full bg-white/20" />

                    <span className="absolute bottom-[55px] left-[70px] h-1.5 w-1.5 rounded-full bg-[#B91C1C]/40" />
                  </div>
                </div>

                {/* Additional Decorative Icon */}

                <LockKeyhole
                  size={70}
                  strokeWidth={0.8}
                  className="pointer-events-none absolute bottom-20 right-16 hidden text-white/[0.025] lg:block"
                />

                {/* Answer Glow */}

                <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#B91C1C]/10 blur-[100px]" />

                {/* =================================================
                    ANSWER CONTENT
                ================================================== */}

                <div className="relative z-10 flex h-full flex-col">
                  {/* Active Icon */}

                  <div className="flex items-center gap-5">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-[22px] bg-[#B91C1C]/30 blur-xl" />

                      <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-[22px] border border-[#B91C1C]/40 bg-[#B91C1C]/10">
                        <ActiveIcon
                          size={32}
                          strokeWidth={1.4}
                          className="text-[#F87171]"
                        />
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500">
                        Answer
                      </p>

                      <p className="mt-1 text-xs font-semibold text-[#F87171]">
                        {String(activeIndex + 1).padStart(2, "0")} /{" "}
                        {String(faqs.length).padStart(2, "0")}
                      </p>
                    </div>
                  </div>

                  {/* Question */}

                  <h3 className="mt-9 max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                    {activeFAQ.question}
                  </h3>

                  {/* Divider */}

                  <div className="mt-8 flex items-center gap-3">
                    <span className="h-[2px] w-16 bg-[#B91C1C]" />

                    <span className="h-px flex-1 bg-white/10" />
                  </div>

                  {/* Answer */}

                  <p className="mt-8 max-w-2xl text-sm leading-8 text-slate-400 sm:text-base">
                    {activeFAQ.answer}
                  </p>

                  {/* =================================================
                      FEATURE ICONS
                  ================================================== */}

                  <div className="mt-9 flex flex-wrap gap-3">
                    <MiniFeature
                      icon={ShieldCheck}
                      text="Professional"
                    />

                    <MiniFeature
                      icon={CheckCircle2}
                      text="Reliable"
                    />

                    <MiniFeature
                      icon={Settings2}
                      text="Flexible"
                    />
                  </div>

                  {/* =================================================
                      CTA
                  ================================================== */}

                  <div className="mt-auto pt-12">
                    <a
                      href="/contact"
                      className="group inline-flex items-center gap-3 text-sm font-bold text-white"
                    >
                      Still have questions?

                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B91C1C] transition-all duration-300 group-hover:bg-white group-hover:text-[#B91C1C]">
                        <ArrowUpRight size={17} />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              BOTTOM TRUST LINE
          ================================================== */}

          <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#B91C1C] shadow-[0_0_12px_rgba(185,28,28,0.8)]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Professional
                </span>
              </div>

              <span className="text-slate-700">
                •
              </span>

              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={13}
                  className="text-[#B91C1C]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Reliable
                </span>
              </div>

              <span className="text-slate-700">
                •
              </span>

              <div className="flex items-center gap-2">
                <Shield
                  size={13}
                  className="text-[#B91C1C]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Trusted
                </span>
              </div>
            </div>

            <span className="text-xs text-slate-600">
              Security • Customer Service • Reception
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* =========================================================
   ICON BADGE
========================================================= */

function IconBadge({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 transition-all duration-300 hover:border-[#B91C1C]/40 hover:bg-[#B91C1C]/5">
      <Icon
        size={15}
        strokeWidth={1.6}
        className="text-[#F87171]"
      />

      <span className="text-xs font-semibold text-slate-400">
        {label}
      </span>
    </div>
  );
}

/* =========================================================
   MINI FEATURE
========================================================= */

function MiniFeature({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
      <Icon
        size={14}
        strokeWidth={1.6}
        className="text-[#F87171]"
      />

      <span className="text-[11px] font-semibold text-slate-400">
        {text}
      </span>
    </div>
  );
}