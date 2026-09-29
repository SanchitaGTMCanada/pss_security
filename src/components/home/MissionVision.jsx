
import { Eye, Target, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";

const cards = [
  {
    number: "01",
    label: "OUR MISSION",
    title: "Protect. Support. Serve.",
    description:
      "To provide dependable security and customer service solutions through professional people, clear communication, and a commitment to every client we serve.",
    icon: Target,
  },
  {
    number: "02",
    label: "OUR VISION",
    title: "A safer, better experience.",
    description:
      "To create environments where people feel safe, welcomed, respected, and confident through professional security and customer service.",
    icon: Eye,
  },
];

export default function MissionVision() {
  return (
    <section className="relative overflow-hidden bg-[#171717] py-20 sm:py-24 lg:py-32">

      {/* =====================================================
          BACKGROUND EFFECTS
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#A51F20]/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#A51F20]/6 blur-[140px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.015] blur-[120px]" />

      {/* Subtle grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <Container>

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <div className="mb-5 flex items-center justify-center gap-3">

            <span className="h-px w-10 bg-[#A51F20]" />

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E4A0A1]">
              Our Purpose
            </p>

            <span className="h-px w-10 bg-[#A51F20]" />

          </div>

          <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            What we stand for.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#F4F4F4]/55">
            Our mission and vision guide how we protect people, support
            businesses, and deliver professional service.
          </p>

        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div className="relative z-10 mt-16 flex w-full flex-col items-center lg:flex-row lg:items-center lg:justify-center">

          {/* =================================================
              LEFT — MISSION CARD
          ================================================== */}

          <div className="relative z-20 w-full max-w-xl lg:-mr-20 lg:w-[430px]">
            <MissionVisionCard card={cards[0]} />
          </div>

          {/* =================================================
              CENTER — IMAGE
          ================================================== */}

          <div className="relative z-10 my-6 h-[430px] w-full max-w-2xl overflow-hidden rounded-[36px] border border-white/10 bg-[#303030] shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:h-[500px] lg:my-0 lg:h-[570px] lg:w-[560px] lg:shrink-0">

            <img
              src="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1600&q=90"
              alt="Professional security guard"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-[#171717]/40" />

            {/* Bottom Gradient */}

            <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/95 via-[#171717]/15 to-transparent" />

            {/* Red Tint */}

            <div className="absolute inset-0 bg-gradient-to-br from-[#A51F20]/20 via-transparent to-transparent" />

            {/* Inner Border */}

            <div className="absolute inset-5 rounded-[30px] border border-white/20 sm:inset-7" />

            {/* =================================================
                CENTER BRAND MARK
            ================================================== */}

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/25 bg-[#171717]/75 shadow-2xl backdrop-blur-md transition-transform duration-500 hover:scale-105 sm:h-24 sm:w-24">

                  <span className="text-2xl font-black text-white sm:text-3xl">
                    PSS
                  </span>

                </div>

                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/75">
                  Preventative Security Services
                </p>

              </div>

            </div>

            {/* =================================================
                BOTTOM CAPTION
            ================================================== */}

            <div className="absolute bottom-8 left-8 right-8 text-center sm:bottom-10">

              <p className="text-sm font-medium text-white/70">
                Professional security. Professional service.
              </p>

            </div>

          </div>

          {/* =================================================
              RIGHT — VISION CARD
          ================================================== */}

          <div className="relative z-20 w-full max-w-xl lg:-ml-20 lg:w-[430px]">
            <MissionVisionCard card={cards[1]} />
          </div>

        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <div className="relative z-10 mx-auto mt-16 max-w-6xl border-t border-white/10 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

            <p className="max-w-2xl text-sm leading-7 text-[#F4F4F4]/45">
              Professional people. Dependable service. Safer environments.
            </p>

            <div className="flex items-center gap-3">

              <span className="h-2 w-2 rounded-full bg-[#A51F20] shadow-[0_0_10px_rgba(165,31,32,0.6)]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F4F4F4]/45">
                PSS
              </span>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}


/* ============================================================
   MISSION / VISION CARD
============================================================ */

function MissionVisionCard({ card }) {

  const Icon = card.icon;

  return (
    <div className="group relative min-h-[390px] overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-[#A51F20] via-[#303030] to-[#171717] p-7 shadow-[0_25px_60px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2 hover:border-[#A51F20]/60 sm:p-9">

      {/* =====================================================
          OMBRÉ GLOW
      ====================================================== */}

      <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#A51F20]/25 blur-[80px] transition-all duration-500 group-hover:bg-[#A51F20]/40" />

      <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#171717]/80 blur-[80px]" />

      {/* =====================================================
          GLASS OVERLAY
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-[#171717]/40" />

      {/* =====================================================
          DECORATIVE NUMBER
      ====================================================== */}

      <span className="pointer-events-none absolute -right-3 -top-8 text-[150px] font-black leading-none text-white/[0.06]">
        {card.number}
      </span>

      {/* =====================================================
          CARD CONTENT
      ====================================================== */}

      <div className="relative z-10">

        {/* Top Row */}

        <div className="flex items-start justify-between">

          {/* Icon */}

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:border-white/30 group-hover:bg-[#A51F20]">

            <Icon
              size={27}
              strokeWidth={1.6}
              className="text-white"
            />

          </div>

          {/* Arrow */}

          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/10 text-white/60 backdrop-blur-sm transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/15 group-hover:text-white">

            <ArrowUpRight size={17} />

          </div>

        </div>

        {/* Label */}

        <p className="mt-9 text-xs font-bold uppercase tracking-[0.25em] text-white/70">
          {card.label}
        </p>

        {/* Title */}

        <h3 className="mt-3 max-w-sm text-2xl font-bold leading-tight text-white sm:text-3xl">
          {card.title}
        </h3>

        {/* Description */}

        <p className="mt-5 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
          {card.description}
        </p>

        {/* Bottom Information */}

        <div className="mt-8 flex items-center gap-3 border-t border-white/15 pt-5">

          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#A51F20]" />

          <span className="text-xs font-semibold text-white/60">
            Preventative Security Services
          </span>

        </div>

      </div>

      {/* =====================================================
          HOVER LINE
      ====================================================== */}

      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#A51F20] transition-all duration-500 group-hover:w-full" />

    </div>
  );
}
