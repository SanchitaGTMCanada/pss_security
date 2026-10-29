
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
    description: "Trained, licensed, and uniformed security professionals",
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
    <section className="relative overflow-hidden bg-[#F5F6F8] py-7 sm:py-8 lg:py-9">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-16 h-72 w-72 rounded-full bg-[#B91C1C]/5 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#05051A]/5 blur-[110px]" />

      <Container>
        {/* Section Header */}
        <div className="relative z-10 mb-8 grid gap-4 lg:mb-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-px w-7 bg-[#B91C1C]" />

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B91C1C]">
                Why Choose PSS
              </p>
            </div>

            <h2 className="max-w-xl text-3xl font-black leading-[1.05] tracking-tight text-[#05051A] sm:text-4xl lg:text-5xl">
              Security built
              <span className="block text-slate-400">
                around people.
              </span>
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-6 text-slate-600 lg:ml-auto sm:text-base">
            We combine professional people, dependable service, and a
            client-focused approach to create safer and more welcoming
            environments.
          </p>
        </div>

        {/* Main Content */}
        <div className="relative z-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
          {/* Image Panel */}
          <div className="group relative min-h-[380px] overflow-hidden rounded-2xl bg-[#05051A] shadow-xl sm:min-h-[420px] lg:min-h-0">
            {/* Image */}
            <img
              src="/homepage/whychoose.png"
              alt="Professional security and protection services"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05051A] via-[#05051A]/50 to-[#05051A]/10" />

            {/* Red Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#B91C1C]/30 via-transparent to-transparent" />

            {/* Decorative Border */}
            <div className="absolute inset-3 rounded-xl border border-white/20 sm:inset-4" />

            {/* Top Badge */}
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-2 backdrop-blur-md sm:left-6 sm:top-6">
              <span className="h-2 w-2 rounded-full bg-[#B91C1C]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white sm:text-xs">
                Professional Security
              </span>
            </div>

            {/* Image Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#B91C1C] shadow-lg shadow-black/30">
                <ShieldCheck
                  size={25}
                  strokeWidth={1.6}
                  className="text-white"
                />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FCA5A5]">
                Our Difference
              </p>

              <h3 className="mt-2 max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl">
                Protection with a professional presence.
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-300">
                Our approach combines professionalism, awareness,
                communication, and dependable service.
              </p>
            </div>

            {/* Floating Check */}
            <div className="absolute bottom-6 right-6 hidden h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-md sm:flex">
              <Check
                size={23}
                strokeWidth={2.5}
                className="text-white"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.number}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5"
                >
                  {/* Red Bottom Line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#B91C1C] transition-all duration-500 group-hover:w-full" />

                  <div className="flex items-start gap-3">
                    {/* Icon */}
                    <div className="relative shrink-0">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#05051A] transition-all duration-300 group-hover:bg-[#B91C1C]">
                        <Icon
                          size={21}
                          strokeWidth={1.7}
                          className="text-white"
                        />
                      </div>

                      {/* Number Badge */}
                      <span className="absolute -bottom-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#B91C1C] text-[9px] font-bold text-white">
                        {index + 1}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#B91C1C]">
                            {reason.number}
                          </p>

                          <h3 className="mt-1 text-base font-bold leading-snug text-[#05051A] sm:text-lg">
                            {reason.title}
                          </h3>
                        </div>

                        {/* Arrow */}
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-300 transition-all duration-300 group-hover:border-[#B91C1C] group-hover:bg-[#B91C1C] group-hover:text-white">
                          <ArrowUpRight size={14} />
                        </div>
                      </div>

                      <p className="mt-2 text-sm leading-5 text-slate-600">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Bottom CTA Card */}
            <div className="relative mt-0 overflow-hidden rounded-2xl bg-[#05051A] p-5 sm:col-span-2 sm:p-6">
              {/* Decorative Red Circle */}
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border-[20px] border-[#B91C1C]/20" />

              <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#B91C1C]">
                    Ready when you are
                  </p>

                  <h3 className="mt-2 text-xl font-bold leading-tight text-white sm:text-2xl">
                    Need professional security?
                  </h3>

                  <p className="mt-1.5 text-sm text-slate-400">
                    Let&apos;s discuss the right solution for your needs.
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-[#B91C1C] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#991B1B] hover:shadow-lg sm:self-center"
                >
                  Get Started
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Brand Strip */}
        <div className="relative z-10 mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid sm:grid-cols-3">
            {/* Approach */}
            <div className="flex items-center gap-3 px-4 py-4 sm:border-r sm:border-slate-200 sm:px-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#05051A]">
                <Users
                  size={19}
                  strokeWidth={1.8}
                  className="text-white"
                />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                  Approach
                </p>

                <p className="mt-1 text-sm font-bold text-[#05051A]">
                  People First
                </p>
              </div>
            </div>

            {/* Focus */}
            <div className="flex items-center gap-3 border-t border-slate-200 px-4 py-4 sm:border-r sm:border-t-0 sm:px-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#B91C1C]">
                <Handshake
                  size={19}
                  strokeWidth={1.8}
                  className="text-white"
                />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                  Focus
                </p>

                <p className="mt-1 text-sm font-bold text-[#05051A]">
                  Client Needs
                </p>
              </div>
            </div>

            {/* Standard */}
            <div className="flex items-center gap-3 border-t border-slate-200 px-4 py-4 sm:border-t-0 sm:px-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#05051A]">
                <ShieldCheck
                  size={19}
                  strokeWidth={1.8}
                  className="text-white"
                />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                  Standard
                </p>

                <p className="mt-1 text-sm font-bold text-[#05051A]">
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
