
import React from "react";

const retreatFeatures = [
  {
    icon: "sprout",
    title: "Naturopathy First",
    description:
      "We are not a hotel with a spa. We are a certified naturopathy and Ayurveda centre with luxury accommodation — a fundamental difference that shapes every decision we make.",
  },
  {
    icon: "people",
    title: "Personalised Healing",
    description:
      "No two couples receive the same retreat. Every programme begins with a deep consultation to craft a healing journey specific to your bodies, your relationship, and your goals.",
  },
  {
    icon: "eco",
    title: "Eco & Organic Integration",
    description:
      "From our solar-powered eco-suites to our certified organic gardens and biodegradable spa products, sustainability is not a marketing promise — it is our operating philosophy.",
  },
];

function FeatureIcon({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      {...common}
      aria-hidden="true"
    >
      {type === "sprout" && (
        <>
          <path d="M12 21v-9" />
          <path d="M12 13C5 13 3 8 4 4c5 0 8 3 8 9Z" />
          <path d="M12 10c0-5 4-8 8-7 1 5-2 8-8 9" />
        </>
      )}

      {type === "people" && (
        <>
          <circle cx="9" cy="7" r="3" />
          <path d="M3 20v-2a6 6 0 0 1 12 0v2" />
          <path d="M16 5.5a3 3 0 0 1 0 5.8" />
          <path d="M18 14a5 5 0 0 1 3 4v2" />
        </>
      )}

      {type === "eco" && (
        <>
          <path d="m12 3 3 5h-6l3-5Z" />
          <path d="m7 9-4 7 5 1" />
          <path d="m17 9 4 7-5 1" />
          <path d="M8 17h8l-4 4-4-4Z" />
          <path d="m9 12 3 3 3-3" />
        </>
      )}
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M9 7h2M14 7h1M9 11h2M14 11h1M9 15h2M14 15h1M10 21v-3h4v3" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="9" width="18" height="12" rx="1.5" />
      <path d="M12 9v12M3 13h18M12 9H7.5a2.5 2.5 0 1 1 2.5-2.5V9ZM12 9h4.5A2.5 2.5 0 1 0 14 6.5V9Z" />
    </svg>
  );
}

export default function RetreatPackagesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f4ebdd] px-3 py-5 sm:px-5 sm:py-7 lg:px-6 lg:py-8">
      {/* Main banner */}
      <div className="relative mx-auto max-w-[1500px] overflow-hidden border border-[#d6c1a2]/50 bg-[#573c27] shadow-[0_12px_35px_rgba(69,45,24,0.13)]">
        {/* Background resort photograph */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2400&q=90')",
          }}
          aria-hidden="true"
        />

        {/* Warm cinematic overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#302014]/75 via-[#4c301b]/75 to-[#64472b]/90"
          aria-hidden="true"
        />

        {/* Subtle image shading */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20"
          aria-hidden="true"
        />

        {/* Main responsive layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.03fr_1fr]">
          {/* LEFT — Retreat package promotion */}
          <div className="relative flex min-h-[310px] items-center px-5 py-9 sm:min-h-[340px] sm:px-10 md:px-14 lg:min-h-[330px] lg:px-10 xl:px-14">
            {/* Organic brown backdrop */}
            <div
              className="absolute inset-y-3 left-0 hidden w-[88%] rounded-r-[48%] bg-[#815b32]/65 lg:block"
              aria-hidden="true"
            />

            <div className="relative z-10 w-full max-w-[470px]">
              {/* Badge icon */}
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#e9c990]/70 bg-[#c18a31] text-white shadow-md sm:h-10 sm:w-10">
                <BuildingIcon />
              </div>

              <h2 className="font-serif text-[34px] font-bold leading-[1.04] tracking-[-0.035em] text-[#fff8ed] sm:text-[43px] md:text-[48px] lg:text-[37px] xl:text-[44px]">
                Explore All
                <span className="block">Retreat Packages</span>
              </h2>

              <p className="mt-3 max-w-[390px] text-sm leading-relaxed text-white/85 sm:text-base lg:text-[13px] xl:text-sm">
                3-night, 5-night, and custom durations available for
                couples.
              </p>

              {/* Action buttons */}
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href="/contact"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#fffaf2] px-5 py-3 text-[10px] font-bold uppercase tracking-wide text-[#9a682e] shadow-[0_4px_15px_rgba(30,18,8,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ead5b6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#76512e] sm:px-6 sm:text-[11px]"
                >
                  Book Your Couple Retreat
                  <ArrowRight />
                </a>

                <a
                  href="/contact"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/45 bg-white/5 px-5 py-3 text-[10px] font-semibold uppercase tracking-wide text-white transition duration-300 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-5 sm:text-[11px]"
                >
                  <GiftIcon />
                  Explore Packages
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — Why Nowal is different */}
          <div className="relative flex flex-col justify-center px-4 pb-7 pt-3 sm:px-7 sm:pb-9 sm:pt-5 md:px-10 lg:px-5 lg:py-7 xl:px-8">
            {/* Heading */}
            <div className="mb-5 text-center">
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#d9b47b]/40 bg-[#fff9ee] px-3 py-1.5 text-[9px] font-semibold text-[#a8783d] shadow-sm">
                <span aria-hidden="true">♙</span>
                The Nowal Difference
              </div>

              <h3 className="font-serif text-[25px] font-bold leading-tight text-[#fff6e8] sm:text-[31px] lg:text-[23px] xl:text-[27px]">
                Why Nowal NatureCare Is Different
              </h3>

              <p className="mt-1.5 text-[11px] leading-relaxed text-white/80 sm:text-xs">
                Most luxury resorts offer comfort. We offer transformation.
              </p>
            </div>

            {/* Three feature cards */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-2.5 lg:gap-2 xl:gap-3">
              {retreatFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className="group flex min-w-0 flex-col rounded-[15px] border border-[#eadbc7] bg-[#fffaf2]/[0.97] p-4 shadow-[0_5px_18px_rgba(36,22,10,0.12)] transition duration-300 hover:-translate-y-1 hover:bg-white sm:min-h-[170px] sm:p-3 lg:min-h-[158px] lg:p-3 xl:min-h-[174px] xl:p-4"
                >
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#f6ead5] text-[#b78339] transition-colors group-hover:bg-[#eddbbc]">
                    <FeatureIcon type={feature.icon} />
                  </div>

                  <h4 className="font-serif text-[15px] font-bold leading-tight text-[#4b3826] sm:text-[12px] lg:text-[12px] xl:text-[14px]">
                    {feature.title}
                  </h4>

                  <p className="mt-1.5 text-[11px] leading-[1.55] text-[#786958] sm:text-[10px] lg:text-[9px] xl:text-[10px]">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
