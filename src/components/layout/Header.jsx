"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openJoinModal = () => {
    setIsMenuOpen(false);
    setIsJoinModalOpen(true);
  };

  const closeJoinModal = () => {
    setIsJoinModalOpen(false);
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsJoinModalOpen(false);
      }
    };

    if (isJoinModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isJoinModalOpen]);

  return (
    <>
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="border-b border-slate-200 bg-white">
        <Container>
          <div className="flex h-20 items-center justify-between sm:h-24">

            {/* =================================================
                LOGO
            ================================================= */}

            <div className="flex items-center justify-start">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Preventative Security Services"
                  width={310}
                  height={120}
                  priority
                  className="h-25 w-auto object-contain"
                />
              </Link>
            </div>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav className="hidden items-center justify-between gap-14 lg:flex">

              <Link
                href="/services"
                className="text-lg font-medium text-slate-700 transition-all hover:text-[#B91C1C] hover:underline hover:underline-offset-4 hover:decoration-2"
              >
                Services
              </Link>

              <Link
                href="#team"
                className="text-lg font-medium text-slate-700 transition-all hover:text-[#B91C1C] hover:underline hover:underline-offset-4 hover:decoration-2"
              >
                Team
              </Link>

              {/* JOIN US */}

              <button
                type="button"
                onClick={openJoinModal}
                className="text-lg font-medium text-slate-700 transition-all hover:text-[#B91C1C] hover:underline hover:underline-offset-4 hover:decoration-2"
              >
                Join Us
              </button>

              <Link
                href="#contact"
                className="text-lg font-medium text-slate-700 transition-all hover:text-[#B91C1C] hover:underline hover:underline-offset-4 hover:decoration-2"
              >
                Contact Us
              </Link>

            </nav>

            {/* =================================================
                DESKTOP BOOK NOW
            ================================================= */}

            <div className="hidden justify-end lg:flex">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#B91C1C] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#8F1111]"
              >
                Book Now
              </Link>
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-800 transition-colors hover:bg-slate-100 lg:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>

          {/* =================================================
              MOBILE MENU
          ================================================= */}

          {isMenuOpen && (
            <div className="border-t border-slate-200 py-5 lg:hidden">
              <nav className="flex flex-col">

                <Link
                  href="/services"
                  onClick={closeMenu}
                  className="border-b border-slate-100 py-4 text-lg font-medium text-slate-700"
                >
                  Services
                </Link>

                <Link
                  href="/team"
                  onClick={closeMenu}
                  className="border-b border-slate-100 py-4 text-lg font-medium text-slate-700"
                >
                  Team
                </Link>

                {/* MOBILE JOIN US */}

                <button
                  type="button"
                  onClick={openJoinModal}
                  className="border-b border-slate-100 py-4 text-left text-lg font-medium text-slate-700"
                >
                  Join Us
                </button>

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="border-b border-slate-100 py-4 text-lg font-medium text-slate-700"
                >
                  Contact Us
                </Link>

                {/* Mobile Book Now */}

                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="mt-5 inline-flex items-center justify-center rounded-lg bg-[#B91C1C] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#8F1111]"
                >
                  Book Now
                </Link>

              </nav>
            </div>
          )}
        </Container>
      </header>

      {/* =====================================================
          JOIN US MODAL
      ====================================================== */}

      {isJoinModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#05051A]/80 px-4 py-6 backdrop-blur-md"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              closeJoinModal();
            }
          }}
        >

          {/* =================================================
              MODAL CONTAINER
          ================================================= */}

          <div className="scrollbar-hide relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[28px] border border-white/10 bg-[#0B0B24] shadow-[0_25px_80px_rgba(0,0,0,0.5)]">

            {/* Red Glow */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#B91C1C]/20 blur-[100px]" />

            {/* =================================================
                CLOSE BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={closeJoinModal}
              aria-label="Close Join Us form"
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-[#B91C1C] hover:bg-[#B91C1C]"
            >
              <X size={24} />
            </button>

            {/* =================================================
                MODAL CONTENT
            ================================================= */}

            <div className="relative z-10 p-7 sm:p-10 lg:p-12">

              {/* =================================================
                  MODAL HEADER
              ================================================= */}

              <div className="mb-9 max-w-2xl">

                <div className="flex items-center gap-3">

                  <span className="h-2.5 w-2.5 rounded-full bg-[#B91C1C] shadow-[0_0_15px_rgba(185,28,28,0.8)]" />

                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#FCA5A5] sm:text-base">
                    Careers at PSS
                  </p>

                </div>

                <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">
                  Join Our
                  <span className="text-[#B91C1C]"> Team.</span>
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
                  Interested in becoming part of our professional security
                  team? Submit your information below and we will get in
                  touch with you.
                </p>

              </div>

              {/* =================================================
                  FORM
              ================================================= */}

              <form className="space-y-6">

                {/* Full Name */}

                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-base font-semibold text-white"
                  >
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    className="h-14 w-full rounded-xl border border-white/10 bg-white/[0.06] px-5 text-base text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#B91C1C] focus:bg-white/[0.08] focus:ring-2 focus:ring-[#B91C1C]/20"
                  />
                </div>

                {/* Email + Phone */}

                <div className="grid gap-6 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-base font-semibold text-white"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="h-14 w-full rounded-xl border border-white/10 bg-white/[0.06] px-5 text-base text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#B91C1C] focus:bg-white/[0.08] focus:ring-2 focus:ring-[#B91C1C]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-base font-semibold text-white"
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="h-14 w-full rounded-xl border border-white/10 bg-white/[0.06] px-5 text-base text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#B91C1C] focus:bg-white/[0.08] focus:ring-2 focus:ring-[#B91C1C]/20"
                    />
                  </div>

                </div>

                {/* Applying For */}

                <div>
                  <label
                    htmlFor="applyingFor"
                    className="mb-2 block text-base font-semibold text-white"
                  >
                    Applying For
                  </label>

                  <select
                    id="applyingFor"
                    name="applyingFor"
                    defaultValue=""
                    className="h-14 w-full rounded-xl border border-white/10 bg-[#11112D] px-5 text-base text-white outline-none transition-all focus:border-[#B91C1C] focus:ring-2 focus:ring-[#B91C1C]/20"
                  >
                    <option value="" disabled>
                      Select a position
                    </option>

                    <option value="security-guard">
                      Security Guard
                    </option>

                    <option value="security-supervisor">
                      Security Supervisor
                    </option>

                    <option value="customer-service">
                      Customer Service / Reception
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>

                {/* Upload CV */}

                <div>
                  <label
                    htmlFor="cv"
                    className="mb-2 block text-base font-semibold text-white"
                  >
                    Upload CV
                  </label>

                  <div className="rounded-xl border border-dashed border-white/15 bg-white/[0.03] p-4 transition-colors hover:border-[#B91C1C]/50">

                    <input
                      id="cv"
                      name="cv"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="block w-full cursor-pointer text-sm text-slate-400 file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-[#B91C1C] file:px-5 file:py-3 file:text-sm file:font-bold file:text-white hover:file:bg-[#991B1B]"
                    />

                  </div>
                </div>

                {/* Comment */}

                <div>
                  <label
                    htmlFor="comment"
                    className="mb-2 block text-base font-semibold text-white"
                  >
                    Comment
                  </label>

                  <textarea
                    id="comment"
                    name="comment"
                    rows={5}
                    placeholder="Tell us a little about yourself..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.06] px-5 py-4 text-base leading-7 text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#B91C1C] focus:bg-white/[0.08] focus:ring-2 focus:ring-[#B91C1C]/20"
                  />
                </div>

                {/* =================================================
                    BOTTOM ACTION
                ================================================= */}

                <div className="flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

                  <p className="max-w-md text-sm leading-6 text-slate-500">
                    Your information will be reviewed by our recruitment
                    team.
                  </p>

                  <button
                    type="submit"
                    className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#B91C1C] px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#991B1B] hover:shadow-[0_12px_30px_rgba(185,28,28,0.25)]"
                  >
                    Send Application

                    <ArrowUpRight
                      size={21}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>

                </div>

              </form>

            </div>
          </div>
        </div>
      )}
    </>
  );
}