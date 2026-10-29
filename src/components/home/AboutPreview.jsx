
"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-[#05051A] py-7 sm:py-8 lg:py-9">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#B91C1C]/10 blur-[120px]" />

      <Container>
        {/* Top Introduction */}
        <div className="relative z-10 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B91C1C]">
              About PSS
            </p>

            <h2 className="mt-2 max-w-4xl text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">
              Guarding What
              <span className="block text-slate-500">
                Matters Most.
              </span>
            </h2>
          </div>
        </div>

        {/* Main Visual */}
        <div className="relative mt-7 lg:mt-9">
          {/* Decorative Corner */}
          <div className="absolute -left-3 -top-3 z-20 hidden h-20 w-20 border-l-2 border-t-2 border-[#B91C1C] lg:block" />

          {/* Image */}
          <div className="relative h-[300px] overflow-hidden rounded-2xl border border-white/10 sm:h-[360px] lg:h-[420px]">
            <img
              src="/homepage/about-pss.png"
              alt="Professional security and business services"
              loading="lazy"
              className="h-full w-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#05051A]/90 via-[#05051A]/40 to-[#05051A]/10" />

            {/* Image Content */}
            <div className="absolute bottom-5 left-5 max-w-lg sm:bottom-7 sm:left-7 lg:bottom-9 lg:left-9">
              <div className="mb-3 h-1 w-9 bg-[#B91C1C]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 sm:text-xs">
                Preventative Security Services
              </p>

              <p className="mt-2 text-xl font-semibold leading-snug text-white sm:text-2xl lg:text-3xl">
                From commercial properties and special events to residential
                safety and advanced system integrations.
              </p>
            </div>
          </div>

          {/* Floating Information Panel */}
          <div className="relative z-10 mx-3 -mt-10 rounded-2xl border border-white/10 bg-[#0B0B24] p-5 shadow-2xl sm:mx-7 sm:p-6 lg:absolute lg:bottom-7 lg:right-7 lg:mx-0 lg:mt-0 lg:w-[380px] lg:p-6">
            {/* Panel Header */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B91C1C]">
                  Who We Are
                </p>

                <h3 className="mt-2 text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Built around people.
                </h3>
              </div>

              <span className="text-4xl font-bold leading-none text-white/[0.04]">
                PSS
              </span>
            </div>

            {/* Description */}
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Preventative Security Services Ltd. is a locally owned and
              operated security provider based in Yellowknife, NWT. With deep
              roots in the North, we understand our community's unique security
              challenges.
            </p>

            {/* Services */}
            <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
              <div>
                <p className="text-sm font-bold text-white">
                  Security
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Professional protection
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Reception
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Professional service
                </p>
              </div>
            </div>

          
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="relative z-10 mt-8 border-t border-white/10 pt-5 lg:mt-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-6 text-slate-500">
              Our experienced team delivers peace of mind through proactive,
              dependable, and customized security solutions.
            </p>

            <span className="text-4xl font-bold text-white/[0.04] sm:text-5xl">
              01
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
