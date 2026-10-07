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

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
 
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden bg-[#05051A] text-white"
      id="footer"
    >
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

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#B91C1C]/15 blur-[130px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#B91C1C]/10 blur-[120px]" />

      <div className="relative z-10">

     

        {/* =================================================
            MAIN DARK FOOTER
        ================================================== */}

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

              <p className="mt-7 text-lg leading-8 text-slate-400 sm:text-xl">
                Professional security and customer service solutions designed
                to help businesses create safer, more welcoming and dependable
                environments.
              </p>

              {/* =================================================
                  SOCIAL ICONS
              ================================================== */}

<div className="mt-8 flex items-center gap-4">

  <SocialButton
    href="https://www.facebook.com/people/Preventative-Security-Services-Ltd/61576388536208/"
    label="Facebook"
    icon={<FaFacebookF size={23} />}
  />

  <SocialButton
    href="https://www.instagram.com/preventivesecurityservices/"
    label="Instagram"
    icon={<FaInstagram size={23} />}
  />

  <SocialButton
    href="https://www.linkedin.com/company/preventative-security-services/"
    label="LinkedIn"
    icon={<FaLinkedinIn size={23} />}
  />

  <SocialButton
    href="https://x.com/preventivess"
    label="X"
    icon={<FaXTwitter size={21} />}
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

              <div className="mt-7 space-y-5">

                <FooterLink href="/">
                  Home
                </FooterLink>

                <FooterLink href="#about">
                  About Us
                </FooterLink>

                <FooterLink href="#team">
                  Our Team
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

              <div className="mt-7 space-y-5">

                <FooterLink href="/services">
                  Security Services
                </FooterLink>

                <FooterLink href="/services">
                  Customer Service / Reception
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

              <div className="mt-7 space-y-7">

                {/* OFFICE */}
                <div className="flex gap-4">

                  <ContactIcon icon={MapPin} />

                  <div>

                    <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Office
                    </p>

                    <p className="mt-2 text-base leading-7 text-slate-300 sm:text-lg">
                      P.O. Box 20072, 2nd Floor,
                      <br />
                      4910 – 50th Street Yellowknife,
                      <br />
                      NT X1A 3X8
                    </p>

                  </div>

                </div>

                {/* PHONE */}
                <div className="flex gap-4">

                  <ContactIcon icon={Phone} />

                  <div>

                    <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Phone
                    </p>

                    <a
                      href="tel:+18674457900"
                      className="mt-2 block text-base text-slate-300 transition-colors hover:text-white sm:text-lg"
                    >
                      +1 867-445-7900
                    </a>

                  </div>

                </div>

                {/* EMAIL */}
                <div className="flex gap-4">

                  <ContactIcon icon={Mail} />

                  <div>

                    <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                      Email
                    </p>

                    <a
                      href="mailto:info@preventativesecurityservices.ca"
                      className="mt-2 block break-all text-base text-slate-300 transition-colors hover:text-white sm:text-lg"
                    >
                      info@preventativesecurityservices.ca
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

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div className="flex flex-wrap items-center gap-x-7 gap-y-4">

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

              <p className="text-sm text-slate-600 sm:text-base">
                © {new Date().getFullYear()} Preventative Security Services Ltd. © COPYRIGHT 2026
               
              </p>

            </div>

          </div>

        </div>

        {/* =================================================
            LEGAL BAR
        ================================================== */}

        <div className="border-t border-white/5">

          <div className="mx-auto flex max-w-[1400px] flex-col gap-5 px-5 py-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">

            <div className="flex flex-wrap items-center gap-5 text-sm text-slate-600 sm:text-base">

              {/* <Link
                href="/privacy-policy"
                className="transition-colors hover:text-slate-300"
              >
                Privacy Policy
              </Link>

              <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />

              <Link
                href="/terms"
                className="transition-colors hover:text-slate-300"
              >
                Terms & Conditions
              </Link> */}

            </div>

            <p className="text-sm text-slate-700 sm:text-base">
             Designed & Developed by GTM CANADA
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

      <p className="text-base font-bold uppercase tracking-[0.25em] text-white sm:text-lg">
        {children}
      </p>

      <div className="mt-4 h-[2px] w-9 bg-[#B91C1C]" />

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
      className="group flex items-center gap-3 text-base text-slate-400 transition-colors duration-300 hover:text-white sm:text-lg"
    >
      <span className="h-px w-0 bg-[#B91C1C] transition-all duration-300 group-hover:w-5" />

      <span>
        {children}
      </span>
    </Link>
  );
}

/* =========================================================
   SOCIAL BUTTON
========================================================= */

function SocialButton({ href, label, icon }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-14 w-14 items-center justify-center border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:border-[#B91C1C]/50 hover:bg-[#B91C1C] hover:text-white"
    >
      {icon}
    </a>
  );
}

/* =========================================================
   CONTACT ICON
========================================================= */

function ContactIcon({ icon: Icon }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
      <Icon
        size={21}
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
    <div className="flex items-center gap-3">

      <Icon
        size={19}
        strokeWidth={1.6}
        className="text-[#B91C1C]"
      />

      <span className="text-sm font-semibold text-slate-500 sm:text-base">
        {text}
      </span>

    </div>
  );
}