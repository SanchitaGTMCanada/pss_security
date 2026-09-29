import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";

export default function BookingSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[#B91C1C]/5 blur-[130px]" />

        <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-[#05051A]/5 blur-[120px]" />
      </div>

      <Container>
        {/* =====================================================
            INTRO
        ====================================================== */}

        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#B91C1C]" />

              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#B91C1C]">
                Book Our Services
              </span>
            </div>

            <h2 className="max-w-2xl text-4xl font-black leading-[0.95] tracking-tight text-[#05051A] sm:text-5xl lg:text-7xl">
              Let&apos;s make your
              <span className="block">
                <span className="text-[#B91C1C]">next step</span> simple.
              </span>
            </h2>
          </div>

          <div className="lg:ml-auto lg:max-w-md">
            <p className="text-base leading-8 text-slate-600">
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

          <div className="relative overflow-hidden rounded-[32px] bg-[#05051A] p-8 sm:p-10 lg:p-12">
            {/* Decorative red circle */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#B91C1C]/30 blur-[80px]" />

            <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#B91C1C]/10 blur-[80px]" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B91C1C] shadow-xl shadow-red-950/30">
                <ShieldCheck
                  size={30}
                  className="text-white"
                  strokeWidth={1.5}
                />
              </div>

              <p className="mt-10 text-xs font-bold uppercase tracking-[0.25em] text-[#FCA5A5]">
                Why book with us?
              </p>

              <h3 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Professional people.
                <span className="block text-[#FCA5A5]">
                  Dependable service.
                </span>
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                We understand that every environment is different. Our
                services are designed around your people, property and
                business requirements.
              </p>

              {/* Service summary */}
              <div className="mt-10 space-y-3">
                <div className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all hover:border-[#B91C1C]/50 hover:bg-white/[0.07]">
                  <div>
                    <p className="text-sm font-bold text-white">
                      Security Services
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Professional protection
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-[#FCA5A5] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <div className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all hover:border-[#B91C1C]/50 hover:bg-white/[0.07]">
                  <div>
                    <p className="text-sm font-bold text-white">
                      Customer Service / Reception
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Professional front-of-house support
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-[#FCA5A5] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>

              {/* Contact */}
              <div className="mt-10 border-t border-white/10 pt-7">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Prefer direct contact?
                </p>

                <div className="mt-5 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">
                      <Phone
                        size={16}
                        className="text-[#FCA5A5]"
                      />
                    </div>

                    <span>Speak with our team</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5">
                      <Mail
                        size={16}
                        className="text-[#FCA5A5]"
                      />
                    </div>

                    <span>Send us an enquiry</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              FORM
          ================================================== */}

          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-[#F7F7F5] p-7 sm:p-10 lg:p-12">
            {/* Red accent */}
            <div className="absolute left-0 top-10 h-24 w-1 rounded-r-full bg-[#B91C1C]" />

            {/* Decorative number */}
            <span className="pointer-events-none absolute -right-2 -top-10 text-[180px] font-black leading-none text-slate-200/60">
              01
            </span>

            <div className="relative z-10">
              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#B91C1C]">
                    Booking Request
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-[#05051A] sm:text-3xl">
                    Tell us what you need
                  </h3>
                </div>

                <p className="max-w-xs text-xs leading-5 text-slate-500">
                  Complete the form and our team will contact you.
                </p>
              </div>

              <form className="mt-9 space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="booking-name"
                    className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-500"
                  >
                    Full Name
                  </label>

                  <input
                    id="booking-name"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm text-[#05051A] outline-none transition-all placeholder:text-slate-400 focus:border-[#B91C1C] focus:ring-4 focus:ring-[#B91C1C]/5"
                  />
                </div>

                {/* Email / Phone */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="booking-email"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-500"
                    >
                      Email Address
                    </label>

                    <input
                      id="booking-email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm text-[#05051A] outline-none transition-all placeholder:text-slate-400 focus:border-[#B91C1C] focus:ring-4 focus:ring-[#B91C1C]/5"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-500"
                    >
                      Phone Number
                    </label>

                    <input
                      id="booking-phone"
                      type="tel"
                      placeholder="Your phone number"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm text-[#05051A] outline-none transition-all placeholder:text-slate-400 focus:border-[#B91C1C] focus:ring-4 focus:ring-[#B91C1C]/5"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="booking-service"
                    className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-500"
                  >
                    Service Required
                  </label>

                  <div className="relative">
                    <select
                      id="booking-service"
                      defaultValue=""
                      className="w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white px-4 py-4 pr-12 text-sm text-slate-700 outline-none transition-all focus:border-[#B91C1C] focus:ring-4 focus:ring-[#B91C1C]/5"
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
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
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
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-500"
                    >
                      Preferred Date
                    </label>

                    <div className="relative">
                      <CalendarDays
                        size={17}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        id="booking-date"
                        type="date"
                        className="w-full rounded-xl border border-slate-200 bg-white py-4 pl-11 pr-4 text-sm text-[#05051A] outline-none transition-all focus:border-[#B91C1C] focus:ring-4 focus:ring-[#B91C1C]/5"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="booking-time"
                      className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-500"
                    >
                      Preferred Time
                    </label>

                    <div className="relative">
                      <Clock3
                        size={17}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        id="booking-time"
                        type="time"
                        className="w-full rounded-xl border border-slate-200 bg-white py-4 pl-11 pr-4 text-sm text-[#05051A] outline-none transition-all focus:border-[#B91C1C] focus:ring-4 focus:ring-[#B91C1C]/5"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="booking-message"
                    className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-slate-500"
                  >
                    Additional Details
                  </label>

                  <textarea
                    id="booking-message"
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-4 text-sm text-[#05051A] outline-none transition-all placeholder:text-slate-400 focus:border-[#B91C1C] focus:ring-4 focus:ring-[#B91C1C]/5"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-between rounded-xl bg-[#B91C1C] p-2 pl-6 text-sm font-bold text-white shadow-lg shadow-red-900/10 transition-all duration-300 hover:bg-[#05051A]"
                >
                  <span>Request a Booking</span>

                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-[#B91C1C] transition-transform duration-300 group-hover:translate-x-1">
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
            <span className="h-2 w-2 rounded-full bg-[#B91C1C]" />

            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Professional & Reliable
            </p>
          </div>

          <p className="text-xs text-slate-400">
            Security • Customer Service • Reception
          </p>
        </div>
      </Container>
    </section>
  );
}