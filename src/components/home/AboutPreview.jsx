
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-[#171717] py-20 sm:py-24 lg:py-32">
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#A51F20]/10 blur-[150px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#303030]/40 blur-[130px]" />

      {/* Subtle Grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container>
        {/* =================================================
            TOP INTRODUCTION
        ================================================== */}

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#A51F20]">
              About PSS
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">

              More than security.

              <span className="block text-[#F4F4F4]/45">
                A professional presence you can trust.
              </span>

            </h2>

          </div>

          {/* Discover PSS */}

          <Link
            href="/about"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-white"
          >
            Discover PSS

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:border-[#A51F20] group-hover:bg-[#A51F20]"
            >
              →
            </span>

          </Link>

        </div>

        {/* =================================================
            MAIN VISUAL
        ================================================== */}

        <div className="relative mt-14 lg:mt-20">

          {/* Decorative Corner */}

          <div className="absolute -left-4 -top-4 z-20 hidden h-28 w-28 border-l-2 border-t-2 border-[#A51F20] lg:block" />

          {/* =================================================
              IMAGE
          ================================================== */}

          <div className="relative h-[420px] overflow-hidden rounded-[32px] border border-white/10 bg-[#303030] sm:h-[520px] lg:h-[600px]">

            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=85"
              alt="Professional security and business services"
              className="h-full w-full object-cover"
            />

            {/* Dark Overlay */}

            <div className="absolute inset-0 bg-gradient-to-r from-[#171717]/95 via-[#171717]/45 to-[#171717]/10" />

            {/* Subtle Red Overlay */}

            <div className="absolute inset-0 bg-gradient-to-br from-[#A51F20]/10 via-transparent to-transparent" />

            {/* =================================================
                IMAGE CONTENT
            ================================================== */}

            <div className="absolute bottom-8 left-7 max-w-xl sm:bottom-12 sm:left-12">

              <div className="mb-4 h-1 w-12 bg-[#A51F20]" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                Preventative Security Services
              </p>

              <p className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                Creating safer environments through people,
                professionalism, and service.
              </p>

            </div>

          </div>

          {/* =================================================
              FLOATING INFORMATION PANEL
          ================================================== */}

          <div className="relative z-10 mx-5 -mt-16 rounded-[28px] border border-white/10 bg-[#303030] p-7 shadow-[0_25px_70px_rgba(0,0,0,0.35)] sm:mx-10 sm:p-9 lg:absolute lg:bottom-10 lg:right-10 lg:mt-0 lg:w-[470px]">

            {/* Panel Header */}

            <div className="flex items-start justify-between gap-6">

              <div>

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A51F20]">
                  Who We Are
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Built around people.
                </h3>

              </div>

              <span className="text-5xl font-bold leading-none text-white/[0.05]">
                PSS
              </span>

            </div>

            {/* Description */}

            <p className="mt-5 text-sm leading-7 text-[#F4F4F4]/65 sm:text-base">
              Preventative Security Services provides professional security
              and customer service solutions with a focus on reliability,
              professionalism, and the needs of every client.
            </p>

            {/* =================================================
                SERVICES
            ================================================== */}

            <div className="mt-7 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">

              {/* Security */}

              <div className="rounded-xl border border-white/5 bg-[#171717]/40 p-4">

                <p className="text-sm font-bold text-white">
                  Security
                </p>

                <p className="mt-1 text-xs text-[#F4F4F4]/45">
                  Professional protection
                </p>

              </div>

              {/* Reception */}

              <div className="rounded-xl border border-white/5 bg-[#171717]/40 p-4">

                <p className="text-sm font-bold text-white">
                  Reception
                </p>

                <p className="mt-1 text-xs text-[#F4F4F4]/45">
                  Professional service
                </p>

              </div>

            </div>

            {/* =================================================
                LINK
            ================================================== */}

            <Link
              href="/about"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#A51F20] transition-colors hover:text-[#E4A0A1]"
            >
              Learn more about us

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </Link>

          </div>

        </div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================== */}

        <div className="relative z-10 mt-16 border-t border-white/10 pt-8 lg:mt-20">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <p className="max-w-2xl text-sm leading-7 text-[#F4F4F4]/50 sm:text-base">
              Our approach combines dependable professionals with a commitment
              to creating positive experiences for clients, customers, and
              visitors.
            </p>

            <span className="text-5xl font-bold text-white/[0.04] sm:text-6xl">
              01
            </span>

          </div>

        </div>

      </Container>
    </section>
  );
}
