
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Container from "@/components/ui/Container";

export default function BookingSection() {
  return (
    <section className="relative overflow-hidden bg-[#F4F4F4] py-20 sm:py-24 lg:py-32">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Red glow */}
        <div className="absolute -right-40 top-0 h-[600px] w-[600px] rounded-full bg-[#A51F20]/8 blur-[140px]" />

        {/* Graphite glow */}
        <div className="absolute bottom-0 -left-40 h-[500px] w-[500px] rounded-full bg-[#303030]/10 blur-[140px]" />

        {/* Subtle red center glow */}
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A51F20]/5 blur-[120px]" />

      </div>

      <Container>

        {/* =====================================================
            INTRO
        ====================================================== */}

        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

          <div>

            <div className="mb-6 flex items-center gap-3">

              <span className="h-[2px] w-12 bg-[#A51F20]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#A51F20]">
                Book Our Services
              </span>

            </div>

            <h2 className="max-w-2xl text-4xl font-black leading-[0.95] tracking-tight text-[#171717] sm:text-5xl lg:text-7xl">

              Let&apos;s make your

              <span className="block">
                <span className="text-[#A51F20]">next step</span>{" "}
                simple.
              </span>

            </h2>

          </div>

          <div className="lg:ml-auto lg:max-w-md">

            <p className="text-base leading-8 text-[#454545]">
              Looking for professional security or customer service
              personnel? Send us your requirements and our team will get back
              to you.
            </p>

          </div>

        </div>


        {/* =====================================================
            BOOKING AREA
        ====================================================== */}

        <div className="relative z-10 mt-16 grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">


          {/* =================================================
              LEFT INFORMATION COLUMN
          ================================================== */}

          <div className="group relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#A51F20] via-[#303030] to-[#171717] p-8 shadow-[0_25px_60px_rgba(23,23,23,0.25)] sm:p-10 lg:p-12">

            {/* Decorative glows */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E4A0A1]/20 blur-[80px]" />

            <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-black/30 blur-[80px]" />

            {/* Large decorative number */}

            <span className="pointer-events-none absolute -right-4 top-0 text-[180px] font-black leading-none text-white/[0.04]">
              01
            </span>

            <div className="relative z-10">

              {/* Icon */}

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:bg-[#A51F20]">

                <ShieldCheck
                  size={30}
                  className="text-white"
                  strokeWidth={1.5}
                />

              </div>


              {/* Heading */}

              <p className="mt-10 text-xs font-bold uppercase tracking-[0.25em] text-[#F0B5B6]">
                Why book with us?
              </p>

              <h3 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">

                Professional people.

                <span className="block text-[#F0B5B6]">
                  Dependable service.
                </span>

              </h3>


              {/* Description */}

              <p className="mt-5 text-sm leading-7 text-white/65">
                We understand that every environment is different. Our
                services are designed around your people, property and
                business requirements.
              </p>


              {/* Service summary */}

              <div className="mt-10 space-y-3">

                {/* Security */}

                <div className="group/item flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/[0.10]">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A51F20]/70">
                      <ShieldCheck
                        size={18}
                        className="text-white"
                      />
                    </div>

                    <div>

                      <p className="text-sm font-bold text-white">
                        Security Services
                      </p>

                      <p className="mt-1 text-xs text-white/45">
                        Professional protection
                      </p>

                    </div>

                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-[#F0B5B6] transition-transform group-hover/item:translate-x-1 group-hover/item:-translate-y-1"
                  />

                </div>


                {/* Reception */}

                <div className="group/item flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/[0.10]">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                      <Sparkles
                        size={18}
                        className="text-white"
                      />
                    </div>

                    <div>

                      <p className="text-sm font-bold text-white">
                        Customer Service / Reception
                      </p>

                      <p className="mt-1 text-xs text-white/45">
                        Professional front-of-house support
                      </p>

                    </div>

                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-[#F0B5B6] transition-transform group-hover/item:translate-x-1 group-hover/item:-translate-y-1"
                  />

                </div>

              </div>


              {/* Contact */}

              <div className="mt-10 border-t border-white/10 pt-7">

                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Prefer direct contact?
                </p>

                <div className="mt-5 space-y-4">

                  <div className="flex items-center gap-3 text-sm text-white/70">

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                      <Phone
                        size={16}
                        className="text-[#F0B5B6]"
                      />
                    </div>

                    <span>
                      Speak with our team
                    </span>

                  </div>


                  <div className="flex items-center gap-3 text-sm text-white/70">

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">

                      <Mail
                        size={16}
                        className="text-[#F0B5B6]"
                      />

                    </div>

                    <span>
                      Send us an enquiry
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              FORM
          ================================================== */}

          <div className="relative overflow-hidden rounded-[32px] border border-[#D9D9D9] bg-white p-7 shadow-[0_20px_50px_rgba(23,23,23,0.08)] sm:p-10 lg:p-12">

            {/* Red side accent */}

            <div className="absolute left-0 top-10 h-28 w-1 rounded-r-full bg-[#A51F20]" />

            {/* Decorative number */}

            <span className="pointer-events-none absolute -right-3 -top-10 text-[180px] font-black leading-none text-[#303030]/[0.045]">
              02
            </span>


            <div className="relative z-10">

              {/* Form header */}

              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#A51F20]">
                    Booking Request
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-[#171717] sm:text-3xl">
                    Tell us what you need
                  </h3>

                </div>

                <p className="max-w-xs text-xs leading-5 text-[#666666]">
                  Complete the form and our team will contact you.
                </p>

              </div>


              {/* Form */}

              <form className="mt-9 space-y-5">

                {/* Name */}

                <div>

                  <label
                    htmlFor="booking-name"
                    className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#666666]"
                  >
                    Full Name
                  </label>

                  <input
                    id="booking-name"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-[#D9D9D9] bg-[#F8F8F8] px-4 py-4 text-sm text-[#171717] outline-none transition-all placeholder:text-[#999999] focus:border-[#A51F20] focus:bg-white focus:ring-4 focus:ring-[#A51F20]/5"
                  />

                </div>


                {/* Email / Phone */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="booking-email"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#666666]"
                    >
                      Email Address
                    </label>

                    <input
                      id="booking-email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#D9D9D9] bg-[#F8F8F8] px-4 py-4 text-sm text-[#171717] outline-none transition-all placeholder:text-[#999999] focus:border-[#A51F20] focus:bg-white focus:ring-4 focus:ring-[#A51F20]/5"
                    />

                  </div>


                  <div>

                    <label
                      htmlFor="booking-phone"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#666666]"
                    >
                      Phone Number
                    </label>

                    <input
                      id="booking-phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="w-full rounded-xl border border-[#D9D9D9] bg-[#F8F8F8] px-4 py-4 text-sm text-[#171717] outline-none transition-all placeholder:text-[#999999] focus:border-[#A51F20] focus:bg-white focus:ring-4 focus:ring-[#A51F20]/5"
                    />

                  </div>

                </div>


                {/* Service */}

                <div>

                  <label
                    htmlFor="booking-service"
                    className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#666666]"
                  >
                    Service Required
                  </label>

                  <div className="relative">

                    <select
                      id="booking-service"
                      defaultValue=""
                      className="w-full cursor-pointer appearance-none rounded-xl border border-[#D9D9D9] bg-[#F8F8F8] px-4 py-4 pr-12 text-sm text-[#333333] outline-none transition-all focus:border-[#A51F20] focus:bg-white focus:ring-4 focus:ring-[#A51F20]/5"
                    >

                      <option value="" disabled>
                        Select a service
                      </option>

                      <option value="security-services">
                        Security Services
                      </option>

                      <option value="customer-service-reception">
                        Customer Service / Reception
                      </option>

                    </select>


                    <svg
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#777777]"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>

                  </div>

                </div>


                {/* Date / Time */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="booking-date"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#666666]"
                    >
                      Preferred Date
                    </label>

                    <div className="relative">

                      <CalendarDays
                        size={17}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#777777]"
                      />

                      <input
                        id="booking-date"
                        type="date"
                        className="w-full rounded-xl border border-[#D9D9D9] bg-[#F8F8F8] py-4 pl-11 pr-4 text-sm text-[#171717] outline-none transition-all focus:border-[#A51F20] focus:bg-white focus:ring-4 focus:ring-[#A51F20]/5"
                      />

                    </div>

                  </div>


                  <div>

                    <label
                      htmlFor="booking-time"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#666666]"
                    >
                      Preferred Time
                    </label>

                    <div className="relative">

                      <Clock3
                        size={17}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#777777]"
                      />

                      <input
                        id="booking-time"
                        type="time"
                        className="w-full rounded-xl border border-[#D9D9D9] bg-[#F8F8F8] py-4 pl-11 pr-4 text-sm text-[#171717] outline-none transition-all focus:border-[#A51F20] focus:bg-white focus:ring-4 focus:ring-[#A51F20]/5"
                      />

                    </div>

                  </div>

                </div>


                {/* Message */}

                <div>

                  <label
                    htmlFor="booking-message"
                    className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-[#666666]"
                  >
                    Additional Details
                  </label>

                  <textarea
                    id="booking-message"
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full resize-none rounded-xl border border-[#D9D9D9] bg-[#F8F8F8] px-4 py-4 text-sm text-[#171717] outline-none transition-all placeholder:text-[#999999] focus:border-[#A51F20] focus:bg-white focus:ring-4 focus:ring-[#A51F20]/5"
                  />

                </div>


                {/* Submit */}

                <button
                  type="submit"
                  className="group flex w-full items-center justify-between rounded-xl bg-[#A51F20] p-2 pl-6 text-sm font-bold text-white shadow-lg shadow-[#A51F20]/20 transition-all duration-300 hover:bg-[#171717]"
                >

                  <span>
                    Request a Booking
                  </span>

                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-[#A51F20] transition-transform duration-300 group-hover:translate-x-1">

                    <ArrowUpRight size={19} />

                  </span>

                </button>

              </form>

            </div>

          </div>

        </div>


        {/* =====================================================
            BOTTOM LINE
        ====================================================== */}

        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">

          <div className="flex items-center gap-3">

            <span className="h-2 w-2 rounded-full bg-[#A51F20] shadow-[0_0_8px_rgba(165,31,32,0.5)]" />

            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#666666]">
              Professional & Reliable
            </p>

          </div>

          <p className="text-xs text-[#888888]">
            Security • Customer Service • Reception
          </p>

        </div>

      </Container>

    </section>
  );
}
