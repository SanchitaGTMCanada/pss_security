import {
  ShieldCheck,
  Users,
  MapPinned,
  Globe2,
  UserCheck,
  Handshake,
  Building2,
  ArrowUpRight,
  Check,
} from "lucide-react";

import Container from "@/components/ui/Container";

const reasons = [
  {
    number: "01",
    title: "Northern Experience",
    description: "Skilled Northern safety personnel",
    icon: MapPinned,
  },
  {
    number: "02",
    title: "Customized Solutions",
    description: "Tailored security solutions for every client property",
    icon: Users,
  },
  {
    number: "03",
    title: "24/7 Availability",
    description: "Round-the-clock security and front-desk services",
    icon: Globe2,
  },
  {
    number: "04",
    title: "Certified Professionals",
    description:
      "Trained, licensed, and uniformed security professionals",
    icon: UserCheck,
  },
  {
    number: "05",
    title: "Integrated Approach",
    description: "Scalable solutions to adapt to evolving needs",
    icon: Handshake,
  },
  {
    number: "06",
    title: "Corporate Solutions",
    description: "Expertise in managing commercial facilities",
    icon: Building2,
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[#F5F6F8] py-10 sm:py-10 lg:py-10">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#B91C1C]/5 blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#05051A]/5 blur-[120px]" />

      <Container>
        {/* =========================================
            SECTION HEADER
        ========================================== */}
        <div className="relative z-10 mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-[#B91C1C]" />

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#B91C1C]">
                Why Choose PSS
              </p>
            </div>

            <h2 className="max-w-xl text-5xl font-black leading-[1.02] tracking-tight text-[#05051A] sm:text-6xl lg:text-7xl">
              Security built
              <span className="block text-slate-400">
                around people.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-slate-600 lg:ml-auto">
            We combine professional people, dependable service, and a
            client-focused approach to create safer and more welcoming
            environments.
          </p>
        </div>

        {/* =========================================
            MAIN CONTENT
        ========================================== */}
        <div className="relative z-10 grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">

          {/* =========================================
              IMAGE PANEL
          ========================================== */}
          <div className="group relative min-h-[520px] overflow-hidden rounded-[32px] bg-[#05051A] shadow-2xl">
            {/* Image */}
            <img
              src="/homepage/whychoose.png"
              alt="Professional security and protection services"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05051A] via-[#05051A]/50 to-[#05051A]/10" />

            {/* Red Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#B91C1C]/30 via-transparent to-transparent" />

            {/* Decorative Border */}
            <div className="absolute inset-5 rounded-[25px] border border-white/20" />

            {/* Top Badge */}
            <div className="absolute left-8 top-8 flex items-center gap-3 rounded-full border border-white/20 bg-black/30 px-4 py-2.5 backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full bg-[#B91C1C]" />

              <span className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
                Professional Security
              </span>
            </div>

            {/* Image Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B91C1C] shadow-xl shadow-black/30">
                <ShieldCheck
                  size={32}
                  strokeWidth={1.6}
                  className="text-white"
                />
              </div>

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#FCA5A5]">
                Our Difference
              </p>

              <h3 className="mt-3 max-w-md text-3xl font-bold leading-tight text-white sm:text-4xl">
                Protection with a professional presence.
              </h3>

              <p className="mt-4 max-w-md text-base leading-7 text-slate-300">
                Our approach combines professionalism, awareness,
                communication, and dependable service.
              </p>
            </div>

            {/* Floating Check */}
            <div className="absolute bottom-8 right-8 hidden h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md sm:flex">
              <Check
                size={28}
                strokeWidth={2.5}
                className="text-white"
              />
            </div>
          </div>

          {/* =========================================
              RIGHT CONTENT
          ========================================== */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.number}
                  className="group relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
                >
                  {/* Red Bottom Line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#B91C1C] transition-all duration-500 group-hover:w-full" />

                  <div className="flex gap-5">
                    {/* Icon */}
                    <div className="relative shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#05051A] transition-all duration-300 group-hover:bg-[#B91C1C]">
                        <Icon
                          size={25}
                          strokeWidth={1.7}
                          className="text-white"
                        />
                      </div>

                      {/* Number */}
                      <span className="absolute -bottom-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#B91C1C] text-[9px] font-bold text-white">
                        {index + 1}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B91C1C]">
                            {reason.number}
                          </p>

                          <h3 className="mt-1 text-xl font-bold leading-tight text-[#05051A]">
                            {reason.title}
                          </h3>
                        </div>

                        {/* Arrow */}
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-300 transition-all duration-300 group-hover:border-[#B91C1C] group-hover:bg-[#B91C1C] group-hover:text-white">
                          <ArrowUpRight size={16} />
                        </div>
                      </div>

                      <p className="mt-3 text-base leading-7 text-slate-600">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Bottom CTA Card */}
            <div className="relative mt-1 overflow-hidden rounded-[26px] bg-[#05051A] p-6 sm:col-span-2 sm:p-7">
              {/* Decorative Red Circle */}
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border-[25px] border-[#B91C1C]/20" />

              <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B91C1C]">
                    Ready when you are
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-white">
                    Need professional security?
                  </h3>

                  <p className="mt-2 text-base text-slate-400">
                    Let's discuss the right solution for your needs.
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#B91C1C] px-6 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[#991B1B] hover:shadow-lg"
                >
                  Get Started
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            BOTTOM BRAND STRIP
        ========================================== */}
        <div className="relative z-10 mt-8 overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm">
          <div className="grid sm:grid-cols-3">

            {/* Approach */}
            <div className="flex items-center gap-4 px-6 py-6 sm:border-r sm:border-slate-200 sm:px-8">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#05051A]">
                <Users
                  size={20}
                  strokeWidth={1.8}
                  className="text-white"
                />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Approach
                </p>

                <p className="mt-1 text-base font-bold text-[#05051A]">
                  People First
                </p>
              </div>
            </div>

            {/* Focus */}
            <div className="flex items-center gap-4 border-t border-slate-200 px-6 py-6 sm:border-r sm:border-t-0 sm:px-8">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B91C1C]">
                <Handshake
                  size={20}
                  strokeWidth={1.8}
                  className="text-white"
                />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Focus
                </p>

                <p className="mt-1 text-base font-bold text-[#05051A]">
                  Client Needs
                </p>
              </div>
            </div>

            {/* Standard */}
            <div className="flex items-center gap-4 border-t border-slate-200 px-6 py-6 sm:border-t-0 sm:px-8">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#05051A]">
                <ShieldCheck
                  size={20}
                  strokeWidth={1.8}
                  className="text-white"
                />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  Standard
                </p>

                <p className="mt-1 text-base font-bold text-[#05051A]">
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