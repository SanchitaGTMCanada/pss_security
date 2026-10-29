
import Link from "next/link";
import Container from "@/components/ui/Container";

const services = [
  {
    number: "01",
    title: "Security Services",
    href: "/services",
    image: "/homepage/security-services.jpeg",
  },
  {
    number: "02",
    title: "Customer Service / Reception",
    href: "/services",
    image: "/homepage/customer-services.jpeg",
  },
];

export default function ServicesPreview() {
  return (
    <section
      className="relative overflow-hidden bg-[#F4F4F4] py-7 sm:py-8 lg:py-9"
      id="services"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-[#A51F20]/6 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-[#303030]/5 blur-[100px]" />

      <Container>
        {/* Section Header */}
        <div className="mb-8 flex flex-col justify-between gap-3 lg:mb-9 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            {/* Section Label */}
            <div className="mb-2 flex items-center gap-2">
              <span className="h-px w-7 bg-[#A51F20]" />

              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A51F20]">
                Our Services
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold leading-tight tracking-tight text-[#171717] sm:text-3xl lg:text-4xl">
              Professional Services.
              <span className="block text-[#454545]">
                Commitment to 360° Protection
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-sm text-sm leading-6 text-[#454545]">
            From protecting your property to welcoming your customers, our
            trained professionals deliver dependable, tailored service.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-4 lg:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.number}
              href={service.href}
              className="group relative overflow-hidden rounded-2xl bg-[#171717] shadow-[0_12px_35px_rgba(23,23,23,0.12)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(23,23,23,0.18)]"
            >
              {/* Image */}
              <div className="relative h-[300px] overflow-hidden sm:h-[340px] lg:h-[360px]">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/45 to-[#171717]/5" />

                {/* Red Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#A51F20]/12 via-transparent to-transparent" />

                {/* Number */}
                <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#171717]/70 text-xs font-bold text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#A51F20] group-hover:bg-[#A51F20] sm:left-6 sm:top-6">
                  {service.number}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 lg:p-7">
                  {/* Red Accent */}
                  <div className="mb-3 h-1 w-8 bg-[#A51F20] transition-all duration-500 group-hover:w-14" />

                  {/* Title */}
                  <h3 className="max-w-lg text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl">
                    {service.title}
                  </h3>

                  {/* CTA */}
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white sm:text-sm">
                    <span>View More</span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#A51F20] transition-all duration-300 group-hover:translate-x-1.5 group-hover:bg-[#8F1B1C]">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}