"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isJoinUsOpen, setIsJoinUsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  const [resume, setResume] = useState(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // =====================================================
  // OPEN JOIN US
  // =====================================================

  const openJoinUs = () => {
    setIsMenuOpen(false);
    setIsJoinUsOpen(true);
    document.body.style.overflow = "hidden";
  };

  // =====================================================
  // CLOSE JOIN US
  // =====================================================

  const closeJoinUs = () => {
    if (isSubmitting) return;

    setIsJoinUsOpen(false);
    document.body.style.overflow = "";
  };

  // =====================================================
  // CLEANUP
  // =====================================================

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // =====================================================
  // ESCAPE KEY
  // =====================================================

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isJoinUsOpen && !isSubmitting) {
        setIsJoinUsOpen(false);
        document.body.style.overflow = "";
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isJoinUsOpen, isSubmitting]);

  // =====================================================
  // INPUT CHANGE
  // =====================================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // =====================================================
  // RESUME
  // =====================================================

  const handleResumeChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      setResume(null);
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Resume",
        text: "Only PDF, DOC and DOCX files are allowed.",
        confirmButtonColor: "#B91C1C",
      });

      event.target.value = "";
      setResume(null);

      return;
    }

    const maxFileSize = 5 * 1024 * 1024;

    if (file.size > maxFileSize) {
      Swal.fire({
        icon: "error",
        title: "File Too Large",
        text: "Your resume must be smaller than 5 MB.",
        confirmButtonColor: "#B91C1C",
      });

      event.target.value = "";
      setResume(null);

      return;
    }

    setResume(file);
  };

  // =====================================================
  // RESET FORM
  // =====================================================

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      message: "",
    });

    setResume(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // =====================================================
  // SUBMIT
  // =====================================================

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.position.trim() ||
      !formData.message.trim()
    ) {
      await Swal.fire({
        icon: "warning",
        title: "Incomplete Form",
        text: "Please complete all required fields.",
        confirmButtonColor: "#B91C1C",
      });

      return;
    }

    if (!resume) {
      await Swal.fire({
        icon: "warning",
        title: "Resume Required",
        text: "Please upload your resume before submitting.",
        confirmButtonColor: "#B91C1C",
      });

      return;
    }

    try {
      setIsSubmitting(true);

      const data = new FormData();

      data.append("name", formData.name.trim());
      data.append("email", formData.email.trim());
      data.append("phone", formData.phone.trim());
      data.append("position", formData.position.trim());
      data.append("message", formData.message.trim());
      data.append("resume", resume);

      const response = await fetch("/api/career", {
        method: "POST",
        body: data,
      });

      let result;

      try {
        result = await response.json();
      } catch {
        throw new Error("The server returned an invalid response.");
      }

      if (response.ok && result?.success === true) {
        setIsJoinUsOpen(false);
        document.body.style.overflow = "";

        resetForm();

        setIsSubmitting(false);

        await Swal.fire({
          icon: "success",
          title: "Application Submitted!",
          text:
            result.message ||
            "Your application has been submitted successfully.",
          confirmButtonColor: "#B91C1C",
          confirmButtonText: "Done",
        });

        return;
      }

      await Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text:
          result?.message ||
          "Unable to submit your application. Please try again.",
        confirmButtonColor: "#B91C1C",
      });
    } catch (error) {
      console.error("Career submission error:", error);

      await Swal.fire({
        icon: "error",
        title: "Something Went Wrong",
        text:
          error?.message ||
          "Unable to submit your application. Please try again.",
        confirmButtonColor: "#B91C1C",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* =====================================================
          STICKY HEADER
          
          IMPORTANT:
          Only "sticky top-0" has been added.
          No height, width, padding, logo size,
          colors, shadow or spacing are changed.
      ====================================================== */}

      <header className="sticky top-0 z-[1000] border-b border-slate-200 bg-white">
        <Container>

          {/* ORIGINAL HEIGHT — UNCHANGED */}
          <div className="flex h-20 items-center justify-between sm:h-24">

            {/* =================================================
                LOGO
            ================================================= */}

            <div className="flex items-center justify-start">
              <Link
                href="/"
                className="flex items-center"
              >
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
                href="/#team"
                className="text-lg font-medium text-slate-700 transition-all hover:text-[#B91C1C] hover:underline hover:underline-offset-4 hover:decoration-2"
              >
                Team
              </Link>

              {/* JOIN US */}

              <button
                type="button"
                onClick={openJoinUs}
                className="text-lg font-medium text-slate-700 transition-all hover:text-[#B91C1C] hover:underline hover:underline-offset-4 hover:decoration-2"
              >
                Join Us
              </button>

              <Link
                href="/#contact"
                className="text-lg font-medium text-slate-700 transition-all hover:text-[#B91C1C] hover:underline hover:underline-offset-4 hover:decoration-2"
              >
                Contact Us
              </Link>

            </nav>

            {/* =================================================
                BOOK NOW
            ================================================= */}

            <div className="hidden justify-end lg:flex">

              <Link
                href="/#contact"
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
              aria-label={
                isMenuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={isMenuOpen}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-800 transition-colors hover:bg-slate-100 lg:hidden"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>

          </div>

          {/* =====================================================
              MOBILE MENU
          ====================================================== */}

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
                  href="/#team"
                  onClick={closeMenu}
                  className="border-b border-slate-100 py-4 text-lg font-medium text-slate-700"
                >
                  Team
                </Link>

                <button
                  type="button"
                  onClick={openJoinUs}
                  className="border-b border-slate-100 py-4 text-left text-lg font-medium text-slate-700"
                >
                  Join Us
                </button>

                <Link
                  href="/#contact"
                  onClick={closeMenu}
                  className="border-b border-slate-100 py-4 text-lg font-medium text-slate-700"
                >
                  Contact Us
                </Link>

                <Link
                  href="/#contact"
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

      {isJoinUsOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 py-5 backdrop-blur-sm sm:py-8"
          onMouseDown={(event) => {
            if (
              event.target === event.currentTarget &&
              !isSubmitting
            ) {
              closeJoinUs();
            }
          }}
        >

          <div className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#08081C] shadow-[0_30px_100px_rgba(0,0,0,0.6)]">

            {/* =================================================
                MODAL HEADER
            ================================================= */}

            <div className="relative shrink-0 border-b border-white/10 bg-[#0D0D25] px-6 py-6 sm:px-8">

              <div className="pr-12">

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FCA5A5]">
                  Careers
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Join Our Team
                </h2>

                <p className="mt-2 max-w-2xl text-base leading-7 text-slate-400">
                  Interested in joining Preventative
                  Security Services? Send us your
                  details and resume.
                </p>

              </div>

              <button
                type="button"
                onClick={closeJoinUs}
                disabled={isSubmitting}
                aria-label="Close career form"
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition-all hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                <X size={22} />
              </button>

            </div>

            {/* =================================================
                FORM
            ================================================= */}

            <div
              className="overflow-y-auto px-6 py-7 sm:px-8"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* NAME + EMAIL */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="join-name"
                      className="mb-2 block text-sm font-bold text-white"
                    >
                      Full Name
                      <span className="ml-1 text-[#EF4444]">
                        *
                      </span>
                    </label>

                    <input
                      id="join-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-base text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#B91C1C] focus:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="join-email"
                      className="mb-2 block text-sm font-bold text-white"
                    >
                      Email Address
                      <span className="ml-1 text-[#EF4444]">
                        *
                      </span>
                    </label>

                    <input
                      id="join-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-base text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#B91C1C] focus:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                </div>

                {/* PHONE + POSITION */}

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="join-phone"
                      className="mb-2 block text-sm font-bold text-white"
                    >
                      Phone Number
                      <span className="ml-1 text-[#EF4444]">
                        *
                      </span>
                    </label>

                    <input
                      id="join-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-base text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#B91C1C] focus:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="join-position"
                      className="mb-2 block text-sm font-bold text-white"
                    >
                      Applying For
                      <span className="ml-1 text-[#EF4444]">
                        *
                      </span>
                    </label>

                    <input
                      id="join-position"
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      placeholder="Enter position"
                      disabled={isSubmitting}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-base text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#B91C1C] focus:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                </div>

                {/* MESSAGE */}

                <div>
                  <label
                    htmlFor="join-message"
                    className="mb-2 block text-sm font-bold text-white"
                  >
                    Message
                    <span className="ml-1 text-[#EF4444]">
                      *
                    </span>
                  </label>

                  <textarea
                    id="join-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us a little about yourself..."
                    disabled={isSubmitting}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-base leading-7 text-white outline-none transition-all placeholder:text-slate-500 focus:border-[#B91C1C] focus:bg-white/[0.08] disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                {/* RESUME */}

                <div>

                  <label className="mb-2 block text-sm font-bold text-white">
                    Resume
                    <span className="ml-1 text-[#EF4444]">
                      *
                    </span>
                  </label>

                  <label
                    htmlFor="join-resume"
                    className={`
                      flex cursor-pointer items-center gap-4
                      rounded-xl border border-dashed
                      border-white/15
                      bg-white/[0.04]
                      px-5 py-5
                      transition-all
                      ${
                        isSubmitting
                          ? "pointer-events-none opacity-50"
                          : "hover:border-[#B91C1C]/60 hover:bg-[#B91C1C]/5"
                      }
                    `}
                  >

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#B91C1C]/10 text-xl text-[#FCA5A5]">
                      ↑
                    </div>

                    <div className="min-w-0">

                      <p className="truncate text-sm font-bold text-white sm:text-base">
                        {resume
                          ? resume.name
                          : "Upload your resume"}
                      </p>

                      <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                        PDF, DOC or DOCX · Maximum 5 MB
                      </p>

                    </div>

                    <input
                      ref={fileInputRef}
                      id="join-resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleResumeChange}
                      disabled={isSubmitting}
                      className="hidden"
                    />

                  </label>

                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#B91C1C] px-6 py-4 text-base font-bold text-white shadow-lg shadow-red-950/20 transition-all duration-300 hover:bg-[#991B1B] disabled:cursor-not-allowed disabled:opacity-60"
                >

                  {isSubmitting ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                      Submitting Application...
                    </>
                  ) : (
                    <>
                      Submit Application

                      <span className="text-xl">
                        →
                      </span>
                    </>
                  )}

                </button>

                <p className="text-center text-xs leading-5 text-slate-500">
                  Your information will be securely reviewed
                  by our recruitment team.
                </p>

              </form>

            </div>

          </div>

          <style jsx global>{`
            .overflow-y-auto::-webkit-scrollbar {
              display: none;
            }
          `}</style>

        </div>
      )}
    </>
  );
}