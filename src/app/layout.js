import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Preventative Security Services",
    template: "%s | Preventative Security Services",
  },

  description:
    "Preventative Security Services provides professional, reliable, and customized security solutions for businesses, properties, events, and communities.",

  keywords: [
    "security services",
    "security guards",
    "security company",
    "preventative security",
    "professional security services",
    "Canada security services",
  ],

  authors: [
    {
      name: "Preventative Security Services",
    },
  ],

  creator: "Preventative Security Services",
  publisher: "Preventative Security Services",

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F7F5] text-[#111827]">

        {/* =================================================
            HEADER
        ================================================== */}

        <Header />

        {/* =================================================
            MAIN CONTENT
        ================================================== */}

        <main className="flex-1">
          {children}
        </main>

        {/* =================================================
            FOOTER
        ================================================== */}

        <Footer />

      </body>
    </html>
  );
}