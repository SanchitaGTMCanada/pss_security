
import {
  ShieldCheck,
  Users,
  Shield,
  HeartHandshake,
  ArrowUpRight,
  Check,
} from "lucide-react";

import Container from "@/components/ui/Container";

const reasons = [
  {
    number: "01",
    title: "Professional Team",
    description:
      "Trained professionals who understand the importance of presence, communication, and responsibility.",
    icon: Users,
  },
  {
    number: "02",
    title: "Reliable Protection",
    description:
      "Dependable service designed around the unique requirements of your property and business.",
    icon: Shield,
  },
  {
    number: "03",
    title: "Client Focused",
    description:
      "We listen, understand your requirements, and build our service around your environment.",
    icon: HeartHandshake,
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[#F4F4F4] py-20 sm:py-24 lg:py-32">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#A51F20]/6 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#303030]/6 blur-[120px]" />

      <Container>

        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <div className="relative z-10 mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

          <div>

            <div className="mb-5 flex items-center gap-3">

              <span className="h-[2px] w-10 bg-[#A51F20]" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#A51F20]">
                Why Choose PSS
              </p>

            </div>

            <h2 className="max-w-xl text-4xl font-black leading-[1.02] tracking-tight text-[#171717] sm:text-5xl lg:text-6xl">

              Security built

              <span className="block text-[#454545]">
                around people.
              </span>

            </h2>

          </div>

          <p className="max-w-xl text-base leading-8 text-[#454545] lg:ml-auto">
            We combine professional people, dependable service, and a
            client-focused approach to create safer and more welcoming
            environments.
          </p>

        </div>

        {/* =================================================
            MAIN CONTENT
        ================================================== */}

        <div className="relative z-10 grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">

          {/* =================================================
              IMAGE PANEL
          ================================================== */}

          <div className="group relative min-h-[520px] overflow-hidden rounded-[32px] bg-[#171717] shadow-[0_25px_60px_rgba(23,23,23,0.18)]">

            {/* Image */}

            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=85"
              alt="Professional security and protection services"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/55 to-[#171717]/10" />

            {/* Red Gradient */}

            <div className="absolute inset-0 bg-gradient-to-br from-[#A51F20]/25 via-transparent to-transparent" />

            {/* Decorative Border */}

            <div className="absolute inset-5 rounded-[25px] border border-white/20" />

            {/* =================================================
                TOP BADGE
            ================================================== */}

            <div className="absolute left-8 top-8 flex items-center gap-3 rounded-full border border-white/20 bg-[#171717]/45 px-4 py-2.5 backdrop-blur-md">

              <span className="h-2.5 w-2.5 rounded-full bg-[#A51F20] shadow-[0_0_12px_rgba(165,31,32,0.7)]" />

              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
                Professional Security
              </span>

            </div>

            {/* =================================================
                IMAGE CONTENT
            ================================================== */}

            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">

              {/* Icon */}

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#A51F20] shadow-xl shadow-black/30">

                <ShieldCheck
                  size={32}
                  strokeWidth={1.6}
                  className="text-white"
                />

              </div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#E4A0A1]">
                Our Difference
              </p>

              <h3 className="mt-3 max-w-md text-3xl font-bold leading-tight text-white sm:text-4xl">
                Protection with a professional presence.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-[#F4F4F4]/75">
                Our approach combines professionalism, awareness,
                communication, and dependable service.
              </p>

            </div>

            {/* =================================================
                FLOATING CHECK
            ================================================== */}

            <div className="absolute bottom-8 right-8 hidden h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md sm:flex">

              <Check
                size={28}
                strokeWidth={2.5}
                className="text-white"
              />

            </div>

          </div>

          {/* =================================================
              RIGHT CONTENT
          ================================================== */}

          <div className="flex flex-col gap-4">

            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.number}
                  className="group relative overflow-hidden rounded-[26px] border border-[#303030]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(23,23,23,0.10)] sm:p-7"
                >

                  {/* Red Bottom Line */}

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#A51F20] transition-all duration-500 group-hover:w-full" />

                  <div className="flex gap-5">

                    {/* =================================================
                        ICON
                    ================================================== */}

                    <div className="relative shrink-0">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#171717] transition-all duration-300 group-hover:bg-[#A51F20]">

                        <Icon
                          size={25}
                          strokeWidth={1.7}
                          className="text-white"
                        />

                      </div>

                      {/* Number */}

                      <span className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#A51F20] text-[9px] font-bold text-white">
                        {index + 1}
                      </span>

                    </div>

                    {/* =================================================
                        TEXT
                    ================================================== */}

                    <div className="flex-1">

                      <div className="flex items-start justify-between gap-4">

                        <div>

                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A51F20]">
                            {reason.number}
                          </p>

                          <h3 className="mt-1 text-xl font-bold text-[#171717]">
                            {reason.title}
                          </h3>

                        </div>

                        {/* Arrow */}

                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#303030]/15 text-[#454545]/40 transition-all duration-300 group-hover:border-[#A51F20] group-hover:bg-[#A51F20] group-hover:text-white">

                          <ArrowUpRight size={16} />

                        </div>

                      </div>

                      <p className="mt-3 text-sm leading-7 text-[#454545]">
                        {reason.description}
                      </p>

                    </div>

                  </div>

                </div>
              );
            })}

            {/* =================================================
                BOTTOM CTA CARD
            ================================================== */}

            <div className="relative mt-1 overflow-hidden rounded-[26px] bg-[#303030] p-6 shadow-lg sm:p-7">

              {/* Decorative Red Circle */}

              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border-[25px] border-[#A51F20]/25" />

              <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E4A0A1]">
                    Ready when you are
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white">
                    Need professional security?
                  </h3>

                  <p className="mt-2 text-sm text-[#F4F4F4]/60">
                    Let's discuss the right solution for your needs.
                  </p>

                </div>

                <a
                  href="/contact"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#A51F20] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#8F1B1C] hover:shadow-lg hover:shadow-[#A51F20]/20"
                >
                  Get Started
                  <ArrowUpRight size={17} />
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* =================================================
            BOTTOM BRAND STRIP
        ================================================== */}

        <div className="relative z-10 mt-8 overflow-hidden rounded-[24px] border border-[#303030]/10 bg-white shadow-sm">

          <div className="grid sm:grid-cols-3">

            {/* =================================================
                APPROACH
            ================================================== */}

            <div className="flex items-center gap-4 px-6 py-6 sm:border-r sm:border-[#303030]/10 sm:px-8">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#171717]">

                <Users
                  size={20}
                  strokeWidth={1.8}
                  className="text-white"
                />

              </div>

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#454545]/50">
                  Approach
                </p>

                <p className="mt-1 font-bold text-[#171717]">
                  People First
                </p>

              </div>

            </div>

            {/* =================================================
                FOCUS
            ================================================== */}

            <div className="flex items-center gap-4 border-t border-[#303030]/10 px-6 py-6 sm:border-r sm:border-t-0 sm:px-8">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#A51F20]">

                <HeartHandshake
                  size={20}
                  strokeWidth={1.8}
                  className="text-white"
                />

              </div>

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#454545]/50">
                  Focus
                </p>

                <p className="mt-1 font-bold text-[#171717]">
                  Client Needs
                </p>

              </div>

            </div>

            {/* =================================================
                STANDARD
            ================================================== */}

            <div className="flex items-center gap-4 border-t border-[#303030]/10 px-6 py-6 sm:border-t-0 sm:px-8">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#171717]">

                <ShieldCheck
                  size={20}
                  strokeWidth={1.8}
                  className="text-white"
                />

              </div>

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#454545]/50">
                  Standard
                </p>

                <p className="mt-1 font-bold text-[#171717]">
                  Professional
                </p>

              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
