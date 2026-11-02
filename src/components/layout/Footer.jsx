
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import Container from "@/components/ui/Container";

import {
  Mail,
  Phone,
  MapPin,
  User,
  MessageSquare,
  Send,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/people/Preventative-Security-Services-Ltd/61576388536208/",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/preventivesecurityservices/",
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/preventative-security-services/",
    icon: FaLinkedinIn,
  },
  {
    label: "X",
    href: "https://x.com/preventivess",
    icon: FaXTwitter,
  },
];

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#team" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Security Services", href: "/services" },
      {
        label: "Customer Service / Reception",
        href: "/services",
      },
    ],
  },
];

export default function Footer() {
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
      console.log("Sending enquiry:", formData);

      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("API status:", response.status);

      const result = await response.json();

      console.log("API response:", result);

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send your enquiry."
        );
      }

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

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Enquiry submission error:", error);

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
    <div className="relative overflow-hidden bg-[#05051A] text-white">

      {/* ================= CONTACT SECTION ================= */}

      <section
        id="contact"
        className="relative py-10 sm:py-12 lg:py-14"
      >
        {/* Background Glow */}

        <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-[#B91C1C]/10 blur-[120px]" />

        <Container>
          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">

            {/* CONTACT INFORMATION */}

            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-[2px] w-7 bg-[#B91C1C]" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FCA5A5]">
                  Get In Touch
                </span>
              </div>

              <h2 className="max-w-lg text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[42px]">
                Let&apos;s discuss your{" "}
                <span className="text-[#B91C1C]">
                  security needs.
                </span>
              </h2>

              <p className="mt-4 max-w-md text-base leading-7 text-slate-400">
                Tell us what you need. Our team will help you
                find the right security solution for your
                property, people, or business.
              </p>

              {/* CONTACT DETAILS */}

              <div className="mt-7 space-y-4">

                {/* PHONE */}

                <a
                  href="tel:+18674457900"
                  className="group flex items-center gap-3"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[#FCA5A5] transition-all group-hover:border-[#B91C1C] group-hover:bg-[#B91C1C] group-hover:text-white">
                    <Phone size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Call Us
                    </p>

                    <p className="mt-0.5 text-base font-semibold text-white">
                      +1 867-445-7900
                    </p>
                  </div>
                </a>

                {/* EMAIL */}

                <a
                  href="mailto:info@preventativesecurityservices.ca"
                  className="group flex items-center gap-3"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[#FCA5A5] transition-all group-hover:border-[#B91C1C] group-hover:bg-[#B91C1C] group-hover:text-white">
                    <Mail size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Email Us
                    </p>

                    <p className="mt-0.5 break-all text-sm font-semibold text-white sm:text-base">
                      info@preventativesecurityservices.ca
                    </p>
                  </div>
                </a>

                {/* OFFICE */}

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-[#FCA5A5]">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Office
                    </p>

                    <p className="mt-0.5 text-sm leading-6 text-slate-300">
                      P.O. Box 20072, 2nd Floor,
                      4910 – 50th Street, Yellowknife,
                      NT X1A 3X8
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* ================= ENQUIRY FORM ================= */}

            <div className="rounded-xl border border-white/10 bg-[#0B0B24] p-5 shadow-xl sm:p-7">

              <div className="mb-5">
                <h3 className="text-2xl font-bold text-white">
                  Send an Enquiry
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Share your requirements and we&apos;ll get
                  back to you.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >

                {/* FULL NAME */}

                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-semibold text-slate-300"
                  >
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={17}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
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
                      className="h-12 w-full rounded-lg border border-white/10 bg-[#05051A] pl-10 pr-4 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-[#B91C1C] focus:ring-2 focus:ring-[#B91C1C]/20 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* EMAIL + PHONE */}

                <div className="grid gap-4 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-semibold text-slate-300"
                    >
                      Email
                    </label>

                    <div className="relative">
                      <Mail
                        size={17}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
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
                        className="h-12 w-full rounded-lg border border-white/10 bg-[#05051A] pl-10 pr-3 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-[#B91C1C] focus:ring-2 focus:ring-[#B91C1C]/20 disabled:cursor-not-allowed disabled:opacity-60"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-semibold text-slate-300"
                    >
                      Phone
                    </label>

                    <div className="relative">
                      <Phone
                        size={17}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                      />

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        required
                        disabled={isSubmitting}
                        className="h-12 w-full rounded-lg border border-white/10 bg-[#05051A] pl-10 pr-3 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-[#B91C1C] focus:ring-2 focus:ring-[#B91C1C]/20 disabled:cursor-not-allowed disabled:opacity-60"
                      />
                    </div>
                  </div>

                </div>

                {/* MESSAGE */}

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-semibold text-slate-300"
                  >
                    Message
                  </label>

                  <div className="relative">
                    <MessageSquare
                      size={17}
                      className="absolute left-3.5 top-3.5 text-slate-500"
                    />

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your security requirements..."
                      required
                      disabled={isSubmitting}
                      rows={3}
                      className="w-full resize-none rounded-lg border border-white/10 bg-[#05051A] py-3 pl-10 pr-4 text-base leading-6 text-white outline-none transition placeholder:text-slate-500 focus:border-[#B91C1C] focus:ring-2 focus:ring-[#B91C1C]/20 disabled:cursor-not-allowed disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#B91C1C] px-5 py-3.5 text-base font-bold text-white transition-all duration-300 hover:bg-[#991B1B] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Enquiry

                      <Send
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>

                <p className="text-center text-xs leading-5 text-slate-500">
                  Your information will only be used to respond
                  to your enquiry.
                </p>

              </form>
            </div>

          </div>
        </Container>
      </section>



   
{/* ================= SLEEK FOOTER ================= */}

<footer
  id="footer"
  className="relative border-t border-white/[0.08]"
>
  <Container>
    <div className="grid gap-8 py-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.8fr] lg:gap-10">

      {/* BRAND */}

      <div>
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/images/logo.png"
            alt="Preventative Security Services"
            width={190}
            height={85}
            className="h-auto w-auto max-h-32 max-w-[195px] object-contain"
            unoptimized
          />
        </Link>

        <p className="mt-3 max-w-xs text-base leading-6 text-slate-400">
          Professional security and customer service
          solutions for safer business environments.
        </p>

        {/* SOCIAL LINKS */}

        <div className="mt-4 flex items-center gap-2.5">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-slate-400 transition-all hover:border-[#B91C1C] hover:bg-[#B91C1C] hover:text-white"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>

      {/* EXPLORE + SERVICES */}

      {footerLinks.map((group) => (
        <div key={group.title}>
          <h4 className="text-base font-bold uppercase tracking-[0.12em] text-white">
            {group.title}
          </h4>

          <div className="mt-4 space-y-3">
            {group.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-base leading-6 text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ))}

    </div>

    {/* COPYRIGHT BAR */}

    <div className="flex flex-col gap-3 border-t border-white/[0.08] py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

      <p>
        © {new Date().getFullYear()} Preventative Security
        Services Ltd. All rights reserved.
      </p>

      <p>
        Designed & Developed by GTM CANADA
      </p>

    </div>
  </Container>
</footer>


    </div>
  );
}
