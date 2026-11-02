import Image from "next/image";
import Container from "@/components/ui/Container";

const teamMembers = [
  {
    name: "TANVEER SINGH",
    role: "GUARD",
    image: "/homepage/tanveer.png",
  },
  {
    name: "ALLAN SSENYONJO",
    role: "GUARD",
    image: "/homepage/allan.png",
  },
  {
    name: "MANJINDER SINGH",
    role: "GUARD",
    image: "/homepage/manjinder.png",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#F7F7F5] py-8 sm:py-10"
    >
      {/* Background */}
      <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-[#B91C1C]/5 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#E5E7EB]/60 blur-[110px]" />

      <Container>
        {/* Section Header */}
        <div className="relative z-10 mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">

          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#B91C1C]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B91C1C]">
                Our Team
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#111111] sm:text-4xl">
              Meet Our{" "}
              <span className="text-[#B91C1C]">Team</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#5F6368]">
            Meet the professionals dedicated to dependable security,
            exceptional service, and protection you can trust.
          </p>
        </div>

        {/* Team Grid */}
        <div className="relative z-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)]"
            >
              {/* Photo */}
              <div className="relative h-[300px] overflow-hidden sm:h-[320px] lg:h-[350px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  priority={index === 0}
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  unoptimized
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#B91C1C]/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Number */}
                <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/30 text-[11px] font-bold text-white backdrop-blur-md">
                  0{index + 1}
                </div>

                {/* Member Details */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75">
                    {member.role}
                  </p>

                  <div className="mt-3 h-[2px] w-8 bg-[#B91C1C] transition-all duration-300 group-hover:w-14" />
                </div>
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#B91C1C] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="relative z-10 mt-7 flex flex-col gap-1 border-t border-black/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base font-semibold text-[#111111]">
            Professional people. Reliable protection.
          </p>

          <p className="text-sm text-[#6B7280]">
            A dedicated team ready to protect what matters most.
          </p>
        </div>
      </Container>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-[3px] w-80 bg-[#B91C1C]" />
    </section>
  );
}