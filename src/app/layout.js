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

const BASE_URL = "https://preventativesecurityservices.ca";

export const metadata = {
  /* =================================================
     BASE URL
  ================================================== */

  metadataBase: new URL(BASE_URL),

  /* =================================================
     SEO TITLE
  ================================================== */

  title: {
    default: "Security Services in Yellowknife, NWT | PSS",
    template: "%s | PSS",
  },

  /* =================================================
     META DESCRIPTION
  ================================================== */

  description:
    "Professional security guards, foot and vehicle patrols, access control, and reception support in Yellowknife and the Northwest Territories. Request a quote.",

  /* =================================================
     SEO KEYWORDS
  ================================================== */

  keywords: [
    "security services Yellowknife",
    "security guards Yellowknife",
    "security company Yellowknife",
    "security services NWT",
    "security guards NWT",
    "foot patrol Yellowknife",
    "vehicle patrol Yellowknife",
    "access control Yellowknife",
    "reception support Yellowknife",
    "security services Northwest Territories",
    "Preventative Security Services",
    "Preventative Security Services Ltd.",
    "PSS Yellowknife",
  ],

  /* =================================================
     AUTHOR
  ================================================== */

  authors: [
    {
      name: "Preventative Security Services Ltd.",
    },
  ],

  creator: "Preventative Security Services Ltd.",
  publisher: "Preventative Security Services Ltd.",

  /* =================================================
     CANONICAL URL
  ================================================== */

  alternates: {
    canonical: "/",
  },

  /* =================================================
     ROBOTS
  ================================================== */

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* =================================================
     FAVICON / COMPANY LOGO
     
     Existing file:
     public/images/logo.png

     Browser URL:
     /images/logo.png
  ================================================== */

  icons: {
    icon: [
      {
        url: "/images/logo.png",
        type: "image/png",
      },
    ],

    shortcut: "/images/logo.png",

    apple: "/images/logo.png",
  },

  /* =================================================
     OPEN GRAPH
  ================================================== */

  openGraph: {
    type: "website",

    locale: "en_CA",

    url: BASE_URL,

    siteName: "Preventative Security Services Ltd.",

    title: "Security Services in Yellowknife, NWT | PSS",

    description:
      "Professional security guards, foot and vehicle patrols, access control, and reception support in Yellowknife and the Northwest Territories. Request a quote.",

    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Preventative Security Services Ltd.",
      },
    ],
  },

  /* =================================================
     TWITTER / X
  ================================================== */

  twitter: {
    card: "summary_large_image",

    title: "Security Services in Yellowknife, NWT | PSS",

    description:
      "Professional security guards, foot and vehicle patrols, access control, and reception support in Yellowknife and the Northwest Territories. Request a quote.",

    images: ["/images/logo.png"],
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
            STRUCTURED DATA — PROFESSIONAL SERVICE
        ================================================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "ProfessionalService",

              "@id": `${BASE_URL}/#business`,

              name: "Preventative Security Services Ltd.",

              url: BASE_URL,

              telephone: "+1-867-445-7900",

              email: "info@preventativesecurityservices.ca",

              logo: `${BASE_URL}/images/logo.png`,

              image: `${BASE_URL}/images/logo.png`,

              description:
                "Professional security guards, foot and vehicle patrols, access control, and reception support in Yellowknife and the Northwest Territories.",

              address: {
                "@type": "PostalAddress",

                streetAddress:
                  "P.O. Box 20072, 2nd Floor, 4910 – 50th Street",

                addressLocality: "Yellowknife",

                addressRegion: "NT",

                postalCode: "X1A 3X8",

                addressCountry: "CA",
              },

              areaServed: [
                {
                  "@type": "City",
                  name: "Yellowknife",
                },

                {
                  "@type": "AdministrativeArea",
                  name: "Northwest Territories",
                },
              ],

              sameAs: [
                "https://www.facebook.com/people/Preventative-Security-Services-Ltd/61576388536208/",
                "https://www.instagram.com/preventivesecurityservices/",
                "https://www.linkedin.com/company/preventative-security-services/",
              ],
            }),
          }}
        />

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