
"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function AboutPreview() {
  return (
<section className="relative overflow-hidden bg-[#05051A] py-10 sm:py-10 lg:py-10">
  {/* Ambient Glow */}
  <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#B91C1C]/10 blur-[150px]" />

  <Container>
    {/* Top Introduction */}
    <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
      <div>
        <p className="text-base font-semibold uppercase tracking-[0.25em] text-[#B91C1C]">
          About PSS
        </p>

        <h2 className="mt-4 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Guarding What
          <span className="block text-slate-500">
            Matters Most.
          </span>
        </h2>
      </div>
    </div>

    {/* Main Visual */}
    <div className="relative mt-14 lg:mt-20">
      {/* Decorative Corner */}
      <div className="absolute -left-4 -top-4 z-20 hidden h-28 w-28 border-l-2 border-t-2 border-[#B91C1C] lg:block" />

      {/* Image */}
      <div className="relative h-[420px] overflow-hidden rounded-[32px] border border-white/10 sm:h-[520px] lg:h-[600px]">
        <img
          src="/homepage/about-pss.png"
          alt="Professional security and business services"
          className="h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#05051A]/90 via-[#05051A]/40 to-[#05051A]/10" />

        {/* Image Content */}
        <div className="absolute bottom-8 left-7 max-w-xl sm:bottom-12 sm:left-12">
          <div className="mb-4 h-1 w-12 bg-[#B91C1C]" />

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60 sm:text-base">
            Preventative Security Services
          </p>

          <p className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            From commercial properties and special events to residential safety and advanced system integrations.
          </p>
        </div>
      </div>

      {/* Floating Information Panel */}
      <div className="relative z-10 mx-5 -mt-16 rounded-[28px] border border-white/10 bg-[#0B0B24] p-7 shadow-2xl sm:mx-10 sm:p-9 lg:absolute lg:bottom-10 lg:right-10 lg:mt-0 lg:w-[470px]">
        
        {/* Panel Header */}
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B91C1C]">
              Who We Are
            </p>

            <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Built around people.
            </h3>
          </div>

          <span className="text-5xl font-bold leading-none text-white/[0.04]">
            PSS
          </span>
        </div>

        {/* Description */}
        <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
          Preventative Security Services Ltd. is a locally owned and operated
          security provider based in Yellowknife, NWT. With deep roots in the
          North, we understand the unique security challenges our community faces.
        </p>

        {/* Services */}
        <div className="mt-7 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
          <div>
            <p className="text-base font-bold text-white">
              Security
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Professional protection
            </p>
          </div>

          <div>
            <p className="text-base font-bold text-white">
              Reception
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Professional service
            </p>
          </div>
        </div>

        {/* Link */}
  <Link
  href="/#contact"
  className="mt-7 inline-flex items-center gap-2 text-base font-semibold text-[#B91C1C] transition-colors hover:text-red-400"
  onClick={(event) => {
    if (window.location.pathname === "/") {
      const target = document.getElementById("contact");

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        window.history.replaceState(null, "", "/#contact");
      }
    }
  }}
>
  Learn more about us
  <span>→</span>
</Link>
      </div>
    </div>

    {/* Bottom Statement */}
    <div className="relative z-10 mt-16 border-t border-white/10 pt-8 lg:mt-20">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
          Our experienced team delivers peace of mind through proactive,
          dependable, and customized security solutions.
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