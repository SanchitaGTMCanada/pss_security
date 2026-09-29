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
    <section className="relative overflow-hidden bg-[#f7f8fa] py-20 sm:py-24 lg:py-28">
      {/* Decorative Red Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#B91C1C]/5 blur-[100px]" />

      <Container>
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B91C1C]" />

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B91C1C]">
                What We Do
              </p>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#05051A] sm:text-4xl lg:text-5xl">
              Professional services.
              <span className="block text-slate-500">
                Built around people.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-slate-600">
            From protecting your property to welcoming your customers, our
            trained professionals provide dependable service tailored to your
            environment.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-7 lg:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group relative overflow-hidden rounded-[28px] bg-[#05051A] shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-[430px] overflow-hidden sm:h-[480px]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05051A] via-[#05051A]/50 to-transparent" />

                {/* Red Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#B91C1C]/10 via-transparent to-transparent" />

                {/* Number */}
                <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#05051A]/60 text-sm font-bold text-white backdrop-blur-md sm:left-8 sm:top-8">
                  {service.number}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
                  <div className="mb-4 h-1 w-10 bg-[#B91C1C] transition-all duration-500 group-hover:w-20" />

                  <h3 className="max-w-lg text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-white">
                    <span>Explore Service</span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B91C1C] transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Trust Strip */}
        <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B91C1C]/10">
              <span className="h-2.5 w-2.5 rounded-full bg-[#B91C1C]" />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#05051A]">
                Professional & Reliable
              </p>

              <p className="text-xs text-slate-500">
                Service you can depend on
              </p>
            </div>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#05051A] transition-colors hover:text-[#B91C1C]"
          >
            View All Services
            <span>→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}