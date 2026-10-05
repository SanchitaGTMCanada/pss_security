"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import Container from "@/components/ui/Container";

import {
  Mail,
  Phone,
  User,
  MessageSquare,
  Send,
} from "lucide-react";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      console.log("📩 Sending enquiry:", formData);

      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("📡 API status:", response.status);

      const result = await response.json();

      console.log("📨 API response:", result);

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send your enquiry."
        );
      }

      // SUCCESS POPUP
      await Swal.fire({
        icon: "success",
        title: "Enquiry Sent!",
        text: "Thank you for contacting us. Our team will get back to you shortly.",
        confirmButtonText: "Okay",
        confirmButtonColor: "#B91C1C",
        background: "#ffffff",
        color: "#05051A",
        customClass: {
          popup: "rounded-2xl",
          title: "text-2xl font-bold",
          confirmButton: "rounded-lg px-6 py-3",
        },
      });

      // Clear form only after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("❌ Enquiry submission error:", error);

      // ERROR POPUP
      Swal.fire({
        icon: "error",
        title: "Unable to Send",
        text:
          error.message ||
          "Something went wrong while sending your enquiry. Please try again.",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#B91C1C",
        background: "#ffffff",
        color: "#05051A",
        customClass: {
          popup: "rounded-2xl",
          title: "text-2xl font-bold",
          confirmButton: "rounded-lg px-6 py-3",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#05051A] py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-[#B91C1C]/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-[#B91C1C]/10 blur-[150px]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <Container>
        <div className="relative z-10 grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div>

            {/* Small Label */}
            <div className="mb-7 inline-flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#B91C1C]" />

              <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#FCA5A5]">
                Get In Touch
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s discuss your

              <span className="mt-2 block text-[#B91C1C]">
                security needs.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
              Tell us what you need and our team will get back to you with
              the right security solution for your property, people, or
              business.
            </p>

            {/* Contact Information */}
            <div className="mt-10 space-y-5">

              {/* Phone */}
              <a
                href="tel:+18674457900"
                className="group flex items-center gap-5"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-[#FCA5A5] transition-all duration-300 group-hover:border-[#B91C1C]/50 group-hover:bg-[#B91C1C]/10">
                  <Phone
                    size={24}
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Call Us
                  </p>

                  <p className="mt-1 text-lg font-bold text-white sm:text-xl">
                    +1 867-445-7900
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@preventativesecurityservices.ca"
                className="group flex items-center gap-5"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-[#FCA5A5] transition-all duration-300 group-hover:border-[#B91C1C]/50 group-hover:bg-[#B91C1C]/10">
                  <Mail
                    size={24}
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Email Us
                  </p>

                  <p className="mt-1 break-all text-lg font-bold text-white sm:text-xl">
                    info@preventativesecurityservices.ca
                  </p>
                </div>
              </a>

            </div>

            {/* Bottom Statement */}
            <div className="mt-10 border-l-2 border-[#B91C1C] pl-5">
              <p className="text-base font-semibold leading-7 text-slate-300 sm:text-lg">
                Professional people.
                <br />
                Reliable protection.
              </p>
            </div>

          </div>

          {/* =====================================================
              FORM
          ====================================================== */}

          <div className="relative">

            {/* Red Accent */}
            <div className="absolute -right-2 -top-2 h-20 w-20 border-r-2 border-t-2 border-[#B91C1C]" />

            <div className="relative rounded-[30px] border border-white/10 bg-[#0B0B24] p-7 shadow-2xl sm:p-10 lg:p-12">

              {/* Form Header */}
              <div className="mb-9">

                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B91C1C]/10 text-[#FCA5A5]">
                  <MessageSquare
                    size={26}
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="text-3xl font-black text-white sm:text-4xl">
                  Send an Enquiry
                </h3>

                <p className="mt-3 text-base leading-7 text-slate-400 sm:text-lg">
                  Fill in the details below and our team will contact you.
                </p>

              </div>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                {/* Full Name */}
                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-base font-semibold text-slate-200"
                  >
                    Full Name
                  </label>

                  <div className="relative">

                    <User
                      size={21}
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      disabled={isSubmitting}
                      className="h-14 w-full rounded-xl border border-white/10 bg-[#05051A] pl-14 pr-5 text-base text-white outline-none transition-all placeholder:text-slate-600 focus:border-[#B91C1C] focus:ring-2 focus:ring-[#B91C1C]/20 disabled:cursor-not-allowed disabled:opacity-60"
                    />

                  </div>

                </div>

                {/* Email + Phone */}
                <div className="grid gap-6 sm:grid-cols-2">

                  {/* Email */}
                  <div>

                    <label
                      htmlFor="email"
                      className="mb-2 block text-base font-semibold text-slate-200"
                    >
                      Email
                    </label>

                    <div className="relative">

                      <Mail
                        size={21}
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
                      />

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                        disabled={isSubmitting}
                        className="h-14 w-full rounded-xl border border-white/10 bg-[#05051A] pl-14 pr-4 text-base text-white outline-none transition-all placeholder:text-slate-600 focus:border-[#B91C1C] focus:ring-2 focus:ring-[#B91C1C]/20 disabled:cursor-not-allowed disabled:opacity-60"
                      />

                    </div>

                  </div>

                  {/* Phone */}
                  <div>

                    <label
                      htmlFor="phone"
                      className="mb-2 block text-base font-semibold text-slate-200"
                    >
                      Phone
                    </label>

                    <div className="relative">

                      <Phone
                        size={21}
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
                      />

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        required
                        disabled={isSubmitting}
                        className="h-14 w-full rounded-xl border border-white/10 bg-[#05051A] pl-14 pr-4 text-base text-white outline-none transition-all placeholder:text-slate-600 focus:border-[#B91C1C] focus:ring-2 focus:ring-[#B91C1C]/20 disabled:cursor-not-allowed disabled:opacity-60"
                      />

                    </div>

                  </div>

                </div>

                {/* Message */}
                <div>

                  <label
                    htmlFor="message"
                    className="mb-2 block text-base font-semibold text-slate-200"
                  >
                    Message
                  </label>

                  <div className="relative">

                    <MessageSquare
                      size={21}
                      className="absolute left-5 top-5 text-slate-500"
                    />

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your security requirements..."
                      required
                      disabled={isSubmitting}
                      rows={5}
                      className="w-full resize-none rounded-xl border border-white/10 bg-[#05051A] py-4 pl-14 pr-5 text-base leading-7 text-white outline-none transition-all placeholder:text-slate-600 focus:border-[#B91C1C] focus:ring-2 focus:ring-[#B91C1C]/20 disabled:cursor-not-allowed disabled:opacity-60"
                    />

                  </div>

                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#B91C1C] px-7 py-4 text-lg font-bold text-white shadow-lg shadow-red-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#991B1B] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >

                  {isSubmitting ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Enquiry

                      <Send
                        size={21}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </>
                  )}

                </button>

              </form>

              {/* Bottom Note */}
              <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-6">

                <span className="h-2.5 w-2.5 rounded-full bg-[#B91C1C]" />

                <p className="text-sm leading-6 text-slate-500 sm:text-base">
                  Your information will only be used to respond to your
                  enquiry.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Divider */}
        <div className="relative z-10 mt-16 border-t border-white/10 pt-7">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-base font-semibold text-slate-500 sm:text-lg">
              Preventative Security Services Ltd.
            </p>

            <div className="flex items-center gap-3">

              <span className="h-2 w-2 rounded-full bg-[#B91C1C]" />

              <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
                Professional • Reliable • Local
              </span>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}