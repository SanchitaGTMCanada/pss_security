
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#171717]">
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* =====================================================
          RED GLOW - LEFT
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#A51F20]/15 blur-[120px]" />

      {/* =====================================================
          RED GLOW - RIGHT
      ====================================================== */}

      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#A51F20]/10 blur-[140px]" />

      {/* =====================================================
          SUBTLE GRAPHITE SHAPE
      ====================================================== */}

      <div className="pointer-events-none absolute right-[20%] top-0 h-72 w-72 rounded-full bg-[#303030]/40 blur-[100px]" />

      <Container>
        <div className="relative grid min-h-[680px] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="relative z-10">

            {/* =================================================
                LABEL
            ================================================== */}

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#303030]/70 px-4 py-2 backdrop-blur-sm">

              <span className="h-2 w-2 rounded-full bg-[#A51F20] shadow-[0_0_12px_rgba(165,31,32,0.8)]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F4F4F4]">
                Professional Security Services
              </span>

            </div>

            {/* =================================================
                HEADING
            ================================================== */}

            <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

              Protecting

              <span className="block text-[#A51F20]">
                What Matters Most.
              </span>

            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <p className="mt-7 max-w-xl text-base leading-8 text-[#F4F4F4]/75 sm:text-lg">
              Reliable security solutions built to protect your people,
              property, and business. Professional protection when you need
              it most.
            </p>

            {/* =================================================
                BUTTONS
            ================================================== */}

            <div className="mt-9 flex flex-wrap gap-4">

              {/* Primary */}

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-lg bg-[#A51F20] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-black/25 transition-all duration-300 hover:bg-[#8F1B1C] hover:shadow-xl hover:shadow-black/30"
              >
                Book a Security Service

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              {/* Secondary */}

              <Link
                href="/services"
                className="group inline-flex items-center gap-3 rounded-lg border border-white/15 bg-[#303030]/70 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-[#A51F20]/60 hover:bg-[#454545]"
              >
                Explore Services

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>

            {/* =================================================
                TRUST INFORMATION
            ================================================== */}

            <div className="mt-10 flex items-center gap-4">

              {/* PSS Circles */}

              <div className="flex -space-x-2">

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#171717] bg-[#454545] text-xs font-bold text-white">
                  P
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#171717] bg-[#303030] text-xs font-bold text-white">
                  S
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#171717] bg-[#A51F20] text-xs font-bold text-white">
                  S
                </div>

              </div>

              <div>

                <p className="text-sm font-semibold text-white">
                  Trusted Security Professionals
                </p>

                <p className="text-xs text-[#F4F4F4]/55">
                  Protection you can depend on
                </p>

              </div>
            </div>

          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================== */}

          <div className="relative z-10">

            <div className="relative mx-auto max-w-xl">

              {/* =================================================
                  IMAGE GLOW
              ================================================== */}

              <div className="absolute -inset-5 rounded-[2rem] bg-[#A51F20]/10 blur-2xl" />

              {/* =================================================
                  IMAGE CONTAINER
              ================================================== */}

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#303030] shadow-2xl">

                <img
                  src="https://www.securityguard.sk/images/service_strazna.png"
                  alt="Professional security guard"
                  className="h-[420px] w-full object-cover object-center sm:h-[500px]"
                />

                {/* =================================================
                    DARK IMAGE OVERLAY
                ================================================== */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/95 via-[#171717]/15 to-transparent" />

                {/* =================================================
                    RED BOTTOM ACCENT
                ================================================== */}

                <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-[#A51F20]" />

                {/* =================================================
                    BOTTOM INFORMATION CARD
                ================================================== */}

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-[#171717]/85 p-5 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6">

                  <div className="flex items-center justify-between gap-4">

                    <div>

                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#F4F4F4]/50">
                        Security Coverage
                      </p>

                      <p className="mt-1 text-lg font-bold text-white sm:text-xl">
                        Professional Protection
                      </p>

                    </div>

                    {/* Check Icon */}

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#A51F20] text-lg font-bold text-white shadow-lg shadow-black/20 sm:h-12 sm:w-12">
                      ✓
                    </div>

                  </div>

                </div>

              </div>

              {/* =================================================
                  FLOATING 24/7 CARD
              ================================================== */}

              <div className="absolute -right-4 top-8 hidden w-48 rounded-2xl border border-white/10 bg-[#303030]/95 p-5 shadow-2xl backdrop-blur-xl sm:block lg:-right-6">

                <div className="mb-3 flex items-center justify-between">

                  <span className="text-xs uppercase tracking-wider text-[#F4F4F4]/55">
                    Available
                  </span>

                  <span className="h-2.5 w-2.5 rounded-full bg-[#A51F20] shadow-[0_0_10px_rgba(165,31,32,0.8)]" />

                </div>

                <p className="text-2xl font-bold text-white">
                  24/7
                </p>

                <p className="mt-1 text-xs text-[#F4F4F4]/55">
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
