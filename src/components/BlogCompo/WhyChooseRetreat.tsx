
import React from "react";


interface WhyChooseRetreatProps {
  imageSrc?: string;
}

function LotusIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 37C15 32 12 24 13 15c6 3 10 8 11 15 2-9 7-15 13-18 2 10-2 19-13 25Z" />
      <path d="M24 37C16 29 8 29 4 33c5 5 12 7 20 4Z" />
      <path d="M24 37c8-8 16-8 20-4-5 5-12 7-20 4Z" />
      <path d="M24 30V10" />
      <path d="M8 42h32" />
    </svg>
  );
}

function LeafDecoration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 180"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M10 170C30 130 48 90 88 12" />
      <path d="M25 140C9 135 4 121 7 108c14 4 22 15 18 32Z" />
      <path d="M39 110C20 102 18 87 23 74c14 7 20 20 16 36Z" />
      <path d="M56 78C40 65 44 51 51 40c12 12 13 24 5 38Z" />
      <path d="M76 43C68 30 77 18 88 11c5 14 1 25-12 32Z" />
      <path d="M30 133C49 130 61 117 66 103c-18 3-30 14-36 30Z" />
      <path d="M45 101C65 95 76 82 80 67c-18 6-29 17-35 34Z" />
      <path d="M61 70C79 63 91 49 94 35c-18 7-27 19-33 35Z" />
    </svg>
  );
}

function SmallDiamond() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="m10 2 7 8-7 8-7-8 7-8Z" />
    </svg>
  );
}

export default function WhyChooseRetreat({
  imageSrc = "/images/luxury-wellness-retreat.jpg",
}: WhyChooseRetreatProps) {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#f8f1e5] px-4 py-12 text-[#30291f] sm:px-7 sm:py-16 lg:px-10 lg:py-20">
      {/* Warm ivory background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 5% 45%, #fffdf8 0%, transparent 48%), radial-gradient(ellipse at 95% 80%, #eee0c9 0%, transparent 42%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-9 md:grid-cols-[1.08fr_0.92fr] md:gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12">
        {/* LEFT: Organic resort image composition */}
        <div className="relative mx-auto w-full max-w-[660px]">
          <div className="relative h-[275px] w-full sm:h-[350px] md:h-[315px] lg:h-[400px]">
            {/* Soft circular background behind the image */}
            <div className="absolute left-[8%] top-[7%] h-[78%] w-[77%] rounded-full bg-[#e9d0a4]/70 sm:left-[9%] sm:w-[74%]" />

            {/* Fine decorative outer outline */}
            <div
              className="pointer-events-none absolute left-[6%] top-[4%] h-[84%] w-[84%] rotate-[-4deg] rounded-[43%_52%_40%_48%] border border-[#c3a274]/70"
              aria-hidden="true"
            />

            {/* Main image with organic silhouette */}
            <div
              className="absolute left-[7%] top-[5%] h-[82%] w-[87%] overflow-hidden rounded-[43%_39%_34%_13%/28%_35%_39%_40%] bg-[#d9c3a2] shadow-[0_14px_35px_rgba(77,57,32,0.12)]"
              style={{
                clipPath:
                  "polygon(0 25%, 13% 8%, 34% 0, 55% 10%, 72% 11%, 91% 18%, 100% 37%, 97% 67%, 82% 88%, 58% 100%, 35% 92%, 15% 83%, 2% 62%)",
              }}
            >
              <img
                src="https://i.pinimg.com/736x/63/fa/ef/63faefb9f8e7b9bc9eac3a29e08e04fc.jpg"
                alt="Luxury wellness retreat with a peaceful pool, nature, and warm evening light"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3c2819]/20 via-transparent to-[#fff0cf]/5" />
            </div>

            {/* Botanical artwork on left */}
            <LeafDecoration className="pointer-events-none absolute -left-1 top-[30%] z-10 h-[130px] w-[85px] -rotate-[12deg] text-[#a88a5b] sm:-left-2 sm:h-[165px] sm:w-[105px] lg:-left-3 lg:h-[180px] lg:w-[120px]" />

            {/* Top fine decorative curve */}
            <svg
              viewBox="0 0 260 100"
              className="pointer-events-none absolute right-[1%] top-[0%] z-10 h-[80px] w-[43%] overflow-visible text-[#c5a477] sm:h-[105px]"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 25C58 62 77 9 132 28S199 63 250 18"
                stroke="currentColor"
                strokeWidth="1.3"
              />
            </svg>

            {/* Lotus badge overlapping the image */}
            <div className="absolute bottom-[7%] right-[7%] z-20 flex h-[65px] w-[65px] items-center justify-center rounded-full border border-[#e8d5ad] bg-[#986329] text-[#f8e5b6] shadow-[0_5px_15px_rgba(62,43,21,0.2)] sm:bottom-[5%] sm:right-[7%] sm:h-[76px] sm:w-[76px] lg:h-[84px] lg:w-[84px]">
              <LotusIcon className="h-10 w-10 sm:h-12 sm:w-12" />
            </div>

            {/* Small decorative botanical circle */}
            <div className="pointer-events-none absolute left-[5%] top-[6%] z-10 flex h-[65px] w-[65px] items-center justify-center rounded-full bg-[#ead3a9]/85 text-[#b99b69] sm:left-[6%] sm:top-[4%] sm:h-[82px] sm:w-[82px]">
              <LeafDecoration className="h-12 w-10 rotate-[-15deg]" />
            </div>
          </div>
        </div>

        {/* RIGHT: Editorial text content */}
        <div className="relative mx-auto w-full max-w-[570px] md:py-3">
          {/* Eyebrow */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/40 px-3 py-1.5 text-[10px] font-semibold text-[#9a713b] sm:text-[11px]">
            <SmallDiamond />
            <span>Why Choose Us</span>
          </div>

          {/* Heading */}
          <h2 className="max-w-[500px] font-serif text-[32px] font-bold leading-[1.08] tracking-[-0.035em] text-[#29251e] sm:text-[38px] md:text-[34px] lg:text-[42px] xl:text-[46px]">
            Why Choose a Luxury Wellness Retreat?
          </h2>

          {/* Description */}
          <div className="mt-3 space-y-3 text-[12px] leading-[1.75] text-[#655c50] sm:text-[13px] lg:text-[14px]">
            <p>
              A couple&apos;s getaway shouldn&apos;t just be a
              change of scenery, it should be a transformative
              journey. The best luxury wellness retreats near
              Jaipur ensure your time together is genuinely
              balanced. While traditional holidays often leave
              you exhausted, a wellness-focused itinerary
              ensures you return to life feeling lighter, more
              aligned, and deeply reconnected.
            </p>

            <p>
              Jaipur&apos;s regal history and serene outskirts
              provide an unparalleled backdrop. The moment
              you arrive, the mind begins to decompress.
              Architecture mirrors the soul of the land:
              vast courtyards, intricate stone carvings, and
              lush medicinal gardens that invite slow walks
              and even slower conversations.
            </p>
          </div>

          {/* Benefit indicators */}
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-[10px] font-medium text-[#74664e] sm:gap-x-6 sm:text-[11px]">
            <div className="inline-flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px] shrink-0 text-[#b98540]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3 20 6v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span>Transformative Journey</span>
            </div>

            <div className="inline-flex items-center gap-2">
              <svg
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px] shrink-0 text-[#b98540]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20.8 8.8c0 4.5-8.8 10-8.8 10s-8.8-5.5-8.8-10a4.6 4.6 0 0 1 8.8-1.5 4.6 4.6 0 0 1 8.8 1.5Z" />
              </svg>
              <span>Deeply Reconnected</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom-right botanical decoration */}
      <LeafDecoration className="pointer-events-none absolute -bottom-16 -right-3 hidden h-[180px] w-[120px] rotate-[8deg] text-[#b69a6e]/70 sm:block lg:h-[230px] lg:w-[150px]" />

      {/* Soft decorative corner */}
      <div
        className="pointer-events-none absolute -bottom-16 -left-12 -z-10 hidden h-44 w-64 rounded-full bg-[#e6d4b6]/40 blur-2xl md:block"
        aria-hidden="true"
      />
    </section>
  );
}
