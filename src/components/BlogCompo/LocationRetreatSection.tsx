
import React from "react";

const palaceImage =
  "https://i.pinimg.com/1200x/05/cd/5e/05cd5efe4d0868d38654caab57f62d84.jpg";

const bannerImage =
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1800&q=85";

function LocationIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function MountainIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m2 20 7-12 4 6 3-4 6 10H2Z" />
      <path d="m7 12 2 2 2-2" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="9" width="18" height="12" rx="1.5" />
      <path d="M12 9v12M3 13h18M12 9H7.5a2.5 2.5 0 1 1 2.5-2.5V9ZM12 9h4.5A2.5 2.5 0 1 0 14 6.5V9Z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function LeafBranch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 180"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 174C32 133 62 85 101 9" />
      <path d="M26 145C8 140 5 125 12 112c13 7 19 18 14 33Z" />
      <path d="M43 117C24 108 24 92 31 80c13 8 18 21 12 37Z" />
      <path d="M61 85C47 72 51 57 59 46c11 12 12 25 2 39Z" />
      <path d="M79 53C72 39 81 24 91 17c6 14 1 27-12 36Z" />
      <path d="M28 140C47 134 59 120 65 105c-17 5-29 16-37 35Z" />
      <path d="M47 111C65 103 79 88 84 73c-17 8-29 20-37 38Z" />
      <path d="M66 80C82 70 94 55 99 41c-16 8-26 20-33 39Z" />
    </svg>
  );
}

export default function LocationRetreatSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f5ecdf] px-3 py-5 sm:px-5 sm:py-7 lg:px-8 lg:py-9">
      {/* Soft ivory background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(115deg, #fbf8f1 0%, #f4ead9 56%, #eee0c9 100%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1500px]">
        {/* TOP: LOCATION INTRODUCTION */}
        <div className="grid grid-cols-1 overflow-hidden rounded-[24px] lg:grid-cols-[0.96fr_1.04fr] lg:rounded-[30px]">
          {/* Left editorial panel */}
          <div className="relative z-10 flex min-w-0 flex-col justify-center overflow-hidden bg-[#fbf5e9] px-5 py-8 sm:px-8 sm:py-10 md:px-10 lg:-mr-12 lg:rounded-r-[100px] lg:px-8 lg:py-9 xl:px-12">
            {/* Subtle decorative map texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 15% 20%, transparent 0 35%, #d6c29e 36%, transparent 37%), radial-gradient(ellipse at 85% 80%, transparent 0 25%, #d6c29e 26%, transparent 27%)",
                backgroundSize: "210px 170px, 260px 220px",
              }}
              aria-hidden="true"
            />

            <LeafBranch className="pointer-events-none absolute -left-8 top-0 h-36 w-24 -rotate-12 text-[#d2b98c] opacity-55 sm:h-44 sm:w-28" />

            <div className="relative z-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d9bd91] bg-white/60 px-3 py-1.5 text-[11px] font-semibold text-[#a7793e]">
                <LocationIcon className="h-4 w-4 fill-[#b98a4a]/15" />
                Our Location
              </div>

              <h2 className="max-w-[590px] font-serif text-[36px] font-bold leading-[1.02] tracking-[-0.045em] text-[#102e24] sm:text-[45px] md:text-[51px] lg:text-[40px] xl:text-[48px]">
                Located Just 90 Minutes
                <span className="block text-[#a47638]">
                  from Jaipur
                </span>
              </h2>

              <div className="mt-4 max-w-[590px] space-y-3 text-[12px] leading-[1.75] text-[#554b40] sm:text-[13px] lg:text-[11px] xl:text-[12px]">
                <p>
                  Nowal NatureCare sits near the serene foothills of
                  the Aravalli range, just 90 minutes from Jaipur city
                  centre — close enough for a spontaneous escape, far
                  enough to feel a world away.
                </p>

                <p>
                  The transition from Jaipur&apos;s vibrant streets
                  to our sprawling, silent landscape is immediate and
                  deeply felt. Vast courtyards, intricate stone
                  craftsmanship, and lush healing gardens await.
                </p>

                <p>
                  Our location places you at the heart of some of
                  Rajasthan&apos;s most treasured natural and spiritual
                  landmarks — making your couple wellness retreat rich
                  in cultural depth as well as natural beauty.
                </p>
              </div>

              {/* Location facts */}
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] font-medium text-[#5f5549] sm:text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-[#b58643]">
                    <ClockIcon />
                  </span>
                  <span>90 min from Jaipur</span>
                </div>

                <span className="hidden h-5 w-px bg-[#d8c5a7] sm:block" />

                <div className="flex items-center gap-2">
                  <span className="text-[#b58643]">
                    <MountainIcon />
                  </span>
                  <span>Aravalli Foothills</span>
                </div>
              </div>
            </div>

            <LeafBranch className="pointer-events-none absolute -bottom-16 right-0 h-36 w-24 rotate-[35deg] text-[#d6c19a] opacity-35" />
          </div>

          {/* Right scenic photograph */}
          <div className="relative min-h-[260px] overflow-hidden sm:min-h-[350px] lg:min-h-[440px] xl:min-h-[470px]">
            <img
              src={palaceImage}
              alt="Rajasthani palace architecture and mountain scenery at sunset"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#352214]/25 via-transparent to-[#4b3017]/10" />

            {/* Curved transition into the editorial panel */}
            <div
              className="pointer-events-none absolute -left-16 top-[-8%] hidden h-[116%] w-32 rounded-[50%] border-l-[5px] border-[#e1c696] lg:block"
              aria-hidden="true"
            />

            {/* Map-pin marker */}
            <div className="absolute bottom-[32%] left-[22%] hidden text-[#b58643] drop-shadow-md lg:block">
              <LocationIcon className="h-7 w-7 fill-[#f9f0df]" />
            </div>
          </div>
        </div>

        {/* ROUTE INFORMATION STRIP */}
        <div className="relative mt-4 flex flex-col gap-4 overflow-hidden rounded-[17px] border border-[#e6d3b4] bg-[#faf4e9]/90 p-4 shadow-[0_3px_14px_rgba(93,65,35,0.04)] sm:flex-row sm:items-center sm:gap-5 sm:px-6 sm:py-4 lg:mt-[-5px] lg:mx-3 lg:px-6">
          <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center self-start rounded-full border border-[#d5b477] bg-[#a77936] text-white shadow-sm sm:h-14 sm:w-14 sm:self-center">
            <LocationIcon className="h-6 w-6" />
          </div>

          <div className="relative z-10 min-w-0 flex-1">
            <h3 className="font-serif text-[16px] font-bold leading-snug text-[#17372a] sm:text-[17px]">
              On the Khatu Shyam Ji / Salasar Route?
            </h3>

            <p className="mt-1 text-[11px] leading-[1.8] text-[#716456] sm:text-xs">
              Nowal NatureCare is perfectly positioned as a rejuvenating
              halt for pilgrims and spiritual travellers on this sacred
              route. Combine the blessings of the journey with deep
              healing — body, mind, and soul.
            </p>
          </div>

          {/* Decorative landscape illustration */}
          <div
            className="pointer-events-none absolute -bottom-5 right-3 hidden h-24 w-48 opacity-30 md:block"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 220 100"
              className="h-full w-full text-[#c6a36c]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 94 45 50 78 77 123 29 220 92" />
              <path d="M0 100h220" />
              <path d="M145 91V61h25v30M140 61l17-18 18 18M151 61v-9h12v9" />
              <path d="M182 91V72h15v19M178 72l11-12 12 12" />
              <path d="M45 50v-9M40 45h10M123 29v-9M118 24h10" />
            </svg>
          </div>
        </div>

        {/* BOTTOM: DARK GREEN BOOKING BANNER */}
        <div className="relative mt-4 overflow-hidden rounded-[19px] border border-[#ae8849] bg-[#062d20] shadow-[0_12px_30px_rgba(29,54,36,0.12)] sm:mt-5 sm:rounded-[23px]">
          {/* Scenic banner image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${bannerImage}")` }}
            aria-hidden="true"
          />

          {/* Deep green cinematic overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#032b1c]/95 via-[#063021]/90 to-[#05271b]/85"
            aria-hidden="true"
          />

          <LeafBranch className="pointer-events-none absolute -bottom-16 -left-2 h-44 w-28 -rotate-12 text-[#a57f3c] opacity-55 sm:h-56 sm:w-36" />

          <div className="relative z-10 mx-auto flex min-h-[240px] max-w-4xl flex-col items-center justify-center px-5 py-8 text-center sm:min-h-[270px] sm:px-10 sm:py-10 lg:min-h-[280px]">
            {/* Calendar icon */}
            <div className="mb-2.5 flex h-11 w-11 items-center justify-center rounded-full border border-[#d5b173] bg-[#a97b37] text-white shadow-md sm:h-12 sm:w-12">
              <CalendarIcon />
            </div>

            <h2 className="max-w-3xl font-serif text-[29px] font-bold leading-tight tracking-[-0.035em] text-[#fff6e6] sm:text-[38px] md:text-[42px] lg:text-[46px]">
              Ready to Escape Together?
            </h2>

            <p className="mt-2 text-[12px] text-white/80 sm:text-sm">
              Limited retreat slots available. Reserve your dates today.
            </p>

            <div className="mt-5 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
              <a
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#c89a52] bg-[#ad7c34] px-5 py-3 text-[10px] font-bold uppercase tracking-wide text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#c09148] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#062d20] sm:min-w-[260px] sm:px-6 sm:text-[11px]"
              >
                Book Your Couple Retreat
                <ArrowIcon />
              </a>

              <a
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#c5a36c] bg-[#082d20]/70 px-5 py-3 text-[10px] font-bold uppercase tracking-wide text-white transition hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:min-w-[225px] sm:px-6 sm:text-[11px]"
              >
                <GiftIcon />
                Explore Packages
              </a>
            </div>
          </div>

          {/* Right decorative botanical detail */}
          <LeafBranch className="pointer-events-none absolute -bottom-12 -right-3 hidden h-40 w-24 rotate-[30deg] text-[#b28b4c] opacity-35 md:block" />
        </div>
      </div>
    </section>
  );
}
