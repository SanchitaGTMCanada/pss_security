import Link from "next/link";
import Image from "next/image";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Camera,
  Check,
  ClipboardCheck,
  Clock3,
  Footprints,
  GraduationCap,
  HeartPulse,
  Home,
  LockKeyhole,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Siren,
  Users,
} from "lucide-react";

import Container from "@/components/ui/Container";

/* =========================================================
   SECURITY SERVICES
========================================================= */

const securityServices = [
  {
    title: "Access Control",
    text: "Professional monitoring of entrances and exits to maintain a secure and controlled environment.",
    icon: LockKeyhole,
    accent: "#B91C1C",
    light: "#FEF2F2",
    border: "#FECACA",
  },
  {
    title: "Patrolling",
    text: "Regular foot and vehicle patrols designed to identify risks and deter unwanted activity.",
    icon: Footprints,
    accent: "#1D4ED8",
    light: "#EFF6FF",
    border: "#BFDBFE",
  },
  {
    title: "Emergency Response",
    text: "A trained security presence ready to respond quickly to incidents, alarms, and unexpected situations.",
    icon: Siren,
    accent: "#C2410C",
    light: "#FFF7ED",
    border: "#FED7AA",
  },
  {
    title: "CCTV Monitoring",
    text: "Professional surveillance support to monitor activity and assist with incident detection and documentation.",
    icon: Camera,
    accent: "#7C3AED",
    light: "#F5F3FF",
    border: "#DDD6FE",
  },
  {
    title: "Incident Reporting",
    text: "Clear and accurate reporting that keeps property managers and stakeholders informed.",
    icon: ClipboardCheck,
    accent: "#047857",
    light: "#ECFDF5",
    border: "#A7F3D0",
  },
  {
    title: "Security Consultation",
    text: "Practical recommendations designed around your property, operations, and specific security requirements.",
    icon: ShieldCheck,
    accent: "#0F766E",
    light: "#F0FDFA",
    border: "#99F6E4",
  },
];

/* =========================================================
   WHY CHOOSE US
========================================================= */

const advantages = [
  {
    icon: ShieldCheck,
    title: "Professional Personnel",
    text: "Trained professionals who understand visibility, communication, and accountability.",
  },
  {
    icon: Users,
    title: "Client Focused",
    text: "Security programs designed around the specific needs of your property and operations.",
  },
  {
    icon: Shield,
    title: "Proactive Protection",
    text: "A visible presence focused on identifying potential risks before they become larger problems.",
  },
  {
    icon: ClipboardCheck,
    title: "Clear Reporting",
    text: "Reliable communication and documentation to keep you informed about your property.",
  },
];

/* =========================================================
   CUSTOMER SERVICE
========================================================= */

const receptionServices = [
  "Visitor management",
  "Reception desk support",
  "Access coordination",
  "Tenant and guest assistance",
  "Contractor management",
];

/* =========================================================
   INDUSTRIES
========================================================= */

const industries = [
  {
    icon: Building2,
    title: "Corporate Offices",
    text: "Professional protection for commercial workplaces.",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    text: "Security solutions for stores and shopping environments.",
  },
  {
    icon: Home,
    title: "Residential",
    text: "Protection for communities and residential properties.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    text: "Security support for healthcare environments.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    text: "Safe and professional environments for educational facilities.",
  },
  {
    icon: Building2,
    title: "Industrial",
    text: "Security for warehouses, facilities, and industrial sites.",
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[650px] overflow-hidden bg-[#05051A]">

        {/* Background image */}

        <div className="absolute inset-0">

          <Image
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=2200&q=90"
            alt="Professional security services"
            fill
            priority
            unoptimized
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* Image overlays */}

          <div className="absolute inset-0 bg-[#05051A]/55" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#05051A] via-[#05051A]/75 to-[#05051A]/20" />

        </div>

        {/* Red accent */}

        <div className="pointer-events-none absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#B91C1C]/20 blur-[150px]" />

        <Container>

          <div className="relative z-10 flex min-h-[650px] items-center">

            <div className="max-w-4xl py-24">

              {/* Small label */}

              <div className="mb-7 flex items-center gap-3">

                <span className="h-[2px] w-10 bg-[#EF4444]" />

                <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/75">
                  Preventative Security Services
                </span>

              </div>

              {/* Heading */}

              <h1 className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl">

                Security designed

                <span className="block text-[#EF4444]">
                  around you.
                </span>

              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                Professional security and customer service solutions designed
                to protect your people, property, and business.
              </p>

              {/* Buttons */}

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#B91C1C] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#991B1B]"
                >
                  Get a Consultation

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </Link>

                <a
                  href="#security"
                  className="group inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                >
                  Explore Services

                  <ArrowDown
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-y-1"
                  />

                </a>

              </div>

            </div>

          </div>

        </Container>

        {/* Bottom info */}

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#05051A]/60 backdrop-blur-md">

          <Container>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 py-5">

              <div className="flex items-center gap-2">

                <span className="h-2 w-2 rounded-full bg-[#EF4444]" />

                <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  Professional
                </span>

              </div>

              <div className="h-4 w-px bg-white/15" />

              <div className="flex items-center gap-2">

                <ShieldCheck
                  size={15}
                  className="text-[#EF4444]"
                />

                <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  Reliable
                </span>

              </div>

              <div className="h-4 w-px bg-white/15" />

              <div className="flex items-center gap-2">

                <Clock3
                  size={15}
                  className="text-[#EF4444]"
                />

                <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  24/7 Support
                </span>

              </div>

            </div>

          </Container>

        </div>

      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="bg-white py-20 sm:py-24 lg:py-28">

        <Container>

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

            {/* Left */}

            <div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C]">
                <ShieldCheck size={27} />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#B91C1C]">
                Protection With Purpose
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-[#05051A] sm:text-5xl lg:text-6xl">

                More than security.

                <span className="block text-[#B91C1C]">
                  Complete peace of mind.
                </span>

              </h2>

            </div>

            {/* Right */}

            <div className="lg:pt-2">

              <p className="text-lg leading-8 text-[#334155]">
                Every property has different requirements. That's why our
                security solutions are built around the environment we
                protect, rather than using a one-size-fits-all approach.
              </p>

              <p className="mt-6 text-base leading-8 text-[#64748B]">
                From commercial buildings and residential communities to
                industrial facilities and public-facing environments, our
                professionals provide a visible and dependable presence.
              </p>

              <div className="mt-8 flex items-center gap-2">

                <div className="h-1 w-10 rounded-full bg-[#B91C1C]" />

                <div className="h-1 w-3 rounded-full bg-[#CBD5E1]" />

                <div className="h-1 w-2 rounded-full bg-[#E2E8F0]" />

              </div>

            </div>

          </div>

        </Container>

      </section>

      {/* =====================================================
          SECURITY SERVICES
      ====================================================== */}

      <section
        id="security"
        className="bg-[#F8F9FA] py-20 sm:py-24 lg:py-28"
      >

        <Container>

          {/* Heading */}

          <div className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">

            <div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C]">
                <Shield
                  size={26}
                  strokeWidth={1.8}
                />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#B91C1C]">
                Security Guard Services
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-[#05051A] sm:text-5xl lg:text-6xl">

                Professional protection,

                <span className="block text-[#B91C1C]">
                  where you need it.
                </span>

              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-[#64748B]">
              Our security professionals provide a consistent and proactive
              presence tailored to the needs of your property.
            </p>

          </div>

          {/* =================================================
              SERVICE CARDS
          ================================================== */}

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {securityServices.map((service) => {

              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group relative rounded-[24px] border bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)]"
                  style={{
                    borderColor: service.border,
                  }}
                >

                  {/* Top line */}

                  <div
                    className="absolute left-7 right-7 top-0 h-[3px] rounded-b-full opacity-0 transition-all duration-300 group-hover:opacity-100"
                    style={{
                      backgroundColor: service.accent,
                    }}
                  />

                  {/* Icon */}

                  <div className="flex items-start justify-between">

                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-2xl border"
                      style={{
                        backgroundColor: service.light,
                        borderColor: service.border,
                        color: service.accent,
                      }}
                    >
                      <Icon
                        size={28}
                        strokeWidth={1.8}
                      />
                    </div>

                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 group-hover:text-white"
                      style={{
                        borderColor: service.border,
                        color: service.accent,
                      }}
                    >
                      <ArrowUpRight size={16} />
                    </div>

                  </div>

                  {/* Content */}

                  <div className="mt-8">

                    <h3
                      className="text-xl font-bold text-[#05051A] transition-colors duration-300"
                    >
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#64748B]">
                      {service.text}
                    </p>

                  </div>

                  {/* Bottom */}

                  <div className="mt-8 flex items-center gap-2">

                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        backgroundColor: service.accent,
                      }}
                    />

                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#94A3B8]">
                      Security Service
                    </span>

                  </div>

                </div>
              );
            })}

          </div>

        </Container>

      </section>

      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}

      <section className="bg-white py-20 sm:py-24 lg:py-28">

        <Container>

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            {/* Left */}

            <div>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C]">
                <ShieldCheck size={27} />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#B91C1C]">
                Why Choose PSS
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-[1.05] text-[#05051A] sm:text-5xl lg:text-6xl">

                Security that

                <span className="block text-[#B91C1C]">
                  works for you.
                </span>

              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-[#64748B]">
                Effective security is about understanding your environment,
                identifying potential risks, and creating a professional
                presence that gives people confidence.
              </p>

            </div>

            {/* Right cards */}

            <div className="grid gap-4 sm:grid-cols-2">

              {advantages.map((item, index) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-[22px] border border-[#E2E8F0] bg-[#F8FAFC] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FECACA] hover:bg-white hover:shadow-[0_15px_35px_rgba(15,23,42,0.07)]"
                  >

                    <div className="flex items-center justify-between">

                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C] transition-all duration-300 group-hover:bg-[#B91C1C] group-hover:text-white">

                        <Icon
                          size={22}
                          strokeWidth={1.8}
                        />

                      </div>

                      <span className="text-xs font-bold tracking-[0.2em] text-[#CBD5E1]">
                        0{index + 1}
                      </span>

                    </div>

                    <h3 className="mt-7 text-lg font-bold text-[#05051A]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#64748B]">
                      {item.text}
                    </p>

                  </div>
                );

              })}

            </div>

          </div>

        </Container>

      </section>

      {/* =====================================================
          OUR APPROACH
      ====================================================== */}

      <section className="bg-[#F8F9FA] py-20 sm:py-24 lg:py-28">

        <Container>

          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

            {/* Image */}

            <div className="relative overflow-hidden rounded-[30px]">

              <div className="relative h-[500px] sm:h-[600px]">

                <Image
                  src="https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1400&q=90"
                  alt="Professional security guard"
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#05051A]/70 via-transparent to-transparent" />

              </div>

              {/* Floating card */}

              <div className="absolute bottom-6 left-6 rounded-2xl border border-white/20 bg-white/95 p-5 shadow-xl backdrop-blur-xl sm:left-8">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FEF2F2] text-[#B91C1C]">

                    <ShieldCheck size={20} />

                  </div>

                  <div>

                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#94A3B8]">
                      Our Approach
                    </p>

                    <p className="mt-1 text-base font-bold text-[#05051A]">
                      Visible & Proactive
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Content */}

            <div>

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B91C1C]">
                A Better Approach
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-[1.05] text-[#05051A] sm:text-5xl">

                Protection built

                <span className="block text-[#B91C1C]">
                  around your needs.
                </span>

              </h2>

              <p className="mt-6 text-base leading-8 text-[#64748B]">
                We believe security should complement your property and
                operations rather than get in the way of them.
              </p>

              <div className="mt-9 space-y-5">

                {[
                  "Customized security plans",
                  "Professional and trained personnel",
                  "Reliable communication",
                  "Flexible coverage",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C]">

                      <Check
                        size={16}
                        strokeWidth={3}
                      />

                    </div>

                    <span className="text-sm font-semibold text-[#334155]">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              <Link
                href="/contact"
                className="group mt-10 inline-flex items-center gap-3 border-b-2 border-[#B91C1C] pb-2 text-sm font-bold text-[#05051A]"
              >
                Talk to our team

                <ArrowRight
                  size={17}
                  className="text-[#B91C1C] transition-transform duration-300 group-hover:translate-x-1"
                />

              </Link>

            </div>

          </div>

        </Container>

      </section>

      {/* =====================================================
          CUSTOMER SERVICE
      ====================================================== */}

      <section className="bg-[#05051A] py-20 sm:py-24 lg:py-28">

        <Container>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

            {/* Image */}

            <div className="relative order-1 overflow-hidden rounded-[30px]">

              <div className="relative h-[480px] sm:h-[560px]">

                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=90"
                  alt="Professional customer service team"
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#05051A]/80 via-transparent to-transparent" />

              </div>

              <div className="absolute bottom-6 left-6">

                <div className="flex items-center gap-3 rounded-full border border-white/15 bg-[#05051A]/70 px-4 py-2 backdrop-blur-md">

                  <Users
                    size={15}
                    className="text-[#EF4444]"
                  />

                  <span className="text-xs font-semibold text-white">
                    Professional Customer Service
                  </span>

                </div>

              </div>

            </div>

            {/* Content */}

            <div className="order-2">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#7F1D1D] bg-[#450A0A] text-[#FCA5A5]">
                <Users size={27} />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#FCA5A5]">
                Customer Service & Reception
              </p>

              <h2 className="mt-5 text-4xl font-bold leading-[1.05] text-white sm:text-5xl">

                Security meets

                <span className="block text-[#EF4444]">
                  hospitality.
                </span>

              </h2>

              <p className="mt-6 text-base leading-8 text-white/50">
                Our customer service solutions combine security awareness
                with a professional and welcoming presence.
              </p>

              <div className="mt-8 space-y-4">

                {receptionServices.map((service) => (

                  <div
                    key={service}
                    className="flex items-center gap-3"
                  >

                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#7F1D1D] bg-[#450A0A] text-[#FCA5A5]">

                      <Check
                        size={13}
                        strokeWidth={3}
                      />

                    </div>

                    <span className="text-sm text-white/70">
                      {service}
                    </span>

                  </div>

                ))}

              </div>

              <Link
                href="/contact"
                className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-semibold text-[#05051A] transition-all duration-300 hover:-translate-y-1"
              >
                Discuss Your Requirements

                <ArrowUpRight
                  size={17}
                  className="text-[#B91C1C] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />

              </Link>

            </div>

          </div>

        </Container>

      </section>

      {/* =====================================================
          INDUSTRIES
      ====================================================== */}

      <section className="bg-white py-20 sm:py-24 lg:py-28">

        <Container>

          <div className="mb-14">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C]">
              <Building2 size={25} />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-[#B91C1C]">
              Industries We Serve
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#05051A] sm:text-5xl lg:text-6xl">

              Security for every{" "}

              <span className="text-[#B91C1C]">
                environment.
              </span>

            </h2>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {industries.map((industry) => {

              const Icon = industry.icon;

              return (
                <div
                  key={industry.title}
                  className="group rounded-[22px] border border-[#E2E8F0] bg-[#F8FAFC] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#FECACA] hover:bg-white hover:shadow-[0_18px_40px_rgba(15,23,42,0.07)]"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FECACA] bg-[#FEF2F2] text-[#B91C1C] transition-all duration-300 group-hover:bg-[#B91C1C] group-hover:text-white">

                      <Icon
                        size={25}
                        strokeWidth={1.8}
                      />

                    </div>

                    <ArrowUpRight
                      size={18}
                      className="text-[#CBD5E1] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#B91C1C]"
                    />

                  </div>

                  <h3 className="mt-9 text-xl font-bold text-[#05051A]">
                    {industry.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#64748B]">
                    {industry.text}
                  </p>

                </div>
              );

            })}

          </div>

        </Container>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-[#F8F9FA] py-16 sm:py-20">

        <Container>

          <div className="relative overflow-hidden rounded-[30px] border border-[#E2E8F0] bg-white px-6 py-12 shadow-[0_15px_50px_rgba(15,23,42,0.06)] sm:px-10 lg:px-16 lg:py-16">

            {/* Accent */}

            <div className="absolute bottom-0 left-0 top-0 w-1 bg-[#B91C1C]" />

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#B91C1C]/5 blur-[80px]" />

            <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

              <div className="max-w-2xl">

                <div className="flex items-center gap-3">

                  <ShieldCheck
                    size={18}
                    className="text-[#B91C1C]"
                  />

                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B91C1C]">
                    Let's Work Together
                  </p>

                </div>

                <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#05051A] sm:text-4xl lg:text-5xl">
                  Ready to create a safer environment?
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#64748B] sm:text-base">
                  Tell us about your property, your requirements, and the
                  level of protection you need.
                </p>

              </div>

              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#B91C1C] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#991B1B]"
              >
                Contact PSS

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />

              </Link>

            </div>

          </div>

        </Container>

      </section>

    </main>
  );
}