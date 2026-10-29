
import { Eye, Target, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";

const cards = [
  {
    number: "01",
    label: "OUR MISSION",
    title: "Protect. Support. Serve.",
    description:
      "To protect people, property, and peace of mind with high-quality, responsive, and community-focused security services across the Northwest Territories.",
    icon: Target,
  },
  {
    number: "02",
    label: "OUR VISION",
    title: "A safer, better experience.",
    description:
      "To be the most trusted name in Northern security, known for professionalism, integrity, and innovation.",
    icon: Eye,
  },
];

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-[#05051A] py-7 sm:py-8 lg:py-9">
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-[#B91C1C]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#B91C1C]/5 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.015] blur-[100px]" />

      <Container>
        {/* Section Header */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B91C1C]" />

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FCA5A5]">
              Our Purpose
            </p>

            <span className="h-px w-8 bg-[#B91C1C]" />
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            What we stand for.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Our mission and vision guide how we protect people, and your trust
            remains our greatest asset.
          </p>
        </div>

        {/* Main Content */}
        <div className="relative z-10 mt-8 flex w-full flex-col items-center lg:mt-10 lg:flex-row lg:items-center lg:justify-center">
          {/* Mission Card */}
          <div className="relative z-20 w-full max-w-xl lg:-mr-14 lg:w-[340px] lg:shrink-0">
            <MissionVisionCard card={cards[0]} />
          </div>

          {/* Center Image */}
          <div className="relative z-10 my-4 h-[300px] w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl sm:h-[360px] lg:my-0 lg:h-[410px] lg:w-[420px] lg:shrink-0">
            <img
              src="/homepage/standfor.png"
              alt="Professional security guard"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#05051A]/35" />

            {/* Bottom Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05051A]/90 via-[#05051A]/10 to-transparent" />

            {/* Red Tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#B91C1C]/25 via-transparent to-transparent" />

            {/* Inner Border */}
            <div className="absolute inset-3 rounded-xl border border-white/20 sm:inset-4" />

            {/* Center Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-[#05051A]/70 shadow-xl backdrop-blur-md sm:h-20 sm:w-20">
                  <span className="text-xl font-black text-white sm:text-2xl">
                    PSS
                  </span>
                </div>

                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 sm:text-xs">
                  Preventative Security Services
                </p>
              </div>
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-5 left-5 right-5 text-center sm:bottom-6">
              <p className="text-xs font-medium text-white/70 sm:text-sm">
                Professional security. Professional service.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative z-20 w-full max-w-xl lg:-ml-14 lg:w-[340px] lg:shrink-0">
            <MissionVisionCard card={cards[1]} />
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="relative z-10 mx-auto mt-8 max-w-6xl border-t border-white/10 pt-5 lg:mt-10">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Professional people. Dependable service. Safer environments.
            </p>

            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#B91C1C]" />

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                PSS
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* Mission / Vision Card */
function MissionVisionCard({ card }) {
  const Icon = card.icon;

  return (
    <div className="group relative min-h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#B91C1C] via-[#351322] to-[#101027] p-5 shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-[#EF4444]/50 sm:min-h-[320px] sm:p-6 lg:min-h-[340px]">
      {/* Ombré Glow */}
      <div className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-[#EF4444]/20 blur-[70px] transition-all duration-500 group-hover:bg-[#EF4444]/30" />

      <div className="pointer-events-none absolute -bottom-20 -right-16 h-52 w-52 rounded-full bg-[#05051A]/70 blur-[70px]" />

      {/* Glass Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-[#05051A]/30" />

      {/* Decorative Number */}
      <span className="pointer-events-none absolute -right-2 -top-5 text-[110px] font-black leading-none text-white/[0.06] sm:text-[125px]">
        {card.number}
      </span>

      {/* Card Content */}
      <div className="relative z-10">
        {/* Top Row */}
        <div className="flex items-start justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
            <Icon
              size={22}
              strokeWidth={1.6}
              className="text-white"
            />
          </div>

          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/10 text-white/60 backdrop-blur-sm transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/15 group-hover:text-white">
            <ArrowUpRight size={15} />
          </div>
        </div>

        {/* Label */}
        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 sm:text-xs">
          {card.label}
        </p>

        {/* Title */}
        <h3 className="mt-2 max-w-sm text-xl font-bold leading-tight text-white sm:text-2xl">
          {card.title}
        </h3>

        {/* Description */}
        <p className="mt-3 max-w-lg text-sm leading-6 text-white/70">
          {card.description}
        </p>

        {/* Bottom Information */}
        <div className="mt-5 flex items-center gap-2.5 border-t border-white/15 pt-4">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />

          <span className="text-[10px] font-semibold text-white/60 sm:text-xs">
            Preventative Security Services
          </span>
        </div>
      </div>

      {/* Hover Line */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-white transition-all duration-500 group-hover:w-full" />
    </div>
  );
}
