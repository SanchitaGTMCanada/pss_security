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
  Handshake,
  HeartPulse,
  Home,
  LockKeyhole,
  MapPin,
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
  },
  {
    title: "Patrolling",
    text: "Regular foot and vehicle patrols designed to identify risks and deter unwanted activity.",
    icon: Footprints,
  },
  {
    title: "Emergency Response",
    text: "A trained security presence ready to respond quickly to incidents, alarms, and unexpected situations.",
    icon: Siren,
  },
  {
    title: "CCTV & Surveillance",
    text: "Professional surveillance support to monitor activity and assist with incident detection.",
    icon: Camera,
  },
  {
    title: "Incident Reporting",
    text: "Clear and accurate reporting that keeps property managers and stakeholders informed.",
    icon: ClipboardCheck,
  },
];

/* =========================================================
   WHY CHOOSE US
========================================================= */

const whyChooseUs = [
  {
    icon: MapPin,
    title: "Northern Experience",
    text: "Skilled Northern safety personnel.",
  },
  {
    icon: Users,
    title: "Customized Solutions",
    text: "Tailored security solutions for every client property.",
  },
  {
    icon: Clock3,
    title: "24/7 Availability",
    text: "Round-the-clock security and front-desk services.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Professionals",
    text: "Trained, licensed, and uniformed security professionals.",
  },
  {
    icon: Handshake,
    title: "Integrated Approach",
    text: "Scalable solutions to adapt to evolving needs.",
  },
  {
    icon: Building2,
    title: "Corporate Solutions",
    text: "Expertise in managing commercial facilities",
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

/* =========================================================
   OFFICER SUPPORT
========================================================= */

const officerSupport = [
"Visitor management and sign-in procedures",
  "Lobby monitoring and access coordination",
  "Reception desk operations and concierge-style services",
  "Assistance to tenants, staff, and contractors",
  "Emergency call handling and situation guidance",
];

/* =========================================================
   SERVICES PAGE
========================================================= */

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* =====================================================
          HERO — DARK
      ====================================================== */}

      <section className="relative min-h-[760px] overflow-hidden bg-[#05051A]">

        <div className="absolute inset-0">
          <Image
            src="/service/service-hero.png"
            alt="Professional security services"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[#05051A]/10" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#05051A] via-[#05051A]/85 to-[#05051A]/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#05051A] via-transparent to-transparent" />
        </div>

        <div className="pointer-events-none absolute -right-40 top-1/3 h-[600px] w-[600px] rounded-full bg-[#B91C1C]/20 blur-[160px]" />

        <Container>
          <div className="relative z-10 flex min-h-[760px] items-center">

            <div className="max-w-5xl py-28">

              <div className="mb-8 flex items-center gap-4">
                <span className="h-[2px] w-16 bg-[#EF4444]" />

                <span className="text-base font-bold uppercase tracking-[0.3em] text-white/80 sm:text-lg">
                  Preventative Security Services
                </span>
              </div>

              <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl lg:text-[92px]">
                Comprehensive
                <span className="block text-[#EF4444]">
                  Security Solutions
                </span>
              </h1>

              <p className="mt-9 max-w-3xl text-lg leading-8 text-white/75 sm:text-2xl sm:leading-9">
               Professional Reliable Local
              </p>

              <div className="mt-11 flex flex-wrap gap-5">

                <Link
                  href="/#contact"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#B91C1C] px-8 py-5 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#991B1B]"
                >
                  Get a Free Consultation

                  <ArrowUpRight
                    size={22}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

               

              </div>
            </div>
          </div>
        </Container>

        {/* Trust Bar */}

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#05051A]/85 backdrop-blur-xl">
          <Container>

            <div className="flex flex-wrap gap-x-12 gap-y-5 py-6">

              <TrustPoint
                icon={ShieldCheck}
                text="Professional"
              />

              <TrustPoint
                icon={Check}
                text="Reliable"
              />

              <TrustPoint
                icon={Clock3}
                text="24/7 Support"
              />

              <TrustPoint
                icon={Users}
                text="Experienced Team"
              />

            </div>

          </Container>
        </div>

      </section>


      {/* =====================================================
          INTRODUCTION — LIGHT
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-10 sm:py-10 lg:py-10">

        <div className="pointer-events-none absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-[#B91C1C]/[0.035] blur-[120px]" />

        <Container>

          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[0.35fr_1fr] lg:gap-20">

            <div className="hidden lg:block">

              <div className="border-l-2 border-[#B91C1C] pl-7">

                <span className="block text-[110px] font-black leading-none text-[#05051A]/[0.06]">
                  01
                </span>

                <span className="mt-4 block text-base font-bold uppercase tracking-[0.3em] text-[#B91C1C]">
                  Our Purpose
                </span>

              </div>

            </div>

            <div>

              <div className="mb-6 flex items-center gap-4 lg:hidden">

                <span className="h-[2px] w-12 bg-[#B91C1C]" />

                <p className="text-base font-bold uppercase tracking-[0.25em] text-[#B91C1C]">
                  Our Purpose
                </p>

              </div>

              <h2 className="max-w-5xl text-4xl font-black leading-[1.02] tracking-tight text-[#05051A] sm:text-5xl lg:text-7xl">
                Securing What
                <span className="block text-[#B91C1C]">
                  Matters Most
                </span>
              </h2>

              <p className="mt-7 max-w-4xl text-lg leading-8 text-[#475569] sm:text-xl lg:text-[22px] lg:leading-9">
                We understand that every environment has unique security
                requirements. Our approach combines professional personnel,
                proactive protection, clear communication, and dependable
                service to create safer environments for people, properties,
                and businesses.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <span className="border border-[#B91C1C]/20 bg-[#FEF2F2] px-5 py-3 text-base font-bold text-[#991B1B]">
                  People
                </span>

                <span className="border border-[#B91C1C]/20 bg-[#FEF2F2] px-5 py-3 text-base font-bold text-[#991B1B]">
                  Property
                </span>

                <span className="border border-[#B91C1C]/20 bg-[#FEF2F2] px-5 py-3 text-base font-bold text-[#991B1B]">
                  Business
                </span>

              </div>

            </div>

          </div>

        </Container>
      </section>


      {/* =====================================================
          SECURITY SERVICES — LIGHT
      ====================================================== */}

   <section
  id="security"
  className="relative overflow-hidden bg-[#05051A] py-10 sm:py-10 lg:py-10"
>
  {/* Red ambient glow */}
  <div className="pointer-events-none absolute -left-40 top-1/2 h-[550px] w-[550px] -translate-y-1/2 rounded-full bg-[#B91C1C]/10 blur-[160px]" />

  <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#B91C1C]/10 blur-[140px]" />

  <Container>

    <div className="relative z-10 mb-16 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">

      <div>
        <p className="text-base font-bold uppercase tracking-[0.25em] text-[#FCA5A5] sm:text-lg">
          Security Guard Services
        </p>

        <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-7xl">
          Protection that is

          <span className="block text-[#EF4444]">
            present when needed.
          </span>
        </h2>
      </div>

      <p className="text-lg leading-8 text-slate-400 sm:text-xl">
        Our trained security professionals provide a visible,
        dependable presence designed to protect people, property,
        and operations.
      </p>

    </div>

  <div className="relative z-10 grid w-full gap-4 lg:grid-cols-6">

  {/* =========================
      TOP ROW — 2 CARDS
  ========================== */}

  {/* 01 — Access Control */}
  <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#0B0B24] p-6 lg:col-span-3">

    <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#B91C1C]/10 blur-[70px]" />

    <div className="relative z-10">

      <div className="flex items-start justify-between">

        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#B91C1C]/40 bg-[#10102D] text-[#FCA5A5]">
          <LockKeyhole
            size={28}
            strokeWidth={1.6}
          />
        </div>

        <span className="text-5xl font-black text-white/[0.04]">
          01
        </span>

      </div>

      <h3 className="mt-7 text-2xl font-black text-white sm:text-3xl">
        Access Control
      </h3>

      <p className="mt-3 max-w-lg text-base leading-7 text-slate-400">
        Monitoring and managing entry points to restrict unauthorized access.
      </p>

      <div className="mt-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FCA5A5]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#B91C1C]" />
        Controlled Access
      </div>

    </div>

  </div>


  {/* 02 — Patrolling */}
  <div className="group rounded-[22px] border border-white/10 bg-[#10102D] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B91C1C]/50 lg:col-span-3">

    <div className="flex items-start justify-between">

      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#B91C1C]/40 bg-[#0B0B24] text-[#FCA5A5]">
        <Footprints size={28} />
      </div>

      <span className="text-4xl font-black text-white/[0.05]">
        02
      </span>

    </div>

    <h3 className="mt-6 text-2xl font-black text-white">
      Patrolling (Foot & Vehicle)
    </h3>

    <p className="mt-3 text-base leading-7 text-slate-400">
      Regular patrols to detect and report suspicious activity.
    </p>

  </div>


  {/* =========================
      BOTTOM ROW — FULL WIDTH
      3 EQUAL CARDS
  ========================== */}

  {/* 03 — Emergency Response */}
  <div className="relative min-w-0 overflow-hidden rounded-[22px] bg-[#B91C1C] p-6 lg:col-span-2">

    <div className="absolute -right-10 -top-10 text-white/[0.08]">
      <Siren
        size={130}
        strokeWidth={1}
      />
    </div>

    <div className="relative z-10">

      <div className="flex items-center justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#B91C1C]">
          <Siren size={25} />
        </div>

        <span className="text-3xl font-black text-white/20">
          03
        </span>

      </div>

      <h3 className="mt-6 text-xl font-black text-white">
        Emergency Response
      </h3>

      <p className="mt-3 text-sm leading-6 text-white/75">
        Immediate on-site action in response to alarms, incidents, and
        safety threats.
      </p>

    </div>

  </div>


  {/* 04 — CCTV */}
  <div className="group min-w-0  lg:col-span-2 rounded-[22px] border border-white/10 border-t-4 border-t-[#B91C1C] bg-[#0B0B24] p-6 transition-all duration-300 hover:-translate-y-1">

    <div className="flex items-center gap-4">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#10102D] text-[#FCA5A5]">
        <Camera size={26} />
      </div>

      <div className="min-w-0">

        <span className="text-xs font-black uppercase tracking-[0.18em] text-white/25">
          04
        </span>

        <h3 className="mt-1 text-lg font-black text-white">
          CCTV & Surveillance
        </h3>

      </div>

    </div>

    <p className="mt-4 text-sm leading-6 text-slate-400">
      Real-time security system monitoring with incident documentation.
    </p>

  </div>


  {/* 05 — Incident Reporting */}
  <div className="group min-w-0  lg:col-span-2 rounded-[22px] border border-white/10 bg-[#10102D] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B91C1C]/50">

    <div className="flex items-start justify-between">

      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#B91C1C]/40 bg-[#0B0B24] text-[#FCA5A5]">
        <ClipboardCheck size={26} />
      </div>

      <span className="text-3xl font-black text-white/10">
        05
      </span>

    </div>

    <h3 className="mt-6 text-xl font-black text-white">
      Incident Reporting
    </h3>

    <p className="mt-3 text-sm leading-6 text-slate-400">
      Timely, accurate reports on events, risks, and resolution.
    </p>

  </div>

</div>

  </Container>
</section>


      {/* =====================================================
          WHY CHOOSE US — LIGHT
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-10 sm:py-10 lg:py-10">

        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#B91C1C]/[0.035] blur-[150px]" />

        <Container>

          <div className="relative z-10">

            <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">

              <div>

                <p className="text-base font-bold uppercase tracking-[0.3em] text-[#B91C1C] sm:text-lg">
                  Why Choose Us?
                </p>

                <h2 className="mt-5 text-4xl font-black leading-[1.02] text-[#05051A] sm:text-5xl lg:text-7xl">
                  Experience you can
                  <span className="block text-[#B91C1C]">
                    depend on.
                  </span>
                </h2>

              </div>

              <p className="max-w-2xl text-lg leading-8 text-[#64748B] sm:text-xl">
                Our services are built around experienced people,
                customized solutions, dependable availability, and
                a commitment to professional service.
              </p>

            </div>


            <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {whyChooseUs.map((item, index) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden border border-slate-200 bg-[#F8F9FA] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#B91C1C]/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(5,5,26,0.08)]"
                  >

                    <span className="absolute -right-3 -top-8 text-[100px] font-black leading-none text-[#05051A]/[0.035]">
                      0{index + 1}
                    </span>

                    <div className="relative z-10">

                      <div className="flex items-center justify-between">

                        <div className="flex h-16 w-16 items-center justify-center border border-[#B91C1C]/20 bg-[#FEF2F2] text-[#B91C1C] transition-all duration-300 group-hover:bg-[#B91C1C] group-hover:text-white">
                          <Icon
                            size={31}
                            strokeWidth={1.7}
                          />
                        </div>

                        <span className="text-sm font-bold text-slate-300">
                          0{index + 1}
                        </span>

                      </div>

                      <h3 className="mt-9 text-2xl font-black text-[#05051A] sm:text-3xl">
                        {item.title}
                      </h3>

                      <div className="mt-4 h-[2px] w-10 bg-[#B91C1C] transition-all duration-500 group-hover:w-20" />

                      <p className="mt-5 text-base leading-8 text-[#64748B] sm:text-lg">
                        {item.text}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </Container>
      </section>


      {/* =====================================================
          CUSTOMER SERVICE — LIGHT GRAY
      ====================================================== */}

  <section className="relative overflow-hidden bg-[#F8F9FA] py-10 sm:py-10 lg:py-10">
  {/* Subtle Background Decoration */}
  <div className="pointer-events-none absolute -left-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full border border-[#B91C1C]/10" />
  <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#B91C1C]/[0.025] blur-3xl" />

  <Container>
    <div className="relative w-full overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_15px_45px_rgba(5,5,26,0.05)]">

      {/* Left Red Accent */}
      <div className="absolute left-0 top-0 h-full w-1.5 bg-[#B91C1C]" />

      {/* Content */}
      <div className="relative px-7 py-8 sm:px-10 sm:py-9 lg:px-14 lg:py-10">

        {/* Decorative Number */}
        <span className="pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 text-[110px] font-black leading-none text-[#05051A]/[0.025] lg:block">
          02
        </span>

        <div className="relative z-10">

          {/* Label */}
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FEF2F2] text-sm font-black text-[#B91C1C]">
              02
            </span>

            <span className="h-px w-8 bg-[#B91C1C]" />

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#B91C1C] sm:text-base">
              Customer Service & Reception
            </p>
          </div>

          {/* Heading */}
          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#05051A] sm:text-4xl lg:text-5xl">
            Where Security Meets{" "}
            <span className="text-[#B91C1C]">
              Hospitality.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-5xl text-base leading-7 text-[#475569] sm:text-lg sm:leading-8 lg:text-xl">
            Beyond safeguarding physical assets, our security officers are
            trained to deliver exceptional customer service and reception
            support. We understand that professionalism and courtesy are
            essential in commercial environments.
          </p>

          {/* Bottom Line */}
          <div className="mt-6 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#B91C1C]" />

              <p className="text-sm font-bold text-[#05051A] sm:text-base">
                Professional service. Secure environment.
              </p>
            </div>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 sm:text-sm">
              PSS
            </span>

          </div>

        </div>
      </div>
    </div>
  </Container>
</section>


      {/* =====================================================
          OFFICERS CAN ASSIST — DARK
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#05051A] py-10 sm:py-10 lg:py-10">

        <div className="pointer-events-none absolute -right-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#B91C1C]/15 blur-[160px]" />

        <Container>

          <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

            {/* Content */}

            <div>

              <div className="flex items-center gap-4">

                <span className="text-7xl font-black text-[#B91C1C]/20">
                  05
                </span>

                <div className="h-px w-16 bg-[#B91C1C]" />

              </div>

              <p className="mt-7 text-base font-bold uppercase tracking-[0.25em] text-[#FCA5A5] sm:text-lg">
                Professional Support
              </p>

              <h2 className="mt-5 text-4xl font-black leading-[1.02] text-white sm:text-5xl lg:text-6xl">
                Our Officers Can
                <span className="block text-[#EF4444]">
                  Assist With:
                </span>
              </h2>

              <p className="mt-7 text-lg leading-8 text-white/55 sm:text-xl">
                Our team helps create a secure, organized, and professional
                environment while supporting visitors, tenants, employees,
                and guests.
              </p>

              <div className="mt-10">

                {officerSupport.map((item, index) => (

                  <div
                    key={item}
                    className="group flex items-center gap-5 border-b border-white/10 py-5"
                  >

                    <span className="text-sm font-black text-[#B91C1C]">
                      0{index + 1}
                    </span>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B91C1C] text-white">
                      <Check
                        size={17}
                        strokeWidth={3}
                      />
                    </div>

                    <span className="text-base leading-7 text-white/70 transition-colors group-hover:text-white sm:text-lg">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>


            {/* Image */}

            <div className="relative">

              <div className="absolute -bottom-8 -left-8 hidden h-40 w-40 border-b-2 border-l-2 border-[#B91C1C] lg:block" />

              <div className="relative overflow-hidden">

                <div className="relative h-[450px] sm:h-[600px]">

                  <Image
                    src="/service/service-officers.png"
                    alt="Professional customer service and security support"
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#05051A]/90 via-transparent to-transparent" />

                </div>

                <div className="absolute bottom-7 left-7 right-7">

                  <div className="flex items-center justify-between border border-white/15 bg-[#05051A]/85 p-6 backdrop-blur-xl">

                    <div>

                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FCA5A5]">
                        On-Site Support
                      </p>

                      <p className="mt-2 text-xl font-bold text-white">
                        Professional. Present. Prepared.
                      </p>

                    </div>

                    <Shield
                      size={38}
                      className="text-[#B91C1C]"
                    />

                  </div>

                </div>

              </div>

            </div>

          </div>

        </Container>
      </section>


      {/* =====================================================
          CTA — LIGHT
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-10 sm:py-10 lg:py-10">

        <Container>

          <div className="relative overflow-hidden bg-[#F3F4F6] px-8 py-14 sm:px-12 lg:px-16 lg:py-20">

            <div className="absolute left-0 top-0 h-full w-2 bg-[#B91C1C]" />

            <span className="pointer-events-none absolute -right-8 -top-20 text-[220px] font-black leading-none text-[#05051A]/[0.035]">
              06
            </span>

            <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-center">

              <div className="max-w-4xl">

                <p className="text-base font-bold uppercase tracking-[0.25em] text-[#B91C1C] sm:text-lg">
                  Ready to get started?
                </p>

                <h2 className="mt-5 text-4xl font-black leading-[1.02] tracking-tight text-[#05051A] sm:text-5xl lg:text-7xl">
                  Secure your space
                  <span className="block text-[#B91C1C]">
                    with confidence.
                  </span>
                </h2>

                <p className="mt-6 text-lg leading-8 text-[#64748B] sm:text-xl">
                  Tell us about your property, your requirements, and the
                  level of protection or support you need.
                </p>

              </div>

              <Link
  href="tel:+18674457900"
  className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#B91C1C] px-8 py-5 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#991B1B]"
>
  Schedule a Call

  <ArrowUpRight
    size={22}
    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
  />
</Link>

            </div>

          </div>

        </Container>
      </section>


      {/* =====================================================
          INDUSTRIES — DARK
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#05051A] py-10 sm:py-10 lg:py-10">

        <div className="pointer-events-none absolute -left-40 top-20 h-[550px] w-[550px] rounded-full bg-[#B91C1C]/10 blur-[150px]" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#B91C1C]/10 blur-[160px]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />

        <Container>

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">

            <div>

              <div className="mb-6 flex items-center gap-4">

                <span className="h-px w-14 bg-[#B91C1C]" />

                <p className="text-base font-bold uppercase tracking-[0.3em] text-[#FCA5A5] sm:text-lg">
                  Industries We Serve
                </p>

              </div>

              <h2 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-7xl">
                Protection across
                <span className="block text-[#B91C1C]">
                  different environments.
                </span>
              </h2>

            </div>

            <p className="text-lg leading-8 text-slate-400 sm:text-xl">
              Our security professionals provide dependable protection
              across a wide range of environments, properties, and
              operational settings.
            </p>

          </div>


          {/* Industry Cards */}

          <div className="relative z-10 mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-12">

            <IndustryCard
              industry={industries[0]}
              number="01"
              className="lg:col-span-7 lg:row-span-2"
              large
            />

            <IndustryCard
              industry={industries[1]}
              number="02"
              className="lg:col-span-5"
              variant="outline"
            />

            <IndustryCard
              industry={industries[2]}
              number="03"
              className="lg:col-span-5"
              variant="red"
            />

            <IndustryCard
              industry={industries[3]}
              number="04"
              className="lg:col-span-4"
              variant="minimal"
            />

            <IndustryCard
              industry={industries[4]}
              number="05"
              className="lg:col-span-4"
              variant="glass"
            />

            <IndustryCard
              industry={industries[5]}
              number="06"
              className="lg:col-span-4"
              variant="line"
            />

          </div>


          <div className="relative z-10 mt-16 border-t border-white/10 pt-8">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <p className="max-w-3xl text-base font-medium leading-8 text-slate-500 sm:text-lg">
                Professional security solutions designed around the
                environment, people, and risks that matter most.
              </p>

              <div className="flex items-center gap-3">

                <span className="h-2.5 w-2.5 rounded-full bg-[#B91C1C] shadow-[0_0_15px_rgba(185,28,28,0.7)]" />

                <span className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500 sm:text-base">
                  PSS
                </span>

              </div>

            </div>

          </div>

        </Container>
      </section>

    </main>
  );
}


/* =========================================================
   TRUST POINT
========================================================= */

function TrustPoint({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3">

      <Icon
        size={22}
        className="text-[#EF4444]"
      />

      <span className="text-base font-bold uppercase tracking-wider text-white/70 sm:text-lg">
        {text}
      </span>

    </div>
  );
}


/* =========================================================
   INDUSTRY CARD
========================================================= */

function IndustryCard({
  industry,
  number,
  className = "",
  variant = "default",
  large = false,
}) {

  const Icon = industry.icon;


  /* RED CARD */

  if (variant === "red") {
    return (
      <div
        className={`
          group relative overflow-hidden
          bg-[#B91C1C]
          p-7
          transition-all duration-500
          hover:-translate-y-1
          sm:p-8
          ${className}
        `}
      >

        <span className="absolute -right-5 -top-8 text-[110px] font-black leading-none text-white/[0.08]">
          {number}
        </span>

        <div className="relative z-10">

          <div className="flex items-center justify-between">

            <div className="flex h-14 w-14 items-center justify-center bg-white text-[#B91C1C]">
              <Icon size={29} />
            </div>

            <ArrowUpRight
              size={24}
              className="text-white/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
            />

          </div>

          <h3 className="mt-8 text-2xl font-black text-white sm:text-3xl">
            {industry.title}
          </h3>

          <p className="mt-4 max-w-md text-base leading-7 text-white/75 sm:text-lg">
            {industry.text}
          </p>

        </div>

      </div>
    );
  }


  /* OUTLINE CARD */

  if (variant === "outline") {
    return (
      <div
        className={`
          group relative overflow-hidden
          border border-white/15
          bg-transparent
          p-7
          transition-all duration-500
          hover:border-[#B91C1C]/60
          hover:bg-white/[0.035]
          sm:p-8
          ${className}
        `}
      >

        <div className="flex items-start justify-between">

          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#B91C1C]/40 text-[#FCA5A5] transition-all duration-500 group-hover:bg-[#B91C1C] group-hover:text-white">
            <Icon size={29} />
          </div>

          <span className="text-4xl font-black text-white/10">
            {number}
          </span>

        </div>

        <h3 className="mt-7 text-2xl font-black text-white sm:text-3xl">
          {industry.title}
        </h3>

        <p className="mt-4 max-w-lg text-base leading-7 text-slate-400 sm:text-lg">
          {industry.text}
        </p>

        <div className="mt-7 h-[2px] w-10 bg-[#B91C1C] transition-all duration-500 group-hover:w-20" />

      </div>
    );
  }


  /* MINIMAL CARD */

  if (variant === "minimal") {
    return (
      <div
        className={`
          group relative
          border-b border-white/15
          bg-[#08081E]
          p-7
          transition-all duration-500
          hover:border-[#B91C1C]
          sm:p-8
          ${className}
        `}
      >

        <div className="flex items-center gap-5">

          <span className="text-4xl font-black text-[#B91C1C]/40">
            {number}
          </span>

          <Icon
            size={31}
            strokeWidth={1.6}
            className="text-[#FCA5A5] transition-transform duration-500 group-hover:scale-110"
          />

        </div>

        <h3 className="mt-7 text-2xl font-black text-white">
          {industry.title}
        </h3>

        <p className="mt-4 text-base leading-7 text-slate-500">
          {industry.text}
        </p>

      </div>
    );
  }


  /* GLASS CARD */

  if (variant === "glass") {
    return (
      <div
        className={`
          group relative overflow-hidden
          border border-white/10
          bg-white/[0.035]
          p-7
          backdrop-blur-md
          transition-all duration-500
          hover:-translate-y-2
          hover:bg-white/[0.06]
          sm:p-8
          ${className}
        `}
      >

        <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[#B91C1C]/10 blur-[60px]" />

        <div className="relative z-10">

          <div className="flex items-center justify-between">

            <span className="text-5xl font-black text-white/[0.06]">
              {number}
            </span>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 text-[#FCA5A5]">
              <Icon size={29} />
            </div>

          </div>

          <h3 className="mt-7 text-2xl font-black text-white">
            {industry.title}
          </h3>

          <p className="mt-4 text-base leading-7 text-slate-400">
            {industry.text}
          </p>

        </div>

      </div>
    );
  }


  /* LINE CARD */

  if (variant === "line") {
    return (
      <div
        className={`
          group relative overflow-hidden
          border-l-4 border-[#B91C1C]
          bg-[#0B0B24]
          p-7
          transition-all duration-500
          hover:bg-[#10102D]
          sm:p-8
          ${className}
        `}
      >

        <div className="flex items-start justify-between">

          <div>

            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#B91C1C]">
              Industry
            </span>

            <h3 className="mt-4 text-2xl font-black text-white">
              {industry.title}
            </h3>

          </div>

          <span className="text-4xl font-black text-white/[0.06]">
            {number}
          </span>

        </div>

        <p className="mt-5 text-base leading-7 text-slate-400">
          {industry.text}
        </p>

      </div>
    );
  }


  /* LARGE CORPORATE CARD */

  return (
    <div
      className={`
        group relative overflow-hidden
        border border-white/10
        bg-[#0B0B24]
        p-8
        transition-all duration-500
        hover:border-[#B91C1C]/50
        sm:p-10
        ${className}
      `}
    >

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#B91C1C]/10 blur-[80px] transition-all duration-500 group-hover:bg-[#B91C1C]/20" />

      <div className="relative z-10 flex h-full flex-col justify-between">

        <div>

          <div className="flex items-start justify-between">

            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[#B91C1C]/30 bg-[#B91C1C]/10 text-[#FCA5A5] transition-all duration-500 group-hover:bg-[#B91C1C] group-hover:text-white">

              <Icon
                size={38}
                strokeWidth={1.6}
              />

            </div>

            <span className="text-7xl font-black leading-none text-white/[0.04]">
              {number}
            </span>

          </div>

          <h3 className="mt-14 text-3xl font-black text-white sm:text-4xl">
            {industry.title}
          </h3>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400 sm:text-xl">
            {industry.text}
          </p>

        </div>

        <div className="mt-12 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#FCA5A5]">

          <span className="h-2 w-2 rounded-full bg-[#B91C1C]" />

          Commercial Protection

        </div>

      </div>

    </div>
  );
}