
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
    <section className="relative overflow-hidden bg-[#171717] py-20 sm:py-24 lg:py-32">

      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "65px 65px",
          }}
        />
      </div>

      {/* =====================================================
          BACKGROUND GLOWS
      ====================================================== */}

      <div className="pointer-events-none absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-[#A51F20]/12 blur-[150px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#A51F20]/7 blur-[140px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.015] blur-[120px]" />

      <Container>
        <div className="relative z-10">

          {/* =================================================
              HEADER
          ================================================== */}

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <div>

              <div className="mb-5 flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#A51F20]/30 bg-[#A51F20]/10">

                  <CircleHelp
                    size={17}
                    strokeWidth={1.7}
                    className="text-[#E4A0A1]"
                  />

                </div>

                <span className="text-xs font-black text-[#E4A0A1]">
                  06
                </span>

                <span className="h-px w-10 bg-[#A51F20]" />

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">
                  Frequently Asked Questions
                </span>

              </div>

              <h2 className="max-w-3xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-7xl">

                Questions.

                <span className="block text-[#E4A0A1]">
                  Answered.
                </span>

              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-white/45 sm:text-base">
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

          <div className="mt-10 overflow-hidden rounded-[30px] border border-white/10 bg-[#202020] shadow-[0_30px_80px_rgba(0,0,0,0.25)] lg:mt-12">

            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">

              {/* =================================================
                  LEFT QUESTION NAVIGATION
              ================================================== */}

              <div className="border-b border-white/10 lg:border-b-0 lg:border-r">

                {/* Left Header */}

                <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8">

                  <div>

                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/35">
                      Knowledge Base
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white">
                      Common Questions
                    </p>

                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#A51F20]/30 bg-[#A51F20]/10">

                    <Sparkles
                      size={18}
                      className="text-[#E4A0A1]"
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
                        className={`group relative flex w-full items-center gap-4 rounded-xl px-4 py-5 text-left transition-all duration-300 sm:px-5 ${
                          isActive
                            ? "bg-white/[0.07]"
                            : "hover:bg-white/[0.035]"
                        }`}
                      >

                        {/* Active indicator */}

                        <span
                          className={`absolute bottom-2 left-0 top-2 w-[3px] rounded-r-full bg-[#A51F20] transition-transform duration-300 ${
                            isActive
                              ? "scale-y-100"
                              : "scale-y-0"
                          }`}
                        />


                        {/* Question Icon */}

                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                            isActive
                              ? "border-[#A51F20]/50 bg-[#A51F20]/15 text-[#E4A0A1] shadow-[0_0_25px_rgba(165,31,32,0.12)]"
                              : "border-white/10 bg-white/[0.03] text-white/30 group-hover:border-white/20 group-hover:text-white/70"
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
                              ? "text-[#E4A0A1]"
                              : "text-white/20"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>


                        {/* Question */}

                        <span
                          className={`flex-1 text-sm font-semibold leading-5 transition-colors ${
                            isActive
                              ? "text-white"
                              : "text-white/45 group-hover:text-white/85"
                          }`}
                        >
                          {faq.question}
                        </span>


                        {/* Arrow */}

                        <ChevronRight
                          size={16}
                          className={`shrink-0 transition-all duration-300 ${
                            isActive
                              ? "translate-x-1 text-[#E4A0A1]"
                              : "text-white/20 group-hover:text-white/60"
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

                <div className="pointer-events-none absolute right-[-55px] top-[-55px] hidden sm:block">

                  {/* Glow */}

                  <div className="absolute inset-10 rounded-full bg-[#A51F20]/20 blur-[75px]" />


                  {/* Outer Circle */}

                  <div className="relative flex h-[310px] w-[310px] items-center justify-center rounded-full border border-[#A51F20]/15">

                    {/* Middle Ring */}

                    <div className="flex h-[255px] w-[255px] items-center justify-center rounded-full border border-white/[0.05]">

                      {/* Inner Circle */}

                      <div className="flex h-[210px] w-[210px] items-center justify-center rounded-full bg-white/[0.015]">

                        <ShieldCheck
                          size={155}
                          strokeWidth={0.7}
                          className="text-[#A51F20]/25"
                        />

                      </div>

                    </div>


                    {/* Orbit Dots */}

                    <span className="absolute left-[38px] top-[70px] h-2 w-2 rounded-full bg-[#A51F20]/60" />

                    <span className="absolute right-[55px] top-[45px] h-1.5 w-1.5 rounded-full bg-white/20" />

                    <span className="absolute bottom-[55px] left-[72px] h-1.5 w-1.5 rounded-full bg-[#A51F20]/45" />

                  </div>

                </div>


                {/* Additional Decorative Icon */}

                <LockKeyhole
                  size={80}
                  strokeWidth={0.8}
                  className="pointer-events-none absolute bottom-20 right-16 hidden text-white/[0.025] lg:block"
                />


                {/* Answer Glow */}

                <div className="pointer-events-none absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#A51F20]/8 blur-[110px]" />


                {/* =================================================
                    ANSWER CONTENT
                ================================================== */}

                <div className="relative z-10 flex h-full flex-col">

                  {/* Active Icon */}

                  <div className="flex items-center gap-5">

                    <div className="relative">

                      <div className="absolute inset-0 rounded-[22px] bg-[#A51F20]/25 blur-xl" />

                      <div className="relative flex h-[72px] w-[72px] items-center justify-center rounded-[22px] border border-[#A51F20]/40 bg-[#A51F20]/10">

                        <ActiveIcon
                          size={32}
                          strokeWidth={1.4}
                          className="text-[#E4A0A1]"
                        />

                      </div>

                    </div>


                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/35">
                        Answer
                      </p>

                      <p className="mt-1 text-xs font-semibold text-[#E4A0A1]">
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

                    <span className="h-[2px] w-16 bg-[#A51F20]" />

                    <span className="h-px flex-1 bg-white/10" />

                  </div>


                  {/* Answer */}

                  <p className="mt-8 max-w-2xl text-sm leading-8 text-white/45 sm:text-base">
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

                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A51F20] transition-all duration-300 group-hover:bg-white group-hover:text-[#A51F20]">

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

                <span className="h-2 w-2 rounded-full bg-[#A51F20] shadow-[0_0_12px_rgba(165,31,32,0.7)]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                  Professional
                </span>

              </div>

              <span className="text-white/15">
                •
              </span>

              <div className="flex items-center gap-2">

                <CheckCircle2
                  size={13}
                  className="text-[#A51F20]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                  Reliable
                </span>

              </div>

              <span className="text-white/15">
                •
              </span>

              <div className="flex items-center gap-2">

                <Shield
                  size={13}
                  className="text-[#A51F20]"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
                  Trusted
                </span>

              </div>

            </div>

            <span className="text-xs text-white/25">
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
    <div className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 transition-all duration-300 hover:border-[#A51F20]/40 hover:bg-[#A51F20]/10">

      <Icon
        size={15}
        strokeWidth={1.6}
        className="text-[#E4A0A1] transition-transform duration-300 group-hover:scale-110"
      />

      <span className="text-xs font-semibold text-white/45 group-hover:text-white/75">
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
        className="text-[#E4A0A1]"
      />

      <span className="text-[11px] font-semibold text-white/45">
        {text}
      </span>

    </div>
  );
}
