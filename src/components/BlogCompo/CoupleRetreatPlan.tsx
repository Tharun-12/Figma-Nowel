
import React from "react";

const retreatDays = [
  {
    number: "01",
    title: "Day One",
    subtitle: "Arrive & Detox",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    icon: "☀",
    activities: [
      "Welcome Naturopathy Consultation — personalised health roadmap by certified experts",
      "Mud Therapy & Hydrotherapy — ancient healing techniques in a luxurious modern setting",
      "Abhyanga Ayurvedic Oil Massage — synchronized couple session to melt stored tension",
      "Organic Farm-to-Fork Dinner — alkalizing, tailor-made cuisine for your dosha types",
      "Evening Botanical Walk — guided tour through our medicinal gardens",
    ],
  },
  {
    number: "02",
    title: "Day Two",
    subtitle: "Reconnect & Restore",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=85",
    icon: "⌁",
    activities: [
      "Private Sunrise Yoga — guided asana & pranayama as mist clears over the Aravallis",
      "Panchakarma Detox Session — deep cleansing therapy tailored to each partner",
      "Infinity Pool & Cold-Pressed Juices — let the afternoon slip by without a glance at a watch",
      "Hydrotherapy Circuit — shared thermal journey that deepens empathetic connection",
      "Candlelit Dinner Under the Rajasthani Sky — a sensory experience, not just a meal",
    ],
  },
  {
    number: "03",
    title: "Day Three",
    subtitle: "Integrate & Carry Home",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&q=85",
    icon: "☾",
    activities: [
      "Guided Aravalli Nature Walk — foothills trail with our naturalist guide",
      "Village Artisan Visit — optional soft adventure to Shekhawati heritage village",
      "Closing Naturopathy Consultation — take-home wellness plan & lifestyle tools",
      "Stress Management Workshop — carry the peace of the retreat into daily life",
      "Farewell Organic Brunch — a final nourishing meal from our kitchen garden",
    ],
  },
];

function LotusIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 31C11 26 9 19 10 12c5 2 9 7 10 13 2-7 6-12 11-15 2 9-2 16-11 21Z" />
      <path d="M20 31C13 24 6 24 3 28c5 4 10 5 17 3Z" />
      <path d="M20 31c7-7 14-7 17-3-5 4-10 5-17 3Z" />
      <path d="M20 25V7" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 4C10 4 5 8 5 14a5 5 0 0 0 5 5c6 0 10-7 10-15Z" />
      <path d="M4 21c3-6 7-9 12-12" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="16" rx="3" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </svg>
  );
}

export default function CoupleRetreatPlan() {
  return (
    <main className="w-full overflow-hidden bg-[#f5ecde] text-[#382d24]">
      {/* ======================================================
          SECTION 1 — THREE-DAY COUPLE RETREAT PLAN
      ======================================================= */}
      <section className="relative isolate px-4 pb-12 pt-9 sm:px-7 sm:pb-16 sm:pt-12 lg:px-10 lg:pb-20 lg:pt-14">
        {/* Scenic background */}
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/7e/9a/f1/7e9af11d883b368537ab9a9071350ac7.jpg')",
          }}
          aria-hidden="true"
        />

        {/* Dark cinematic overlay */}
        <div
          className="absolute inset-0 -z-10 bg-[#211b19]/65"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-b from-black/25 via-[#241b18]/45 to-[#1c1713]/80"
          aria-hidden="true"
        />

        <div className="mx-auto max-w-[1100px]">
          {/* Section heading */}
          <header className="mb-6 text-center sm:mb-8">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-[#e4c18c]/60 bg-[#fffaf0] px-3 py-1.5 text-[10px] font-semibold text-[#a77838] shadow-sm">
              <CalendarIcon />
              <span>Your Journey</span>
            </div>

            <h1 className="font-serif text-[27px] font-bold leading-tight tracking-[-0.025em] text-[#fff8eb] drop-shadow-md sm:text-3xl md:text-[36px]">
              Our Signature 3-Day Couple Retreat Plan
            </h1>

            <p className="mx-auto mt-1 max-w-2xl text-[11px] leading-relaxed text-white/85 sm:text-sm">
              A carefully curated rhythm — not a schedule — designed to
              carry you from depletion to renewal
            </p>
          </header>

          {/* Three itinerary cards */}
          <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {retreatDays.map((day) => (
              <article
                key={day.number}
                className="group relative flex min-w-0 flex-col"
              >
                {/* Image strip */}
                <div className="relative h-[120px] overflow-hidden rounded-t-[24px] rounded-b-[20px] border border-white/40 bg-[#9b7754] sm:h-[135px]">
                  <img
                    src={day.image}
                    alt={`${day.title} couple wellness retreat`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                </div>

                {/* Number badge */}
                <div className="absolute left-5 top-[91px] z-20 flex h-11 w-11 items-center justify-center rounded-full border border-[#f3d8a8] bg-[#b98950] font-serif text-xl text-white shadow-md sm:top-[105px]">
                  {day.number}
                </div>

                {/* Cream itinerary panel */}
                <div className="relative z-10 -mt-7 flex flex-1 flex-col rounded-[23px] border border-white/65 bg-[#fff9ef]/[0.97] px-4 pb-5 pt-6 shadow-[0_12px_32px_rgba(0,0,0,0.13)] sm:px-5 sm:pb-6">
                  {/* Day heading */}
                  <div className="mb-4 flex items-center justify-center gap-2 pt-1">
                    <span className="text-[20px] text-[#c28b40]" aria-hidden="true">
                      {day.icon}
                    </span>
                    <div className="text-center">
                      <h2 className="font-serif text-[16px] font-bold leading-tight text-[#3b3025] sm:text-[17px]">
                        {day.title}
                      </h2>
                      <p className="mt-0.5 text-[10px] text-[#a77c46]">
                        {day.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Daily activities */}
                  <ul className="space-y-2.5">
                    {day.activities.map((activity, index) => (
                      <li
                        key={activity}
                        className="flex items-start gap-2.5 text-[11px] leading-[1.55] text-[#62584d] sm:text-xs"
                      >
                        <span className="mt-0.5 text-[#bf8a43]">
                          {day.number === "01" ? (
                            <LeafIcon />
                          ) : day.number === "02" ? (
                            <span className="inline-block text-base leading-none">
                              ⌁
                            </span>
                          ) : (
                            <span className="inline-block text-sm leading-none">
                              ⌘
                            </span>
                          )}
                        </span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* Customization message */}
          <div className="mt-7 flex justify-center sm:mt-8">
            <div className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-[#eee0ca] bg-[#fff9ef] px-4 py-2 text-center text-[10px] leading-relaxed text-[#645342] shadow-sm sm:text-xs">
              <span className="text-[#c18c48]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M20.8 8.8c0 4.5-8.8 10-8.8 10s-8.8-5.5-8.8-10a4.6 4.6 0 0 1 8.8-1.5 4.6 4.6 0 0 1 8.8 1.5Z" />
                </svg>
              </span>
              All experiences are customizable to your preferences
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          SECTION 2 — FOOD AS MEDICINE
      ======================================================= */}
      <section className="relative isolate overflow-hidden bg-[#f8f0e3] px-4 py-10 sm:px-7 sm:py-14 lg:px-10 lg:py-16">
        {/* Organic background details */}
        <div
          className="absolute inset-0 -z-10"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse at 0% 65%, #fffdf8 0%, transparent 48%), radial-gradient(ellipse at 95% 75%, #ead9bd 0%, transparent 45%)",
          }}
        />

        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-8 md:grid-cols-[0.88fr_1.12fr] md:gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          {/* Text content */}
          <div className="relative z-10 order-2 md:order-1">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/50 px-3 py-1.5 text-[10px] font-semibold text-[#a67b43]">
              <span aria-hidden="true">♨</span>
              Farm to Fork
            </div>

            <h2 className="max-w-[470px] font-serif text-[27px] font-bold leading-[1.12] tracking-[-0.025em] text-[#2f271f] sm:text-3xl lg:text-[35px]">
              Food as Medicine, Dining as Memory
            </h2>

            <div className="mt-3 space-y-2 text-[11px] leading-[1.7] text-[#716456] sm:text-xs lg:text-[13px]">
              <p>
                At Nowal NatureCare, we believe food is a vital pillar of
                health. Forget heavy buffet lines. Instead, experience
                “farm-to-fork” dining where every ingredient is sourced
                from our own certified organic gardens or local
                sustainable farms. Menus are curated to balance the five
                elements, ensuring you feel energized rather than sluggish.
              </p>

              <p>
                Candlelit dinners under the vast Rajasthani sky offer more
                than a meal; they provide a multi-sensory experience. From
                traditional flavors refined with Ayurvedic wisdom to
                international wellness cuisine, every bite is designed to
                support your vitality and deepen your shared experience.
              </p>
            </div>

            {/* Dining highlights */}
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-medium text-[#78664d] sm:text-xs">
              <div className="inline-flex items-center gap-2">
                <span className="text-[#bd8742]">
                  <LeafIcon />
                </span>
                Organic Farm-to-Fork
              </div>

              <span className="hidden text-[#c5a16e] sm:inline">•</span>

              <div className="inline-flex items-center gap-2">
                <span className="text-base text-[#bd8742]" aria-hidden="true">
                  ♨
                </span>
                Candlelit Dinners
              </div>
            </div>
          </div>

          {/* Food image composition */}
          <div className="relative order-1 mx-auto w-full max-w-[660px] md:order-2">
            <div className="relative h-[250px] sm:h-[320px] md:h-[300px] lg:h-[360px]">
              {/* Gold organic backing */}
              <div className="absolute bottom-[4%] right-[3%] h-[73%] w-[87%] rounded-[45%_18%_38%_22%] bg-[#e8d2ab]/75" />

              {/* Main food photograph */}
              <div
                className="absolute left-0 top-[8%] h-[78%] w-[90%] overflow-hidden rounded-[45%_13%_37%_18%/32%_22%_33%_29%] bg-[#e2d1b4]"
                style={{
                  clipPath:
                    "polygon(0 35%, 12% 13%, 31% 3%, 53% 7%, 72% 1%, 92% 9%, 100% 31%, 95% 63%, 80% 87%, 58% 100%, 33% 94%, 13% 82%, 2% 62%)",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=90"
                  alt="Fresh, colorful organic farm-to-table dishes served for a wellness retreat"
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#382316]/20 to-transparent" />
              </div>

              {/* Circular dining photograph */}
              <div className="absolute bottom-[2%] right-[1%] z-20 h-[135px] w-[135px] overflow-hidden rounded-full border-[5px] border-[#fff9ef] bg-[#d8bc8d] shadow-[0_8px_25px_rgba(65,43,24,0.17)] sm:h-[170px] sm:w-[170px] md:h-[145px] md:w-[145px] lg:h-[190px] lg:w-[190px]">
                <img
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=700&q=85"
                  alt="Intimate candlelit dining experience surrounded by warm light"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Botanical detail */}
              <svg
                viewBox="0 0 120 180"
                className="pointer-events-none absolute right-[-1%] top-[14%] z-10 hidden h-[140px] w-[75px] text-[#aa8c5f] sm:block lg:h-[175px] lg:w-[95px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M10 170C30 130 48 90 88 12" />
                <path d="M25 140C9 135 4 121 7 108c14 4 22 15 18 32Z" />
                <path d="M39 110C20 102 18 87 23 74c14 7 20 20 16 36Z" />
                <path d="M56 78C40 65 44 51 51 40c12 12 13 24 5 38Z" />
                <path d="M76 43C68 30 77 18 88 11c5 14 1 25-12 32Z" />
              </svg>

              {/* Decorative circular detail */}
              <div className="absolute bottom-[7%] left-[1%] -z-10 h-[80px] w-[80px] rounded-full bg-[#e9d5b2]/75 sm:h-[105px] sm:w-[105px]" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
