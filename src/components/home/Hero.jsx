import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#05051A]">
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Red Glow */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#B91C1C]/20 blur-[120px]" />

      {/* Right Red Glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#B91C1C]/10 blur-[140px]" />

      <Container>
        <div className="relative grid min-h-[680px] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* =========================
              LEFT CONTENT
          ========================= */}
          <div className="relative z-10">
            {/* Label */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#B91C1C] shadow-[0_0_12px_rgba(185,28,28,0.9)]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                Professional Security Services
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Protecting
              <span className="block text-[#B91C1C]">
                What Matters Most.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Reliable security solutions built to protect your people,
              property, and business. Professional protection when you need
              it most.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-lg bg-[#B91C1C] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-red-950/30 transition-all duration-300 hover:bg-[#8F1111]"
              >
                Book a Security Service

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center gap-3 rounded-lg border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
              >
                Explore Services

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* Trust Information */}
            <div className="mt-10 flex items-center gap-4">
              {/* PSS Circles */}
              <div className="flex -space-x-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#05051A] bg-slate-700 text-xs font-bold text-white">
                  P
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#05051A] bg-slate-600 text-xs font-bold text-white">
                  S
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#05051A] bg-[#B91C1C] text-xs font-bold text-white">
                  S
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  Trusted Security Professionals
                </p>

                <p className="text-xs text-slate-400">
                  Protection you can depend on
                </p>
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT IMAGE
          ========================= */}
          <div className="relative z-10">
            <div className="relative mx-auto max-w-xl">
              {/* Image Glow */}
              <div className="absolute -inset-5 rounded-[2rem] bg-[#B91C1C]/10 blur-2xl" />

              {/* Image Container */}
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
<img
  src="https://www.securityguard.sk/images/service_strazna.png"
  alt="Professional security guard"
  className="h-[420px] w-full object-cover object-center sm:h-[500px]"
/>
                {/* Dark Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05051A]/90 via-[#05051A]/10 to-transparent" />

                {/* Red Bottom Accent */}
                <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-[#B91C1C]" />

                {/* Bottom Information Card */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-[#05051A]/75 p-5 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                        Security Coverage
                      </p>

                      <p className="mt-1 text-lg font-bold text-white sm:text-xl">
                        Professional Protection
                      </p>
                    </div>

                    {/* Check Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B91C1C] text-lg font-bold text-white sm:h-12 sm:w-12">
                      ✓
                    </div>
                  </div>
                </div>
              </div>

              {/* =========================
                  FLOATING 24/7 CARD
              ========================= */}
              <div className="absolute -right-4 top-8 hidden w-48 rounded-2xl border border-white/10 bg-[#0B0B24]/90 p-5 shadow-2xl backdrop-blur-xl sm:block lg:-right-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-slate-400">
                    Available
                  </span>

                  <span className="h-2.5 w-2.5 rounded-full bg-[#B91C1C] shadow-[0_0_10px_rgba(185,28,28,0.9)]" />
                </div>

                <p className="text-2xl font-bold text-white">
                  24/7
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Security Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}