
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Shield,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#05051A] text-white">
      {/* =====================================================
          DARK FOOTER BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#B91C1C]/15 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#B91C1C]/10 blur-[120px]" />

      <div className="relative z-10">

        {/* =================================================
            LIGHT CTA SECTION
        ================================================== */}

        <div className="border-b border-slate-200 bg-[#F7F8FA]">
          <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(5,5,26,0.08)]">

              {/* =================================================
                  VERY SUBTLE BACKGROUND
              ================================================== */}

              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-y-0 right-0 w-[48%] bg-gradient-to-l from-[#fff5f5] via-[#fffafa] to-transparent" />

                <div
                  className="absolute right-0 top-0 h-full w-[48%] opacity-[0.035]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#B91C1C 1px, transparent 1px), linear-gradient(90deg, #B91C1C 1px, transparent 1px)",
                    backgroundSize: "35px 35px",
                  }}
                />
              </div>

              {/* =================================================
                  MAIN CONTENT
              ================================================== */}

              <div className="relative z-10 grid min-h-[500px] items-center lg:grid-cols-[1.25fr_0.75fr]">

                {/* =================================================
                    LEFT CONTENT
                ================================================== */}

                <div className="px-6 py-12 sm:px-10 lg:px-14 lg:py-16">

                  {/* Label */}

                  <div className="mb-5 flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#B91C1C] shadow-[0_0_12px_rgba(185,28,28,0.35)]" />

                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#B91C1C]">
                      Let&apos;s work together
                    </span>
                  </div>

                  {/* Heading */}

                  <h2 className="max-w-3xl text-3xl font-black leading-[1.08] tracking-tight text-[#05051A] sm:text-4xl lg:text-[58px]">
                    Need reliable people
                    <span className="block text-[#B91C1C]">
                      you can count on?
                    </span>
                  </h2>

                  {/* Description */}

                  <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:text-[17px]">
                    Whether you need professional security personnel or
                    customer service and reception support, we are ready to
                    discuss your requirements.
                  </p>

                  {/* Trust points */}

                  <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">

                    <div className="flex items-center gap-2">
                      <CheckCircle2
                        size={16}
                        className="text-[#B91C1C]"
                      />

                      <span className="text-sm font-semibold text-slate-500">
                        Professional
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <ShieldCheck
                        size={16}
                        className="text-[#B91C1C]"
                      />

                      <span className="text-sm font-semibold text-slate-500">
                        Reliable
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Building2
                        size={16}
                        className="text-[#B91C1C]"
                      />

                      <span className="text-sm font-semibold text-slate-500">
                        Business Ready
                      </span>
                    </div>

                  </div>
                </div>

                {/* =================================================
                    RIGHT VISUAL AREA
                ================================================== */}

                <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden px-6 pb-12 sm:min-h-[400px] lg:min-h-[500px] lg:px-8 lg:pb-0">

                  {/* Soft glow */}

                  <div className="pointer-events-none absolute right-[15%] top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-[#B91C1C]/10 blur-[70px]" />

                  {/* Large outer ring */}

                  <div className="absolute right-[8%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full border border-[#B91C1C]/10 sm:h-[350px] sm:w-[350px] lg:h-[390px] lg:w-[390px]" />

                  {/* Second ring */}

                  <div className="absolute right-[13%] top-1/2 h-[235px] w-[235px] -translate-y-1/2 rounded-full border border-[#B91C1C]/10 sm:h-[280px] sm:w-[280px] lg:h-[310px] lg:w-[310px]" />

                  {/* =================================================
                      MAIN RED CIRCLE
                  ================================================== */}

                  <div className="relative z-10 flex h-[190px] w-[190px] items-center justify-center rounded-full bg-[#B91C1C] shadow-[0_25px_60px_rgba(185,28,28,0.28)] sm:h-[220px] sm:w-[220px] lg:h-[245px] lg:w-[245px]">

                    {/* Inner circle */}

                    <div className="flex h-[145px] w-[145px] flex-col items-center justify-center rounded-full border border-white/20 bg-white/10 sm:h-[170px] sm:w-[170px] lg:h-[190px] lg:w-[190px]">

                      <ShieldCheck
                        size={58}
                        strokeWidth={1.4}
                        className="text-white"
                      />

                      <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">
                        Trusted Service
                      </span>

                    </div>
                  </div>

                  {/* =================================================
                      TOP FLOATING BADGE
                  ================================================== */}

                  <div className="absolute right-[8%] top-[12%] z-20 flex items-center gap-3 rounded-2xl border border-white bg-white px-4 py-3 shadow-[0_12px_30px_rgba(5,5,26,0.12)] sm:right-[10%]">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B91C1C]/10">
                      <Shield
                        size={20}
                        className="text-[#B91C1C]"
                      />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Protection
                      </p>

                      <p className="text-sm font-bold text-[#05051A]">
                        You can trust
                      </p>
                    </div>

                  </div>

                  {/* =================================================
                      BOTTOM FLOATING BADGE
                  ================================================== */}

                  <div className="absolute bottom-[12%] left-[8%] z-20 flex items-center gap-3 rounded-2xl border border-white bg-white px-4 py-3 shadow-[0_12px_30px_rgba(5,5,26,0.12)] sm:left-[10%]">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#05051A]/5">
                      <CheckCircle2
                        size={20}
                        className="text-[#B91C1C]"
                      />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Standard
                      </p>

                      <p className="text-sm font-bold text-[#05051A]">
                        Professional
                      </p>
                    </div>

                  </div>

                </div>
              </div>

              {/* =================================================
                  CTA BUTTON
              ================================================== */}

              <Link
                href="/contact"
                className="group absolute bottom-8 right-8 z-30 hidden items-center gap-3 rounded-full bg-[#05051A] px-5 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(5,5,26,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#B91C1C] sm:inline-flex lg:bottom-10 lg:right-10"
              >
                <span>
                  Book a Service
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowUpRight size={16} />
                </span>
              </Link>

              {/* Mobile CTA */}

              <div className="relative z-20 px-6 pb-8 sm:px-10 sm:pb-10 lg:hidden">

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#B91C1C] px-5 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(185,28,28,0.22)] transition-all duration-300 hover:bg-[#991B1B]"
                >
                  <span>
                    Book a Service
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                    <ArrowUpRight size={16} />
                  </span>
                </Link>

              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            MAIN DARK FOOTER
        ================================================== */}

        <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

          <div className="grid gap-12 lg:grid-cols-[1.5fr_0.7fr_0.7fr_1fr] lg:gap-16">

            {/* BRAND */}

            <div className="max-w-md">

              <Link
                href="/"
                className="inline-flex items-center"
              >
                <Image
                  src="/images/logo.png"
                  alt="Company Logo"
                  width={310}
                  height={120}
                  className="h-auto max-h-24 w-auto max-w-[260px] object-contain"
                />
              </Link>

              <p className="mt-7 text-sm leading-7 text-slate-400">
                Professional security and customer service solutions designed
                to help businesses create safer, more welcoming and dependable
                environments.
              </p>

              <div className="mt-7 flex items-center gap-3">

                <SocialButton
                  href="#"
                  label="Facebook"
                  text="f"
                />

                <SocialButton
                  href="#"
                  label="Instagram"
                  text="ig"
                />

                <SocialButton
                  href="#"
                  label="LinkedIn"
                  text="in"
                />

              </div>
            </div>

            {/* EXPLORE */}

            <div>

              <FooterTitle>
                Explore
              </FooterTitle>

              <div className="mt-6 space-y-4">

                <FooterLink href="/">
                  Home
                </FooterLink>

                <FooterLink href="/about">
                  About Us
                </FooterLink>

                <FooterLink href="/services">
                  Services
                </FooterLink>

                <FooterLink href="/team">
                  Our Team
                </FooterLink>

                <FooterLink href="/contact">
                  Contact
                </FooterLink>

              </div>
            </div>

            {/* SERVICES */}

            <div>

              <FooterTitle>
                Services
              </FooterTitle>

              <div className="mt-6 space-y-4">

                <FooterLink href="/services/security">
                  Security Services
                </FooterLink>

                <FooterLink href="/services/customer-service-reception">
                  Customer Service
                </FooterLink>

                <FooterLink href="/services/customer-service-reception">
                  Reception Services
                </FooterLink>

                <FooterLink href="/services">
                  All Services
                </FooterLink>

              </div>
            </div>

            {/* CONTACT */}

            <div>

              <FooterTitle>
                Get in touch
              </FooterTitle>

              <div className="mt-6 space-y-6">

                <div className="flex gap-4">

                  <ContactIcon icon={MapPin} />

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Office
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      Your business address
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <ContactIcon icon={Phone} />

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Phone
                    </p>

                    <a
                      href="tel:+10000000000"
                      className="mt-1 block text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      +1 000 000 0000
                    </a>
                  </div>

                </div>

                <div className="flex gap-4">

                  <ContactIcon icon={Mail} />

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Email
                    </p>

                    <a
                      href="mailto:info@example.com"
                      className="mt-1 block break-all text-sm text-slate-300 transition-colors hover:text-white"
                    >
                      info@example.com
                    </a>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

        {/* =================================================
            TRUST STRIP
        ================================================== */}

        <div className="border-t border-white/10">

          <div className="mx-auto max-w-[1400px] px-5 py-7 sm:px-8 lg:px-12">

            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3">

                <TrustItem
                  icon={ShieldCheck}
                  text="Professional"
                />

                <TrustItem
                  icon={CheckCircle2}
                  text="Reliable"
                />

                <TrustItem
                  icon={Shield}
                  text="Trusted"
                />

                <TrustItem
                  icon={Building2}
                  text="Business Focused"
                />

              </div>

              <p className="text-xs text-slate-600">
                © {new Date().getFullYear()} Your Company Name. All rights
                reserved.
              </p>

            </div>
          </div>
        </div>

        {/* =================================================
            LEGAL BAR
        ================================================== */}

        <div className="border-t border-white/5">

          <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">

              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-slate-300"
              >
                Privacy Policy
              </Link>

              <span className="h-1 w-1 rounded-full bg-slate-700" />

              <Link
                href="/terms"
                className="transition-colors hover:text-slate-300"
              >
                Terms & Conditions
              </Link>

            </div>

            <p className="text-xs text-slate-700">
              Security • Customer Service • Reception
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
}

/* =========================================================
   FOOTER TITLE
========================================================= */

function FooterTitle({ children }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-white">
        {children}
      </p>

      <div className="mt-3 h-[2px] w-7 bg-[#B91C1C]" />
    </div>
  );
}

/* =========================================================
   FOOTER LINK
========================================================= */

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-white"
    >
      <span className="h-px w-0 bg-[#B91C1C] transition-all duration-300 group-hover:w-4" />

      <span>
        {children}
      </span>
    </Link>
  );
}

/* =========================================================
   SOCIAL BUTTON
========================================================= */

function SocialButton({ href, label, text }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.03] text-xs font-black uppercase text-slate-400 transition-all duration-300 hover:border-[#B91C1C]/50 hover:bg-[#B91C1C] hover:text-white"
    >
      {text}
    </a>
  );
}

/* =========================================================
   CONTACT ICON
========================================================= */

function ContactIcon({ icon: Icon }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
      <Icon
        size={17}
        className="text-[#F87171]"
      />
    </div>
  );
}

/* =========================================================
   TRUST ITEM
========================================================= */

function TrustItem({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2">
      <Icon
        size={14}
        strokeWidth={1.6}
        className="text-[#B91C1C]"
      />

      <span className="text-xs font-semibold text-slate-500">
        {text}
      </span>
    </div>
  );
}