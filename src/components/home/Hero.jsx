import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* =====================================================
          BACKGROUND VIDEO
      ====================================================== */}
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

      {/* =====================================================
          CINEMATIC GRADIENT
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#05051A]/70 via-[#05051A]/60 to-[#05051A]/40" />

      {/* =====================================================
          RED GLOW
      ====================================================== */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#B91C1C]/20 blur-[120px]" />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}
      <Container>
        <div className="relative z-10 flex min-h-[680px] items-center py-16 sm:py-20 lg:min-h-[720px]">
          <div className="max-w-5xl">

            {/* =================================================
                LABEL
            ================================================== */}
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-5 py-3 backdrop-blur-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[#B91C1C] shadow-[0_0_14px_rgba(185,28,28,0.9)]" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300 sm:text-base">
                Professional Security Services
              </span>
            </div>

            {/* =================================================
                HEADING
            ================================================== */}
            <h1 className="max-w-5xl text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Your safety
              <span className="block text-[#B91C1C]">
                is our priority
              </span>
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================== */}
            <p className="mt-8 max-w-3xl text-xl font-medium leading-8 text-slate-300 sm:text-2xl sm:leading-9">
              Professional Reliable Local
            </p>

            {/* =================================================
                BUTTONS
            ================================================== */}
            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/#contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#B91C1C] px-8 py-5 text-base font-bold text-white shadow-lg shadow-red-950/30 transition-all duration-300 hover:-translate-y-1 hover:bg-[#8F1111] sm:px-9 sm:py-5 sm:text-lg"
              >
                Get a Free Consultation Today

                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center gap-3 rounded-xl border border-white/15 bg-black/20 px-8 py-5 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08] sm:px-9 sm:py-5 sm:text-lg"
              >
                Explore Services

                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>

            {/* =================================================
                TRUST INFORMATION
            ================================================== */}
            <div className="mt-12 flex items-center gap-5">

              {/* PSS Circles */}
              <div className="flex -space-x-2.5">

                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#05051A] bg-slate-700 text-base font-bold text-white">
                  P
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#05051A] bg-slate-600 text-base font-bold text-white">
                  S
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#05051A] bg-[#B91C1C] text-base font-bold text-white">
                  S
                </div>

              </div>

              <div>
                <p className="text-lg font-bold text-white sm:text-xl">
                  Trusted Security Professionals
                </p>

                <p className="mt-1 text-base text-slate-400 sm:text-lg">
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