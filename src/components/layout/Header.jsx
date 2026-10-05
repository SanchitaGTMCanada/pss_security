"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="border-b border-slate-200 bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between sm:h-24">
          {/* Logo */}
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

{/* Desktop Navigation */}
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

  <Link
    href="/services"
    className="text-lg font-medium text-slate-700 transition-all hover:text-[#B91C1C] hover:underline hover:underline-offset-4 hover:decoration-2"
  >
    Join Us
  </Link>

  <Link
    href="#contact"
    className="text-lg font-medium text-slate-700 transition-all hover:text-[#B91C1C] hover:underline hover:underline-offset-4 hover:decoration-2"
  >
    Contact Us
  </Link>

</nav>  {/* Desktop Book Now */}
          <div className="hidden justify-end lg:flex">
          <Link
  href="/contact"
  className="inline-flex items-center justify-center rounded-lg bg-[#B91C1C] px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#8F1111]"
>
  Book Now
</Link>
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
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

  <Link
    href="/services"
    onClick={closeMenu}
    className="border-b border-slate-100 py-4 text-lg font-medium text-slate-700"
  >
    Join Us
  </Link>

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
  );
}