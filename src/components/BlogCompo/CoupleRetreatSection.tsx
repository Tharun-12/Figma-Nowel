
import React from "react";

const philosophyItems = [
  {
    icon: "leaf",
    title: "Traditional Healing",
    description:
      "Ayurveda, naturopathy, and ancient Rajasthani wellness wisdom.",
  },
  {
    icon: "tree",
    title: "Slow Living",
    description:
      "No digital noise — only open skies and the rhythm of nature.",
  },
  {
    icon: "heart",
    title: "Family Hospitality",
    description:
      "Warm, personal care that creates deeply human experiences.",
  },
  {
    icon: "sparkles",
    title: "Spiritual Rajasthan",
    description:
      "Near Khatu Shyam Ji & Salasar Balaji for spiritual calm.",
  },
];

function FeatureIcon({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      {...common}
      aria-hidden="true"
    >
      {type === "leaf" && (
        <>
          <path d="M20 4C10 4 5 8 5 14a5 5 0 0 0 5 5c6 0 10-7 10-15Z" />
          <path d="M4 21c3-6 7-9 12-12" />
        </>
      )}
      {type === "tree" && (
        <>
          <path d="M12 21V11" />
          <path d="m12 3-6 7h4l-5 5h14l-5-5h4l-6-7Z" />
          <path d="M8 21h8" />
        </>
      )}
      {type === "heart" && (
        <path d="M20 8c0 5-8 11-8 11S4 13 4 8a4 4 0 0 1 8-1 4 4 0 0 1 8 1Z" />
      )}
      {type === "sparkles" && (
        <>
          <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
          <path d="m19 14 1.1 2.9L23 18l-2.9 1.1L19 22l-1.1-2.9L15 18l2.9-1.1L19 14Z" />
        </>
      )}
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.8 8.8c0 4.5-8.8 10-8.8 10s-8.8-5.5-8.8-10a4.6 4.6 0 0 1 8.8-1.5 4.6 4.6 0 0 1 8.8 1.5Z" />
    </svg>
  );
}

export default function CoupleRetreatSection() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#f5ecdc] px-4 py-10 text-[#37332c] sm:px-6 sm:py-14 md:px-8 lg:px-10 lg:py-16">
      {/* Warm background glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 18% 40%, #fffdf8 0%, transparent 46%), radial-gradient(ellipse at 85% 55%, #eee0c8 0%, transparent 55%)",
        }}
      />

      <div className="mx-auto max-w-[1120px]">
        {/* Main heading */}
        <header className="mx-auto mb-8 max-w-[760px] text-center sm:mb-10 lg:mb-12">
          <h1 className="font-serif text-[35px] font-bold leading-[1.03] tracking-[-0.045em] text-[#080807] sm:text-5xl md:text-[58px] lg:text-[64px]">
            How to Plan the Perfect
            <br className="hidden sm:block" />{" "}
            Couple Retreat Near
            <br className="hidden sm:block" />{" "}
            Jaipur
          </h1>
        </header>

        {/* Two content panels */}
        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-6 lg:gap-7">
          {/* Left panel */}
          <article className="flex min-w-0 flex-col rounded-[26px] border border-white/50 bg-white/55 p-5 shadow-[0_8px_40px_rgba(113,91,53,0.035)] backdrop-blur-sm sm:rounded-[30px] sm:p-7 lg:p-8">
            {/* Label */}
            <div className="mb-5 inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-[#eee3d1] bg-white/90 px-3 py-1.5 text-[10px] font-medium tracking-wide text-[#b88a4b] sm:text-[11px]">
              <HeartIcon />
              <span>Luxury Couple Wellness Retreat</span>
            </div>

            {/* Quote */}
            <blockquote className="mb-6 border-l-[3px] border-[#c28c43] py-1 pl-4 text-[13px] leading-[1.8] text-[#514b42] sm:pl-5 sm:text-sm">
              “More than a getaway — a sanctuary for healing,
              reconnection, mindful living, and authentic
              Rajasthan hospitality.”
            </blockquote>

            {/* Philosophy heading */}
            <div className="mb-4 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f3e9d8] text-[#bf8d48]">
                <FeatureIcon type="sparkles" />
              </div>

              <div className="min-w-0">
                <span className="mb-1 block text-[9px] font-semibold uppercase tracking-[0.24em] text-[#bd8e4d] sm:text-[10px]">
                  Our Philosophy
                </span>
                <h2 className="font-serif text-[17px] font-bold leading-snug text-[#29251f] sm:text-lg">
                  A Human Vision Behind Every Stay
                </h2>
              </div>
            </div>

            {/* Philosophy description */}
            <div className="space-y-3 text-[12px] leading-[1.8] text-[#6c655b] sm:text-[13px]">
              <p>
                Nowal NatureCare was created with a simple but
                powerful vision — to combine natural healing,
                Rajasthan hospitality, and mindful living in
                one peaceful destination.
              </p>

              <p>
                We are not a spa resort. We are a destination
                for reconnection and natural healing, rooted
                in what makes this land truly extraordinary.
              </p>
            </div>

            {/* Feature grid */}
            <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-5 sm:gap-x-6 sm:gap-y-6">
              {philosophyItems.map((item) => (
                <div key={item.title} className="min-w-0">
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[#f2e8d7] text-[#bf8d48]">
                    <FeatureIcon type={item.icon} />
                  </div>

                  <h3 className="mb-1 font-serif text-[13px] font-bold leading-snug text-[#30291f] sm:text-sm">
                    {item.title}
                  </h3>

                  <p className="text-[11px] leading-[1.7] text-[#71695e] sm:text-xs">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </article>

          {/* Right panel */}
          <article className="flex min-w-0 flex-col rounded-[26px] border border-white/50 bg-white/55 p-5 shadow-[0_8px_40px_rgba(113,91,53,0.035)] backdrop-blur-sm sm:rounded-[30px] sm:p-7 lg:p-8">
            <div className="space-y-4 text-[12px] leading-[1.85] text-[#6c655b] sm:text-[13px]">
              <p>
                In a world that rarely slows down, the ultimate
                luxury is time — specifically, time spent
                reconnecting with your partner away from the
                digital noise and daily grind.
              </p>

              <p>
                Choosing the best couple wellness retreat near
                Jaipur is more than selecting accommodation;
                it is about discovering a sanctuary that
                nurtures intimacy, healing, and emotional
                restoration.
              </p>

              <p>
                offers a seamless blend of heritage-inspired
                grandeur, authentic naturopathy, and modern
                tranquillity — the perfect setting for a
                transformative romantic escape.
              </p>
            </div>

            {/* Highlight card */}
            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#f0e2cc] bg-[#f4ead9] p-4 sm:gap-4 sm:p-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#c2914d] shadow-sm">
                <HeartIcon />
              </div>

              <div className="min-w-0">
                <h3 className="mb-2 font-serif text-sm font-bold leading-snug text-[#332b21] sm:text-base">
                  A Sanctuary for Reconnection
                </h3>

                <p className="text-[11px] leading-[1.8] text-[#716658] sm:text-xs">
                  Rooted in healing traditions, mindful living,
                  and heartfelt hospitality — where couples
                  rediscover peace, balance, and meaningful
                  connection together.
                </p>
              </div>
            </div>

            {/* Preserves the generous open space in the reference */}
            <div className="flex-1" />
          </article>
        </div>

        {/* CTA buttons */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:justify-start sm:pl-2 md:pl-2">
          <a
            href="/contact"
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#bd8a43] px-5 py-2.5 text-xs font-medium text-white shadow-sm transition duration-300 hover:bg-[#a97634] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bd8a43] focus-visible:ring-offset-2"
          >
            Reserve Your Retreat
          </a>

          <a
            href="/services"
            className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-full bg-[#303b4b] px-5 py-2.5 text-xs font-medium text-white shadow-sm transition duration-300 hover:bg-[#202b3a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#303b4b] focus-visible:ring-offset-2"
          >
            Explore Wellness
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
