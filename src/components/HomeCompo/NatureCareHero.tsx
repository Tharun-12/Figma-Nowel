
import React from "react";

const offers = [
  { icon: "leaf", text: "10% off for 10+ day stays" },
  { icon: "sprout", text: "10% off for 5+ day stays" },
  { icon: "heart", text: "Free nowal consultation" },
  { icon: "yoga", text: "Complimentary General Yoga session" },
];

function BotanicalIcon({
  type,
  className = "",
}: {
  type: string;
  className?: string;
}) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true as const,
  };

  switch (type) {
    case "leaf":
      return (
        <svg {...common}>
          <path d="M20 4C11 4 5 7 5 14a6 6 0 0 0 6 6c7 0 9-9 9-16Z" />
          <path d="M4 21c3-6 7-9 12-12" />
        </svg>
      );

    case "sprout":
      return (
        <svg {...common}>
          <path d="M12 21v-9" />
          <path d="M12 15C5 15 3 10 4 5c5 0 9 3 8 10Z" />
          <path d="M12 11c0-5 3-8 8-8 1 5-2 9-8 10" />
        </svg>
      );

    case "heart":
      return (
        <svg {...common} fill="currentColor" strokeWidth={1}>
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
        </svg>
      );

    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="2" />
          <circle cx="6" cy="10" r="2" />
          <circle cx="18" cy="10" r="2" />
          <circle cx="12" cy="15" r="2" />
          <path d="M12 7v6M8 10l3 4m5-4-3 4M8 12l2 2m6-2-2 2" />
          <path d="M8 21c0-3 2-4 4-4s4 1 4 4" />
        </svg>
      );
  }
}

function LeafDecoration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 130 180"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 168C48 130 65 85 100 12"
        stroke="currentColor"
        strokeWidth="1"
      />
      {[
        "M24 150C2 140 0 125 5 114C24 120 32 134 24 150Z",
        "M36 130C60 126 73 112 73 98C53 99 39 110 36 130Z",
        "M49 106C27 96 23 80 29 68C47 76 56 89 49 106Z",
        "M63 81C84 75 96 60 94 46C75 51 64 63 63 81Z",
        "M76 54C57 41 57 26 65 16C82 28 86 41 76 54Z",
        "M14 163C-2 149-12 153-17 163C-3 175 6 175 14 163Z",
      ].map((d, index) => (
        <path
          key={index}
          d={d}
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

export default function NatureCareHero() {
  return (
    <section className="nature-hero relative isolate min-h-screen overflow-hidden bg-[#061b12] text-white">
      {/* Landscape background */}
      <div
        className="nature-hero__landscape absolute inset-y-0 right-0 z-[-1] w-[64%]"
        role="img"
        aria-label="Luxury nature resort overlooking misty green mountains at sunset"
      />

      {/* Dark overlay behind the text */}
      <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-[#061b12] via-[#061b12]/95 to-transparent" />

      {/* Decorative botanical illustration */}
      <LeafDecoration className="pointer-events-none absolute -left-8 top-[44%] z-10 hidden h-40 w-28 text-[#b99a4c]/50 md:block" />

      {/* Main content */}
      <div className="nature-hero__content relative z-10 mx-auto flex min-h-[calc(100vh-60px)] max-w-[1600px] flex-col justify-center px-6 pb-12 pt-14 sm:px-10 lg:px-[6.5%] lg:pb-20 lg:pt-12">
        <div className="max-w-[520px]">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3 text-[#e7c46d]">
            <BotanicalIcon type="sprout" className="h-6 w-6" />
            <span className="text-[10px] font-medium uppercase tracking-[0.28em] sm:text-xs">
              Your Nature Escape
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-[clamp(2.5rem,4.1vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-[#fffaf0]">
            Breathe. Relax.
            <br />
            Reconnect here at
            <br />
            <span className="text-[#f0ce82]">
              Nowal NatureCare Resort
            </span>
          </h1>

          <p className="mt-5 max-w-[390px] text-sm leading-6 text-white/80 sm:text-base">
            Connect with nature and rediscover your balance.
          </p>

          {/* CTA buttons */}
          <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row">
            <a
              href="/accommodation"
              className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#e9c779] to-[#b58b3c] px-7 py-3 text-sm font-medium text-[#162014] shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e9c779]"
            >
              Explore the Resort
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>

            <a
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full border border-[#d6b76c] px-7 py-3 text-sm text-white transition duration-300 hover:bg-[#d6b76c]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e9c779]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                aria-hidden="true"
              >
                <rect x="3.5" y="5" width="17" height="16" rx="2" />
                <path d="M7.5 3v4M16.5 3v4M3.5 10h17" />
              </svg>
              Book Your Stay
            </a>
          </div>
        </div>
      </div>

      {/* Promotional bar */}
      <div className="nature-hero__offers absolute inset-x-6 bottom-0 z-20 mx-auto max-w-[1500px] rounded-t-[26px] border border-[#bba15a]/35 bg-[#061d14]/95 px-4 py-4 backdrop-blur-md sm:inset-x-8 sm:px-6 lg:inset-x-6 lg:px-8">
        <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {offers.map((offer, index) => (
            <div
              key={offer.text}
              className={`flex items-center gap-3 ${
                index > 0
                  ? "lg:border-l lg:border-[#c9a95b]/70 lg:pl-6"
                  : ""
              } ${index < 2 ? "lg:pr-5" : "lg:pr-2"}`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#c9ac5e]/50 bg-[#7b8745]/20 text-[#e7cb83]">
                <BotanicalIcon type={offer.icon} />
              </div>

              <p className="font-serif text-[12px] leading-5 text-[#f8f0dd] sm:text-[13px]">
                {offer.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
