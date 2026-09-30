import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative min-h-[680px] overflow-hidden ">

      {/* =====================================================
          BACKGROUND VIDEO
      ====================================================== */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/security-hero.mp4" type="video/mp4" />
      </video>

      {/* =====================================================
          DARK VIDEO OVERLAY
      ====================================================== */}

   

      {/* =====================================================
          LEFT DARK GRADIENT
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#171717]/95 via-[#171717]/75 to-[#171717]/45" />

      {/* =====================================================
          BOTTOM GRADIENT
      ====================================================== */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#171717] to-transparent" />

      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

    

      {/* =====================================================
          RED GLOW - LEFT
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#A51F20]/15 blur-[120px]" />

      {/* =====================================================
          RED GLOW - RIGHT
      ====================================================== */}

      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#A51F20]/10 blur-[140px]" />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <Container>
        <div className="relative z-10 flex min-h-[680px] items-center py-16 sm:py-20">

          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="relative max-w-3xl">

            {/* =================================================
                LABEL
            ================================================== */}

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#171717]/65 px-4 py-2 backdrop-blur-md">

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

            <p className="mt-7 max-w-xl text-base leading-8 text-[#F4F4F4]/80 sm:text-lg">
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
                className="group inline-flex items-center gap-3 rounded-lg border border-white/15 bg-[#171717]/65 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#A51F20]/60 hover:bg-[#303030]/80"
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

        </div>
      </Container>

      {/* =====================================================
          BOTTOM RED ACCENT
      ====================================================== */}

      <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-[#A51F20]" />

    </section>
  );
}