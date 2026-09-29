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
    <footer className="relative overflow-hidden bg-[#171717] text-white">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#A51F20]/12 blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#A51F20]/8 blur-[130px]" />

      <div className="relative z-10">

        {/* =====================================================
            LIGHT CTA
        ====================================================== */}

        <section className="bg-[#F3F1EE]">

          <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

            <div className="relative overflow-hidden rounded-[32px] border border-[#DEDAD4] bg-[#FAF9F7] shadow-[0_25px_70px_rgba(23,23,23,0.10)]">

              {/* Decorative Background */}

              <div className="pointer-events-none absolute inset-0">

                <div className="absolute right-0 top-0 h-full w-[55%] bg-gradient-to-l from-[#EEE7E1] via-[#F5F1ED] to-transparent" />

                <div
                  className="absolute right-0 top-0 h-full w-[48%] opacity-[0.035]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#A51F20 1px, transparent 1px), linear-gradient(90deg, #A51F20 1px, transparent 1px)",
                    backgroundSize: "38px 38px",
                  }}
                />

              </div>


              <div className="relative z-10 grid min-h-[480px] items-center lg:grid-cols-[1.2fr_0.8fr]">

                {/* =================================================
                    LEFT CONTENT
                ================================================== */}

                <div className="px-6 py-12 sm:px-10 lg:px-14 lg:py-16">

                  {/* Label */}

                  <div className="mb-6 flex items-center gap-3">

                    <span className="h-2.5 w-2.5 rounded-full bg-[#A51F20] shadow-[0_0_14px_rgba(165,31,32,0.35)]" />

                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A51F20]">
                      Let&apos;s work together
                    </span>

                  </div>


                  {/* Heading */}

                  <h2 className="max-w-3xl text-3xl font-black leading-[1.05] tracking-tight text-[#202020] sm:text-4xl lg:text-[58px]">

                    Need reliable people

                    <span className="block text-[#A51F20]">
                      you can count on?
                    </span>

                  </h2>


                  {/* Description */}

                  <p className="mt-6 max-w-2xl text-sm leading-7 text-[#68645F] sm:text-base lg:text-[17px]">

                    Whether you need professional security personnel or
                    customer service and reception support, we are ready to
                    discuss your requirements.

                  </p>


                  {/* Trust Points */}

                  <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">

                    <TrustLight
                      icon={CheckCircle2}
                      text="Professional"
                    />

                    <TrustLight
                      icon={ShieldCheck}
                      text="Reliable"
                    />

                    <TrustLight
                      icon={Building2}
                      text="Business Ready"
                    />

                  </div>


                  {/* CTA */}

                  <Link
                    href="/contact"
                    className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#202020] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(23,23,23,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A51F20]"
                  >

                    <span>
                      Book a Service
                    </span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowUpRight size={16} />
                    </span>

                  </Link>

                </div>


                {/* =================================================
                    RIGHT VISUAL
                ================================================== */}

                <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden px-5 pb-10 sm:min-h-[400px] lg:min-h-[480px] lg:px-8 lg:pb-0">

                  {/* Glow */}

                  <div className="pointer-events-none absolute right-[15%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[#A51F20]/10 blur-[80px]" />


                  {/* Outer Ring */}

                  <div className="absolute right-[7%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full border border-[#A51F20]/10 sm:h-[350px] sm:w-[350px] lg:h-[390px] lg:w-[390px]" />


                  {/* Second Ring */}

                  <div className="absolute right-[13%] top-1/2 h-[230px] w-[230px] -translate-y-1/2 rounded-full border border-[#A51F20]/10 sm:h-[280px] sm:w-[280px] lg:h-[310px] lg:w-[310px]" />


                  {/* Main Circle */}

                  <div className="relative z-10 flex h-[185px] w-[185px] items-center justify-center rounded-full bg-[#A51F20] shadow-[0_25px_60px_rgba(165,31,32,0.25)] sm:h-[215px] sm:w-[215px] lg:h-[240px] lg:w-[240px]">

                    {/* Inner Circle */}

                    <div className="flex h-[140px] w-[140px] flex-col items-center justify-center rounded-full border border-white/20 bg-white/10 sm:h-[165px] sm:w-[165px] lg:h-[185px] lg:w-[185px]">

                      <ShieldCheck
                        size={56}
                        strokeWidth={1.35}
                        className="text-white"
                      />

                      <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">
                        Trusted Service
                      </span>

                    </div>

                  </div>


                  {/* Top Badge */}

                  <div className="absolute right-[6%] top-[12%] z-20 flex items-center gap-3 rounded-2xl border border-[#E4DED8] bg-white px-4 py-3 shadow-[0_12px_30px_rgba(23,23,23,0.10)] sm:right-[10%]">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A51F20]/10">

                      <Shield
                        size={20}
                        className="text-[#A51F20]"
                      />

                    </div>

                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#99938D]">
                        Protection
                      </p>

                      <p className="text-sm font-bold text-[#202020]">
                        You can trust
                      </p>

                    </div>

                  </div>


                  {/* Bottom Badge */}

                  <div className="absolute bottom-[10%] left-[6%] z-20 flex items-center gap-3 rounded-2xl border border-[#E4DED8] bg-white px-4 py-3 shadow-[0_12px_30px_rgba(23,23,23,0.10)] sm:left-[10%]">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A51F20]/10">

                      <CheckCircle2
                        size={20}
                        className="text-[#A51F20]"
                      />

                    </div>

                    <div>

                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#99938D]">
                        Standard
                      </p>

                      <p className="text-sm font-bold text-[#202020]">
                        Professional
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            DARK FOOTER CONTENT
        ====================================================== */}

        <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

          <div className="grid gap-12 lg:grid-cols-[1.5fr_0.7fr_0.7fr_1fr] lg:gap-16">


            {/* =================================================
                BRAND
            ================================================== */}

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


              <p className="mt-7 text-sm leading-7 text-white/40">

                Professional security and customer service solutions designed
                to help businesses create safer, more welcoming and dependable
                environments.

              </p>


              {/* Social */}

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


            {/* =================================================
                EXPLORE
            ================================================== */}

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


            {/* =================================================
                SERVICES
            ================================================== */}

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


            {/* =================================================
                CONTACT
            ================================================== */}

            <div>

              <FooterTitle>
                Get in touch
              </FooterTitle>

              <div className="mt-6 space-y-6">

                {/* Address */}

                <div className="flex gap-4">

                  <ContactIcon icon={MapPin} />

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-wider text-white/25">
                      Office
                    </p>

                    <p className="mt-1 text-sm leading-6 text-white/55">
                      Your business address
                    </p>

                  </div>

                </div>


                {/* Phone */}

                <div className="flex gap-4">

                  <ContactIcon icon={Phone} />

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-wider text-white/25">
                      Phone
                    </p>

                    <a
                      href="tel:+10000000000"
                      className="mt-1 block text-sm text-white/55 transition-colors hover:text-white"
                    >
                      +1 000 000 0000
                    </a>

                  </div>

                </div>


                {/* Email */}

                <div className="flex gap-4">

                  <ContactIcon icon={Mail} />

                  <div>

                    <p className="text-xs font-semibold uppercase tracking-wider text-white/25">
                      Email
                    </p>

                    <a
                      href="mailto:info@example.com"
                      className="mt-1 block break-all text-sm text-white/55 transition-colors hover:text-white"
                    >
                      info@example.com
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            TRUST STRIP
        ====================================================== */}

        <div className="border-t border-white/[0.07]">

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


              <p className="text-xs text-white/20">
                © {new Date().getFullYear()} Your Company Name. All rights
                reserved.
              </p>

            </div>

          </div>

        </div>


        {/* =====================================================
            LEGAL BAR
        ====================================================== */}

        <div className="border-t border-white/[0.05]">

          <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">

            <div className="flex flex-wrap items-center gap-4 text-xs text-white/25">

              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-white/60"
              >
                Privacy Policy
              </Link>

              <span className="h-1 w-1 rounded-full bg-white/15" />

              <Link
                href="/terms"
                className="transition-colors hover:text-white/60"
              >
                Terms & Conditions
              </Link>

            </div>


            <p className="text-xs text-white/15">
              Security • Customer Service • Reception
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}


/* =========================================================
   LIGHT TRUST ITEM
========================================================= */

function TrustLight({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2">

      <Icon
        size={16}
        strokeWidth={1.8}
        className="text-[#A51F20]"
      />

      <span className="text-sm font-semibold text-[#716C66]">
        {text}
      </span>

    </div>
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

      <div className="mt-3 h-[2px] w-8 bg-[#A51F20]" />

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
      className="group flex items-center gap-2 text-sm text-white/40 transition-colors duration-300 hover:text-white"
    >

      <span className="h-px w-0 bg-[#A51F20] transition-all duration-300 group-hover:w-4" />

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
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-xs font-black uppercase text-white/40 transition-all duration-300 hover:-translate-y-1 hover:border-[#A51F20]/50 hover:bg-[#A51F20] hover:text-white"
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
        strokeWidth={1.6}
        className="text-[#D98283]"
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
        className="text-[#D98283]"
      />

      <span className="text-xs font-semibold text-white/35">
        {text}
      </span>

    </div>
  );
}