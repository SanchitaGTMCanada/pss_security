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
          DARK VIDEO OVERLAY
      ====================================================== */}
      {/* <div className="pointer-events-none absolute inset-0 bg-[#05051A]/65" /> */}

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
        <div className="relative z-10 flex min-h-[680px] items-center py-16 sm:py-20">
          <div className="max-w-4xl">

            {/* Label */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#B91C1C] shadow-[0_0_12px_rgba(185,28,28,0.9)]" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
                Professional Security Services
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Your safety
              <span className="block text-[#B91C1C]">
                is our priority 
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Professional Reliable Local
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-lg bg-[#B91C1C] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-red-950/30 transition-all duration-300 hover:bg-[#8F1111]"
              >
                Get a Free Consultation Today

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="#services"
                className="group inline-flex items-center gap-3 rounded-lg border border-white/15 bg-black/20 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
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
    <p className="text-base font-semibold text-white">
      Trusted Security Professionals
    </p>

    <p className="text-sm text-slate-400">
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