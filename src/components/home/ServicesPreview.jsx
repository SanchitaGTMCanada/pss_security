
import Link from "next/link";
import Container from "@/components/ui/Container";

const services = [
  {
    number: "01",
    title: "Security Services",
    description:
      "Professional security personnel and protection solutions designed to help keep your people, property, and business safe.",
    href: "/services/security",
    image:
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    title: "Customer Service / Reception",
    description:
      "Professional reception and customer service personnel creating a welcoming, organized, and secure experience for every visitor.",
    href: "/services/customer-service-reception",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function ServicesPreview() {
  return (
    <section className="relative overflow-hidden bg-[#F4F4F4] py-20 sm:py-24 lg:py-28">

      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#A51F20]/6 blur-[110px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#303030]/5 blur-[110px]" />

      <Container>

        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <div className="mb-14 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">

          <div className="max-w-3xl">

            {/* Section Label */}

            <div className="mb-4 flex items-center gap-3">

              <span className="h-px w-10 bg-[#A51F20]" />

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#A51F20]">
                What We Do
              </p>

            </div>

            {/* Heading */}

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#171717] sm:text-4xl lg:text-5xl">

              Professional services.

              <span className="block text-[#454545]">
                Built around people.
              </span>

            </h2>

          </div>

          {/* Description */}

          <p className="max-w-md text-base leading-7 text-[#454545]">
            From protecting your property to welcoming your customers, our
            trained professionals provide dependable service tailored to your
            environment.
          </p>

        </div>

        {/* =================================================
            SERVICE CARDS
        ================================================== */}

        <div className="grid gap-7 lg:grid-cols-2">

          {services.map((service) => (

            <Link
              key={service.number}
              href={service.href}
              className="group relative overflow-hidden rounded-[28px] bg-[#171717] shadow-[0_20px_50px_rgba(23,23,23,0.14)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(23,23,23,0.20)]"
            >

              {/* =================================================
                  IMAGE
              ================================================== */}

              <div className="relative h-[430px] overflow-hidden sm:h-[480px]">

                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* =================================================
                    IMAGE OVERLAY
                ================================================== */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/55 to-[#171717]/5" />

                {/* =================================================
                    SUBTLE RED OVERLAY
                ================================================== */}

                <div className="absolute inset-0 bg-gradient-to-br from-[#A51F20]/12 via-transparent to-transparent" />

                {/* =================================================
                    NUMBER
                ================================================== */}

                <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#171717]/70 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#A51F20] group-hover:bg-[#A51F20] sm:left-8 sm:top-8">
                  {service.number}
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">

                  {/* Red Accent */}

                  <div className="mb-4 h-1 w-10 bg-[#A51F20] transition-all duration-500 group-hover:w-20" />

                  {/* Title */}

                  <h3 className="max-w-lg text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 max-w-lg text-sm leading-7 text-[#F4F4F4]/75 sm:text-base">
                    {service.description}
                  </p>

                  {/* =================================================
                      CTA
                  ================================================== */}

                  <div className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-white">

                    <span>
                      Explore Service
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#A51F20] transition-all duration-300 group-hover:translate-x-2 group-hover:bg-[#8F1B1C]">
                      →
                    </span>

                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

        {/* =================================================
            BOTTOM TRUST STRIP
        ================================================== */}

        <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-[#303030]/10 bg-white px-6 py-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">

          {/* Trust Information */}

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A51F20]/10">

              <span className="h-2.5 w-2.5 rounded-full bg-[#A51F20] shadow-[0_0_10px_rgba(165,31,32,0.35)]" />

            </div>

            <div>

              <p className="text-sm font-semibold text-[#171717]">
                Professional & Reliable
              </p>

              <p className="text-xs text-[#454545]/70">
                Service you can depend on
              </p>

            </div>

          </div>

          {/* All Services */}

          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#171717] transition-colors hover:text-[#A51F20]"
          >

            View All Services

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

          </Link>

        </div>

      </Container>
    </section>
  );
}
