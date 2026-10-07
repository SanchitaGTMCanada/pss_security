import Image from "next/image";
import Container from "@/components/ui/Container";

const teamMembers = [
  {
    name: "TANVEER SINGH",
    role: "GUARD",
    image:
      "/homepage/tanveer.png",
  },
  {
    name: "ALLAN SSENYONJO",
    role: "GUARD",
    image:
      "/homepage/allan.png",
  },
  {
    name: "Manjinder Singh",
    role: "GUARD",
    image:
      "/homepage/manjinder.png",
  },
];

export default function Team() {
  return (
    <section className="relative overflow-hidden bg-[#F7F7F5] py-16 sm:py-20 lg:py-24" id="team">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#B91C1C]/5 blur-[140px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#E5E7EB]/60 blur-[130px]" />

      <Container>

        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <div className="relative z-10 mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

          {/* LEFT */}

          <div>

            {/* Label */}

            <div className="mb-4 flex items-center gap-3">

              <span className="h-[2px] w-8 bg-[#B91C1C]" />

              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B91C1C]">
                Our Team
              </span>

            </div>

            {/* Heading */}

            <h2 className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-[#111111] sm:text-5xl lg:text-6xl">

             Meet Our

              <span className="block text-[#B91C1C]">
               Team
              </span>

            </h2>

          </div>

          {/* DESCRIPTION */}

          <p className="max-w-md text-sm leading-7 text-[#5F6368] sm:text-base lg:pb-1">

            Meet the professionals dedicated to delivering dependable
            security, exceptional service, and protection you can trust.

          </p>

        </div>

        {/* =================================================
            TEAM GRID
        ================================================== */}

        <div className="relative z-10 grid gap-5 md:grid-cols-3">

      {teamMembers.map((member, index) => (
  <div
    key={member.name}
    className="group relative overflow-hidden rounded-[26px] border border-black/[0.07] bg-white shadow-[0_15px_45px_rgba(0,0,0,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
  >
    {/* =================================================
        PHOTO
    ================================================== */}

    <div className="relative h-[500px] overflow-hidden sm:h-[540px] lg:h-[580px]">

      <Image
        src={member.image}
        alt={member.name}
        fill
        priority={index === 0}
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
        unoptimized
      />

      {/* =================================================
          IMAGE GRADIENT
      ================================================== */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

      {/* =================================================
          RED HOVER GLOW
      ================================================== */}

      <div className="absolute inset-0 bg-gradient-to-t from-[#B91C1C]/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* =================================================
          MEMBER NUMBER
      ================================================== */}

      <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/25 text-xs font-bold text-white backdrop-blur-md">
        0{index + 1}
      </div>

      {/* =================================================
          MEMBER INFORMATION
      ================================================== */}

      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">

        {/* NAME */}

        <h3 className="text-2xl font-bold text-white sm:text-3xl">
          {member.name}
        </h3>

        {/* ROLE */}

        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-white/80 sm:text-base">
          {member.role}
        </p>

        {/* Small line */}

        <div className="mt-4 h-[2px] w-10 bg-[#B91C1C] transition-all duration-500 group-hover:w-20" />

      </div>

    </div>

    {/* =================================================
        BOTTOM INFO
    ================================================== */}

    <div className="flex items-center justify-between px-5 py-4">

      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#777]">
        {member.role}
      </span>

      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-sm text-[#555] transition-all duration-300 group-hover:border-[#B91C1C] group-hover:bg-[#B91C1C] group-hover:text-white">
        →
      </div>

    </div>

    {/* =================================================
        BOTTOM RED LINE
    ================================================== */}

    <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#B91C1C] transition-all duration-500 group-hover:w-full" />

  </div>
))}

        </div>

        {/* =================================================
            BOTTOM STATEMENT
        ================================================== */}

     <div className="relative z-10 mt-10 flex flex-col justify-between gap-5 border-t border-black/10 pt-6 sm:flex-row sm:items-center">

  <div>
    <p className="text-lg font-semibold text-[#111111] sm:text-xl">
      Professional people. Reliable protection.
    </p>

    <p className="mt-2 text-base text-[#6B7280] sm:text-lg">
      A dedicated team ready to protect what matters most.
    </p>
  </div>

</div>

      </Container>

      {/* =====================================================
          BOTTOM ACCENT
      ====================================================== */}

      <div className="absolute bottom-0 left-0 h-[3px] w-24 bg-[#B91C1C]" />

    </section>
  );
}