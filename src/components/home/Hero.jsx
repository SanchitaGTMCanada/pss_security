
"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="hero">
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/security-hero.mp4" type="video/mp4" />
      </video>

      {/* CINEMATIC GRADIENT */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#05051A]/70 via-[#05051A]/60 to-[#05051A]/40" />

      {/* RED GLOW */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#B91C1C]/20 blur-[110px]" />

      {/* HERO CONTENT */}
      <Container>
        <div className="relative z-10 flex min-h-[560px] items-center py-2 sm:min-h-[600px] sm:py-4 lg:min-h-[540px]">
          <div className="max-w-4xl">

            {/* LABEL */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#B91C1C] shadow-[0_0_12px_rgba(185,28,28,0.9)]" />

              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-300 sm:text-sm">
                Professional Security Services
              </span>
            </div>

            {/* HEADING */}
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Your safety
              <span className="block text-[#B91C1C]">
                is our priority
              </span>
            </h1>

            

            {/* BUTTON */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/services"
                onClick={(e) => {
                  if (window.location.pathname === "/") {
                    e.preventDefault();

                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="group inline-flex items-center gap-2 rounded-lg bg-[#B91C1C] px-6 py-2 text-sm font-bold text-white shadow-lg shadow-red-950/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8F1111] sm:px-7 sm:py-2 sm:text-base"
              >
                Explore Services

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* TRUST INFORMATION */}
            <div className="mt-8 flex items-center gap-4">
              {/* PSS CIRCLES */}
              <div className="flex -space-x-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#05051A] bg-slate-700 text-sm font-bold text-white">
                  P
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#05051A] bg-slate-600 text-sm font-bold text-white">
                  S
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#05051A] bg-[#B91C1C] text-sm font-bold text-white">
                  S
                </div>
              </div>

              <div>
                <p className="text-base font-bold text-white sm:text-lg">
                  Trusted Security Professionals
                </p>

                <p className="mt-0.5 text-sm text-slate-400 sm:text-base">
                  Protection you can depend on
                </p>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
